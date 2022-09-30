import Table from '../../../components/table';
import '../../../resource/css/table.css';
export default function DataTable({ customerApi }: { customerApi: any }) {

    const columns = ["STT", "Name", "Code", "Status", "Create_at", "Update_at", "Tools"];
    const rows = [
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 2",
            code: "code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        }
    ];

    return (
        <Table columns={columns} rows={rows} />
    )
}