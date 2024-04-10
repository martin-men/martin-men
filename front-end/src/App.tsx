import "./styles/App.css";
import githubIcon from "/assets/icons/github-icon.svg";
import linkedinIcon from "/assets/icons/linkedin-icon.svg";
import profilePhoto from "/assets/profile-photo.webp";
import { PixelButton } from "./components/PixelButton";
import { PxCardInfo } from "../types";
import { CardsSection } from "./components/CardsSection";
import { useState } from "react";
import { SmallPixelContainer } from "./components/SmallPixelContainer";

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

  const projectCardsInfo: PxCardInfo[] = [
    {
      title: "Experience",
      icon: "presidential-member-icon.svg",
      description: "Experience description",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Projects",
      icon: "presidential-member-icon.svg",
      description:
        "Projects description sera que tiene algo que ver que el texto este largo o corto por que la gverdad no le veo demasiada logica a que sea eso que te digo",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Skills",
      icon: "presidential-member-icon.svg",
      description: "Skills description",
      linkText: "View more",
      link: "#",
    },
    {
      title: "About me",
      icon: "presidential-member-icon.svg",
      description: "About me description",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Experience",
      icon: "presidential-member-icon.svg",
      description: "Experience description",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Projects",
      icon: "presidential-member-icon.svg",
      description:
        "Projects description sera que tiene algo que ver que el texto este largo o corto por que la gverdad no le veo demasiada logica a que sea eso que te digo",
      linkText: "View more",
      link: "#",
    },
    {
      title: "Skills",
      icon: "presidential-member-icon.svg",
      description: "Skills description",
      linkText: "View more",
      link: "#",
    },
    {
      title: "About me",
      icon: "presidential-member-icon.svg",
      description: "About me description",
      linkText: "View more",
      link: "#",
    },
  ];

  // FUNCTIONS
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

  // STATE VARIABLES
  const [cardsPerSlide, setCardsPerSlide] = useState<number>(
    calcCardsPerSlide()
  );
  const [expSlideIndex, setExpSlideIndex] = useState<number>(0);
  const [projSlideIndex, setProjSlideIndex] = useState<number>(0);

  // LISTENERS
  window.onresize = () => {
    setExpSlideIndex(0);
    setProjSlideIndex(0);
    setCardsPerSlide(calcCardsPerSlide());
  };

  return (
    <>
      <nav></nav>
      {/* HEADER ----------------------------------------- */}
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
      {/* HEADER ----------------------------------------- */}

      {/* EXPERIENCE ----------------------------------------- */}
      <div id="experience" className="section-container">
        <CardsSection
          sectionTitle="Experience"
          cardsInfo={expCardsInfo}
          slideIndex={expSlideIndex}
          setSlideIndex={setExpSlideIndex}
          cardsPerSlide={cardsPerSlide}
          leftMiniature="pancha-standing.svg"
          rightMiniature="pancha-walking.svg"
        />
      </div>
      {/* EXPERIENCE ----------------------------------------- */}

      {/* PROJECTS ----------------------------------------- */}
      <div id="projects" className="section-container">
        <CardsSection
          sectionTitle="Projects"
          cardsInfo={projectCardsInfo}
          slideIndex={projSlideIndex}
          setSlideIndex={setProjSlideIndex}
          cardsPerSlide={cardsPerSlide}
          leftMiniature="anakin.svg"
          rightMiniature="vader.svg"
        />
      </div>
      {/* PROJECTS ----------------------------------------- */}

      {/* SKILLS ----------------------------------------- */}
      <div id="skills" className="section-container">
        <h2 className="title-text">&lt; Skills /&gt;</h2>
        <div className="skills-slide-container">
          <div className="skills-slide skills-slide-1">
            <SmallPixelContainer icon="java-icon.svg" title="Java" link="#" />
            <SmallPixelContainer icon="html-icon.svg" title="HTML" link="#" />
            <SmallPixelContainer icon="javascript-icon.svg" title="JavaScript" link="#" />
            <SmallPixelContainer icon="css-icon.svg" title="CSS" link="#" />
            <SmallPixelContainer icon="sql-icon.svg" title="SQL" link="#" />
            <SmallPixelContainer icon="react-icon.svg" title="React" link="#" />
            <SmallPixelContainer icon="git-icon.svg" title="Git" link="#" />
            <SmallPixelContainer icon="github-icon.svg" title="GitHub" link="#" />
            <SmallPixelContainer icon="typescript-icon.svg" title="TypeScript" link="#" />
            <SmallPixelContainer icon="scrum-icon.svg" title="Scrum" link="#" />
            <SmallPixelContainer icon="language-icon.svg" title="English" link="#" />
          </div>
          <div className="skills-slide skills-slide-1">
            <SmallPixelContainer icon="java-icon.svg" title="Java" link="#" />
            <SmallPixelContainer icon="html-icon.svg" title="HTML" link="#" />
            <SmallPixelContainer icon="javascript-icon.svg" title="JavaScript" link="#" />
            <SmallPixelContainer icon="css-icon.svg" title="CSS" link="#" />
            <SmallPixelContainer icon="sql-icon.svg" title="SQL" link="#" />
            <SmallPixelContainer icon="react-icon.svg" title="React" link="#" />
            <SmallPixelContainer icon="git-icon.svg" title="Git" link="#" />
            <SmallPixelContainer icon="github-icon.svg" title="GitHub" link="#" />
            <SmallPixelContainer icon="typescript-icon.svg" title="TypeScript" link="#" />
            <SmallPixelContainer icon="scrum-icon.svg" title="Scrum" link="#" />
            <SmallPixelContainer icon="language-icon.svg" title="English" link="#" />
          </div>
        </div>
        <div className="skills-slide-container">
          <div className="skills-slide skills-slide-2">
            <SmallPixelContainer icon="java-icon.svg" title="Java" link="#" />
            <SmallPixelContainer icon="html-icon.svg" title="HTML" link="#" />
            <SmallPixelContainer icon="javascript-icon.svg" title="JavaScript" link="#" />
            <SmallPixelContainer icon="css-icon.svg" title="CSS" link="#" />
            <SmallPixelContainer icon="sql-icon.svg" title="SQL" link="#" />
            <SmallPixelContainer icon="react-icon.svg" title="React" link="#" />
            <SmallPixelContainer icon="git-icon.svg" title="Git" link="#" />
            <SmallPixelContainer icon="github-icon.svg" title="GitHub" link="#" />
            <SmallPixelContainer icon="typescript-icon.svg" title="TypeScript" link="#" />
            <SmallPixelContainer icon="scrum-icon.svg" title="Scrum" link="#" />
            <SmallPixelContainer icon="language-icon.svg" title="English" link="#" />
          </div>
          <div className="skills-slide skills-slide-2">
            <SmallPixelContainer icon="java-icon.svg" title="Java" link="#" />
            <SmallPixelContainer icon="html-icon.svg" title="HTML" link="#" />
            <SmallPixelContainer icon="javascript-icon.svg" title="JavaScript" link="#" />
            <SmallPixelContainer icon="css-icon.svg" title="CSS" link="#" />
            <SmallPixelContainer icon="sql-icon.svg" title="SQL" link="#" />
            <SmallPixelContainer icon="react-icon.svg" title="React" link="#" />
            <SmallPixelContainer icon="git-icon.svg" title="Git" link="#" />
            <SmallPixelContainer icon="github-icon.svg" title="GitHub" link="#" />
            <SmallPixelContainer icon="typescript-icon.svg" title="TypeScript" link="#" />
            <SmallPixelContainer icon="scrum-icon.svg" title="Scrum" link="#" />
            <SmallPixelContainer icon="language-icon.svg" title="English" link="#" />
          </div>
        </div>
        <img
          src="/assets/miniatures/pink-godzilla.svg"
          alt="Left section miniature"
          className="left-section-bigger-miniature section-bigger-miniature"
        />
        <img
          src="/assets/miniatures/blue-godzilla.svg"
          alt="Right section miniature"
          className="right-section-bigger-miniature section-bigger-miniature"
        />
      </div>
      {/* SKILLS ----------------------------------------- */}

      {/* ABOUT ME ----------------------------------------- */}
      <div id="about-me" className="section-container"></div>
      {/* ABOUT ME ----------------------------------------- */}
    </>
  );
}
