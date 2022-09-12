import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 160 },
  { field: 'lastName', headerName: 'Last name', width: 160 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'status',
    headerName: 'status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
    valueGetter: (params: any) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'atCreate', headerName: 'At Create', width: 170 },
  { field: 'endCreate', headerName: 'End Create', width: 170 },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,atCreate:'17/10/2001',endCreate:'17/10/2001'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,atCreate:'17/10/2001',endCreate:'17/10/2001'},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 ,atCreate:'17/10/2001',endCreate:'17/10/2001'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 ,atCreate:'17/10/2001',endCreate:'17/10/2001'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 12 ,atCreate:'17/10/2001',endCreate:'17/10/2001'},
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150,atCreate:'17/10/2001',endCreate:'17/10/2001' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,atCreate:'17/10/2001',endCreate:'17/10/2001'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,atCreate:'17/10/2001',endCreate:'17/10/2001'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,atCreate:'17/10/2001',endCreate:'17/10/2001'},
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
