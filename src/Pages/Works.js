import './Works.css';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia, Container,
  Grid, Typography
} from "@mui/material";

export const Works = () => {
  const works = [
    {title:"Skin Editor", desc:"Java", src:""},
    {title:"Skin Editor(Web)", desc:"JavaScript", src:""},
    {title:"ImageDrawer", desc:"Chrome Ext", src:""},
    {title:"Old Personal Website", desc:"JavaScript", src:""},
  ]
  return <Container>
    <h1>Works</h1>
    <Grid
        container
        spacing={2} direction="row"
        justifyContent="center"
        alignItems="center"
    >
      {works.map(v => (
          // todo review layout
          <Grid item xs={5} sm={5} md={5}>
            <Container>
              <Card centered sx={{maxWidth: 345}}>
                <CardActionArea>
                  <CardMedia
                      component="img"
                      height="140"
                      image={v.src}
                      alt={v.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {v.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {v.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Container>
          </Grid>
      ))}
    </Grid>
    <div className={'WorkBoxParent'} style={{display:'flex',flexWrap:"wrap"}}>
    </div>
  </Container>
}

export default Works;