import React, { useState, useEffect, ChangeEvent } from "react";

import Input from "../../component/input/Input";
import Fairy from "../../assets/images/Fairy.png";
import CountdownTimer from "../../component/countdown/CountDown";
import "./style.scss";
import ContactUs from "./components/contact-us/ContactUs";
import Art from "./components/art/Art";
import ListGame from "./components/games/ListGame";
const LandingPage = () => {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (email) {
      console.log("Email đăng ký:", email);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="page d-flex flex-column" style={{ gap: "128px" }}>
      <div className="landing-page">
        <main className="main-content">
          <div className="content-wrapper">
            <div className="text-content">
              <h1 className="title">We’re Getting Ready</h1>
              <CountdownTimer targetDate={launchDate} />
              <div className="mt-4 d-flex flex-column " style={{ gap: "32px" }}>
                <p className="description">
                  We will back to something amazing. Getting the latest updates
                  about our games. Please sign up to our newsletter.
                </p>
                <Input />
              </div>
            </div>
          </div>
        </main>
      </div>

      <img src={Fairy} alt="" className="position-absolute img-fairy" />

      <div
        className="w-100 d-flex align-items-center justify-content-center"
        id="about-us"
      >
        <ContactUs className="" />
      </div>
      <div
        className="w-100 d-flex align-items-center justify-content-center"
        id="#"
      >
        <Art className="" />
      </div>
      <div
        className="w-100 d-flex align-items-center justify-content-center"
        id="game"
      >
        <ListGame className="" />
      </div>

      <div
        className="w-100 d-flex align-items-center justify-content-center"
        id="game"
      >
        <ListGame className="" />
      </div>
    </div>
  );
};

export default LandingPage;
