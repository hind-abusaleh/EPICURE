import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material';
import { ChangesOnDish } from "../../../constants/interfaces";

export default function CheckBox(props: { handleChange: any , state:ChangesOnDish }) {
  const theme = createTheme({
    typography: {
      fontSize: 16,
      fontFamily: 'Helvetica Neue',
    },
  });
  
  const { Whithout_peanuts, Sticky_Less_spicy } = props.state;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        letterSpacing: 1.97,
        fontWeight: 200,
        lineHeight: 18,
      }}>
        <FormControl sx={{}} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={Whithout_peanuts} onChange={props.handleChange} name="Whithout_peanuts" color={"warning"} />}
              label="Whithout peanuts"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Sticky_Less_spicy} onChange={props.handleChange} name="Sticky_Less_spicy" color={"warning"} />
              }
              label="Sticky Less spicy"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}