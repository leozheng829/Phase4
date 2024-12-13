import React, { useState } from 'react';
import { addBusiness } from '../api';
import '../App.css';

const AddBusinessPage = () => {
    const [businessDetails, setBusinessDetails] = useState({
        long_name: '',
        rating: '',
        spent: '',
        location: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBusinessDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (businessDetails.rating < 1 || businessDetails.rating > 5) {
            alert('Rating must be between 1 and 5.');
            return;
        }
        if (businessDetails.spent < 0) {
            alert('Spent amount must be a positive value.');
            return;
        }

        try {
            const response = await addBusiness(businessDetails);
            alert(response.data.message);
            resetForm();
        } catch (error) {
            alert('Failed to add business. Please try again.');
        }
    };

    const resetForm = () => {
        setBusinessDetails({
            long_name: '',
            rating: '',
            spent: '',
            location: '',
        });
    };

    return (
        <div className="procedure-container">
            <h1 className="procedure-heading">Add New Business</h1>
            <form onSubmit={handleSubmit} className="procedure-form">
                <input
                    type="text"
                    className="procedure-field"
                    name="long_name"
                    placeholder="Business Name"
                    value={businessDetails.long_name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    className="procedure-field"
                    name="rating"
                    placeholder="Rating (1-5)"
                    value={businessDetails.rating}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    className="procedure-field"
                    name="spent"
                    placeholder="Spent Amount"
                    value={businessDetails.spent}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    className="procedure-field"
                    name="location"
                    placeholder="Location"
                    value={businessDetails.location}
                    onChange={handleInputChange}
                    required
                />
                <div className="procedure-buttons">
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={resetForm}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBusinessPage;