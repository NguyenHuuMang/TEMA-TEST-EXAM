import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  placeholder?: string;
  type?: string;
  className?: string;
};

const Input = ({ placeholder, type = "email", className }: Props) => {
  return (
    <div className="input-container">
      <input type={type} placeholder={placeholder} className="email-input" />
      <button className="input-button">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Input;
