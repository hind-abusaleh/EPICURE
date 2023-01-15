import styled from "styled-components";

export const Main_Container = styled.div<{WindowSize:any}>`
display: flex;
flex-direction: ${props=>props.WindowSize < 769 ? "column;" : "row-reverse;"}
justify-content: ${props=>props.WindowSize < 769 ? "flex-start;" : "space-around;"}
align-items: ${props=>props.WindowSize < 769 ? "flex-start;" : "center;"}
left: 1.25rem;
padding: 1.5rem;
gap: 1.5rem;
width: 100%;
background: #FAFAFA;
`
export const Apps_Container = styled.div<{WindowSize:any}>`
display: flex;
flex-direction: ${props=>props.WindowSize < 769 ? "column;" : "row;"}
justify-content: flex-start;
align-items: flex-start;
gap: 1.5rem;
`
export const Container = styled.div <{WindowSize:any}>`
display: flex;
flex-direction: ${props=>props.WindowSize < 769 ? "column;" : "column-reverse;"}
`
export const About = styled.div`
max-width: 37.25rem;
margin-top: 1.5rem;
margin-bottom: 1.5rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 1rem;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.125rem;
line-height: 1.75rem;
letter-spacing: 0.134rem;
color: #000000;
`
export const Titel = styled.div`
line-height: 2.188rem;
letter-spacing: 0.078rem;
text-transform: uppercase;
`