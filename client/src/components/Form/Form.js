import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import makeStyles from "./styles";
import { createReview } from "../../actions/reviews";

const Form = () => {
  const [reviewData, setReviewData] = useState({
    title: "",
    review: "",
    rating: "",
    tags: "",
    selectedFile: "",
  });
  const classes = makeStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview(reviewData));
  };

  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Dodavanje filma</Typography>
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
            setReviewData({ ...reviewData, tags: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setReviewData({ ...reviewData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Dodaj kritiku
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
