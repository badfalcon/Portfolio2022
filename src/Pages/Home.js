import {Box, Container, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return <Container>
    <Box sx={{py:10}}>
      <Typography align='center' variant='h1' sx={{py:5}}>
        {t('home.greetings')}
      </Typography>
      <Typography align='center' variant='h3'>
        {t('home.desc')}
      </Typography>
    </Box>
  </Container>
}

export default Home;