import React, { useState } from 'react';
import { addWorkerRole } from '../api'; 
import '../App.css';

const AddWorkerRolePage = () => {
    const[info, setInfo] = useState({
        username: ''
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await addWorkerRole(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to add worker role!');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            username: ''
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Add Worker Role</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="username" placeholder="username" value={info.username} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddWorkerRolePage;