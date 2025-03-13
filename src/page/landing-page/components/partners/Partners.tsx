import clsx from "clsx";
import React from "react";
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
type Props = {
  className?: string;
};
const Partners = ({ className }: Props) => {
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
        "d-flex align-items-center justify-content-center w-50 flex-column"
      )}
    >
      <div style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="d-flex flex-column" style={{ gap: "80px" }}>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "900",
              color: "#000",
              lineHeight: "60px",
              textAlign: "center",
            }}
          >
            Our Partners
          </div>
          <div className="container py-5 text-center">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={true}
              breakpoints={{
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
                  <img src={src} alt={`Slide ${index}`} className="img-fluid" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
