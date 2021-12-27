import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SimpleCard(props) {
  const { title, desc, tagline, live, github, twitter } = props;
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {tagline}
        </Typography>
        <Typography variant="body2">
          <br />
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        {github ? (
          <Button size="small" href={github}>
            Github
          </Button>
        ) : null}
        {live ? (
          <Button size="small" href={live}>
            Live
          </Button>
        ) : null}
        {twitter ? (
          <Button size="small" href={twitter}>
            Twitter
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}
