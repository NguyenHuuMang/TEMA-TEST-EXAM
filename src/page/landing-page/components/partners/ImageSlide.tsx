import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

type Props = {
  images: any;
};

const ImageSlider = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider-content">
        <div className="pe-2 d-flex h-100 align-items-center justify-content-center align-self-center mt-4">
          <button onClick={goToPrevious} className="custom-nav prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>

        <div className="slider-image-container">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-image"
          />
        </div>
        <div className="ps-2 d-flex h-100 align-items-center justify-content-center align-self-center mt-4">
          <button onClick={goToNext} className="custom-nav next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
