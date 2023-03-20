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
                        <h3>Line</h3>
                    </Heading>
                    <Heading>
                        <h3>Total</h3>
                    </Heading>
                    <AwayTeam>
                        <h3>MIA Dolphins</h3>
                    </AwayTeam>
                    <AwayTeam>
                        <div>-3.5</div>
                        <div>-110</div>
                    </AwayTeam>
                    <AwayTeam>
                        <div>-3.5</div>
                        <div>-110</div>
                    </AwayTeam>
                    <AwayTeam>
                        <h3>+158</h3>
                    </AwayTeam>
                    <HomeTeam>
                        <h3>BAL Ravens</h3>
                    </HomeTeam>
                    <HomeTeam>
                        <div>+3.5</div>
                        <div>-110</div>
                    </HomeTeam>
                    <HomeTeam>
                        <div>667</div>
                        <div>-110</div>
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
        width: auto;
        background: black;
        height: 12rem;
        margin: 1rem 1rem;
        padding: .25rem;

`
const Heading = styled.div `
    border: solid black;
    height: 3rem;
    width: auto;
    background: #1E1E1E;
    font-size: medium;

`

const AwayTeam = styled.div `
    border: solid black;
    height: 3rem;
    width: 6rem;
    border: #1E1E1E;
    font-size: medium;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content:center;
    background-color: #1E1E1E;
    border: 1px solid rgba(217, 217, 217, 0.06);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.1);
    color: white;


`

const HomeTeam = styled.div `
    height: 3rem;
    width: 6rem;
    border: #1E1E1E;
    font-size: medium;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #1E1E1E;
    border: 1px solid rgba(217, 217, 217, 0.06);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.1);
    color: white;


`




