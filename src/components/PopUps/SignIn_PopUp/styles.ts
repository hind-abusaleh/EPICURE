import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3.063rem;
  padding-bottom: 1.5rem;
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.875rem;
`

export const ForgetPassword = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.125rem;
text-align: center;
letter-spacing: 0.123rem;
color: #000000;
`
export const LogInButton = styled.button<{unable:boolean}>`
width: 12.875rem;
height: 3rem;
padding: 0.875rem, 2.281rem, 0.875rem, 2.281rem;
border: none;
background-color: ${props => props.unable? "#979797" : "#000000"};
color: #FFFFFF;
letter-spacing: 2.67px;
text-transform: uppercase;
` 
export const SignUpButton = styled.button`
width: 12.875rem;
height: 3rem;
padding: 0.875rem, 2.281rem, 0.875rem, 2.281rem;
border: 1px solid #000000;
color: #000000;
background-color: white;
letter-spacing: 2.67px;
text-transform: uppercase;
`