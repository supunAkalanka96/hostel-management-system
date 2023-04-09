import { Box, Button, TextField } from '@mui/material'
// import axios from 'axios';
import React, { useState } from 'react'

const MessageToSubwarden = () => {

  const [inputs,setInputs] = useState({
    description:'',
  });

  const handleChange=(e)=>{
    setInputs((prev)=>({
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs);
//     var data = JSON.stringify(inputs);
//  console.log(data);
// var config = {
//   method: 'post',
//   url: 'http://localhost:8080/api/v1/complain/send',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
//   setInputs({description:""})
//   window.alert("send massage")
// })
// .catch(function (error) {
//   console.log(error);
// });
}

  return (
    <Box>
    <Box
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    maxWidth={400}
    margin={'auto'}
    padding={5}
    paddingTop={10}
    borderRadius={5}
      bgcolor={'#fff'}
      boxShadow={'5px 5px 10px #fff'}
        sx={{
            ":hover":{
                boxShadow:'10px 10px 20px #aaa'
            }
        }}

    >
      <TextField
      onChange={handleChange}
      name='description'
      value={inputs.description}
      variant='outlined'
      placeholder='text massage'
      multiline
      rows={5}
      maxRows={10}
      />
      <Button
      type='submit'
      sx={{marginTop:'20px'}} 
      variant='contained'
      onClick={(e)=>handleSubmit(e)}
      >Send</Button>
    </Box>
        </Box>
  )
}

export default MessageToSubwarden;
