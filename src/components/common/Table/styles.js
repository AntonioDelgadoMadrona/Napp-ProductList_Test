// DEPENDENCIES
import styled from "styled-components";

import { device } from "../../../utils/breakpoints";

export const StyledTable = styled.div`
  width: 100%;
  height: auto;
  min-height: 650px;
  box-sizing: border-box;
  padding: 0 10px;
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10%;
  row-gap: 35px;
  width: 100%;

  & img.noResults {
    grid-column: 1 / -1;
    align-self: center;
    margin: 40px auto 20px auto;

    @media ${device.tabletS} {
      width: 300px;
    }
  }

  @media ${device.tabletL} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.tabletS} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledItem = styled.div`
  width: 100%;
  color: #000;
  text-align: center;
  border: solid 1px #e2e2e2;
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    background-color: #e2e2e2;
    transition-duration: 1s;

    & img {
      transform: scale(1.1);
      transition-duration: 1s;
    }
  }

  & h4 {
    margin-top: 5px;
    margin-bottom: 0px;
    font-size: 1rem;
  }

  & > p {
    margin-top: 5px;
    margin-bottom: 15px;
  }

  & > span {
    font-size: 1.2rem;
    font-weight: bolder;
    color: #e00052;
    font-family: 'Trade Gothic LT Std', Arial, Helvetica, sans-serif;

    &.oldPrice {
      margin-left: 10px;
      font-size: 1rem;
      text-decoration: line-through;
      font-weight: bold;
    }
  }

  
`;
