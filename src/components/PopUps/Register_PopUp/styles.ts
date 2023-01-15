import styled from "styled-components";

export const PopupBox = styled.div`
  position: absolute;
  z-index: 99 !important;
  background: #00000050;
  width: 100%;
  max-width: 48.063rem;
  top: 0;
  right: 0;
`
export const Box = styled.div`
  background: #fff;
  padding-top: 1rem;
  overflow: visible;
  min-height: 32.125rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
  `
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.875rem;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1rem;
line-height: 1.125rem;
text-align: center;
letter-spacing: 0.123rem;
color: #000000;
`  
export const Titel = styled.div`
font-weight: 200;
font-size: 1.125rem;
line-height: 1.625rem;
text-align: center;
letter-spacing: 0.167rem;
text-transform: uppercase;
`
export const Input = styled.input`
margin-left:1.5rem;
margin-right:1.5rem;
width: 90%;
border-top-style: hidden;
border-right-style: hidden;
border-left-style: hidden;
border-bottom-style: groove;
border-bottom: 0.5px solid #000000;
outline: none;
`;
export const Button = styled.button`
width: 12.875rem;
height: 3rem;
padding: 0.875rem, 2.281rem, 0.875rem, 2.281rem;
border: none;
background-color: #000000;
color: #FFFFFF;
letter-spacing: 2.67px;
text-transform: uppercase;
`