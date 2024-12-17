import {Container, Typography} from "@mui/material";

export const Page404 = () => {
  return <Container>
    <Typography align='center' variant='h1' sx={{pb:3, fontWeight: 'bold'}}>
      404
    </Typography>
    <Typography align='center' variant='h4'>
      PAGE NOT FOUND
    </Typography>
  </Container>
}

export default Page404;