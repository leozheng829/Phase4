import React, { useState } from "react";
import { driveVan } from "../api";
import "../App.css";

const DriveVanPage = () => {
  const [info, setInfo] = useState({
    vanId: "",
    destination: "",
    vanTag: "",
  });
  const [message, setMessage] = useState("");

  const enterText = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const submitProcedure = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await driveVan(info);
      setMessage(response.data.message);
      cancelProcedure();
    } catch (error) {
      setMessage("Failed to drive van. Please check the input and try again.");
    }
  };

  const cancelProcedure = () => {
    setInfo({
      vanId: "",
      destination: "",
      vanTag: "",
    });
    setMessage("");
  };

  return (
    <div className="procedure-container">
      <h1 className="procedure-heading">Drive Van</h1>
      <form onSubmit={submitProcedure} className="procedure-form">
        <input
          type="text"
          className="procedure-field"
          name="vanId"
          placeholder="Van ID"
          value={info.vanId}
          onChange={enterText}
          required
        />
        <input
          type="text"
          className="procedure-field"
          name="vanTag"
          placeholder="Van Tag"
          value={info.vanTag}
          onChange={enterText}
          required
        />
        <input
          type="text"
          className="procedure-field"
          name="destination"
          placeholder="Destination"
          value={info.destination}
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

export default DriveVanPage;