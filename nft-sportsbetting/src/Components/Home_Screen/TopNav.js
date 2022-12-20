import React from "react";
import { ReactComponentElement } from "react";
import styled from 'styled-components';





export const TopNav = () => {
    return (
        <Box>
            <Menu>Menu</Menu>
            <Inbox>Messages</Inbox>
            <LoginBtn> Login</LoginBtn>
        </Box>
    )
}


const Box = styled.div `
    display:flex;
    height: auto;
    border:solid red;
    margin-top: 3rem;
    flex-direction: row;
    align-items: center;
    padding: .25rem 1rem;
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

const Menu = styled.div `
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 3;


`;

const Inbox = styled.div `
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;


`;



