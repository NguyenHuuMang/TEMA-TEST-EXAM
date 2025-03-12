import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Input = () => {
  return (
    <div className="input-container">
      <input
        type="email"
        placeholder="Enter your email"
        className="email-input"
      />
      <button className="input-button">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Input;
