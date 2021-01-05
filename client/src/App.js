import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import logo from "./images/logo.png";
import Form from "./components/Form/Form";
import Reviews from "./components/Reviews/Reviews";
import makeStyles from "./styles";

const App = () => {
  const classes = makeStyles();
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img
          className={classes.image}
          src={logo}
          alt="cover filma"
          height="60"
        />
        <Typography className={classes.heading} variant="h2" align="center">
          Filmske kritike
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Reviews />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
