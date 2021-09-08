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
  margin: 70px auto 0 auto;
  padding: 5px 0;
  overflow: hidden;

  @media ${device.tabletL} {
    max-width: 900px;
  }

  @media ${device.tabletM} {
    max-width: 90%;
    padding-bottom: 20px;
  }  

  @media ${device.tabletS} {
    margin-top: 85px;
  }  
`;