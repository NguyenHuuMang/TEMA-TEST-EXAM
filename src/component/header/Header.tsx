import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import mainLogo from "../../assets/images/logo.png";
import FlagSelect from "../frag-select/FlagSelect";
import LanguageSwitcher from "../translation/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: any) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""} ${
        isMobile ? "mobile" : ""
      }`}
    >
      <div className="header-content">
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          <img src={mainLogo} alt="Logo" />
        </div>

        {isMobile ? (
          <div className="d-flex align-items-center justify-content-between">
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close" : "Open"}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        ) : (
          <nav className="main-nav">
            <ul>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about-us");
                  }}
                >
                  {(t as any)("header.title")}
                </a>
              </li>
              <li>
                <a
                  href="#game"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("games");
                  }}
                >
                  {(t as any)("header.game")}
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("partners");
                  }}
                >
                  {(t as any)("header.partners")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  {(t as any)("header.contactUs")}
                </a>
              </li>
              {/* <li className="language">
                <a href="#lang">VI</a>
              </li> */}
              <LanguageSwitcher />
            </ul>
          </nav>
        )}
      </div>

      {isMobile && (
        <div
          className={`mobile-menu-fullscreen ${isMobileMenuOpen ? "open" : ""}`}
        >
          <div style={{ padding: "20px" }}>
            <LanguageSwitcher mobile={true} />
          </div>
          <div className="menu-content">
            <nav>
              <ul>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about-us");
                    }}
                  >
                    {(t as any)("header.title")}
                  </a>
                </li>
                <li>
                  <a
                    href="#game"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("games");
                    }}
                  >
                    {(t as any)("header.game")}
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("partners");
                    }}
                  >
                    {(t as any)("header.partners")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    {(t as any)("header.contactUs")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
