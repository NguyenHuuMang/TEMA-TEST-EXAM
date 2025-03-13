import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import checkedImg from "../../assets/images/checked.png";

type Props = {
  mobile?: boolean;
};
const LanguageSwitcher = ({ mobile = false }: Props) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setIsOpen(false);
  };

  const currentLanguage = localStorage.getItem("language") || "en";

  return (
    <div className="language-switcher" style={{ zIndex: 99 }}>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="languageDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={
              (t as any)("language") === "Ngôn ngữ"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
            }
            alt=""
            style={{ width: "33px", height: "33px", objectFit: "contain" }}
          />
        </button>
        {isOpen && (
          <div
            className="d-flex flex-column position-absolute"
            aria-labelledby="languageDropdown"
            style={{
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              padding: "8px",
              borderRadius: "8px",
              height: "fit-content",
              gap: "4px",
              right: mobile ? "80px" : "20px",
            }}
          >
            <div
              className="d-flex align-items-start justify-content-start"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <button
                className="dropdown-item d-flex align-items-start justify-content-start"
                style={{
                  padding: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginLeft: "0px",
                }}
                onClick={() => changeLanguage("vi")}
              >
                {currentLanguage === "vi" ? (
                  <img
                    src={checkedImg}
                    alt=""
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "cover",
                      marginRight: "12px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "12px",
                    }}
                  />
                )}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                  alt=""
                  style={{
                    width: "44px",
                    height: "33px",
                    objectFit: "cover",
                    marginRight: "12px",
                  }}
                />
                <span className="mt-2">Vietnamese</span>
              </button>
            </div>
            <div className="d-flex align-items-start justify-content-start">
              <button
                className="dropdown-item d-flex align-items-start justify-content-start"
                style={{
                  padding: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginLeft: "0px",
                }}
                onClick={() => changeLanguage("en")}
              >
                {currentLanguage !== "vi" ? (
                  <img
                    src={checkedImg}
                    alt=""
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "cover",
                      marginRight: "12px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "12px",
                    }}
                  />
                )}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                  style={{
                    width: "44px",
                    height: "33px",
                    objectFit: "cover",
                    marginRight: "12px",
                  }}
                />
                <span className="mt-2">English</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
