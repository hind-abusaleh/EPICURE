import styled from "styled-components";

export const Paragraph = styled.p`
padding-left: 1.25rem;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 0.875rem;
line-height: 1.5rem;
display: flex;
align-items: center;
letter-spacing: 0.167rem;
text-transform: uppercase;
color: #000000;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2.5rem;
  align-content: center;
`
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  align-content: center;
  align-items: center;
  margin-bottom:9rem;
`
export const Titel = styled.div`
font-weight: 200;
font-size: 1.125rem;
line-height: 1.625rem;
text-align: center;
letter-spacing: 0.167rem;
text-transform: uppercase;
`

export const PopupBox = styled.div`
  position: absolute;
  z-index: 99 !important;
  background: #00000050;
  width: 100%;
  top: 0;
  left: 0;
`
export const Box = styled.div`
  background: #fff;
  padding-top: 1rem;
  overflow: visible;
  min-height: 32.125rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2.5rem;
  align-content: center;
  `

  export const EndContainer = styled.div`
  position: absolute;
  bottom: 0;
  left:0;
  padding-left: 5.438rem;
  padding-bottom: 1.5rem;

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