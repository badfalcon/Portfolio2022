import {
  Box, Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia, Chip, Container,
  Grid, Modal, Typography
} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import data from "../Data/Works.json"
import {OpenInNew} from "@mui/icons-material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column'
};

export const Works = () => {
  const [ModalTitle, setModalTitle] = useState<string>("");
  const [ModalTags, setModalTags] = useState<string[]>([]);
  const [ModalSrc, setModalSrc] = useState<string>("");
  const [ModalURL, setModalURL] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = (index: number) => {
    let targetWork = data["data"][index];
    setModalTitle(targetWork.title);
    setModalTags(targetWork.tags);
    setModalSrc(targetWork.src);
    setModalURL(targetWork.url??"");
    setOpen(true);
  }

  const { t } = useTranslation();

  return <Container>
    <Box sx={{pb:5}}>
      <Typography align='center' variant="h3" sx={{ fontWeight: 'bold' }}>
        {t('works.title')}
      </Typography>
    </Box>
    <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
    >
      {data["data"].map(v => (
          // todo review layout
          <Grid item xs={11} sm={8} md={6} key={v.key}>
            <Card>
              <CardActionArea onClick={() => handleOpen(v.key)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={v.src.replace("##PUBLIC##/",`${import.meta.env.BASE_URL}`)}
                    alt={v.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {v.title}
                  </Typography>
                  {v.tags.map(v => (
                      <Chip label={v} sx={{mx:0.2}} key={v}/>
                  ))}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
      ))}
    </Grid>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
            component="img"
            sx={{ flexGrow: 1, maxWidth: "100%", border: 1}}
            alt={ModalTitle}
            src={ModalSrc.replace("##PUBLIC##/",`${import.meta.env.BASE_URL}`)}
        />
        <Box component="div">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {ModalTitle}
          </Typography>
          <Box component="div">
            {ModalTags.map(v => (
                <Chip label={v} sx={{ my: 2, mx:0.2}} key={v}/>
            ))}
          </Box>
          <Button variant="contained" target="_blank" href={ModalURL} rel="noopener" startIcon={<OpenInNew />} disabled={!ModalURL}>
            Link
          </Button>
        </Box>
      </Box>
    </Modal>
  </Container>
}

export default Works;