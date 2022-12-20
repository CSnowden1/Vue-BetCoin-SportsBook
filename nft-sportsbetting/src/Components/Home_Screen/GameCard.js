import React from "react";
import { ReactComponentElement } from "react";
import styled from 'styled-components';





export const GameCard = () => {
    return (
        <>
            <Box>
                    <Heading>
                        <h3>Date</h3>
                    </Heading>
                    <Heading>
                        <h3>Spread</h3>
                    </Heading>
                    <Heading>
                        <h3>Total</h3>
                    </Heading>
                    <Heading>
                        <h3>Money Line</h3>
                    </Heading>
                    <AwayTeam>
                        <h3>MIA Dolphins</h3>
                    </AwayTeam>
                    <AwayTeam>
                        <h3>-3.5 -110</h3>
                    </AwayTeam>
                    <AwayTeam>
                        <h3>o44.5 -110</h3>
                    </AwayTeam>
                    <AwayTeam>
                        <h3>+158</h3>
                    </AwayTeam>
                    <HomeTeam>
                        <h3>BAL Ravens</h3>
                    </HomeTeam>
                    <HomeTeam>
                        <h3>+3.5 -110</h3>
                    </HomeTeam>
                    <HomeTeam>
                        <h3>u44.5 -110</h3>
                    </HomeTeam>
                    <HomeTeam>
                        <h3>-150</h3>
                    </HomeTeam>
            </Box>
        </>
    )
}

const Box = styled.div `
        display: grid;
        text-align: center;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 4rem 4rem 4rem 4rem;
        border-color: "#373535";
        border: solid gold;
        width: 30%;
        background: black;
        height: 12rem;
        margin: 1rem 1rem;
        

`
const Heading = styled.div `
    border: solid black;
    height: 3rem;
    width: 6rem;
    background: #1E1E1E;
    font-size: medium;

`

const AwayTeam = styled.div `
    border: solid black;
    height: 3rem;
    width: 6rem;
    border: #1E1E1E;
    font-size: medium;

`

const HomeTeam = styled.div `
    border: solid black;
    height: 3rem;
    width: 6rem;
    border: #1E1E1E;
    font-size: medium;

`
