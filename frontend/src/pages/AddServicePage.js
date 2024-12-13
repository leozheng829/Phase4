import React, { useState } from 'react';
import { addService } from '../api';
import '../App.css';

const AddServicePage = () => {
    const [info, setInfo] = useState({
        id: '',
        long_name: '',
        home_base: '',
        manager: ''
    });
    const [message, setMessage] = useState('');

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const submitProcedure = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const response = await addService(info);
            setMessage(response.data.message);
            cancelProcedure();
        } catch (error) {
            setMessage('Failed to add a new service. Please try again.');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            id: '',
            long_name: '',
            home_base: '',
            manager: ''
        });
        setMessage('');
    };

    return (
        <div className="procedure-container">
            <h1 className="procedure-heading">Add New Service</h1>
            <form onSubmit={submitProcedure} className="procedure-form">
                <input
                    type="text"
                    className="procedure-field"
                    name="id"
                    placeholder="Service ID"
                    value={info.id}
                    onChange={enterText}
                    required
                />
                <input
                    type="text"
                    className="procedure-field"
                    name="long_name"
                    placeholder="Service Name"
                    value={info.long_name}
                    onChange={enterText}
                    required
                />
                <input
                    type="text"
                    className="procedure-field"
                    name="home_base"
                    placeholder="Home Base"
                    value={info.home_base}
                    onChange={enterText}
                    required
                />
                <input
                    type="text"
                    className="procedure-field"
                    name="manager"
                    placeholder="Manager Username"
                    value={info.manager}
                    onChange={enterText}
                    required
                />
                <div className="procedure-buttons">
                    <button className="cancel-button" type="button" onClick={cancelProcedure}>
                        Cancel
                    </button>
                    <button className="submit-button" type="submit">
                        Submit
                    </button>
                </div>
                {message && <p className="message">{message}</p>} {/* Display feedback */}
            </form>
        </div>
    );
};

export default AddServicePage;