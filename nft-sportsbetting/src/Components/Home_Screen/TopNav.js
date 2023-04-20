import React from "react";
import { FaAlignJustify, FaInbox, FaUser } from "react-icons/fa";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    color: "#333",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  loginBtn: {
    display: "flex",
    alignItems: "center",
    color: "#333",
  },
}));

export const TopNav = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <FaAlignJustify />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Your App Name
        </Typography>
        <Button className={classes.navLink}>Games</Button>
        <Button className={classes.navLink}>Picks</Button>
        <Button className={classes.navLink}>Trade Marketplace</Button>
        <div className={classes.loginBtn}>
          <IconButton aria-label="inbox" color="inherit">
            <FaInbox />
          </IconButton>
          <Button color="inherit" startIcon={<FaUser />}>
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};