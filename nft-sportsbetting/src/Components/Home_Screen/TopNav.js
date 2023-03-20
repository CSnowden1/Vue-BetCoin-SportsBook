import React from "react";
import { ReactComponentElement } from "react";
import styled from 'styled-components';
import { FaAlignJustify, FaInbox, FaUser} from 'react-icons/fa';





export const TopNav = () => {
    return (
        <Box>
            <Menu><FaAlignJustify /></Menu>
            <NavItem>Games</NavItem>
            <NavItem>Picks</NavItem>
            <NavItem>Trade Marketplace</NavItem>
            <UserInfo>
                <NavItem><FaInbox/></NavItem>
                <LoginBtn><FaUser/></LoginBtn>
            </UserInfo>
        </Box>
    )
}


const Box = styled.div `
    display: flex;
    height: auto;
    border:solid red;
    margin-top: 3rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: .25rem 1rem;
`;

const LoginBtn = styled.div `
    display: flex;
    align-content: center;
    justify-items: center;
    color: white;
    align-items: flex-end;

`;

const Menu = styled.div `
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;


`;

const NavItem = styled.div `
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
`;

const UserInfo = styled.div `
    display: flex;
    justify-content: flex-end;

`

