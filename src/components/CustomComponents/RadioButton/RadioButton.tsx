import React, { useState } from 'react';
import { Container, Label,Input, RadioBox,Paragraph} from "./styles";
const RadioButton = (props:{ options: string[]}) => {
    
    const options = props.options;
    return (
    <Container>
        {options && options.map((option: string, index: number) => (
    <Label >
        <Input  type="radio" name="location" value="option" />
        <RadioBox/>
        <Paragraph>{option}</Paragraph>
      </Label>
       ))}
</Container>
)
  };
 
 export default RadioButton;