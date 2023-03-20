import React from "react";
import { ReactComponentElement } from "react";
import { TickerItem } from "./TickerItem";
import styled from "styled-components";




export const Ticker = () => {
    return (
        <>
            <Box>
                <TickerItem />
                <TickerItem />
                <TickerItem />
            </Box>
        </>
    )
}



const Box = styled.div`
  width: auto;
  display: flex;
  background: black;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
  margin: 1rem 0;
`;



export default Ticker