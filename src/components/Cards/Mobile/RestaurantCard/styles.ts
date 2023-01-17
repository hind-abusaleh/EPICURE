import styled from "styled-components";

export const Card = styled.div<{ page:string }>`
display: flex;
flex-direction: column;
gap:0;
width: ${props => props.page === "home" ? "15.313rem" : "20.875rem"}
`
export const CardImg = styled.div<{ im:string, page:string  }>`
background-image: url(${(props) => props.im});
background-repeat: no-repeat;
background-position: center;
background-attachment: local;
/*height: 9.488rem;*/
height: ${props => props.page === "home" ? "9.488rem" : "12.938rem"}
`
export const CardInfo = styled.div<{WindowSize:number}>`
display: flex;
flex-direction: column;
align-items: ${props => props.WindowSize < 769 ? "flex-start;" : "center;"}
padding: 1rem;
gap: 0.625rem;
background: #F9F4EA;
`
export const ResName = styled.div`
ont-family: 'Helvetica Neue';
font-style: normal;
font-weight: 600; 
font-size: 1.125rem;
line-height: 1.313rem;
letter-spacing: 0.167rem;
color: #000000;

`
export const ChefName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1rem;
line-height: 1.25rem;
letter-spacing: 0.123rem;
color: #000000;
`