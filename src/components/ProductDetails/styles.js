// DEPENDENCIES
import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const StyledProductDetails = styled.div`
  width: 100%;
  margin-top: 20px;

  & > span {
    display: flex;
    align-items: flex-end;
    width: max-content;
    justify-content: space-between;
    background-color: #000;
    padding: 5px;
    border-radius: 10px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;

    &:hover > svg {
      opacity: 0.8;
    }

    & > svg {
      font-size: 1.5rem;
      margin-right: 5px;
      color: #fef6b9;
    }
  }
`;

export const StyledDetails = styled.div`
  min-height: 600px;
  height: auto;
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 5%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  align-items: center;

  @media ${device.tabletS} {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    column-gap: 0;
  }

  & .productDetails__posterImg {
    width: 300px;
    height: auto;

    @media ${device.tabletS} {
      margin: 0 auto;
      width: 200px;
    }

    & > img {
      width: 100%;
      height: auto;
    }

    & .productDetails__posterImg__footer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 20px;

      & > div {
        display: grid;
        grid-template-rows: repeat(3, auto);
        row-gap: 3px;

        & > svg,
        & > span {
          margin: 0 auto;
        }

        & > svg {
          font-size: 25px;
          opacity: 0.8;
        }

        & > span:last-child {
          opacity: 0.7;
        }
      }
    }
  }

  & .productDetails__info > h1 {
    margin: 0 auto 40px auto;
    width: max-content;
    font-size: 35px;

    @media ${device.tabletS} {
      margin: 40px auto 40px auto;
    }
  }

  & .productDetails__skills {
    background: #e2e2e2;
    padding: 20px;
    border-radius: 4px;
    display: grid;
    grid-template-columns: auto auto;
    box-shadow: 0px 0px 20px #e2e2e2;
    box-sizing: border-box;

    & > h3 {
      grid-column: 1 / -1;
      margin: 10px auto 30px auto;
    }

    & > h4 {
      margin: 10px 0;
    }

    & > h4 > span {
      font-weight: 300;
    }

    @media ${device.mobileL} {
      grid-template-columns: auto;
    }
  }

  & .productDetails__actions {
    background: #e2e2e2;
    padding: 20px;
    border-radius: 4px;
    display: grid;
    grid-template-columns: auto auto;
    box-shadow: 0px 0px 20px #e2e2e2;
    column-gap: 10%;
    box-sizing: border-box;
    margin-top: 20px;
    justify-content: space-around;

    & > div {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      row-gap: 5px;
      width: 150px;

      & > select {
        height: 30px;
      }

      & label {
        font-weight: 700;
      }

      @media ${device.mobileL} {
        width: 100px;
      }
    }

    & > button {
      grid-row: 2;
      grid-column: 1 / -1;
      width: max-content;
      margin: 20px auto 0 auto;

      & svg {
        margin-right: 5px;
      }
    }
  }
`;
