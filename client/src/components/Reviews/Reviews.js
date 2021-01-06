import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Review from "./Review/Review";
import makeStyles from "./styles";

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews);
  const classes = makeStyles();

  console.log(reviews);

  return !reviews.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {reviews.map((review) => (
        <Grid key={review._id} item xs={12} sm={6} lg={4}>
          <Review review={review} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Reviews;
