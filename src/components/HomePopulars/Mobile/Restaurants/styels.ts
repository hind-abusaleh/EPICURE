import styled from "styled-components";
import {motion} from 'framer-motion/dist/framer-motion'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
padding-left:20px;
`

export const Text = styled.div`
width:100%;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 24px;
/* identical to box height, or 133% */

letter-spacing: 1.25px;
text-transform: uppercase;

color: #000000;

`

export const Navigate = styled.div`
display: flex;
flaex-direction: row;
gap: 12px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 35px;
/* identical to box height, or 219% */

text-align: right;
letter-spacing: 2px;
text-transform: capitalize;

color: #000000;
`
export const Button = styled.div`
border-style: hidden;
background-color: white;
margin: 0 20px 0 0;
`
export const Slider = styled(motion.div)`
cursor: grab;
overflow: hidden;

`
export const InnerSlider = styled(motion.div)`
display: flex;
gap:24px;
`
export const Item = styled(motion.div)`
min-width: 245px;
min-hight: 232px;
`

