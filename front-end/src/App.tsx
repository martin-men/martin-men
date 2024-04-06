import "./styles/App.css";
import githubIcon from "/assets/github.svg";
import linkedinIcon from "/assets/linkedin.svg";
import profilePhoto from "/assets/profile-photo.webp";
import { PixelButton } from "./components/PixelButton";
import { PixelContainer } from "./components/PixelContainer";
import { PxCardInfo } from "../types";
import { ReactElement, useState } from "react";

export function App() {
  // DATA
  const expCardsInfo: PxCardInfo[] = [
    {
      title: "Experience",
      icon: "frontend-icon.svg",
      description: "Experience description",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Projects",
      icon: "frontend-icon.svg",
      description:
        "Projects description sera que tiene algo que ver que el texto este largo o corto por que la gverdad no le veo demasiada logica a que sea eso que te digo",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Skills",
      icon: "frontend-icon.svg",
      description: "Skills description",
      linkText: "View more",
      link: "#",
    },
    {
      title: "About me",
      icon: "frontend-icon.svg",
      description: "About me description",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Experience",
      icon: "frontend-icon.svg",
      description: "Experience description",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Projects",
      icon: "frontend-icon.svg",
      description:
        "Projects description sera que tiene algo que ver que el texto este largo o corto por que la gverdad no le veo demasiada logica a que sea eso que te digo",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Skills",
      icon: "frontend-icon.svg",
      description: "Skills description",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Weboooooos",
      icon: "frontend-icon.svg",
      description: "About me description",
      linkText: "View more",
      link: "#",
    },
  ];

  //FUNCTIONS
  const groupSlides = (): ReactElement[] => {
    let oneSlide: ReactElement[] = [];
    const slides: ReactElement[] = [];

    expCardsInfo.forEach((card, index) => {
      oneSlide.push(<PixelContainer key={index} {...card} />);
      if (
        oneSlide.length === cardsPerSlide ||
        index === expCardsInfo.length - 1
      ) {
        slides.push(
          <div id="exp-slide-container" key={index}>
            {oneSlide}
          </div>
        );
        oneSlide = [];
      }
    });

    return slides;
  };

  const calcCardsPerSlide = (): number => {
    const carouselWidth =
      window.innerWidth *
      0.9; /* *0.9 because It would not be correct to have containers attached to the edges of the screen */
    const pxContainerWidth = window.innerHeight * 0.492;
    const initialCardsNum = Math.floor(
      carouselWidth / pxContainerWidth
    ); /* 0.492 is the with of each pixel container */
    const cardsNum = Math.floor(
      (carouselWidth - (initialCardsNum - 1) * carouselWidth * 0.05) /
        pxContainerWidth
    );
    return cardsNum <= 0 ? 1 : cardsNum;
  };

  const updateImageIndex = (newIndex: number) => {
    const slidesNum = Math.ceil(expCardsInfo.length / cardsPerSlide);
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= slidesNum) {
      newIndex = slidesNum - 1;
    }
    setExpSlideIndex(newIndex);
  };

  // STATE VARIABLES
  const [cardsPerSlide, setCardsPerSlide] = useState<number>(
    calcCardsPerSlide()
  );
  const [expSlideIndex, setExpSlideIndex] = useState<number>(0);

  // LISTENERS
  window.onresize = () => {
    setExpSlideIndex(0);
    setCardsPerSlide(calcCardsPerSlide());
  };

  return (
    <>
      <nav></nav>

      <header className="section-container">
        <h1 className="title-text">
          Hi!
          <br />
          I'm MARTÍN MENDIETA
        </h1>
        <h2 id="role" className="subtitle-text">
          Software Engineering Student
        </h2>
        <h2 id="role-focus" className="subtitle-text">
          &lt; Front-end /&gt;
        </h2>
        <img
          id="profile-photo"
          src={profilePhoto}
          alt="Martín Mendieta profile photo"
        />
        <div id="socials-cv">
          <a href="">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <PixelButton text="Download CV" onClick={() => {}} />
        </div>
      </header>

      <div id="experience" className="section-container">
        <h2 className="title-text">&lt; Experience /&gt;</h2>
        <div id="exp-cards-carousel">
          <div
            id="slides"
            style={{ transform: `translate(-${expSlideIndex * 100}%)` }}
          >
            {groupSlides()}
          </div>
        </div>
        <div className="slides-nav-buttons">
          <button
            className="section-nav-btn left-section-nav-btn"
            onClick={() => updateImageIndex(expSlideIndex - 1)}
          >
            {"<"}
          </button>
          <span>
            {expSlideIndex + 1} / {Math.ceil(expCardsInfo.length / cardsPerSlide)}
          </span>
          <button
            className="section-nav-btn right-section-nav-btn"
            onClick={() => updateImageIndex(expSlideIndex + 1)}
          >
            {">"}
          </button>
        </div>
        <img src="/assets/pancha-standing.svg" alt="" className="left-section-miniature section-miniature" />
        <img src="/assets/pancha-walking.svg" alt="" className="right-section-miniature section-miniature" />
      </div>

      <div id="projects" className="section-container"></div>

      <div id="skills" className="section-container"></div>

      <div id="about-me" className="section-container"></div>
    </>
  );
}
