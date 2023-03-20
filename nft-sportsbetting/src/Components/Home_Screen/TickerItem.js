import React from "react";
import { ReactComponentElement } from "react";
import styled, { keyframes } from "styled-components";





export const TickerItem = () => {
    return (
        <>
            <Box>
                <LeagueBox />
                <GameBox>
                    <HomeTeam>
                        <TeamInfo>
                            <Logo>

                            </Logo>
                            <TeamAbv>

                            </TeamAbv>
                        </TeamInfo>
                        <Score>

                        </Score>
                    </HomeTeam>
                    <AwayTeam>
                        <TeamInfo>
                            <Logo>

                            </Logo>
                            <TeamAbv>
                            </TeamAbv>
                        </TeamInfo>
                        <Score>

                        </Score>
                    </AwayTeam>
                </GameBox>
                <Divider> | </Divider>
                <GameBox>
                    <HomeTeam>
                        <TeamInfo>
                            <Logo>

                            </Logo>
                            <TeamAbv>

                            </TeamAbv>
                        </TeamInfo>
                        <Score>

                        </Score>
                    </HomeTeam>
                    <AwayTeam>
                        <TeamInfo>
                            <Logo>

                            </Logo>
                            <TeamAbv>
                            </TeamAbv>
                        </TeamInfo>
                        <Score>

                        </Score>
                    </AwayTeam>
                </GameBox>
                <Divider> | </Divider>
                <GameBox>
                    <HomeTeam>
                        <TeamInfo>
                            <Logo>

                            </Logo>
                            <TeamAbv>

                            </TeamAbv>
                        </TeamInfo>
                        <Score>

                        </Score>
                    </HomeTeam>
                    <AwayTeam>
                        <TeamInfo>
                            <Logo>

                            </Logo>
                            <TeamAbv>
                            </TeamAbv>
                        </TeamInfo>
                        <Score>

                        </Score>
                    </AwayTeam>
                </GameBox>
                <Divider> | </Divider>
            </Box>
        </>
    )
}


const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Box = styled.div `
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: auto;
        height: auto;
        margin-right: 2rem;
        animation: ${scroll} 20s linear infinite;
`;

const LeagueBox =  styled.div`
    width: 5rem;
    height: 5rem;
    background: gold;
    border-radius: 1rem;
    margin: 1rem;
`

const GameBox = styled.div `
    border: solid gold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 7rem;
    margin: 1rem;
    padding: 1rem 0;

`

const HomeTeam = styled.div `
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-items: center;
        box-sizing: border-box;
        border: solid white;
        height: 2rem;
        width: 4rem;
`


const AwayTeam = styled.div `
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-items: center;
        box-sizing: border-box;
        border: solid white;
        height: 2rem;
        width: 4rem;


`

const Divider = styled.div `
    font-size: 3rem;
    color: white;
    display: flex;
    align-content: center;
    justify-items: center;
`


const TeamInfo = styled.div `
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-items: flex-start;
`

const Score = styled.div `
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-items: flex-end;
`


const Logo = styled.div `
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-items: center;
`
const TeamAbv = styled.div `
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-items: center;
`

export default TickerItem


/* Rectangle 75 */


