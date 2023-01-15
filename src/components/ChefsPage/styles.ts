import styled from "styled-components";

export const MainContainer = styled.div<{windowSize:any}>`
margin-top: 2rem;
margin-right: 1.25rem;
display: flex;
flex-direction: ${props=>props.windowSize < 769 ? "column;" : "row;"}
flex-wrap: ${props=>props.windowSize < 769 ? "nowrap;" : "wrap;"}
justify-content: center;
align-items: space-between;
gap: 1.438rem;
`

export const ChefCard = styled.div<{windowSize:any}>`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
width:${props=>props.windowSize < 769 ? "100%;" : ";"}
`
export const TextBlock = styled.div`
background: rgba(255, 255, 255, 0.8);
display: block;
height: 3.188rem;
min-width: 27.063rem !important;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 2.938rem;
text-align: center;
letter-spacing: 0.167rem;
color: #000000;
`
export const Text = styled.div`
/*padding-left: 1.25rem;*/
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.125rem;
line-height: 2.188rem;
letter-spacing: 0.078rem;
text-transform: uppercase;
color: #000000;
`
export const ChefImage = styled.div<{ im:string }>`
margin-bottom: 1.875rem;
background-image: url(${(props) => props.im});
background-repeat: no-repeat;
background-position: center;
background-attachment: local;
width: 100%;
height: 21.125rem;
top: calc(50% - 21.125rem/2);
display: flex;
flex-direction: column;
justify-content: flex-end !important;
align-items: center;
`