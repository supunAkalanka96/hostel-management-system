import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddHostel = () => {
 
  const [inputs, setInputs] = useState({
    hostelName:'',
    noOfRooms:'',
    hostelType:''
  });

  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs);
  }

 
  return (
    <Box 
    display={'flex'} 
    flexDirection={'column'} 
    alignItems={'center'} 
    justifyContent={'center'}
    maxWidth={400}
    margin={'auto'}
    padding={5}
    marginTop={10}
    borderRadius={5}
    bgcolor={'#fff'}
    boxShadow={'5px 5px 10px #fff'}
    sx={{
        ":hover":{
            boxShadow:'10px 10px 20px #aaa'
          }
      }}
    >
        <Box>
          <Typography variant='h4'>Add Hostel</Typography>  
        </Box>
        <TextField
        onChange={handleChange}
        placeholder='Hostel Name'
        name='hostelName'
        value={inputs.hostelName}
        type='text'
        variant='outlined'
        margin='normal'
        />
        <TextField
        onChange={handleChange}
        name='noOfRooms'
        value={inputs.noOfRooms}
        placeholder='No of rooms'
        type='number'
        variant='outlined'
        margin='normal'
        />
        <TextField
        onChange={handleChange}
        name='hostelType'
        value={inputs.hostelType}
        placeholder='Hostel Type'
        type='text'
        variant='outlined'
        margin='normal'
        />

        <Button
            type='submit' 
            sx={{marginTop:3 , borderRadius:2}} 
            variant='contained' 
            color='warning'
            onClick={(e)=>handleSubmit(e)}          
        >
        Add</Button>

    </Box>
  )
}

export default AddHostel
