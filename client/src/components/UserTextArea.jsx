import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function UserTextArea({suggestion,setSuggestion}) {
    
    const handleChange = (event) => {
        setSuggestion(event.target.value);
    };

    return (
        <div className='m-2'>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
          <TextField
          id="outlined-multiline-static"
          label="Suggest any improvements:"
          value={suggestion}
          sx={{minWidth:300}}
          multiline
          rows={4}
          onChange={handleChange}
        />
    </div>
    </Box>
    </div>
  )
}

export default UserTextArea
