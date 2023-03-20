import React from "react";
import { ReactComponentElement } from "react";
import styled from 'styled-components';





export const SideMenu = () => {
    return (
   <>
        <Box>
            <Sport>NFL</Sport>
            <Sport>NBA</Sport>
            <Sport>NHL</Sport>
            <Sport>MLB</Sport>
            <Sport>NCAAB</Sport>
            <Sport>NCAAF</Sport>
        </Box>
   </>
    )
}


const Box = styled.div `
display: flex;
flex-direction: column;
background-color: black;
margin: 1rem 0rem;
height: 50rem;
width: 25%;
align-items: center;
justify-content: space-around;
`


const Sport = styled.div `
    width: 11rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    background: #1E1E1E;
    height: 3rem;

`

export default SideMenu;