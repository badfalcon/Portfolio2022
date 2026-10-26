import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import emailjs, {type EmailJSResponseStatus} from "@emailjs/browser";
import React, {useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import SendIcon from '@mui/icons-material/Send';

// Minimum interval between send attempts from the same browser (ms).
const SEND_THROTTLE_MS = 30000;

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const checkAddress = () => {
    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid) {
        setInputError(true);
      } else {
        setInputError(false);
      }
    }
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setSending(true);
      setSendError(null);
      emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        // Reject automated (headless) browsers before anything is sent.
        blockHeadless: true,
        // Allow one send attempt per SEND_THROTTLE_MS per browser.
        limitRate: {id: 'contact', throttle: SEND_THROTTLE_MS},
      })
      .then((result) => {
        if(result.status === 200){
          setMailSent(true);
        }
      }, (error: EmailJSResponseStatus) => {
        if (import.meta.env.DEV) console.error(error);
        setSendError(error?.status === 429 ? 'contact.message_rate_limited' : 'contact.message_error');
      })
      .finally(() => setSending(false));
    }
  }

  return (
      <Container>
        <Box sx={{pb:5}}>
          <Typography align='center' variant="h3" sx={{ fontWeight: 'bold' }}>
            {t('contact.title')}
          </Typography>
        </Box>
        {!mailSent ?
            <form ref={form} onSubmit={sendEmail}>
              <Stack spacing={3}>
                <TextField name="user_email" onChange={checkAddress} required
                           inputRef={inputRef}
                           helperText={inputRef?.current?.validationMessage}
                           label={t('contact.label_address')} type="email"
                           error={inputError}/>
                <TextField name="user_name" required
                           label={t('contact.label_name')}/>
                <TextField name={"message"} required
                           label={t('contact.label_message')} multiline
                           rows={4}/>
                {sendError &&
                    <Typography color="error" role="alert">
                      {t(sendError)}
                    </Typography>
                }
                <Button variant="contained" endIcon={<SendIcon/>}
                        type={"submit"} disabled={sending}>
                  Send
                </Button>
              </Stack>
            </form>
            :
            <Typography align='center' variant='h6'>
              {t('contact.message_sent')}
            </Typography>
        }
      </Container>
  )
}

export default Contact;