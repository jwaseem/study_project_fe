import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { json } from 'react-router-dom';

function DataForm() {
    const [values, setValues] = useState({})
    const handleChange = (event) => {
        event.persist()
        setValues(values => ({ ...values, [event.target.name]: event.target.value }))
        console.log("values",values)
      }
    // const addData = (event)=>{
    //     if (event) event.preventDefault()


    //  }
     const addData = async () => {
      console.log("submit",values)
      const data = {
        ...values
      
      }
      console.log("passing",data)
      try {
        const response = await axios.post('http://localhost:4000/api/insert', data);
    
        console.log('Data from server:', response.data);
        setValues({})
        // Handle the response data here
      } catch (error) {
        console.error('Error:', error);
        // Handle errors here
      }
    };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        {/* <div> */}
        <TextField id="outlined-helperText" name='name' label="name" variant="outlined" onChange={handleChange} value={values.name}/>
        <TextField id="outlined-helperText" name='age' label="age" variant="outlined" onChange={handleChange} value={values.age}/>
        {/* </div> */}
      <div>
        <Button variant="contained" onClick={addData}>Add</Button>

      </div>
    </Box>
  )
}

export default DataForm
