import {useTranslation} from 'react-i18next';
import {Avatar, Box, Container, Grid, Typography} from "@mui/material";

export const About = () => {
  const { t } = useTranslation();

  return <Container disableGutters>
    <Box sx={{pb:5}}>
      <Typography align='center' variant="h3" sx={{ fontWeight: 'bold' }}>
        {t('about.title')}
      </Typography>
    </Box>
    <Grid
        container
        spacing={5}
        justifyContent="center"
        alignItems="center"
    >
      <Grid item xs={12} sm={12} md={4}>
        <Avatar alt="Jun Masuda" src={`${import.meta.env.BASE_URL}images/portfolio_1.jpg`} sx={{ width: 256, height: 256, margin: 'auto' }} />
      </Grid>
      <Grid item xs={11} sm={8} md={6} >
        <Box>
          <Typography variant="subtitle1" textAlign="left" fontWeight="bold">
            {t('about.head.name')}
          </Typography>
          <Typography variant="body2" textAlign="right">
            {t('about.body.name')}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" textAlign="left" fontWeight="bold">
            {t('about.head.nickname')}
          </Typography>
          <Typography variant="body2" textAlign="right">
            {t('about.body.nickname')}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" textAlign="left" fontWeight="bold">
            {t('about.head.born')}
          </Typography>
          <Typography variant="body2" textAlign="right">
            {t('about.body.born')}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" textAlign="left" fontWeight="bold">
            {t('about.head.upbringing')}
          </Typography>
          <Typography variant="body2" textAlign="right">
            {t('about.body.upbringing')}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" textAlign="left" fontWeight="bold">
            {t('about.head.hobby')}
          </Typography>
          <Typography variant="body2" textAlign="right">
            {t('about.body.hobby')}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>
}

export default About;