import { ReactElement } from "react";
import { PixelContainer } from "./PixelContainer";
import { Project, Experience } from "../../types";
import "../styles/Slider.css";

type SliderProps = {
  cardsInfo: Project[] | Experience[];
  slideIndex: number;
  setSlideIndex: (newIndex: number) => void;
  cardsPerSlide: number;
  linkText: string;
};

export const Slider = ({
  cardsInfo,
  slideIndex,
  setSlideIndex,
  cardsPerSlide,
  linkText
}: SliderProps) => {

  //FUNCTIONS
  const groupSlides = (): ReactElement[] => {
    let oneSlide: ReactElement[] = [];
    const slides: ReactElement[] = [];
    let key: number;
    let images: string[] | null;

    if (cardsInfo.length > 0) {
      const typeFlag: string = Object.keys(cardsInfo[0]).length === 6 ? "project" : "experience";
      cardsInfo.forEach((card, index) => {
        key = typeFlag === 'project' ? (card as Project).projectid : (card as Experience).experienceid;
        images = typeFlag === 'project' ? (card as Project).projectimages.map((image) => image.link) : null;
        oneSlide.push(<PixelContainer key={key} title={card.title} icon={card.icon} description={card.description} linkText={linkText} link={card.link} images={images} />);
        if (oneSlide.length === cardsPerSlide || index === cardsInfo.length - 1) {
          slides.push(
            <div key={index} className="slide-container" >
              {oneSlide}
            </div>
          );
          oneSlide = [];
        }
      });
    }

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
    </>
  );
};
