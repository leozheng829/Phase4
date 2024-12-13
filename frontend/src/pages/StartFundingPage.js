import React, { useState } from 'react';
import { startFunding } from '../api';
import '../App.css';

const StartFundingPage = () => {
    const[info, setInfo] = useState({
        owner: '', amount: '', long_name: '', fund_date: ''
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await startFunding(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to start funding');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            owner: '', amount: '', long_name: '', fund_date: ''
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Start Funding</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="owner" placeholder="owner" value={info.owner} onChange={enterText} required />
                <input type="number" className='procedure-field' name="amount" placeholder="amount" value={info.amount} onChange={enterText} required />
                <input type="text" className='procedure-field' name="long_name" placeholder="long_name" value={info.long_name} onChange={enterText} required />
                <input type="date" className='procedure-field' name="fund_date" placeholder="fund_date" value={info.fund_date} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default StartFundingPage;