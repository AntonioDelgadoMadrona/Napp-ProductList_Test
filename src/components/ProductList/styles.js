import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const productListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;

  & > h1 {
    color: grey;
  }
`;

export const StyledPosterImg = styled.div`
  width: 180px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;

  & img,
  & svg {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 5px rgb(0 0 0 / 25%);
  }

  @media ${device.mobileL} {
    height: 280px;
  }

  @media ${device.mobileM} {
    height: 250px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  border-radius: 10px 10px 0 0;
  margin-bottom: 25px;

  & .input__container {
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    column-gap: 20px;
    justify-content: right;

    @media ${device.tabletS} {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      column-gap: 0;
    }
  }
`;
