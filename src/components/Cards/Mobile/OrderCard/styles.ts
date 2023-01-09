import styled from "styled-components";

export const Card = styled.div`
padding-left: 1.25rem;
padding-right: 1.25rem;
padding-top: 0;
padding-bottom:0;
height: 6rem;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
gap:0;
`
export const Image = styled.div<{ im:string}>`
background-image: url(${(props) => props.im});
background-repeat: no-repeat;
background-position: center;
background-attachment: local;
background-size: cover;
width: 28%;
height: 100%;
`
export const Info = styled.div`
width: 72%;
padding-left: 1.5rem;
padding-top: 0.75rem;
background-color: #F9F4EA;
display: flex;
flex-direction: column;
justify-content: center;
gap:0.5rem;
`
export const NameAndQuantity = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: bold;
font-size: 0.875rem;
line-height: 1.875rem;
letter-spacing: 0.167rem;
color: #000000;
`
export const SideAndChanges = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 0.875rem;
line-height: 1rem;
letter-spacing: 0.167rem;
color: #000000;
`
export const Price = styled.div`
padding-right: 0.75rem;
padding-bottom: 0.75rem;
text-align-last: right;
`