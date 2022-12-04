import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: column;
gap:0px;
`
export const CardImg = styled.div<{ im:string }>`
background-image: url(${(props) => props.im});
background-repeat: no-repeat;
background-position: center;
background-attachment: local;
width:245px;
height: 151.8px;
`
export const CardInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
gap: 10px;

width: 100%;

background: #F9F4EA;
`
export const ResName = styled.div`
ont-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;

color: #000000;

`
export const ChefName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 125% */

letter-spacing: 1.97px;

color: #000000;
`