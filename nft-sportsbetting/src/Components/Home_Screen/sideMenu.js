import React from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1E1E1E",
    height: "100%",
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  sport: {
    borderRadius: "2rem",
    height: "3rem",
  },
}));

export const SideMenu = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <List>
          <ListItem button className={classes.sport}>
            <ListItemText primary="NFL" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.sport}>
            <ListItemText primary="NBA" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.sport}>
            <ListItemText primary="NHL" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.sport}>
            <ListItemText primary="MLB" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.sport}>
            <ListItemText primary="NCAAB" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.sport}>
            <ListItemText primary="NCAAF" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default SideMenu;