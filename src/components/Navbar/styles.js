import { device } from "../../utils/breakpoints";
import styled from "styled-components";

export const StyledNavbar = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background: #000;
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 70px;
  color: #fff;
  box-sizing: border-box;
`;

export const ImgContainer = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: -10px;
  cursor: pointer;

  @media ${device.tabletS} {
    width: 150px;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const LinksContainer = styled.div`
  width: auto;
  text-align: right;
  justify-content: right;

  & > ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media ${device.tabletS} {
      padding-left: 0;
    }

    & span {
      font-size: 1.5rem;
      text-decoration: none;
      display: flex;
      align-items: flex-end;
      width: max-content;
      justify-content: space-between;
      height: 30px;
      color: inherit;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }

      & > svg {
        margin-right: 5px;
      }

      &.inactive {
        pointer-events: none;
        opacity: 0.6;
      }
    }
  }
`;
