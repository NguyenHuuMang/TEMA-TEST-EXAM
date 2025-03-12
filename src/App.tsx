import React, { useState, useEffect, ChangeEvent } from "react";
import CountdownTimer from "./component/countdown/CountDown";
import "./App.css";
import Fairy from "./assets/images/Fairy.png";

function App() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
    <div className="page">
      <div className="landing-page">
        <main className="main-content">
          <div className="content-wrapper">
            <div className="text-content">
              <h1 className="title">Trò chơi sắp ra mắt</h1>
              <CountdownTimer targetDate={launchDate} />
              <p className="description">
                Chúng tôi sẽ ra mắt một điều tuyệt vời. Để nhận các bản cập nhật
                mới nhất về trò chơi, vui lòng đăng ký nhận bản tin của chúng
                tôi.
              </p>
              {/* <SubscribeForm 
                email={email} 
                handleEmailChange={handleEmailChange} 
                handleSubmit={handleSubmit}
                submitted={submitted}
              /> */}
            </div>
          </div>
        </main>
      </div>

      <div>hihihi</div>
    </div>
  );
}

export default App;
