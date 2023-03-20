import React from "react";
import { ReactComponentElement } from "react";
import styled, { keyframes } from "styled-components";





export const Hero = () => {
    return (
   <>
        <Box>
            <Promo></Promo>
            <Promo></Promo>
            <Promo></Promo>
            <Promo></Promo>
            <Promo></Promo>
        </Box>
   </>
    )
}

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Box = styled.div`
  width: auto;
  display: flex;
  background: black;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
`;

const Promo = styled.div`
  border: #1e1e1e;
  width: 45rem;
  height: 20rem;
  background: grey;
  margin-right: 2rem;
  animation: ${scroll} 20s linear infinite;
`;


  export default Hero