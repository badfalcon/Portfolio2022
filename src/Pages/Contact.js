import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import emailjs from "@emailjs/browser";
import {useRef, useState} from "react";
import {Trans, useTranslation} from "react-i18next";
import SendIcon from '@mui/icons-material/Send';

export const Contact = () => {
  const form = useRef();
  const { t, i18n } = useTranslation();
  const inputRef = useRef(null);
  const [inputError, setInputError] = useState(false);
  const [mailSent, setMailSent] = useState(false);

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
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then((result) => {
      console.log(result);
      if(result.status === 200){
        setMailSent(true);
      }
    }, (error) => {
      console.log(error);
    });
  };

  return (
      <Container>
        <Box sx={{pt:10}}>
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
                  <Button variant="contained" endIcon={<SendIcon/>}
                          type={"submit"}>
                    Send
                  </Button>
                </Stack>
              </form>
              :
              <Typography align='center' variant='h6'>
                {t('contact.message_sent')}
              </Typography>
          }
        </Box>
      </Container>
  )
}

export default Contact;