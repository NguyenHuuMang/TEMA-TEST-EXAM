import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import EAGame from "../../../../assets/images/EA-Partner.png";
import GameK from "../../../../assets/images/GameK-Partner.png";
import FirstPowerUp from "../../../../assets/images/FirstPowerUp-Partner.png";
import WaltDisney from "../../../../assets/images/WaltDisney-Partner.png";
import BookProGame from "../../../../assets/images/BookPro-Partner.png";
import TwoKGame from "../../../../assets/images/2K-Partner.png";
import SegaGame from "../../../../assets/images/Sega-Partner.png";
import "./style.scss";
import ImageSlider from "./ImageSlide";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
type Props = {
  className?: string;
};
const Partners = ({ className }: Props) => {
  const swiperRef = useRef<any>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 819);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 819);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const images = [
    EAGame,
    GameK,
    FirstPowerUp,
    WaltDisney,
    BookProGame,
    TwoKGame,
    SegaGame,
  ];

  return (
    <div
      className={clsx(
        className,
        "d-flex align-items-center justify-content-center w-100 flex-column"
      )}
    >
      <div style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="d-flex flex-column" style={{ gap: "80px" }}>
          {isMobile ? (
            <div className="partner-title-mobile">{(t as any)("partners")}</div>
          ) : (
            <div className="partner-title-desktop">
              {(t as any)("partners")}
            </div>
          )}
          {isMobile ? (
            <div>
              {" "}
              <ImageSlider images={images} />
            </div>
          ) : (
            <div className="container py-5 text-center d-flex flex-row">
              <div className="pe-2 d-flex h-100 align-items-center justify-content-center align-self-center mt-4">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  ref={prevRef}
                  className="custom-nav prev"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </div>

              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSwiper={(swiper: any) => (swiperRef.current = swiper)}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                  1440: { slidesPerView: 5 },
                }}
                modules={[Navigation, Autoplay]}
              >
                {images.map((src, index) => (
                  <SwiperSlide
                    key={index}
                    className="d-flex justify-content-center"
                  >
                    <img
                      src={src}
                      alt={`Slide ${index}`}
                      className="img-fluid"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="ps-2 d-flex h-100 align-items-center justify-content-center align-self-center mt-4">
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  ref={nextRef}
                  className="custom-nav next"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Partners;
