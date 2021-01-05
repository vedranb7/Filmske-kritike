import React from "react";
import Review from "./Review/Review";
import makeStyles from "./styles";

const Reviews = () => {
  const classes = makeStyles();
  return (
    <div class="reviews">
      <h1>REVIEWS</h1>
      <Review />
      <Review />
    </div>
  );
};

export default Reviews;
