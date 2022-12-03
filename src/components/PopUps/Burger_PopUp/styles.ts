import styled from "styled-components";

export const PopupBox = styled.div`
  position: absolute;
  z-index: 99 !important;
  background: #00000050;
  width: 100%;
  height: 100hv;
  top: 0;
  left: 0;
`
export const Box = styled.div`

  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #999;
  overflow: visible;
  max-height: 480px;

  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 22px;
  letter-spacing: 1.9199999570846558px;
  text-align: left;
  `
  export const CloseIcon = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  weidth: 100%;
  height: 26px;
  top: 0;
  `
  export const BurgerContent = styled.div`
  display:grid;
  padding-top:40px;
  padding-bottom:40px;
  gap: 24px;
  `
  export const Line = styled.div`
  padding-left:0;
  `

  export const FooterContent = styled.div`
  display:grid;
  padding-top:32px;
  padding-bottom:24px;
  row-gap: 40px;
  `