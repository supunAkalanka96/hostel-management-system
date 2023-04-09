import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Appliction = () => {
  
    const [errorSnackbar, setErrorSnackbar]=useState(false);

    const [inputs, setInputs] = useState({
        faculty:"",
        hosteltype:"",
        hostelName:"",
        distance:"",
        date:"",
    })

    const handleChange = (e) =>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}

const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(inputs);

var config = {
  method: 'post',
  url: 'http://localhost:8080/api/v1/application/send',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : inputs
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
  setInputs({
    faculty:"",
    hosteltype:"",
    hostelName:"",
    distance:"",
    date:""
  })
  window.alert("send ...")
});

    }

    return (
    <div>
      <Box 
        display={"flex"} 
        flexDirection={"column"} 
        maxWidth={400} 
        alignItems={'center'} 
        justifyContent={'center'}
        margin="auto"
        marginTop={10}
        padding={5}
        borderRadius={5}
        boxShadow={'5px 5px 10px #ccc'}
        sx={{
            ":hover":{
                boxShadow:'10px 10px 20px #aaa'
            }
        }}
        >
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            
              <Typography
              color={'grey'}
              variant='h4'
              padding={1} 
              textAlign='center'
              >Application</Typography>
            
            </Box>

            <TextField 
            onChange={handleChange}
            name='faculty'
            value={inputs.faculty} 
            margin='normal' 
            type={'text'} 
            variant='outlined'
            placeholder='Faculty'
            />
            
            <TextField 
            onChange={handleChange}
            name='hosteltype' 
            value={inputs.hosteltype} 
            margin='normal' 
            type={'text'} 
            variant='outlined'
            placeholder='Hostel Type'
            />
            <TextField 
            onChange={handleChange}
            name='hostelName' 
            value={inputs.hostelName} 
            margin='normal' 
            type={'text'} 
            variant='outlined'
            placeholder='Hostel Name'
            />
              <TextField 
            onChange={handleChange}
            name='distance' 
            value={inputs.distance} 
            margin='normal' 
            type={'number'} 
            variant='outlined'
            placeholder='Distance'
            />
              <TextField 
            onChange={handleChange}
            name='date' 
            value={inputs.date} 
            margin='normal' 
            type={'date'} 
            variant='outlined'
            placeholder='Date'
            />
            <Button
            type='submit' 
            sx={{marginTop:3 , borderRadius:2}} 
            variant='contained' 
            color='warning'
            onClick={(e)=>handleSubmit(e)}
            >Send</Button>

        </Box>
    </div>
  )
}

export default Appliction
