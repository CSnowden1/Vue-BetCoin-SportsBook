import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TickerItem from "./TickerItem";

const useStyles = makeStyles((theme) => ({
  ticker: {
    width: "100%",
    height: "auto",
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    overflow: "hidden",
    margin: theme.spacing(1, 0),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[4],
  },
}));

export default function Ticker() {
  const classes = useStyles();

  return (
    <Box className={classes.ticker}>
      <Paper elevation={0} square>
        <TickerItem />
        <TickerItem />
        <TickerItem />
      </Paper>
    </Box>
  );
}