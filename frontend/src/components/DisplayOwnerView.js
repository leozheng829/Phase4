import React, { useEffect, useState } from 'react';
import { getOwnerView } from '../api';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DisplayOwnerView = () => {
    const [owners, setOwners] = useState([]);

    useEffect(() => {
        const fetchOwnerView = async () => {
            const { data } = await getOwnerView();
            setOwners(data);
        };
        fetchOwnerView();
    }, [setOwners]);

    return (
        <div style={styles.container}>
            <Table style={styles.table}>
                <TableHead>
                    <TableRow style={styles.tableHeadRow}>
                        <TableCell style={styles.tableHeaderCell}>Username</TableCell>
                        <TableCell style={styles.tableHeaderCell}>First Name</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Last Name</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Address</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Number of Business</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Number of Places</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Highest Rating</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Lowest Rating</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Total Debt</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {owners.map(owner => (
                        <TableRow key={owner.username}>
                            <TableCell style={styles.tableCell}>{owner.username}</TableCell>
                            <TableCell style={styles.tableCell}>{owner.first_name}</TableCell>
                            <TableCell style={styles.tableCell}>{owner.last_name}</TableCell>
                            <TableCell style={styles.tableCell}>{owner.address}</TableCell>
                            <TableCell style={styles.tableCell}>{owner.num_businesses}</TableCell>
                            <TableCell style={styles.tableCell}>{owner.num_location}</TableCell>
                            <TableCell style={styles.tableCell}>{owner.highs}</TableCell>
                            <TableCell style={styles.tableCell}>{owner.lows}</TableCell>
                            <TableCell style={styles.tableCell}>{owner.debts}</TableCell>
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
        overflowX: 'auto',
    },
    table: {
        tableLayout: 'auto',
    },
    tableHeadRow: {
        backgroundColor: '#4A90E2',
        borderCollapse: 'collapse',
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

export default DisplayOwnerView;