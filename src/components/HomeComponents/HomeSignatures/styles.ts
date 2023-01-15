import styled from "styled-components";

export const Main_Container = styled.div`
position: relatev;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:1.5rem;
gap: 2rem;
width: 100%;
background: #FAFAFA;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.125rem;
line-height: 1.875rem;
text-align: center;
letter-spacing: 0.123rem;
color: #000000;
`
export const Main_Text = styled.div`
line-height: 2.188rem;
letter-spacing: 0.078rem;
text-transform: uppercase;
`

export const Icons_Container = styled.div<{WindowSize:number}>`
display: flex;
flex-direction: ${props => props.WindowSize < 769 ? "column;" : "row;"}
align-items: center;
padding: 0;
gap: 3.5rem;
justify-content: center;
`
export const Icon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0;
gap: 2rem;
`
