import React, { useState } from 'react';
import { addOwner } from '../api';
import '../App.css';

const AddOwnerPage = () => {
    const[info, setInfo] = useState({
        username: '',
        first_name: '',
        last_name: '',
        address: '',
        birthdate: '',
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await addOwner(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to add owner!');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            username: '',
            first_name: '',
            last_name: '',
            address: '',
            birthdate: '',
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Add New Owner</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="username" placeholder="username" value={info.username} onChange={enterText} required />
                <input type="text" className='procedure-field' name="first_name" placeholder="first_name" value={info.first_name} onChange={enterText} required />
                <input type="text" className='procedure-field' name="last_name" placeholder="last_name" value={info.last_name} onChange={enterText} required />
                <input type="text" className='procedure-field' name="address" placeholder="address" value={info.address} onChange={enterText} required />
                <input type="date" className='procedure-field' name="birthdate" placeholder="birthdate" value={info.birthdate} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddOwnerPage;