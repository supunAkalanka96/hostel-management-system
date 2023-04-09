import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const AllHostelList = () => {
  
  const [inputs,setInputs] = useState([]);

    const columns = [
  { field: 'hostelId', headerName: 'Hostel ID', width: 70 },
  { field: 'hostelName', headerName: 'Hostel Name', width: 130 },
  { field: 'noOfRooms', headerName: 'No of Rooms', width: 130 },
  { field: 'hostelType',headerName: 'Hostel Type',width: 90},
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
    <div>
      <DataGrid
      checkboxSelection={true}
        rows={inputs && inputs}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row)=>row?.hostelId}
      />
    </div>
  )
}

export default AllHostelList
