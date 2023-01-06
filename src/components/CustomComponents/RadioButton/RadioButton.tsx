import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material';
import { useDispatch} from 'react-redux';
import { setSideOnDish } from "../../../slicers/sideOnDishSlicer";

export default function RadioButton(props:{ options: string[]}) {
  const dispatch = useDispatch();
  const options = props.options;
  const theme = createTheme({
    typography: {
      fontSize: 16,
      fontFamily: 'Helvetica Neue',
    },
    
  });
  const [value, setValue] = useState<String>(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    dispatch(setSideOnDish(value));
  };

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
        value={value}
        onChange={handleChange}
      > {options && options.map((option: string, index: number) => (
        <FormControlLabel key={index} value= {option} control={<Radio color={"warning"}/>} label={option} />
        ))}
        </RadioGroup>
      </ThemeProvider>
    </FormControl>
  );
}