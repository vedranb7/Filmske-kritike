import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getReviews } from "./actions/reviews";
import logo from "./images/logo.png";
import Form from "./components/Form/Form";
import Reviews from "./components/Reviews/Reviews";
import makeStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = makeStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={logo} alt="logo" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">
          Filmske kritike
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Reviews setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
