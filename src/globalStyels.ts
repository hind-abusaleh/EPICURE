import {createGlobalStyle} from 'styled-components';
import styled from "styled-components";
export const GlobalStyels = createGlobalStyle`
  a:link {
    /*color: #ffffff;*/
    text-decoration: none;
  }
  a:visited {
    color: #000000;
    text-decoration: none;
  }
  `
export const MainContainer = styled.div`
display: flex;
flex-direction: column;
`