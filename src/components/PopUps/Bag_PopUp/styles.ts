import styled from "styled-components";

export const PopupBox = styled.div`
position: absolute;
z-index: 99 !important;
background: #00000050;
width:100%;
max-width: 31.063rem;
right: 0;
top:2.875rem;
`
export const Box = styled.div`
  background: #fff;
  /*border-radius: 0.25rem;*/
  /*padding: 1.25rem;*/
  overflow: visible;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 1.25rem;
  `
export const OrderBox = styled.div`
  background: #fff;
  padding-top: 1rem;
  overflow: visible;
  min-height: 32.125rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2.688rem;
  `
export const Titel = styled.div`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.5rem;
  color: #000000;
  letter-spacing: 0.167rem;
  text-transform: uppercase;
  `
export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-bottom:9rem;
  `
export const EndContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: 0.167rem;
  text-transform: uppercase;
  color: #000000;
`
export const PriceContainer = styled.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0;
`
export const Price = styled.div`
line-height: 1.125rem;
`
export const IconImage = styled.div`
padding-left : 0.3rem;
padding-right: 0.1rem;
height: 24px;
`
export const Button = styled.button`
width: 12.875rem;
height: 3rem;
padding: 0.875rem, 2.281rem, 0.875rem, 2.281rem;
border: none;
background-color: #000000;
color: #FFFFFF;
letter-spacing: 2.67px;
text-transform: uppercase;
`