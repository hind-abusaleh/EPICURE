import styled from "styled-components";

export const MainContainer = styled.div<{windowSize:any}>`
padding-left: ${props=>props.windowSize < 769 ? ";" : "7.938rem;"}
padding-right: ${props=>props.windowSize < 769 ? ";" : "7.938rem;"}
display: flex;
flex-direction: column;
justify-content: center;
gap: 2rem;
`
export const ResContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.5rem;
`
export const ResImage = styled.div<{img: string, windowSize:any}>`
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: ${props=>props.windowSize < 769 ? "17rem;" : "26.563rem;"} 
    background-position: center;
    background-attachment: local;
    
`
export const InfoContainer = styled.div<{windowSize:any}>`
margin-left: 1.25rem;
display: flex;
flex-direction: column;
justify-content: ${props=>props.windowSize < 769 ? "flex-start;" : "center;"}
gap: 1rem;
`
export const ResName = styled.div<{windowSize:any}>`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 600;
font-size: 1.5rem;
line-height: 1.313rem;
letter-spacing: 0.167rem;
color: #000000;
text-align: ${props=>props.windowSize < 769 ? ";" : "center;"}
`
export const ChefName = styled.div<{windowSize:any}>`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size:1rem;
line-height: 1.25rem;
letter-spacing: 0.123rem;
color: #000000;
text-align: ${props=>props.windowSize < 769 ? ";" : "center;"}

`
export const OpenContainer = styled.div<{windowSize:any}>`
display: flex;
flex-direction: row;
justify-content: ${props=>props.windowSize < 769 ? "flex-start;" : "center;"}
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
export const DishesBar = styled.div<{windowSize:any}>`
height: 1.375rem;
display: flex;
flex-direction: row;
justify-content: ${props=>props.windowSize < 769 ? "flex-start;" : "center;"}
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