import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.5rem;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
`;
export const Paragraph = styled.p`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1.125rem;
line-height: 1.125rem;
letter-spacing: 0.123rem;
color: #000000;
`;
export const RadioBox = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  border: 1px solid #b9bdcf;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.75rem;
  /*transition: background 0.15s, border-color 0.15s;*/
  padding: 0.125rem;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: #DE9200E5;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0);
  }
`;
export const Input = styled.input`
  display: none;
  &:checked + ${RadioBox} {
      &::after {
        transform: scale(1);
      }
`;