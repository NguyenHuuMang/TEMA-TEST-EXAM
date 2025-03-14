import React, { useState, useEffect } from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";

const CountdownTimer = ({ targetDate }: any) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { t } = useTranslation();
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
    <>
      {isMobile ? (
        <div className="countdown-timer-mobile">
          <div className="timer-item">
            <span className="time-mobile">{addLeadingZero(1 || 0)}</span>
            <span className="label-mobile">
              {(t as any)("countdown_children.day")}
            </span>
          </div>
          <span className="separator d-flex h-100 align-self-center">:</span>
          <div className="timer-item">
            <span className="time-mobile">
              {addLeadingZero(timeLeft.hours || 0)}
            </span>
            <span className="label-mobile">
              {(t as any)("countdown_children.hours")}
            </span>
          </div>
          <span className="separator d-flex h-100 align-self-center">:</span>
          <div className="timer-item">
            <span className="time-mobile">
              {addLeadingZero(timeLeft.minutes || 0)}
            </span>
            <span className="label-mobile">
              {(t as any)("countdown_children.minutes")}
            </span>
          </div>
          <span className="separator d-flex h-100 align-self-center">:</span>
          <div className="timer-item">
            <span className="time-mobile">
              {addLeadingZero(timeLeft.seconds || 0)}
            </span>
            <span className="label-mobile">
              {(t as any)("countdown_children.second")}
            </span>
          </div>
        </div>
      ) : (
        <div className="countdown-timer">
          <div className="timer-item">
            <span className="time">{addLeadingZero(1 || 0)}</span>
            <span className="label">
              {(t as any)("countdown_children.day")}
            </span>
          </div>
          <span className="separator d-flex h-100 align-self-center">:</span>
          <div className="timer-item">
            <span className="time">{addLeadingZero(timeLeft.hours || 0)}</span>
            <span className="label">
              {(t as any)("countdown_children.hours")}
            </span>
          </div>
          <span className="separator d-flex h-100 align-self-center">:</span>
          <div className="timer-item">
            <span className="time">
              {addLeadingZero(timeLeft.minutes || 0)}
            </span>
            <span className="label">
              {(t as any)("countdown_children.minutes")}
            </span>
          </div>
          <span className="separator d-flex h-100 align-self-center">:</span>
          <div className="timer-item">
            <span className="time">
              {addLeadingZero(timeLeft.seconds || 0)}
            </span>
            <span className="label">
              {(t as any)("countdown_children.second")}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
