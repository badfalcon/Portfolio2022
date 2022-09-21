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
    {title:"Skin Editor", desc:"Java", src:"http://i.imgur.com/FWmdTUk.png"},
    {title:"Skin Editor(Web)", desc:"JavaScript", src:`${process.env.PUBLIC_URL}/images/web_skin_editor.png`},
    {title:"Skin Poser", desc:"JavaScript", src:`${process.env.PUBLIC_URL}/images/skin_poser.png`},
    {title:"ImageDrawer", desc:"Chrome Ext", src:`${process.env.PUBLIC_URL}/images/image_drawer.jpg`},
    {title:"Old Personal Website", desc:"JavaScript", src:`${process.env.PUBLIC_URL}/images/old_website.png`},
  ]
  return <Container sx={{pt:10}}>
    <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
    >
      {works.map(v => (
          // todo review layout
          <Grid item xs={11} sm={8} md={6}>
            <Card centered>
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
          </Grid>
      ))}
    </Grid>
    <div className={'WorkBoxParent'} style={{display:'flex',flexWrap:"wrap"}}>
    </div>
  </Container>
}

export default Works;