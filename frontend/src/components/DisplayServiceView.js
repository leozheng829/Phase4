import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { getServiceView } from '../api';

const DisplayServiceView = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServiceView = async () => {
            try {
                const { data } = await getServiceView();
                console.log('Fetched Services:', data);
                setServices(data);
            } catch (error) {
                console.error('Error fetching service view:', error);
            }
        };
        fetchServiceView();
    }, []);

    return (
        <div style={styles.container}>
            <Table>
                <TableHead>
                    <TableRow style={styles.tableHeadRow}>
                        <TableCell style={styles.tableHeaderCell}>ID</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Name</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Home Base</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Manager</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Revenue</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Products Carried</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Cost Carried</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Weight Carried</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map(service => (
                        <TableRow key={service.id}>
                            <TableCell style={styles.tableCell}>{service.id}</TableCell>
                            <TableCell style={styles.tableCell}>{service.long_name}</TableCell>
                            <TableCell style={styles.tableCell}>{service.home_base}</TableCell>
                            <TableCell style={styles.tableCell}>{service.manager}</TableCell>
                            <TableCell style={styles.tableCell}>{service.revenue}</TableCell>
                            <TableCell style={styles.tableCell}>{service.products_carried}</TableCell>
                            <TableCell style={styles.tableCell}>{service.cost_carried}</TableCell>
                            <TableCell style={styles.tableCell}>{service.weight_carried}</TableCell>
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

export default DisplayServiceView;