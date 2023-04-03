import React ,{useState} from 'react'
import {Alert, Box,Button,FormControl,InputLabel,MenuItem,Select,Snackbar,TextField,Typography} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assests/images/logo.png'

const Register = () => {

    const [errorSnackbar, setErrorSnackbar]=useState(false);  
    const [inputs,setInputs] = useState({
    userName:"",
    gender:"",
    mobile:"",
    role:"STUDENT",
    userEmail:"",
    password:""
    });
  
const handleChange = (e) =>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}

 const navigate = useNavigate();
const handleSubmit =(e) =>{
    // console.log(inputs);
    var config = {
  method: 'post',
  url: 'http://localhost:8080/api/v1/user/saveUser',
  headers: { 
    'abbf8624-8c17-4557-bbbd-e2b997aec14a': '', 
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(inputs)
};

axios(config)
.then(function (response) {

   // console.log(response.data.userId ?response.data:"fail");

  response.data.userId ? navigate('/'):setErrorSnackbar(true)
  
})
.catch(function (error) {
  console.log(error);
});
}

// console.log(inputs)

    return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
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

              <img style={{width:60,justifyContent:'center'}} src={`${logo}`} alt='' />
            
              <Typography
              color={'grey'}
              variant='h4'
              padding={1} 
              textAlign='center'
              >Register</Typography>
            
            </Box>

            <TextField 
            onChange={handleChange}
            name='userName'
            value={inputs.username} 
            margin='normal' 
            type={'text'} 
            variant='outlined'
            placeholder='User Name'
            />
            
            <TextField 
            onChange={handleChange}
            name='userEmail' 
            value={inputs.email} 
            margin='normal' 
            type={'email'} 
            variant='outlined'
            placeholder='email'
            />
            <TextField 
            onChange={handleChange}
            name='mobile' 
            value={inputs.mobile} 
            margin='normal' 
            type={'text'} 
            variant='outlined'
            placeholder='Mobile'
            />
            
            <TextField 
            onChange={handleChange}
            name='gender' 
            value={inputs.gender} 
            margin='normal' 
            type={'text'} 
            variant='outlined'
            placeholder='Gender'
            />
            
            <TextField 
            onChange={handleChange}
            name='role' 
            value={inputs.role} 
            margin='normal' 
            type={'text'} 
            variant='outlined'
            placeholder='role'
            />
            
            <TextField 
            onChange={handleChange}
            name='password' 
            value={inputs.password} 
            margin='normal' 
            type={'password'} 
            variant='outlined'
            placeholder='Password'
            />

            <Button
            type='submit' 
            sx={{marginTop:3 , borderRadius:2}} 
            variant='contained' 
            color='warning'
             onClick={(e)=>handleSubmit(e)}
            >Register</Button>
            <Link style={{marginTop:20, textDecoration:'none', color:'gray'} } to={'/'}>Change to login</Link>
        </Box>
      {/* </form> */}

      {errorSnackbar && <Snackbar open={errorSnackbar} autoHideDuration={3000} onClose={()=>setErrorSnackbar(false)}>
        <Alert onClose={()=>setErrorSnackbar(false)} severity="error" sx={{ width: '100%' }}>
          Registration Failed!
        </Alert>
      </Snackbar>}
    </div>
  )
}

export default Register