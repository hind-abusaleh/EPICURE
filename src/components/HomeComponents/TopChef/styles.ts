import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
`

export const ChefCard = styled.div`
height: 338px;
display: flex;
flex-direction: column;
`

export const Text = styled.div`
padding-left: 20px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 35px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #000000;
`


export const ChefImage = styled.div<{ im:string }>`

margin-bottom: 30px;
background-image: url(${(props) => props.im});
background-repeat: no-repeat;
background-position: center;
background-attachment: local;
width: 100%;
height: 338px;
top: calc(50% - 338px/2);

display: flex;
flex-direction: column;
justify-content: flex-end !important;
align-items: center;
`

export const TextBlock = styled.div`
background: rgba(255, 255, 255, 0.8);
display: block;
height: 51px;
width: 100%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 47px;
/* identical to box height, or 261% */

text-align: center;
letter-spacing: 2.67px;

color: #000000;

`
export const About = styled.div`
margin-left: 20px;
margin-right: 20px;
margin-bottom: 32px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 28px;
/* or 156% */

text-align: justify;
letter-spacing: 1.25px;

color: #000000;

`