import { ReactElement } from "react";
import { PixelContainer } from "./PixelContainer";
import { PxCardInfo } from "../../types";
import "../styles/CardsSection.css"

type CardsSectionProps = {
    sectionTitle: string;
    cardsInfo: PxCardInfo[];
    slideIndex: number;
    setSlideIndex: (newIndex: number) => void;
    cardsPerSlide: number;
    leftMiniature: string;
    rightMiniature: string;
}

export const CardsSection = ({sectionTitle, cardsInfo, slideIndex, setSlideIndex, cardsPerSlide, leftMiniature, rightMiniature}: CardsSectionProps) => {
  //FUNCTIONS
  const groupSlides = (): ReactElement[] => {
    let oneSlide: ReactElement[] = [];
    const slides: ReactElement[] = [];

    cardsInfo.forEach((card, index) => {
      oneSlide.push(<PixelContainer key={index} {...card} />);
      if (
        oneSlide.length === cardsPerSlide ||
        index === cardsInfo.length - 1
      ) {
        slides.push(
          <div className="slide-container" key={index}>
            {oneSlide}
          </div>
        );
        oneSlide = [];
      }
    });

    return slides;
  };

  const updateImageIndex = (newIndex: number) => {
    const slidesNum = Math.ceil(cardsInfo.length / cardsPerSlide);
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= slidesNum) {
      newIndex = slidesNum - 1;
    }
    setSlideIndex(newIndex);
  };

  return (
    <>
      <h2 className="title-text">&lt; {sectionTitle} /&gt;</h2>
      <div className="slides-carousel">
        <div
          className="slides"
          style={{ transform: `translate(-${slideIndex * 100}%)` }}
        >
          {groupSlides()}
        </div>
      </div>
      <div className="slides-nav-buttons">
        <button
          className="section-nav-btn left-section-nav-btn"
          onClick={() => updateImageIndex(slideIndex - 1)}
        >
          {"<"}
        </button>
        <span>
          {slideIndex + 1} / {Math.ceil(cardsInfo.length / cardsPerSlide)}
        </span>
        <button
          className="section-nav-btn right-section-nav-btn"
          onClick={() => updateImageIndex(slideIndex + 1)}
        >
          {">"}
        </button>
      </div>
      <img
        src={`/assets/miniatures/${leftMiniature}`}
        alt="Left section miniature"
        className="left-section-miniature section-miniature"
      />
      <img
        src={`/assets/miniatures/${rightMiniature}`}
        alt="Right section miniature"
        className="right-section-miniature section-miniature"
      />
    </>
  );
};
