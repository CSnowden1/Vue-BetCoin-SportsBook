import React from "react";
import { ReactComponentElement } from "react";
import { GameCard } from "./GameCard";
import { TradingCard } from "./TradingCard";
import {SideMenu} from "./sideMenu"
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
            <SideMenu />
        </HomeScreenBox>
    )
}


const HomeScreenBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

const GameCardBox = styled.div `
    display: flex;
    flex-direction: row;
    width: 50%;
    flex-wrap: wrap;
    height: 100%;
    justify-items: center;
    align-items: center;
`

const TradingZone = styled.div `
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 300rem;
    border: solid gold;
`