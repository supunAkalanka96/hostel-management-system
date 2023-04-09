import React from 'react'
import logo from '../../assests/images/logo.png'
import { Box, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box bgcolor={'#1101'}>
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'left',marginRight:'10px'}}>
            <img style={{width:40,justifyContent:'center',marginRight:'10px'}} src={`${logo}`} alt='' />
            <Typography variant='h4' sx={{fontWeight:'bold',color:'gray'}}>Student Dashboard</Typography>
        </Box>
    </Box>
  )
}

export default Header
