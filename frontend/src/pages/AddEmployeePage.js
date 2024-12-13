import React, { useState } from 'react';
import { addEmployee } from '../api';
import '../App.css';

const AddEmployeePage = () => {
    const[info, setInfo] = useState({
        username: '',
        first_name: '',
        last_name: '',
        address: '',
        birthdate: '',
        taxID: '',
        hired: '',
        employee_experience: '',
        salary:'',
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await addEmployee(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to add a new employee');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            username: '',
            first_name: '',
            last_name: '',
            address: '',
            birthdate: '',
            taxId: '',
            hired: '',
            employee_experience: '',
            salary:'',
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Add New Employee</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="username" placeholder="username" value={info.username} onChange={enterText} required />
                <input type="text" className='procedure-field' name="first_name" placeholder="first_name" value={info.first_name} onChange={enterText} required />
                <input type="text" className='procedure-field' name="last_name" placeholder="last_name" value={info.last_name} onChange={enterText} required />
                <input type="text" className='procedure-field' name="address" placeholder="address" value={info.address} onChange={enterText} required />
                <input type="date" className='procedure-field' name="birthdate" placeholder="birthdate" value={info.birthdate} onChange={enterText} required />
                <input type="text" className='procedure-field' name="taxID" placeholder="taxID" value={info.taxID} onChange={enterText} required />
                <input type="date" className='procedure-field' name="hired" placeholder="hired" value={info.hired} onChange={enterText} required />
                <input type="number" className='procedure-field' name="employee_experience" placeholder="employee_experience" value={info.employee_experience} onChange={enterText} required />
                <input type="number" className='procedure-field' name="salary" placeholder="salary" value={info.salary} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddEmployeePage;