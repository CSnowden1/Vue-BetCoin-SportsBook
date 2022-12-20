import React from "react";
import { ReactComponentElement } from "react";
import { GameCard } from "./GameCard";
import { TradingCard } from "./TradingCard";
import styled from 'styled-components';





export const HomeScreen = () => {
    return (
        <HomeScreenBox>
            <TradingZone>
                <TradingCard />
                <TradingCard />
                <TradingCard />
            </TradingZone>
            <GameCardBox>
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </GameCardBox>
        </HomeScreenBox>
       
    )
}


const HomeScreenBox = styled.div`
    display: flex;
    flex-direction: row;
`

const GameCardBox = styled.div `
    display: flex;
    flex-direction: row;
    width: 70%;
    flex-wrap: wrap;
    height: 100%;
`

const TradingZone = styled.div `
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 300rem;
    border: solid gold;
`