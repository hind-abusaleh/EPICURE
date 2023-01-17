import styled from "styled-components";

export const CardInfo = styled.div<{WindowSize:any}>`
display: flex;
flex-direction: column;
align-items: ${props => props.WindowSize < 769 ? "flex-start;" : "center;"}
padding: 1rem;
padding-bottom: 2.75rem;
width: 100%;
background: #F9F4EA;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 600;
font-size: 1.125rem;
line-height: 1.313rem;
letter-spacing: 0.167rem;
color: #000000;
`