import React, { useState, useEffect } from "react";
import "./style.scss";

const CountdownTimer = ({ targetDate }: any) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (number: number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <div className="countdown-timer">
      <div className="timer-item">
        <span className="time">{addLeadingZero(1 || 0)}</span>
        <span className="label">Ngày</span>
      </div>
      <span className="separator d-flex h-100 align-self-center">:</span>
      <div className="timer-item">
        <span className="time">{addLeadingZero(timeLeft.hours || 0)}</span>
        <span className="label">Giờ</span>
      </div>
      <span className="separator d-flex h-100 align-self-center">:</span>
      <div className="timer-item">
        <span className="time">{addLeadingZero(timeLeft.minutes || 0)}</span>
        <span className="label">Phút</span>
      </div>
      <span className="separator d-flex h-100 align-self-center">:</span>
      <div className="timer-item">
        <span className="time">{addLeadingZero(timeLeft.seconds || 0)}</span>
        <span className="label">Giây</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
