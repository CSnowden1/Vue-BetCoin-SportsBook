import React from "react";
import { ReactComponentElement } from "react";
import styled from 'styled-components';





export const Hero = () => {
    return (
   <>
        <Box>
            <Promo></Promo>
            <Promo></Promo>
            <Promo></Promo>
        </Box>
   </>
    )
}


const Box = styled.div `
    display: flex;
    background: black;
    justify-content: space-between;
    padding: 2rem;

`

const Promo = styled.div `
    border:  #1E1E1E;
    width: 30rem;
    height: 20rem;
    background: grey;
`