import React from "react";
import styled from 'styled-components';
import { Button, ButtonGroup } from '@material-ui/core';

export const TopMenu = () => {
    return (
        <Box>
            <StyledButtonGroup variant="text" color="primary">
                <StyledButton>NFL</StyledButton>
                <StyledButton>NBA</StyledButton>
                <StyledButton>NHL</StyledButton>
                <StyledButton>MLB</StyledButton>
                <StyledButton>NCAAB</StyledButton>
                <StyledButton>NCAAF</StyledButton>
            </StyledButtonGroup>
        </Box>
    )
}

const Box = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    margin: 1rem 0rem;
    height: 5rem;
    align-items: center;
    justify-content: space-around;
`

const StyledButtonGroup = styled(ButtonGroup)`
    && {
        border-radius: 2rem;
        height: 3rem;
    }
`

const StyledButton = styled(Button)`
    && {
        color: white;
        text-transform: none;
        font-weight: bold;
        &:hover {
            background-color: #2b2b2b;
        }
    }
`