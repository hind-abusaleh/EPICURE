import styled from "styled-components";

export const PopupBox = styled.div`
  position: absolute;
  z-index: 99 !important;
  background: #00000050;
  width: 100%;
  max-width: 48.063rem;
  top: 0;
  right: 0;
`
export const Box = styled.div`

  background: #fff;
  overflow: visible;
  max-height: 480px;

  font-family: Helvetica Neue;
  font-size: 1.125rem;
  font-weight: 200;
  line-height: 1.375rem;
  letter-spacing: 0.12rem;
  text-align: left;
  `
  export const CloseIcon = styled.div`
  padding-left: 1.5rem;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  weidth: 100%;
  height: 2.875rem;
  top: 0;
  `
  export const BurgerContent = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  padding-left: 1.25rem;
  padding-top:2.5rem;
  padding-bottom:2.5rem;
  gap: 1.5rem;
  `

  export const FooterContent = styled.div`
  border: 0.06rem solid #F2F2F2;
  display:flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  padding-left: 1.188rem;
  padding-top:2rem;
  padding-bottom:1.5rem;
  gap: 1.5rem;
  `