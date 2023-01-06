import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;
`
export const DishContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`
export const DishImage = styled.div<{img: string}>`
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 17rem;
    background-position: center;
    background-attachment: local;
    
`
export const InfoContainer = styled.div`
margin-left: 1.25rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 0.875rem;
`
export const DishName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 1.625rem;
letter-spacing: 0.167rem;
color: #000000;
`
export const Content = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1rem;
line-height: 1.125rem;
letter-spacing: 0.123rem;
color: #000000;
`
export const SideContainer = styled.div`
margin-left: 1.25rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 2rem;
`
export const Titel = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.25rem;
line-height: 1.125rem;
letter-spacing: 0.123rem;
color: #000000;
text-decoration: underline;
text-decoration-color: #DE9200E5;
`
export const Button = styled.button`
width: 12.875rem;
height: 3rem;
margin-left: 1.25rem;
margin-bottom: 3rem;
margin-top: 2rem;
padding: 0.875rem, 2.281rem, 0.875rem, 2.281rem;
border: none;
background-color: #000000;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: #FFFFFF;
`