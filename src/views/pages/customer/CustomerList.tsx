import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Chip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FormDialog from './FormDialog';
interface Column {
    id: 'name' | 'code' | 'status' | 'create_at' | 'update_at';
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
    format?: (value: number) => string | React.ReactElement;
}

const columns: readonly Column[] = [

    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'Code', minWidth: 100 },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
        format: (value: number) => value == 1 ? <Chip sx={{ '& span': { fontSize: "0.8rem" } }} size="small" color="success" label="Active" /> : <Chip sx={{ '& span': { fontSize: "0.8rem" } }} size="small" color="error" label="Disable" />,
    },
    {
        id: 'create_at',
        label: 'Create-at',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'update_at',
        label: 'Update-at',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
    },
];

interface Data {
    name: string;
    code: string;
    status: number;
    create_at: string;
    update_at: string;
}

function createData(
    name: string,
    code: string,
    status: number,
    create_at: string,
    update_at: string,
): Data {

    return { name, code, status, create_at, update_at };
}

const rows = [
    createData('India', 'IN', 1, "7/2/2012", "7/2/2012"),
    createData('China', 'CN', 0, "7/2/2012", "7/2/2012"),
    createData('Italy', 'IT', 1, "7/2/2012", "7/2/2012"),
    createData('United States', 'US', 0, "7/2/2012", "7/2/2012"),
    createData('Canada', 'CA', 1, "7/2/2012", "7/2/2012"),
    createData('Australia', 'AU', 0, "7/2/2012", "7/2/2012"),
    createData('Germany', 'DE', 0, "7/2/2012", "7/2/2012"),
    createData('Ireland', 'IE', 0, "7/2/2012", "7/2/2012"),
    createData('Mexico', 'MX', 0, "7/2/2012", "7/2/2012"),
    createData('Japan', 'JP', 0, "7/2/2012", "7/2/2012"),
    createData('France', 'FR', 0, "7/2/2012", "7/2/2012"),
    createData('United Kingdom', 'GB', 0, "7/2/2012", "7/2/2012"),
    createData('Russia', 'RU', 1, "7/2/2012", "7/2/2012"),
    createData('Nigeria', 'NG', 0, "7/2/2012", "7/2/2012"),
    createData('Brazil', 'BR', 0, "7/2/2012", "7/2/2012"),
];

export default function DataTable({ customerApi }: { customerApi: any }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //open form
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpenForm = () => {
        setOpen(true);
    }
    console.log(open);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 480 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>STT</TableCell>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell align='center'>Tools</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        <TableCell>{index + 1}</TableCell>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell align='center'>
                                            <IconButton aria-label="edit">
                                                <EditIcon sx={{ color: "green" }} />
                                            </IconButton>
                                            <IconButton onClick={handleOpenForm} aria-label="delete">
                                                <DeleteIcon sx={{ color: "red" }} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                    <FormDialog open={open} setOpen={setOpen} />
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
