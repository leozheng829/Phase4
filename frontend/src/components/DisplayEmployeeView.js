import React, { useEffect, useState } from 'react';
import { getEmployeeView } from '../api';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DisplayEmployeeView = () => {
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        const fetchEmployeeView = async () => {
            const { data } = await getEmployeeView();
            setEmployees(data);
        };
        fetchEmployeeView();
    }, [setEmployees]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    return (
        <div style={styles.container}>
            <Table>
                <TableHead>
                    <TableRow style={styles.tableHeadRow}>
                        <TableCell style={styles.tableHeaderCell}>Username</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Tax ID</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Salary</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Date Hired</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Experience Level</TableCell>
                        <TableCell style={styles.tableHeaderCell}>License ID</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Driving Experience</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Manager Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(employee => (
                        <TableRow key={employee.username}>
                            <TableCell style={styles.tableCell}>{employee.username}</TableCell>
                            <TableCell style={styles.tableCell}>{employee.taxID}</TableCell>
                            <TableCell style={styles.tableCell}>{employee.salary}</TableCell>
                            <TableCell style={styles.tableCell}>{formatDate(employee.hired)}</TableCell> {}
                            <TableCell style={styles.tableCell}>{employee.employee_experience}</TableCell>
                            <TableCell style={styles.tableCell}>{employee.licenseID}</TableCell>
                            <TableCell style={styles.tableCell}>{employee.driving_experience}</TableCell>
                            <TableCell style={styles.tableCell}>{employee.manager}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

const styles = {
    container: {
        margin: '50px 20px',
        backgroundColor: '#FFFFFF',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '1600px',
    },
    tableHeadRow: {
        backgroundColor: '#4A90E2',
    },
    tableHeaderCell: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
        padding: '12px',
    },
    tableCell: {
        fontSize: '16px',
        border: '1px solid #ddd',
        textAlign: 'center',
        padding: '12px',
    },
};

export default DisplayEmployeeView;