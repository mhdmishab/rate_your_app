import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const goals = [
  'Information',
  'Chat',
  'Entertainment',
  'Buy',
  'Socialize',
  'Other',
];

function getStyles(name, goal, theme) {
  return {
    fontWeight:
      goal.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultiSelector({goal,setGoal}) {
    const theme = useTheme();
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setGoal(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    return (
      <div className='m-2'>
        <FormControl sx={{width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Main app goal?</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={goal}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Main app goal?" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {goals.map((goal) => (
              <MenuItem
                key={goal}
                value={goal}
                style={getStyles(goal, goal, theme)}
              >
                {goal}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
}

export default MultiSelector
