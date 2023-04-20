import React from "react";
import styled from "styled-components";
import { Box, Divider, Typography } from "@material-ui/core";


export const TickerItem = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" mr={2}>
        <Typography variant="h5" color="primary">
          Soccer
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <GameBox>
          <Box display="flex" alignItems="center">
            <Box mr={1}>
              <Logo />
            </Box>
            <Box>
              <Typography variant="h6">Team A</Typography>
              <Typography variant="subtitle1">TMA</Typography>
            </Box>
          </Box>
          <Typography variant="h4" color="primary">
            2
          </Typography>
        </GameBox>
        <Divider orientation="vertical" flexItem />
        <GameBox>
          <Box display="flex" alignItems="center">
            <Box mr={1}>
              <Logo />
            </Box>
            <Box>
              <Typography variant="h6">Team B</Typography>
              <Typography variant="subtitle1">TMB</Typography>
            </Box>
          </Box>
          <Typography variant="h4" color="primary">
            1
          </Typography>
        </GameBox>
      </Box>
    </Box>
  );
};

const GameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #bdbdbd;
  border-radius: 50%;
`;

export default TickerItem;