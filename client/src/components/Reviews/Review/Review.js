import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import makeStyles from "./styles";
import moment from "moment";

const Review = ({ review }) => {
  const classes = makeStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={review.selectedFile}
        title={review.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{review.title}</Typography>
        <Typography variant="body2">
          {moment(review.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Typography variant="body2" size="small">
          {Array(review.rating)
            .fill()
            .map(() => (
              <span>⭐</span>
            ))}
        </Typography>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {review.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {review.review}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <CreateIcon fontSize="small" />
          Izmjena
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Obriši
        </Button>
      </CardActions>
    </Card>
  );
};

export default Review;
