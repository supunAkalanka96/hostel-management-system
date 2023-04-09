import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../../assests/images/logo.png'
import axios from 'axios';

const AddSubWarden = () => {

  const [inputs, setInputs] = useState({
    userName:"",
    gender:"",
    mobile:"",
    role:"SUBWARDEN",
    userEmail:"",
    password:""
  });

const handleChange=(e)=>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value,
  }))
}

const handleSubmit =(e) =>{
  e.preventDefault();
  console.log(inputs);
var data = JSON.stringify(inputs);

var config = {
  method: 'post',
  url: 'http://localhost:8080/api/v1/user/saveSubWarden',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  setInputs({
    userName:"",
    gender:"",
    mobile:"",
    role:"SUBWARDEN",
    userEmail:"",
    password:""
  })
  window.alert("Success")
})
.catch(function (error) {
  console.log(error);
});
}

  return (
    <div>
      <Box 
      display={'flex'}
      flexDirection={'column'}
      maxWidth={400}
      alignItems={'center'}
      justifyContent={'center'}
      margin={'auto'}
      marginTop={5}
      padding={10}
      borderRadius={5}
      bgcolor={'#fff'}
      boxShadow={'5px 5px 10px #fff'}
        sx={{
            ":hover":{
                boxShadow:'10px 10px 20px #aaa'
            }
        }}
      >
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <img style={{width:60,justifyContent:'center'}} src={`${logo}`} alt='' />
          <Typography variant='h4'>Register</Typography>
        </Box>
        <TextField
          onChange={handleChange}
          name='userName'
          value={inputs.userName}
          type='text'
          variant='outlined'
          margin='normal'
          placeholder='User Name'
        />
        <TextField
          onChange={handleChange}
          name='userEmail'
          value={inputs.userEmail}
          type='email'
          variant='outlined'
          margin='normal'
          placeholder='Email'
        />
        <TextField
          onChange={handleChange}
          name='mobile'
          value={inputs.mobile}
          type='text'
          variant='outlined'
          margin='normal'
          placeholder='Mobile'
        />
        <TextField
          onChange={handleChange}
          name='gender'
          value={inputs.gender} 
          type='text'
          variant='outlined'
          margin='normal'
          placeholder='Gender'
        />
        <TextField
          onChange={handleChange}
          name='role'
          value={inputs.role}
          type='text'
          variant='outlined'
          margin='normal'
          placeholder='Role'
        />
        <TextField
          onChange={handleChange}
          name='password'
          value={inputs.password}
          type='password'
          variant='outlined'
          margin='normal'
          placeholder='Password'
        />

        <Button
            type='submit' 
            sx={{marginTop:3 , borderRadius:2}} 
            variant='contained' 
            color='warning'
            onClick={(e)=>handleSubmit(e)}          
        >
        Register</Button>

      </Box>
    </div>
  )
}

export default AddSubWarden
