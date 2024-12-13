import React, { useState } from 'react';
import { addProduct } from '../api';
import '../App.css';

const AddProductPage = () => {
    const[info, setInfo] = useState({
        barcode: '',
        iname: '',
        weight: '',
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await addProduct(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to add product!');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            barcode: '',
            iname: '',
            weight: '',
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Add Product</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="barcode" placeholder="barcode" value={info.barcode} onChange={enterText} required />
                <input type="text" className='procedure-field' name="iname" placeholder="iname" value={info.iname} onChange={enterText} required />
                <input type="number" className='procedure-field' name="weight" placeholder="weight" value={info.weight} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddProductPage;