import React, { useState } from 'react';
import { removeProduct } from '../api'; 
import '../App.css';

const RemoveProductPage = () => {
    const[info, setInfo] = useState({
        barcode: ''
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await removeProduct(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to remove product!');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            barcode: ''
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Remove Product</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="barcode" placeholder="barcode" value={info.barcode} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default RemoveProductPage;