import React, { useState } from 'react';
import { purchaseProduct } from '../api';
import '../App.css';

const PurchaseProductPage = () => {
    const[info, setInfo] = useState({
        long_name:'', id:'', tag:'', barcode:'', quantity:''
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await purchaseProduct(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to purchase product!');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            long_name:'', id:'', tag:'', barcode:'', quantity:''
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Purchase Product</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="long_name" placeholder="long_name" value={info.long_name} onChange={enterText} required />
                <input type="text" className='procedure-field' name="id" placeholder="id" value={info.id} onChange={enterText} required />
                <input type="number" className='procedure-field' name="tag" placeholder="tag" value={info.tag} onChange={enterText} required />
                <input type="text" className='procedure-field' name="barcode" placeholder="barcode" value={info.barcode} onChange={enterText} required />
                <input type="number" className='procedure-field' name="quantity" placeholder="quantity" value={info.quantity} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default PurchaseProductPage;