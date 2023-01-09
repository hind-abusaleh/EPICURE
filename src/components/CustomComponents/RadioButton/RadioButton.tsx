import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material';

export default function RadioButton(props:{ options: string[], handleChange: any , value:String}) {
  const options = props.options;
  const theme = createTheme({
    typography: {
      fontSize: 16,
      fontFamily: 'Helvetica Neue',
    },
    
  });

  return (
    <FormControl  sx={{ display: 'flex',
    flexDirection: 'column' ,
    gap:'1.5rem' ,
    letterSpacing: 1.97,
    fontWeight: 200 ,
    lineHeight: 18,
          }} >
      <ThemeProvider theme={theme}>
      <RadioGroup
        value={props.value}
        onChange={props.handleChange}
      > {options && options.map((option: string, index: number) => (
        <FormControlLabel key={index} value= {option} control={<Radio color={"warning"}/>} label={option} />
        ))}
        </RadioGroup>
      </ThemeProvider>
    </FormControl>
  );
}