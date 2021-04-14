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
import { useDispatch } from "react-redux";

import { deleteReview } from "../../../actions/reviews";

const Review = ({ review, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  const classes = makeStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={review.poster}
        title={review.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{review.title}</Typography>
        <Typography variant="body2">
          {review.tags.map((tag) => `#${tag} `)}
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
      <CardContent className={classes.content}>
        <Typography variant="body2" component="p">
          {review.review}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === review?.creator ||
          user?.result?._id === review?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => setCurrentId(review._id)}
          >
            <CreateIcon fontSize="small" />
            Izmjena
          </Button>
        )}

        {(user?.result?.googleId === review?.creator ||
          user?.result?._id === review?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteReview(review._id))}
          >
            <DeleteIcon fontSize="small" />
            Obriši
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Review;
