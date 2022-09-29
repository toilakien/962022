import React from 'react'
import './table.scss';
interface Rows {
    name?: string,
    code?: string,
    status?: boolean,
    create_at?: string,
    update_at?: string
}

const Table = ({ columns, rows }: { columns: any[], rows: Rows[] }) => {

    return (
        <table className='table-wrapper'>
            <thead>
                <tr>
                    {columns?.map((e, index) => {
                        return (
                            <th key={index}>{e}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {rows?.map((e, index) => {
                    return (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{e?.name}</td>
                            <td>{e?.code}</td>
                            <td style={{ color: "green", fontStyle: "italic" }}>{e.status ? "Active" : "No active"}</td>
                            <td>{e.create_at}</td>
                            <td>{e.update_at}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table