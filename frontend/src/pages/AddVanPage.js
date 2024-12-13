import React, { useState } from 'react';
import { addVan } from '../api';
import '../App.css';

const AddVanPage = () => {
    const[info, setInfo] = useState({
        id: '',
        tag: '',
        fuel: '',
        capacity: '',
        sales: '',
        driven_by: ''
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await addVan(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to add van!');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            id: '',
        tag: '',
        fuel: '',
        capacity: '',
        sales: '',
        driven_by: ''
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Add Van</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="id" placeholder="id" value={info.id} onChange={enterText} required />
                <input type="number" className='procedure-field' name="tag" placeholder="tag" value={info.tag} onChange={enterText} required />
                <input type="number" className='procedure-field' name="fuel" placeholder="fuel" value={info.fuel} onChange={enterText} required />
                <input type="number" className='procedure-field' name="capacity" placeholder="capacity" value={info.capacity} onChange={enterText} required />
                <input type="number" className='procedure-field' name="sales" placeholder="sales" value={info.sales} onChange={enterText} required />
                <input type="text" className='procedure-field' name="driven_by" placeholder="driven_by" value={info.driven_by} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddVanPage;