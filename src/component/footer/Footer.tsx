import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import "./style.scss";
import FaceBookIcon from "../../assets/images/facebook-icon.png";
import TwitterIcon from "../../assets/images/twitter-icon.png";
import LinkedInIcon from "../../assets/images/linkedin-icon.png";
import LocationIcon from "../../assets/images/location-icon.png";
import PhoneIcon from "../../assets/images/mobile-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="d-flex flex-column">
      {isMobile ? (
        <div className="footer-wrapper d-flex align-items-center align-self-center h-100 justify-content-center w-100">
          <div
            className="footer-content"
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div
              className="footer-left"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                className="footer-logo"
                style={{ cursor: "pointer" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
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
              className="d-flex flex-column"
              style={{ gap: "40px", width: "100%" }}
            >
              <h4>{(t as any)("footer.address")}</h4>
              <div className="d-flex flex-row gap-2">
                <img
                  src={LocationIcon}
                  alt=""
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <div className="d-flex flex-column gap-3">
                  <div>{(t as any)("footer.street")}</div>
                  <div>{(t as any)("footer.subAddress")}</div>
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

            <div className="w-100" style={{ marginTop: "68px" }}>
              <h4> {(t as any)("footer.subscribe")}</h4>
              <p>{(t as any)("footer.subscribeDescription")}</p>
              <div
                className="subscribe-box w-100"
                style={{ border: "1px solid #fff" }}
              >
                <input
                  className="input-box"
                  type="email"
                  placeholder="Email"
                  style={{
                    border: "1px solid #ffff",
                    color: "#ffff",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer-wrapper d-flex align-items-center align-self-center h-100 justify-content-center w-100">
          <div className="footer-content">
            <div className="footer-left">
              <img
                src={logo}
                alt="Logo"
                className="footer-logo"
                style={{ cursor: "pointer" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
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

            <div className="d-flex flex-row calc-gap">
              <div className="footer-center d-flex flex-column calc-gap">
                <h4> {(t as any)("footer.address")}</h4>
                <div className="d-flex flex-row gap-2">
                  <img
                    src={LocationIcon}
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="d-flex flex-column gap-3">
                    <div>{(t as any)("footer.street")}</div>
                    <div>{(t as any)("footer.subAddress")}</div>
                  </div>
                </div>
                <div className="d-flex flex-row gap-2">
                  <img
                    src={PhoneIcon}
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />{" "}
                  <div>(+1) 555-0108-000 or (+236) 555-0108</div>
                </div>
              </div>

              <div className="footer-right">
                <div className="d-flex flex-column calc-gap">
                  <h4> {(t as any)("footer.subscribe")}</h4>
                  <p>{(t as any)("footer.subscribeDescription")}</p>
                </div>
                <div
                  className="subscribe-box"
                  style={{ border: "1px solid #fff" }}
                >
                  <input
                    className="input-box"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <FontAwesomeIcon icon={faArrowRight} className="input-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="license-footer">2017 Copyright. Policy</div>
    </div>
  );
};

export default Footer;
