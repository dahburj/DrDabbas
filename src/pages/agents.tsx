import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { FormHelperText, Grid, GridList } from "@material-ui/core"

const useStyles = makeStyles({
  card: {
    maxWidth: 375,
    display: "inline-block",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "24px 0 0 16px",
  },
})

export default function ImgMediaCard() {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://images.unsplash.com/photo-1577071382416-7d1901914855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="Mohamed Al Dabbas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mohamed Al Dabbas
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            He has got the Jordanian Board in Psychiatry 1993, MRCPsych pt
            1,1997 The Royal College Psychiatrists, London.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
