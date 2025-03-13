import React from "react";
import logo from "../../assets/images/logo.png";
import "./style.scss";
import FaceBookIcon from "../../assets/images/facebook-icon.png";
import TwitterIcon from "../../assets/images/twitter-icon.png";
import LinkedInIcon from "../../assets/images/linkedin-icon.png";
import LocationIcon from "../../assets/images/location-icon.png";
import PhoneIcon from "../../assets/images/mobile-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="d-flex flex-column">
      <div className="footer-wrapper d-flex align-items-center align-self-center h-100 justify-content-center w-100">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logo} alt="Logo" className="footer-logo" />
            <div className="social-icons">
              <img
                src={TwitterIcon}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => {}}
              />
              <img
                src={FaceBookIcon}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => {}}
              />
              <img
                src={LinkedInIcon}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => {}}
              />
            </div>
          </div>

          <div
            className="footer-center d-flex flex-column"
            style={{ gap: "40px" }}
          >
            <h4>Address</h4>
            <div className="d-flex flex-row gap-2">
              <img
                src={LocationIcon}
                alt=""
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
              <div className="d-flex flex-column gap-3">
                <div>
                  Valletta Buildings, South Street, Valletta - VLT1103, Malta,
                  US
                </div>
                <div>
                  20 Phan Dang Luu street, Hai Chau District, Danang city,
                  Vietnam
                </div>
              </div>
            </div>
            <div className="d-flex flex-row gap-2">
              <img
                src={PhoneIcon}
                alt=""
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />{" "}
              <div>(+1) 555-0108-000 or (+236) 555-0108</div>
            </div>
          </div>

          <div className="footer-right">
            <h4>Subscribe</h4>
            <p>
              Subscribe to our newsletter and be the first to know about our
              updates
            </p>
            <div className="subscribe-box" style={{ border: "1px solid #fff" }}>
              <input
                className="input-box"
                type="email"
                placeholder="Email"
                style={{ border: "1px solid #ffff", color: "#ffff" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="license-footer">2017 Copyright. Policy</div>
    </div>
  );
};

export default Footer;
