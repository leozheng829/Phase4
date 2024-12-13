import React, { useState } from "react";
import { refuelVan } from "../api";
import "../App.css";

const RefuelVanPage = () => {
  const [info, setInfo] = useState({
    id: "",
    tag: "",
    more_fuel: "",
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
      const response = await refuelVan(info);
      setMessage(response.data.message);
      cancelProcedure();
    } catch (error) {
      setMessage("Failed to refuel van. Please ensure all inputs are correct.");
    }
  };

  const cancelProcedure = () => {
    setInfo({
      id: "",
      tag: "",
      more_fuel: "",
    });
    setMessage("");
  };

  return (
    <div className="procedure-container">
      <h1 className="procedure-heading">Refuel Van</h1>
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
          placeholder="Tag"
          value={info.tag}
          onChange={enterText}
          required
        />
        <input
          type="number"
          className="procedure-field"
          name="more_fuel"
          placeholder="More Fuel"
          value={info.more_fuel}
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
        {message && <p className="message">{message}</p>} {/* Feedback Message */}
      </form>
    </div>
  );
};

export default RefuelVanPage;