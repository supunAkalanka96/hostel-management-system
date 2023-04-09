import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Main from '../components/dashboard/Main'
import Header from '../components/dashboard/Header'


const Dashboard = () => {
    const [page,setPage]=useState('dashboard')
    console.log("PAGE:>>", page)
  return (
    <Box flexDirection={'row'}>
        <Stack direction={'column'} spacing={1}>
            <Header/>
            <Stack direction={'row'} spacing={1}>
                <Sidebar setPage={setPage} page={page}/>
                <Main page={page}/>
            </Stack>
        </Stack>
    </Box>
  )
}

export default Dashboard
