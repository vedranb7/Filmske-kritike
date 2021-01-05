import React from "react";
import { useSelector } from "react-redux";

import Review from "./Review/Review";
import makeStyles from "./styles";

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews);
  const classes = makeStyles();

  console.log(reviews);

  return (
    <div class="reviews">
      <h1>REVIEWS</h1>
      <Review />
      <Review />
    </div>
  );
};

export default Reviews;
