import React, { useState } from 'react';
import { takeoverVan } from '../api';
import '../App.css';

const TakeoverVanPage = () => {
    const [info, setInfo] = useState({
        username: '',
        id: '',
        tag: ''
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
            const response = await takeoverVan(info);
            setMessage(response.data.message);
            cancelProcedure();
        } catch (error) {
            setMessage('Failed to takeover van. Please check your input.');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            username: '',
            id: '',
            tag: ''
        });
        setMessage('');
    };

    return (
        <div className="procedure-container">
            <h1 className="procedure-heading">Takeover Van</h1>
            <form onSubmit={submitProcedure} className="procedure-form">
                <input
                    type="text"
                    className="procedure-field"
                    name="username"
                    placeholder="Username"
                    value={info.username}
                    onChange={enterText}
                    required
                />
                <input
                    type="text"
                    className="procedure-field"
                    name="id"
                    placeholder="Van ID"
                    value={info.id}
                    onChange={enterText}
                    required
                />
                <input
                    type="number"
                    className="procedure-field"
                    name="tag"
                    placeholder="Van Tag"
                    value={info.tag}
                    onChange={enterText}
                    required
                />
                <div className="procedure-buttons">
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={cancelProcedure}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </div>
                {message && <p className="message">{message}</p>} {/* Display feedback */}
            </form>
        </div>
    );
};

export default TakeoverVanPage;