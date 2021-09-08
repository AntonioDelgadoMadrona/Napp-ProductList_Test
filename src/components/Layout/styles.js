import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  max-width: 1400px;
  margin: 70px auto;
  overflow: hidden;

  @media ${device.tabletL} {
    max-width: 900px;
  }

  @media ${device.tabletM} {
    max-width: 90%;
  }  
`;