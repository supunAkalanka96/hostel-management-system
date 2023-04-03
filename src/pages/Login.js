import React, {useState} from 'react'
import {Box,Button,TextField,Typography} from '@mui/material'
import { Link } from 'react-router-dom';
import logo from '../assests/images/logo.png'


const Login = () => {

    const [inputs,setInputs] = useState({
        email:"",
        password:""
    });

const handleChange = (e) =>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}

const handleSubmit =(e)=>{
    console.log(inputs);
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
        marginTop={20}
        padding={4}
        borderRadius={5}
        boxShadow={'5px 5px 10px #ccc'}
        sx={{
            ":hover":{
                boxShadow:'10px 10px 20px #aaa'
            }
        }}
        >
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>

                <img style={{width:60,justifyContent:'center'}} src={`${logo}`} alt='' />
                <Typography color={'gray'} variant='h4' padding={1} textAlign='center'>Login</Typography>

            </Box>
            
            <TextField
            onChange={handleChange}
            name='email'
            value={inputs.email}
            margin='normal' 
            type={'email'} 
            variant='outlined'
            placeholder='email'
            />

            <TextField
            onChange={handleChange}
            name='password' 
            value={inputs.password}
            margin='normal' 
            type={'password'} 
            variant='outlined'
            placeholder='password'
            />
            
            <Button
            onClick={handleSubmit}
            sx={{marginTop:3 , borderRadius:2}} 
            variant='contained' 
            color='warning'
            >Login</Button>
            
            <Link style={{marginTop:20, textDecoration:'none', color:'gray'} }  to="/register">Change to Signup</Link>
        </Box>
    </div>
  )
}

export default Login