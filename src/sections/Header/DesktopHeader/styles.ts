import styled from "styled-components";

export const Navbar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
weidth: 100%;
height: 4rem;
justify-content: space-around;
`
export const LeftSide = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 2rem;
`
export const LogoContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 0.938rem;
`

export const Paragraph = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.688rem;
line-height: 2.063rem;
letter-spacing: 0.084rem;
color: #000000;
`

export const Logo = styled.div`
border-style: hidden;
background-color: white;
`

export const RightSide = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 1.594rem;
`
export const Button = styled.div`
border-style: hidden;
background-color: white;
margin: 0 1.25rem 0 0;
`