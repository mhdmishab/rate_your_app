import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DobCalender({date,setDate}) {
    const handleChange=(event)=>{
       
        setDate(event)
        
    }
  return (
    <div className='m-2'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker sx={{width:300}}  label="Date Of Birth" onChange={handleChange} value={date} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
  )
}

export default DobCalender
