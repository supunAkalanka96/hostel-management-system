import { Box } from '@mui/material'
import React from 'react'
import Dashboard from './functions/Dashboard'
import SendMassage from '../dashboard/adminFunctions/SendMassage'

const Main = ({page}) => {
  return (
    <Box bgcolor={'whitesmoke'} flex={5}>
      {page==='dashboard' && <Dashboard/>}
      {page==='messages' && <SendMassage/>}
      {/* {page==='dashboard' && <Dashboard/>}
      {page==='dashboard' && <Dashboard/>}
      {page==='dashboard' && <Dashboard/>} */}

    </Box>
  )
}

export default Main
