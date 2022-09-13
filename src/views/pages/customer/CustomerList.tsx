import '../../../resource/css/table.css';
export default function DataTable() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 160 },
        {
            field: 'status',
            headerName: 'status',
            width: 250,
        },
        { field: 'createdAt', headerName: 'CreatedAt', width: 170 },
        { field: 'creationAt', headerName: 'CreationAt', width: 170 },

    ];
    const rows = [
        { id: 1, name: 'Jon', status: true, createdAt: '17/10/2001', creationAt: '7/12/2001' },
        { id: 2, name: 'Cersei', status: true, createdAt: '17/10/2001', creationAt: '7/12/2001' },
        { id: 3, name: 'Jaime', status: true, createdAt: '17/10/2001', creationAt: '7/12/2001' },
        { id: 4, name: 'Arya', status: true, createdAt: '17/10/2001', creationAt: '7/12/2001' },
    ];
    return (
        <table className='k_table'>
            {/* render header */}
            <thead >
                <tr>
                    {columns.map((colum: any, index: any) => {
                        return (
                            <th key={index}>{colum.headerName}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {/* {render content} */}
                {rows.map((row: any, index: any) => {
                    return (
                        <tr key={index}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.status ? "Active" : "Noactive"} </td>
                            <td>{row.createdAt}</td>
                            <td>{row.creationAt} </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}