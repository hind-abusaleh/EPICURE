import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { orange } from '@mui/material/colors';

export default function CheckBox(props:{ options: string[]}) {
    const options = props.options;
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" >
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={options[0]}
        />
        <FormControlLabel
          value="start"
          control={<Checkbox />}
          label={options[1]}
        />
      </FormGroup>
    </FormControl>
  );
}