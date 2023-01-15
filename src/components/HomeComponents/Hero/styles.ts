import styled from "styled-components"; 
import { IMAGES } from "../../../assets";

export const MainContainer = styled.div`
`
export const Container = styled.div<{WindowSize:any}>`
    background-image: url(${IMAGES.hero_desk});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    /*height: 17.063rem;*/
    height: ${props=>props.WindowSize < 769 ? "17.063rem;" : "43.5rem;"}
    background-position: center;
    background-attachment: local;
    
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
`

export const TextBlock = styled.div<{WindowSize:any}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.25rem 7.875rem;
    gap: 1.125rem;
    height: ${props=>props.WindowSize < 769 ? ";" : "32%;"}
    width: ${props=>props.WindowSize < 769 ? "90%;" : "53%;"}
    background: rgba(255, 255, 255, 0.88);
`

export const SearchBox = styled.div<{WindowSize:any}>`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 0.375rem 0.75rem;
gap: 1.125rem;
height: ${props=>props.WindowSize < 769 ? "1.875rem;" : "22%;"}
width: ${props=>props.WindowSize < 769 ? "19.688rem;" : "95%;"}
border: 0.031rem solid #000000;
border-radius: 0.25rem;
`

export const InputContainer = styled.div`
border-radius: 0;
display: flex;
flex-direction: column;
justify-content: center !important;
align-items: center !important;
`
export const Input = styled.input`
border: none;
background: none;
outline: none;
width: 100%;
height: 1.875rem;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 0.75rem;
line-height: 0.938rem;
letter-spacing: 0.081rem;
color: #000000;
`
export const DataResult= styled.div<{WindowSize:any}>`
position: absolute;
z-index: 99 !important;
top : ${props=>props.WindowSize < 769 ? "15.125rem !important;" : "30rem !important;"}
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 1rem 1rem 3.875rem;
gap: 0.625rem;
background: #FFFFFF;
width: 19.688rem;
`

export const Category= styled.div`
font-weight: 200;
`
export const Item= styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.063rem;
letter-spacing: 0.081rem;
color: #000000;
`