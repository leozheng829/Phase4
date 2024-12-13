import React, { useEffect, useState } from 'react';
import { getProductView } from '../api';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DisplayProductView = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductView = async () => {
            try {
                const { data } = await getProductView();
                console.log('Fetched Products:', data);
                setProducts(data);
            } catch (error) {
                console.error('Error fetching product view:', error);
            }
        };
        fetchProductView();
    }, []);

    return (
        <div style={styles.container}>
            <Table>
                <TableHead>
                    <TableRow style={styles.tableHeadRow}>
                        <TableCell style={styles.tableHeaderCell}>Product Name</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Location</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Amount Available</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Lowest Price</TableCell>
                        <TableCell style={styles.tableHeaderCell}>Highest Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <TableRow key={index}>
                            <TableCell style={styles.tableCell}>{product.iname}</TableCell>
                            <TableCell style={styles.tableCell}>{product.location}</TableCell>
                            <TableCell style={styles.tableCell}>{product.amount_available}</TableCell>
                            <TableCell style={styles.tableCell}>{product.low_price}</TableCell>
                            <TableCell style={styles.tableCell}>{product.high_price}</TableCell>
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

export default DisplayProductView;