import { Box } from '@mui/material'
import React from 'react'
import AddSubWarden from './adminFunctions/AddSubWarden'
import AddHostel from './adminFunctions/AddHostel'
import AllSubWardenList from './adminFunctions/AllSubWardenList'
import SendMassage from './adminFunctions/SendMassage'
import Dashboard from './adminFunctions/Dashboard'
import AllStudentList from './adminFunctions/AllStudentList'
import AllHostelList from './adminFunctions/AllHostelList'

const Main = ({page}) => {
  return (
    <Box bgcolor={'whitesmoke'} flex={5}>
      {page==='dashboard' && <Dashboard/>}
      {page==='addSubwarden' && <AddSubWarden/>}
      {page==='allSubwardens' && <AllSubWardenList/>}
      {page==='addHostel' && <AddHostel/>}
      {page==='massage' && <SendMassage/>}
      {page==='allStudents' && <AllStudentList/>}
      {page==='allHostels' && <AllHostelList/>}

    </Box>
  )
}

export default Main
