import React from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";

const UserPage = () => {
  return (
    <div>
      <Paper elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography component="h2" variant="h2">
              User Page
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UserPage;
