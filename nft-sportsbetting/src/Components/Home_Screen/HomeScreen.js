import React from "react";
import { Grid } from "@material-ui/core";
import { GameCard } from "./GameCard";
import { TradingCard } from "./TradingCard";
import { SideMenu } from "./sideMenu";

export const HomeScreen = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <TradingCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TradingCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TradingCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SideMenu />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {[...Array(15)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <GameCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeScreen;