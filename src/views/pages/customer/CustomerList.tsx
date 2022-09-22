import '../../../resource/css/table.css';
export default function DataTable(props:any) {
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
        { field: 'tools', headerName: 'Tools', width: 170 },
    ]
    
    
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
                {props?.success?.data.map((row: any, index: any) => {
                    return (
                        <tr key={index}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.status ? "Active" : "Noactive"} </td>
                            <td>{row.create_at}</td>
                            <td>{row.update_at} </td>
                            <td>
                                <button>Sửa</button>
                                <button>Xóa</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}