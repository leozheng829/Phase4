import React, { useEffect, useState } from 'react';
import { getLocationView } from '../api';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DisplayLocationView = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocationView = async () => {
            try {
                const { data } = await getLocationView();
                console.log('Fetched Data:', data);
                setLocations(data);
            } catch (error) {
                console.error('Error fetching location view:', error);
            }
        };
        fetchLocationView();
    }, []);    
    
    return (
        <div style={styles.container}>
            <Table>
                <TableHead>
                    <TableRow style={styles.tableHeadRow}>
                        <TableCell style={styles.tableHeaderCell}>Label</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Business/Service Name</TableCell>
                        <TableCell style={styles.tableHeaderCell}>X-Coordinate</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Y-Coordinate</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Space</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Van Count</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Van IDs</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Remaining Capacity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {locations.map(location => (
                        <TableRow key={location.label}>
                            <TableCell style={styles.tableCell}>{location.label}</TableCell>
                            <TableCell style={styles.tableCell}>{location.business_or_service}</TableCell>
                            <TableCell style={styles.tableCell}>{location.x_coord}</TableCell>
                            <TableCell style={styles.tableCell}>{location.y_coord}</TableCell>
                            <TableCell style={styles.tableCell}>{location.space}</TableCell>
                            <TableCell style={styles.tableCell}>{location.count}</TableCell>
                            <TableCell style={styles.tableCell}>{location.van_ids}</TableCell>
                            <TableCell style={styles.tableCell}>{location.remaining}</TableCell>
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

export default DisplayLocationView;