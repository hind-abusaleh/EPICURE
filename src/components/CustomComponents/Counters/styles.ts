import styled from "styled-components";

export const Container = styled.div`
height:1.25rem;
display: flex;
flex-direction: row;
gap: 2rem;
align-items: center;
justify-content: flex-start;
`
export const Botton = styled.button<{disable : Boolean, minus:Boolean}>`
font-size: ${props => props.minus ? "3rem" : "2rem"};
color: ${props => props.disable ? "gray" : "black"};
margin: 0,0,0,0;
padding: 0,0,0,0;
border: none;
background: none;
`
export const TheNumber = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.25rem;
line-height: 1.125rem;
letter-spacing: 0.123rem;
color: #000000;
`
