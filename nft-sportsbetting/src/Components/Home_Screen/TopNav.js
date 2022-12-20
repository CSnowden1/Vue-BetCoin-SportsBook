import React from "react";
import { ReactComponentElement } from "react";
import styled from 'styled-components';




const Box = styled.div `
    display:flex;
    width: 100%;
    height: auto;
    border:solid red;
    margin-top: 3rem;
    flex-direction: row;
    align-items: center;
`;

const LoginBtn = styled.button `
    text-align: center;
    background: #427AA1;
    color: white;
    width: 7rem;
    padding: auto;
    height: 3rem;
    background: #427AA1;
    border-radius: 3px;
    align-items: flex-end;

`;

const navBtn = styled.div `
    display: flex;
    width: 3rem;
    height: 3rem;
    border: solid white;

`;


const menuToggle = styled.div `
    display: flex;
    width: 3rem;
    height: 3rem;
    border: solid white;
    margin: 2rem;

`



export const TopNav = () => {
    return (
        <Box>
            <menuToggle> Menu </menuToggle>
            <navBtn> Inbox </navBtn>
            <LoginBtn> Login </LoginBtn>
        </Box>
    )
}
