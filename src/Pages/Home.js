import {Box, Container, Typography} from "@mui/material";
import {Trans} from "react-i18next";

export const Home = () => {
  return <Container sx={{pt:10}}>
    <Box sx={{pt:10}}>
      <Typography align='center' variant='h1' sx={{py:5}}>
        <Trans i18nKey={"home.greetings"}>Hi there!</Trans>
      </Typography>
      <Typography align='center' variant='h3'>
        <Trans i18nKey={"home.desc"}>This is badfalcon`s personal website.</Trans>
      </Typography>
    </Box>
  </Container>
}

export default Home;