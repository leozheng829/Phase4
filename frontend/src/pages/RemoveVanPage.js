import React, { useState } from 'react';
import { removeVan } from '../api';
import '../App.css';

const RemoveVanPage = () => {
  const [info, setInfo] = useState({
    id: '',
    tag: '',
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
      const response = await removeVan(info);
      setMessage(response.data.message);
      cancelProcedure();
    } catch (error) {
      setMessage('Failed to remove van. Please check the inputs and try again.');
    }
  };

  const cancelProcedure = () => {
    setInfo({
      id: '',
      tag: '',
    });
    setMessage('');
  };

  return (
    <div className="procedure-container">
      <h1 className="procedure-heading">Remove Van</h1>
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
        <div className="procedure-buttons">
          <button
            className="cancel-button"
            type="button"
            onClick={cancelProcedure}
          >
            Cancel
          </button>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
        {message && <p className="message">{message}</p>} {/* Feedback message */}
      </form>
    </div>
  );
};

export default RemoveVanPage;