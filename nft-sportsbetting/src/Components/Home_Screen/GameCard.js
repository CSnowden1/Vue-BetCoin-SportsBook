import React from "react";
import { Box, Typography, Grid, Paper } from "@material-ui/core";

export const GameCard = () => {
  return (
    <Box component={Paper} p={2} mb={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Typography variant="subtitle1">Date</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">Spread</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">Line</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">Total</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">MIA Dolphins</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">-3.5</Typography>
          <Typography variant="subtitle1">-110</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">-3.5</Typography>
          <Typography variant="subtitle1">-110</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">+158</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">BAL Ravens</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">+3.5</Typography>
          <Typography variant="subtitle1">-110</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">667</Typography>
          <Typography variant="subtitle1">-110</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">-150</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};