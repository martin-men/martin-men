import { useState } from "react";
import "../styles/PixelCarousel.css";

type PixelCarouselProps = {
  images: string[];
};

export const PixelCarousel = ({ images }: PixelCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateImageIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= images.length) {
      newIndex = images.length - 1;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <div id="px-carousel">
      <div
        id="carousel-images"
        style={{ transform: `translate(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt="Carousel image" className="px-carousel-img" />
          </div>
        ))}
      </div>
      <button
        id="right-nav-btn"
        className="nav-btn"
        onClick={() => updateImageIndex(currentImageIndex + 1)}
      >
        {">"}
      </button>
      <button
        id="left-nav-btn"
        className="nav-btn"
        onClick={() => updateImageIndex(currentImageIndex - 1)}
      >
        {"<"}
      </button>
    </div>
  );
};
