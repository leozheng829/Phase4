import React, { useState } from 'react';
import { hireEmployee } from '../api'; 
import '../App.css';

const HireEmployeePage = () => {
    const[info, setInfo] = useState({
        username: '', user_id: ''
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await hireEmployee(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to hire employee');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            username: '', user_id: ''
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Hire Employee</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="username" placeholder="username" value={info.username} onChange={enterText} required />
                <input type="text" className='procedure-field' name="user_id" placeholder="user_id" value={info.user_id} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default HireEmployeePage;