import React, { useState, useEffect } from "react";
import "./style.scss";
import mainLogo from "../../assets/images/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={mainLogo} alt="" />
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#about" onClick={() => scrollToSection("about-us")}>
              VỀ CHÚNG TÔI
            </a>
          </li>
          <li>
            <a href="#game" onClick={() => scrollToSection("games")}>
              TRÒ CHƠI
            </a>
          </li>
          <li>
            <a href="#team" onClick={() => scrollToSection("partners")}>
              ĐỘI TÁC
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              LIÊN HỆ
            </a>
          </li>
          <li className="language">
            <a href="#lang">VI</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
