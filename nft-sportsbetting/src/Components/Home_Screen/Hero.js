import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";



const Wrapper = styled(Box)`
  display: flex;
  background-color: black;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding: 2rem 0;
`;

const PromoWrapper = styled.div`
  width: 45rem;
  height: 20rem;
  margin-right: 2rem;
`;

const Promo = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
`;

export function Hero()  {
  return (
    <Wrapper>
      <PromoWrapper>
        <Promo />
      </PromoWrapper>
      <PromoWrapper>
        <Promo />
      </PromoWrapper>
      <PromoWrapper>
        <Promo />
      </PromoWrapper>
      <PromoWrapper>
        <Promo />
      </PromoWrapper>
      <PromoWrapper>
        <Promo />
      </PromoWrapper>
    </Wrapper>
  );
};

export default Hero