import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;

`
export const Text = styled.div <{WindowSize : any}>`
text-align: ${props => props.WindowSize < 769 ? ";" : "center;"}
padding-left: 1.25rem;
padding-bottom: 0.5rem;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.125rem;
line-height: 2.188rem;
letter-spacing: 0.078rem;
text-transform: uppercase;
color: #000000;
`

export const Container = styled.div <{WindowSize : any}>`
display: flex;
/*flex-direction: column;*/
flex-direction: ${props => props.WindowSize < 769 ? "column;" : "row;"}
justify-content: ${props=>props.WindowSize < 769 ? "flex-start;" : "space-around;"}
align-items: center;

`

export const ChefCard = styled.div`
/*height: 21.125rem;*/
display: flex;
flex-direction: column;
`

export const ChefImage = styled.div<{ im:string }>`
margin-bottom: 1.875rem;
background-image: url(${(props) => props.im});
background-repeat: no-repeat;
background-position: center;
background-attachment: local;
min-width: 29.875rem !important;
height: 21.125rem;
top: calc(50% - 21.125rem/2);
display: flex;
flex-direction: column;
justify-content: flex-end !important;
align-items: center;
`
export const TextBlock = styled.div`
background: rgba(255, 255, 255, 0.8);
display: block;
height: 3.188rem;
width: 100% ! important;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 2.938rem;
text-align: center;
letter-spacing: 0.167rem;
color: #000000;
`
export const About = styled.div`
max-width : 40.125rem !important;
margin-left: 1.25rem;
margin-right: 1.25rem;
margin-bottom: 2rem;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.125rem;
line-height: 1.75rem;
text-align: justify;
letter-spacing: 0.078rem;
color: #000000;
`