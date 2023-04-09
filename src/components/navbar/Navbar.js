import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assests/images/logo.png'


const Navbar = () => {

    const [value,setValue] = useState(0);

  return (
    <Box>
        <AppBar sx={{backgroundColor:'whitesmoke'}}>
            <Toolbar >
                <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <img style={{width:35,justifyContent:'center',marginRight:10}} src={`${logo}`} alt='' />
                    <Typography sx={{color:'gray',fontSize:25}}>university of peradeniya</Typography>
                </Box>
            {/* indicatorColor='secondary' */}
                <Tabs sx={{color:'gray',marginLeft:'20%'}} value={value} onChange={(e,value)=>setValue(value)} >
                    <Tab href='/' label='Home' />
                    <Tab href='/aboutus' label='About Us' />
                    <Tab href='/hostels' label='Hostels' />
                    <Tab label='Contact Us' />
                </Tabs>

                <Button href='/login' sx={{marginLeft:'auto'}} variant='contained' color='warning'>Login</Button>

            </Toolbar>            

        </AppBar>
    </Box>
  )
}

export default Navbar
