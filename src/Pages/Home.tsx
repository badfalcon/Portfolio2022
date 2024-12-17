import {Box, Container, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return <Container>
    <Box sx={{py:10}}>
      <Typography align='center' variant='h2' sx={{py:{xs:0, sm:5}, fontWeight: 'bold'}}>
        {t('home.greetings')}
      </Typography>
      <Typography align='center' variant='h4'>
        {t('home.desc')}
      </Typography>
    </Box>
  </Container>
}

export default Home;