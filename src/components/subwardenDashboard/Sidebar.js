import { Chat, Dashboard, Home, Message, People } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const Sidebar = ({setPage}) => {

    const handlePage=(val)=>{
        setPage(val)
    }

  return (
    <Box flex={1} height={'90vh'} bgcolor={'#1101'} width={'250px'}>
        <Box sx={{display:'flex',flexDirection:'column',gap:'2px'}} alignItems={'center'} justifyContent={'center'} marginTop={2}>
          <List sx={{color:'gray', fontWeight:'bold'}}>
            <ListItem disablePadding >
              <ListItemButton href='/'>
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText primary='Home'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard/>
                </ListItemIcon>
                <ListItemText primary='Dashboard'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <People/>
                </ListItemIcon>
                <ListItemText primary='Students in Hostel'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=>handlePage('messages')}>
                <ListItemIcon>
                  <Message/>
                </ListItemIcon>
                <ListItemText primary='Message to Students'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Chat/>
                </ListItemIcon>
                <ListItemText primary='Students Complains'/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
    </Box>
  )
}

export default Sidebar
