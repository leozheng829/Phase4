import React, { useState } from 'react';
import { addLocation } from '../api';
import '../App.css';

const AddLocationPage = () => {
    const [info, setInfo] = useState({
        label: '',
        x_coord: '',
        y_coord: '',
        space: '',
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
            const response = await addLocation(info);
            setMessage(response.data.message);
            cancelProcedure();
        } catch (error) {
            setMessage('Failed to add location. Please check your input.');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            label: '',
            x_coord: '',
            y_coord: '',
            space: '',
        });
        setMessage('');
    };

    return (
        <div className="procedure-container">
            <h1 className="procedure-heading">Add New Location</h1>
            <form onSubmit={submitProcedure} className="procedure-form">
                <input
                    type="text"
                    className="procedure-field"
                    name="label"
                    placeholder="Label"
                    value={info.label}
                    onChange={enterText}
                    required
                />
                <input
                    type="number"
                    className="procedure-field"
                    name="x_coord"
                    placeholder="X Coordinate"
                    value={info.x_coord}
                    onChange={enterText}
                    required
                />
                <input
                    type="number"
                    className="procedure-field"
                    name="y_coord"
                    placeholder="Y Coordinate"
                    value={info.y_coord}
                    onChange={enterText}
                    required
                />
                <input
                    type="number"
                    className="procedure-field"
                    name="space"
                    placeholder="Space"
                    value={info.space}
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

export default AddLocationPage;