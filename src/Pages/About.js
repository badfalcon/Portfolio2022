import {Trans} from 'react-i18next';
import './About.css';
import {Box, Container, Typography} from "@mui/material";

export const About = () => {
  return <Container>
    <Box sx={{pt:10}}>
      <Typography align='center' variant="h3">
        <Trans i18nKey={"about.desc"}>self description!!</Trans>
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" textAlign="left" fontWeight="bold">
        <Trans i18nKey={"about.head.name"}/>
      </Typography>
      <Typography variant="h4" textAlign="right">
        <Trans i18nKey={"about.body.name"}/>
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" textAlign="left" fontWeight="bold">
        <Trans i18nKey={"about.head.nickname"}/>
      </Typography>
      <Typography variant="h4" textAlign="right">
        <Trans i18nKey={"about.body.nickname"}/>
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" textAlign="left" fontWeight="bold">
        <Trans i18nKey={"about.head.born"}/>
      </Typography>
      <Typography variant="h4" textAlign="right">
        <Trans i18nKey={"about.body.born"}/>
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" textAlign="left" fontWeight="bold">
        <Trans i18nKey={"about.head.upbringing"}/>
      </Typography>
      <Typography variant="h4" textAlign="right">
        <Trans i18nKey={"about.body.upbringing"}/>
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" textAlign="left" fontWeight="bold">
        <Trans i18nKey={"about.head.hobby"}/>
      </Typography>
      <Typography variant="h4" textAlign="right">
        <Trans i18nKey={"about.body.hobby"}/>
      </Typography>
    </Box>
  </Container>
}

export default About;