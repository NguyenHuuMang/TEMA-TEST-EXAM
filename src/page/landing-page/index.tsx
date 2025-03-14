import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Fairy from "../../assets/images/Fairy.png";

import "./style.scss";
import CountdownTimer from "../../component/countdown/CountDown";
import ContactUs from "./components/about-us/AboutUs";
import Art from "./components/art/Art";
import ListGame from "./components/games/ListGame";
import Partners from "./components/partners/Partners";
import Input from "../../component/input/Input";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMobileSmall, setIsMobileSmall] = useState(window.innerWidth < 680);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileSmall(window.innerWidth < 680);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="page d-flex flex-column overflow-hidden"
      style={{ gap: isMobileSmall ? "0px" : "128px" }}
    >
      <motion.div
        className="landing-page"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <main className="main-content">
          <div
            className={`content-wrapper d-flex ${
              isMobile ? "flex-column" : "flex-row"
            }`}
            style={{
              marginTop: isMobile ? "100px" : "0px",
            }}
          >
            <motion.div
              className="text-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="title">{(t as any)("title")}</h1>{" "}
              <CountdownTimer targetDate={launchDate} />
              <motion.div
                className="d-flex flex-column"
                style={{
                  gap: "32px",
                  marginTop: "97px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <p className="description">{(t as any)("description")}</p>
                <Input placeholder={(t as any)("email")} />
              </motion.div>
            </motion.div>
          </div>
        </main>

        <div className="fairy-responsive">
          <motion.img
            src={Fairy}
            alt=""
            className="position-absolute img-fairy"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </motion.div>
      <div className="mobile-fairy w-100">
        <motion.img
          src={Fairy}
          alt=""
          className="img-fairy-mobile"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {[
        { id: "about-us", Component: ContactUs },
        { id: "#", Component: Art },
        { id: "games", Component: ListGame },
        { id: "partners", Component: Partners, bg: "#F6F6F6" },
      ].map(({ id, Component, bg }, index) => (
        <motion.div
          key={id}
          id={id}
          className="w-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: bg || "transparent" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.3 }}
        >
          <Component />
        </motion.div>
      ))}

      <motion.button
        className="scroll-btn"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        {isScrolled ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
      </motion.button>
    </div>
  );
};

export default LandingPage;
