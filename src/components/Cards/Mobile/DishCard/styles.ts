import styled from "styled-components";

export const CardInfo = styled.div<{WindowSize:number}>`
display: flex;
flex-direction: column;
align-items: ${props => props.WindowSize < 769 ? "flex-start;" : "center;"}
padding: 1rem;
gap: 1rem;
width: 100%;
background: #F9F4EA;
`
export const BasicInfo = styled.div<{WindowSize:number}>`
display: flex;
flex-direction: column;
text-align: ${props => props.WindowSize < 769 ? "flex-start;" : "center;"}
gap: 0.5rem;
width: 100%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1rem;
line-height: 1.25rem;
letter-spacing: 0.123rem;
color: #000000;
`
export const Name = styled.div`
font-weight: 600; 
font-size: 1.125rem;
line-height: 1.313rem;
letter-spacing: 0.167rem;
`

export const Price = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
padding: 0;
gap: 0.25rem;
`