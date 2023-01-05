import  React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { orange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { info } from 'console';
import { createTheme, ThemeProvider } from '@mui/material';

export default function CheckBox(props:{ options: string[]}) {
  const options = props.options;
  const theme = createTheme({
    typography: {
      fontSize: 16,
      fontFamily: 'Helvetica Neue',
    },
    
  });

  const [checked, setChecked] = React.useState([false, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex',
       flexDirection: 'column' ,
       gap:'1.5rem' ,
       letterSpacing: 1.97,
       fontWeight: 200 ,
       lineHeight: 18,
             }}>
      <FormControlLabel 
        label={options[0]}
        control={<Checkbox sx={{ }}
           checked={checked[0]} onChange={handleChange1} color={"warning"}/>}
      />
      <FormControlLabel
        label={options[1]}
        control={<Checkbox checked={checked[1]} onChange={handleChange2} color={"warning"}/>}
      />
    </Box>
    </ThemeProvider>
  );
}