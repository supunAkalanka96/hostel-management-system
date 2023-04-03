import { AppBar, Box, Button, Tab, Tabs, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import logo from '../assests/images/logo.png'


const Navbar = () => {

    const [value,setValue] = useState();

  return (
    <Box>
        <AppBar sx={{backgroundColor:'whitesmoke'}}>
            <Toolbar >
                <img style={{width:35,justifyContent:'center'}} src={`${logo}`} alt='' />
            
                <Tabs sx={{color:'gray',marginLeft:'30%'}} value={value} onChange={(e,value)=>setValue(value)} indicatorColor='secondary'>
                    <Tab label='Home' />
                    <Tab label='About Us' />
                    <Tab label='Hostels' />
                    <Tab label='Contact Us' />
                </Tabs>

                <Button sx={{marginLeft:'auto'}} variant='contained' color='warning'>Login</Button>

            </Toolbar>            

        </AppBar>
    </Box>
  )
}

export default Navbar
