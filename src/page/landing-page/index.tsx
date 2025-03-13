// import React, { useState, useEffect, ChangeEvent } from "react";

// import Input from "../../component/input/Input";
// import Fairy from "../../assets/images/Fairy.png";
// import CountdownTimer from "../../component/countdown/CountDown";
// import "./style.scss";
// import ContactUs from "./components/contact-us/ContactUs";
// import Art from "./components/art/Art";
// import ListGame from "./components/games/ListGame";
// import Partners from "./components/partners/Partners";
// import { scrollToTop } from "../../component/common/scollToTop";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleDown,
//   faAngleUp,
//   faArrowDown,
//   faArrowUp,
// } from "@fortawesome/free-solid-svg-icons";
// const LandingPage = () => {
//   const launchDate = new Date();
//   launchDate.setDate(launchDate.getDate() + 30);

//   const [email, setEmail] = useState<string>("");
//   const [submitted, setSubmitted] = useState<boolean>(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     if (email) {
//       console.log("Email đăng ký:", email);
//       setSubmitted(true);
//       setEmail("");
//       setTimeout(() => {
//         setSubmitted(false);
//       }, 3000);
//     }
//   };

//   return (
//     <div className="page d-flex flex-column" style={{ gap: "128px" }}>
//       <div className="landing-page">
//         <main className="main-content">
//           <div className="content-wrapper">
//             <div className="text-content">
//               <h1 className="title">We’re Getting Ready</h1>
//               <CountdownTimer targetDate={launchDate} />
//               <div className="mt-4 d-flex flex-column " style={{ gap: "32px" }}>
//                 <p className="description">
//                   We will back to something amazing. Getting the latest updates
//                   about our games. Please sign up to our newsletter.
//                 </p>
//                 <Input />
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       <img src={Fairy} alt="" className="position-absolute img-fairy" />

//       <div
//         className="w-100 d-flex align-items-center justify-content-center"
//         id="about-us"
//       >
//         <ContactUs className="" />
//       </div>
//       <div
//         className="w-100 d-flex align-items-center justify-content-center"
//         id="#"
//       >
//         <Art className="" />
//       </div>
//       <div
//         className="w-100 d-flex align-items-center justify-content-center"
//         id="games"
//       >
//         <ListGame className="" />
//       </div>

//       <div
//         className="w-100 d-flex align-items-center justify-content-center"
//         id="partners"
//         style={{ backgroundColor: "#F6F6F6" }}
//       >
//         <Partners className="" />
//       </div>

//       <button className="scroll-btn" onClick={scrollToTop}>
//         {isScrolled ? (
//           <FontAwesomeIcon icon={faAngleUp} />
//         ) : (
//           <FontAwesomeIcon icon={faAngleDown} />
//         )}
//       </button>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Fairy from "../../assets/images/Fairy.png";

import "./style.scss";
import CountdownTimer from "../../component/countdown/CountDown";
import ContactUs from "./components/contact-us/ContactUs";
import Art from "./components/art/Art";
import ListGame from "./components/games/ListGame";
import Partners from "./components/partners/Partners";
import Input from "../../component/input/Input";

const LandingPage = () => {
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
    <div className="page d-flex flex-column" style={{ gap: "128px" }}>
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
          >
            <motion.div
              className="text-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="title">We’re Getting Ready</h1>
              <CountdownTimer targetDate={launchDate} />
              <motion.div
                className="mt-4 d-flex flex-column"
                style={{ gap: "32px" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <p className="description">
                  We will be back with something amazing. Get the latest updates
                  about our games. Please sign up for our newsletter.
                </p>
                <Input />
              </motion.div>
            </motion.div>
          </div>
        </main>

        <motion.img
          src={Fairy}
          alt=""
          className="position-absolute img-fairy"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>

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
