import React, { useEffect, useState } from 'react';
import { getDriverView } from '../api';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DisplayDriverView = () => {
    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        const fetchDriverView = async () => {
            const { data } = await getDriverView();
            setDrivers(data);
        };
        fetchDriverView();
    }, [setDrivers]);

    return (
        <div style={styles.container}>
            <Table>
                <TableHead>
                    <TableRow style={styles.tableHeadRow}>
                        <TableCell style={styles.tableHeaderCell}>Username</TableCell>
                        <TableCell style={styles.tableHeaderCell}>License ID</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Number of Successful Trips</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Number of Vans</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {drivers.map(driver => (
                        <TableRow key={driver.username}>
                            <TableCell style={styles.tableCell}>{driver.username}</TableCell>
                            <TableCell style={styles.tableCell}>{driver.licenseID}</TableCell>
                            <TableCell style={styles.tableCell}>{driver.successful_trips}</TableCell>
                            <TableCell style={styles.tableCell}>{driver.num_vans}</TableCell>
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

export default DisplayDriverView;