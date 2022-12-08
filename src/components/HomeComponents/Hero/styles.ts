import styled from "styled-components";
import {IMAGES} from '../../../assets';

export const Container = styled.div`
    background-image: url(${IMAGES.hero});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 17.063rem;
    background-position: center;
    background-attachment: local;
    
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
`

export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.25rem 7.875rem;
    gap: 1.125rem;
    position: absolute;
    width:90%;
    background: rgba(255, 255, 255, 0.88);
`

export const SearchBox = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 0.375rem 0.75rem;
gap: 1.125rem;
width: 19.688rem;
height: 1.875rem;
border: 0.031rem solid #000000;
border-radius: 0.25rem;
`
export const Input = styled.input`
border: none;
background: none;
outline: none;
width: 19.688rem;
height: 1.875rem;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 0.75rem;
line-height: 0.938rem;
letter-spacing: 0.081rem;
color: #000000;

`
