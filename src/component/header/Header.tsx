import React from "react";
import "./style.scss";
import mainLogo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={mainLogo} alt="" />
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#about">VỀ CHÚNG TÔI</a>
          </li>
          <li>
            <a href="#game">TRÒ CHƠI</a>
          </li>
          <li>
            <a href="#team">ĐỘI TÁC</a>
          </li>
          <li>
            <a href="#contact">LIÊN HỆ</a>
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
