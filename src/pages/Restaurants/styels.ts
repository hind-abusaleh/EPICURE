import styled from "styled-components";

export const MainContainer = styled.div`
margin-left: 1.188rem;
/*margin-right: 0.819rem;*/
margin-top: 0.875rem;
margin-bottom: 3.313rem;
`
export const ConstContainer = styled.div`
top: 0rem;
/*bottom: 2rem;*/
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 1.5rem;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.125rem;
line-height: 1.375rem;
letter-spacing: 0.12rem;
color: #000000;
`
export const Title = styled.div`
text-transform: uppercase;
`
export const ResBar = styled.div<{windowSize:any}>`
height: 1.375rem;
display: flex;
flex-direction: row;
justify-content: ${props=>props.windowSize < 769 ? "flex-start;" : "center;"}
align-items: center;
align-content: center;
gap: 1.313rem;
`
export const BarButton = styled.div<{ active:boolean  }>`
    text-decoration: underline;
    text-decoration-color: white;
    text-decoration-thickness: 0.113rem;
    text-underline-offset: 0.375rem;

    ${({ active }) =>
    active &&
    `
    font-weight: bold;
    text-decoration-color: #DE9200E5;
  `}
`
