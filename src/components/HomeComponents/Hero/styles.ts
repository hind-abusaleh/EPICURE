import styled from "styled-components";
import {IMAGES} from '../../../assets';

export const Container = styled.div`
    background-image: url(${IMAGES.hero});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 273px;
    background-position: center;
    background-attachment: local;
    
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
`

export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px 126px;
    gap: 18px;
    position: absolute;
    width:90%;
    background: rgba(255, 255, 255, 0.88);
`

export const SearchBox = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 6px 12px;
gap: 18px;
width: 315px;
height: 30px;
border: 0.5px solid #000000;
border-radius: 4px;
`
export const Input = styled.input`
border: none;
background: none;
outline: none;
width: 315px;
height: 30px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 15px;
letter-spacing: 1.29px;
color: #000000;

`
