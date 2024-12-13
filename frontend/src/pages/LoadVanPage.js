import React, { useState } from 'react';
import { loadVan } from '../api';
import '../App.css';

const LoadVanPage = () => {
    const [info, setInfo] = useState({
        id: '',
        tag: '',
        barcode: '',
        more_packages: '',
        price: ''
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
            const response = await loadVan(info);
            setMessage(response.data.message);
            cancelProcedure();
        } catch (error) {
            setMessage('Failed to load van. Please check your input.');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            id: '',
            tag: '',
            barcode: '',
            more_packages: '',
            price: ''
        });
        setMessage('');
    };

    return (
        <div className="procedure-container">
            <h1 className="procedure-heading">Load Van</h1>
            <form onSubmit={submitProcedure} className="procedure-form">
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
                <input
                    type="text"
                    className="procedure-field"
                    name="barcode"
                    placeholder="Package Barcode"
                    value={info.barcode}
                    onChange={enterText}
                    required
                />
                <input
                    type="number"
                    className="procedure-field"
                    name="more_packages"
                    placeholder="More Packages"
                    value={info.more_packages}
                    onChange={enterText}
                    required
                />
                <input
                    type="number"
                    className="procedure-field"
                    name="price"
                    placeholder="Price"
                    value={info.price}
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

export default LoadVanPage;