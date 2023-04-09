import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import Header from '../components/studentDashboard/Header'
import Sidebar from '../components/studentDashboard/Sidebar'
import Main from '../components/studentDashboard/Main'

const StudentDashboard = () => {
    const [page,setPage] = useState('applicationDashboard')
    console.log("page>>",page)
    return (
    <Box flexDirection={'row'}>
        <Stack direction={'column'} spacing={1}>
            <Header/>
            <Stack direction={'row'} spacing={1}>
                <Sidebar setPage={setPage} page={page} />
                <Main page={page}/>
            </Stack>
        </Stack>
    </Box>
  )
}

export default StudentDashboard
