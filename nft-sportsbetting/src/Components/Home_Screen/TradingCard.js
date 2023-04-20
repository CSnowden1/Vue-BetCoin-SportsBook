import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "#F7F7F7",
    borderRadius: "2rem",
    height: "20rem",
    width: "90%",
    margin: "2rem auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  button: {
    marginTop: "2rem",
    backgroundColor: "#F3C700",
    color: "#333333",
    padding: "1rem 2rem",
    borderRadius: "2rem",
    fontSize: "1.2rem",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#F3C700",
      boxShadow: "none",
    },
  },
}));

export function TradingCard() {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <Typography className={classes.title}>NFT For Sale</Typography>
      <Button className={classes.button}>Buy now</Button>
    </Box>
  );
};

export default TradingCard;