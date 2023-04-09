import { Box } from '@mui/material'
import React from 'react'
import Dashboard from './functions/StuDashboard'
import Appliction from './functions/Appliction'
import MessageToSubwarden from './functions/MessageToSubwarden'
import StuDashboard from './functions/StuDashboard'

const Main = ({page}) => {
  return (
    <Box bgcolor={'whitesmoke'} flex={5}>
      {page==='applicationDashboard' && <StuDashboard/>}
      {page==='application' && <Appliction/>}
      {page==='messageToSubwarden' && <MessageToSubwarden/>}
    </Box>
  )
}

export default Main
