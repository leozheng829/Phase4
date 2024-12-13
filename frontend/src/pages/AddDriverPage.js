import React, { useState } from 'react';
import { addDriver } from '../api';
import '../App.css';

const AddDriverPage = () => {
    const[info, setInfo] = useState({
        username: '',
        licenseID: '', license_type: '', driver_experience: ''
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await addDriver(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to add a new driver');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            username: '',
            licenseID: '', license_type: '', driver_experience: ''
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Add New Driver Role</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="username" placeholder="username" value={info.username} onChange={enterText} required />
                <input type="text" className='procedure-field' name="licenseID" placeholder="licenseID" value={info.licenseID} onChange={enterText} required />
                <input type="text" className='procedure-field' name="license_type" placeholder="license_type" value={info.license_type} onChange={enterText} required />
                <input type="number" className='procedure-field' name="driver_experience" placeholder="driver_experience" value={info.driver_experience} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddDriverPage;