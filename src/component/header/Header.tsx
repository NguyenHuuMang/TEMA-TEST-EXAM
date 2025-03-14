import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import mainLogo from "../../assets/images/logo.png";
import LanguageSwitcher from "../translation/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 915);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 915);
      if (window.innerWidth > 915) {
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
              style={{ color: isMobileMenuOpen ? "black" : "white" }}
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
                  style={{ fontSize: "14px", fontWeight: "700" }}
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
                  style={{ fontSize: "14px", fontWeight: "700" }}
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
                  style={{ fontSize: "14px", fontWeight: "700" }}
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
                  style={{ fontSize: "14px", fontWeight: "700" }}
                >
                  {(t as any)("header.contactUs")}
                </a>
              </li>
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
            <nav style={{ color: "#000" }}>
              <ul className="d-flex flex-column align-items-center justify-content-center">
                <li
                  style={{
                    borderBottom: "1px solid #EEEEEE",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about-us");
                    }}
                    style={{
                      color: "#000",
                      paddingBottom: "24px",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    {(t as any)("header.title")}
                  </a>
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #EEEEEE",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <a
                    href="#game"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("games");
                    }}
                    style={{
                      color: "#000",
                      paddingBottom: "24px",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    {(t as any)("header.game")}
                  </a>
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #EEEEEE",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <a
                    href="#team"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("partners");
                    }}
                    style={{
                      color: "#000",
                      paddingBottom: "24px",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    {(t as any)("header.partners")}
                  </a>
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #EEEEEE",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                    style={{
                      color: "#000",
                      paddingBottom: "24px",
                      fontSize: "14px",
                      fontWeight: "700",
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
