import { Box, Stack } from '@mui/material'
import React,{useState} from 'react'
import Header from '../components/subwardenDashboard/Header'
import Sidebar from '../components/subwardenDashboard/Sidebar'
import Main from '../components/subwardenDashboard/Main'

const SubWardensDashboard = () => {
    const [page,setPage] = useState('dashboard');
    console.log('page>>',page);
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

export default SubWardensDashboard
