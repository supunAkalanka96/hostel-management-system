import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { AddHome, ChatBubble, Dashboard, Group, Home, HomeWork, People, PersonAdd } from '@mui/icons-material'

const Sidebar = ({setPage}) => {
  const handlePage=(val)=>{
    setPage(val)
  }
  return (
    <Box flex={1} height={'90vh'} bgcolor={'#1101'} width={'250px'}>
        <Box sx={{display:'flex',flexDirection:'column',gap:'2px'}} alignItems={'center'} justifyContent={'center'} marginTop={2}>
          <List sx={{color:'gray'}}>
            <ListItem disablePadding >
              <ListItemButton href='/'>
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText primary='Home'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding >
              <ListItemButton onClick={()=>handlePage('dashboard')}>
                <ListItemIcon>
                  <Dashboard/>
                </ListItemIcon>
                <ListItemText primary='Dashboard'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=>handlePage('addSubwarden')}>
                <ListItemIcon>
                  <PersonAdd/>
                </ListItemIcon>
                <ListItemText primary='Add Subwarden'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=>handlePage('allSubwardens')}>
                <ListItemIcon>
                  <People/>
                </ListItemIcon>
                <ListItemText primary='All SubWarden'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=>handlePage('addHostel')}>
                <ListItemIcon>
                  <AddHome/>
                </ListItemIcon>
                <ListItemText primary='Add Hostel'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=>handlePage('allHostels')}>
                <ListItemIcon>
                  <HomeWork/>
                </ListItemIcon>
                <ListItemText primary='All Hostels'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=>handlePage('allStudents')}>
                <ListItemIcon>
                  <Group/>
                </ListItemIcon>
                <ListItemText primary='All Students'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=>handlePage('massage')}>
                <ListItemIcon>
                  <ChatBubble/>
                </ListItemIcon>
                <ListItemText primary='Send Massage'/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
    </Box>
  )
}

export default Sidebar
