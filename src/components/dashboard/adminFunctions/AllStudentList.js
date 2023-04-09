import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


const AllStudentList = () => {
  const [inputs,setInputs] = useState([]);


useEffect(()=>{
  var data = '';

var config = {
  method: 'get',
  url: 'http://localhost:8080/api/v1/user/students',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  setInputs(response.data);
})
.catch(function (error) {
  console.log(error);
});
},[])

  const columns = [
  { field: 'userId', headerName: 'ID', width: 70 },
  { field: 'userName', headerName: 'User Name', width: 130 },
  { field: 'gender', headerName: 'Gender', width: 130 },
  { field: 'role',headerName: 'Role',width: 90},
  { field: 'mobile',headerName: 'Mobile',width: 90},

  // {
  //   field: 'edit',
  //   headerName: 'Edit',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //    renderCell: (params) => {
  //     const onClick = (e) => {
  //      // e.stopPropagation(); // don't select this row after clicking
  //       console.log(params.value)
  //     };

  //     return <Button onClick={onClick}>Edit</Button>;
  //   }
  // },
  // {
  //   field: 'delete',
  //   headerName: 'Delete',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //    renderCell: (params) => {
  //     const onClick = (e) => {
  //       e.stopPropagation(); // don't select this row after clicking
  //       console.log(params.value,' Deleted')
  //     };

  //     return <Button onClick={onClick}>Delete</Button>;
  //   }
  // },
];

  return (
    <div style={{ height:'90vh', width: '80%' }}>
      <DataGrid
      checkboxSelection={true}
        rows={inputs && inputs}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row)=>row?.userId}
      />
    </div>
  )
}

export default AllStudentList


