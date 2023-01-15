import styled from "styled-components";

export const MainContainer = styled.div <{windowSize:any}>`
margin-top: 2rem;
display: flex;
flex-direction: ${props=>props.windowSize < 769 ? "column;" : "row;"}
flex-wrap: wrap;
justify-content: center;
align-items: space-between;
gap: 1.563rem;

`