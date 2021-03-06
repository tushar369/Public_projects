import React from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Paper elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography component="h3" variant="h3">
              HomePage
            </Typography>
          </Grid>

          <Grid item xs={12} align="center">
            <Button
              to="/login"
              component={Link}
              color="primary"
              variant="contained"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default HomePage;
