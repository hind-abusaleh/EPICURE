import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1.125rem;
padding-left: 1.25rem;
`
export const Text = styled.div<{WindowSize:number}>`
width:100%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.125rem;
line-height: 1.5rem;
text-align: ${props => props.WindowSize < 769 ? ";" : "center;"}
letter-spacing: 0.078rem;
text-transform: uppercase;
color: #000000;
`
export const Navigate = styled.div<{WindowSize:number}>`
padding-right: 8.5rem;
width:100%;
display: flex;
flaex-direction: row;
justify-content: ${props => props.WindowSize < 769 ? "flex-start;" : "flex-end;"}
gap: 0.75rem;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 2.188rem;
letter-spacing: 0.125rem;
text-transform: capitalize;
color: #000000;
`
export const Button = styled.div`
border-style: hidden;
background-color: white;
margin: 0 1.25rem 0 0;
`
export const Slider = styled.div`
width : 100%;
`
export const DesktopCardContainer = styled.div`
display: flex;
flex-direction: row;
gap: 1.5rem;
justify-content: center;
`


