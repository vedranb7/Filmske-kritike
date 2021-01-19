import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import makeStyles from "./styles";
import { createReview, updateReview } from "../../actions/reviews";

const Form = ({ currentId, setCurrentId }) => {
  const [reviewData, setReviewData] = useState({
    title: "",
    review: "",
    rating: "",
    tags: "",
    poster: "",
  });

  const review = useSelector((state) =>
    currentId ? state.reviews.find((r) => r._id === currentId) : null
  );
  const classes = makeStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (review) setReviewData(review);
  }, [review]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateReview(currentId, reviewData));
    } else {
      dispatch(createReview(reviewData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setReviewData({
      title: "",
      review: "",
      rating: "",
      tags: "",
      poster: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Izmjena" : "Dodavanje"} kritike
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Naslov filma"
          fullWidth
          value={reviewData.title}
          onChange={(e) =>
            setReviewData({ ...reviewData, title: e.target.value })
          }
        />
        <TextField
          name="review"
          variant="outlined"
          label="Kritika"
          fullWidth
          value={reviewData.review}
          onChange={(e) =>
            setReviewData({ ...reviewData, review: e.target.value })
          }
        />
        <TextField
          name="rating"
          variant="outlined"
          label="Ocjena"
          fullWidth
          value={reviewData.rating}
          onChange={(e) =>
            setReviewData({ ...reviewData, rating: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Žanrovi"
          fullWidth
          value={reviewData.tags}
          onChange={(e) =>
            setReviewData({ ...reviewData, tags: e.target.value.split(",") })
          }
        />
        <TextField
          name="poster"
          variant="outlined"
          label="Link postera"
          fullWidth
          value={reviewData.poster}
          onChange={(e) =>
            setReviewData({ ...reviewData, poster: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {currentId ? "Spremi izmjenu" : "Dodaj kritiku"}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Obriši
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
