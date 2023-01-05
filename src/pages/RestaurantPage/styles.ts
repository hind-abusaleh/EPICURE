import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
/*justify-content: flex-start;*/
gap: 2rem;
`
export const ResContainer = styled.div`
display: flex;
flex-direction: column;
/*justify-content: flex-start;*/
gap: 1.5rem;
`
export const ResImage = styled.div<{img: string}>`
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
gap: 1rem;
`
export const ResName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 1.313rem;
letter-spacing: 0.167rem;
color: #000000;
`
export const ChefName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size:1rem;
line-height: 1.25rem;
letter-spacing: 0.123rem;
color: #000000;
`
export const OpenContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 0.5rem;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 100;
font-size:1.125rem;
line-height: 1.25rem;
letter-spacing: 0.123rem;
color: #000000;
`

export const RestaurantDishes = styled.div`
margin-left: 1.25rem;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.5rem;
`
export const DishesBar = styled.div`
height: 1.375rem;
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 1.313rem;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 1.313rem;
letter-spacing: 0.12rem;
color: #000000;
`