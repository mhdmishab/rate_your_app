import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Selector({usage,setUsage}) {
    
    const handleChange = (event) => {
        setUsage(event.target.value);
    };

    return (
        <div className='m-2'>
            <FormControl required sx={{width: 300 }} size="medium">
                <InputLabel id="demo-select-small-label">How often do you use this app?</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={usage}
                    label="How often do you use this app?"
                    onChange={handleChange}
                >
                    <MenuItem value={'Daily'}>Daily</MenuItem>
                    <MenuItem value={'Weekly'}>Weekly</MenuItem>
                    <MenuItem value={'Monthly'}>Monthly</MenuItem>
                    <MenuItem value={'Rarely'}>Rarely</MenuItem>
                    <MenuItem value={'First time'}>First time</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default Selector
