import "./styles/App.css";
import githubIcon from "/assets/icons/github-icon.svg";
import linkedinIcon from "/assets/icons/linkedin-icon.svg";
import profilePhoto from "/assets/profile-photo.webp";
import { PixelButton } from "./components/PixelButton";
import { Experience, Project, Skill } from "../types.ts";
import { Slider } from "./components/Slider.tsx";
import { useEffect, useState } from "react";
import { SmallPixelContainer } from "./components/SmallPixelContainer";
import { ContactModal } from "./components/ContactModal";
import { getAllInfo } from "./services/app.service";
import { useGlobalContext } from "./GlobalContext.tsx";
import { Loader } from "./components/Loader.tsx";

export function App() {
  // DATA
  const [expCardsInfo, setExpCardsInfo] = useState<Experience[]>([]);
  const [projectCardsInfo, setProjectCardsInfo] = useState<Project[]>([]);
  const [skillsInfo, setSkillsInfo] = useState<Skill[]>([]);

  // ON FIRST RENDER
  useEffect(() => {
    async function getData() {
      const allInfo: unknown[] = await getAllInfo();
      setExpCardsInfo(allInfo[0] as Experience[]);
      setProjectCardsInfo(allInfo[1] as Project[]);
      setSkillsInfo(allInfo[2] as Skill[]);
    }

    try {
      getData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

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

  // STATE VARIABLES AND VARIABLES
  const { zoomImage, setZoomImage } = useGlobalContext();
  const [cardsPerSlide, setCardsPerSlide] = useState<number>(
    calcCardsPerSlide()
  );
  const [expSlideIndex, setExpSlideIndex] = useState<number>(0);
  const [projSlideIndex, setProjSlideIndex] = useState<number>(0);
  const [navbarState, setNavbarState] = useState<boolean>(true);
  const [navbarPosition, setNavbarPosition] = useState<number>(0);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const checkbox = document.querySelector(
    "input[type=checkbox]"
  ) as HTMLInputElement;
  const navbarOptions = document.querySelectorAll("#nav-options a");

  // LISTENERS AND DOM MANIPULATION
  window.onresize = () => {
    checkbox.checked = false;
    document.body.style.overflow = "auto";
    const currentCardsPerSlide = calcCardsPerSlide();
    if (currentCardsPerSlide !== cardsPerSlide) {
      setExpSlideIndex(0);
      setProjSlideIndex(0);
      setCardsPerSlide(currentCardsPerSlide);
    }
  };

  window.onscroll = () => {
    const currentScrollPos = window.scrollY;
    const currentNavbarState = navbarPosition > currentScrollPos;
    if (navbarState !== currentNavbarState) {
      setNavbarState(currentNavbarState);
    }
    setNavbarPosition(currentScrollPos);
  };

  checkbox?.addEventListener("change", () => {
    if (checkbox.checked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  navbarOptions?.forEach((option) => {
    option.addEventListener("click", () => {
      checkbox.checked = false;
      document.body.style.overflow = "auto";
    });
  });

  showContactModal || zoomImage !== ""
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      <div
        id="zoomed-img-container"
        style={{ transform: zoomImage === "" ? "scale(0%)" : "scale(100%)" }}
      >
        <img
          id="zoomed-img"
          src={zoomImage}
          alt="Zoomed image"
          onClick={() => {
            setZoomImage("");
          }}
        />
      </div>
      <nav
        style={{
          transform: navbarState ? "translateY(0%)" : "translateY(-100%)",
          backgroundColor: navbarPosition >= 10 ? "#00000099" : "#D9D9D922",
        }}
      >
        <img
          src="/assets/icons/my-logo-icon.svg"
          alt="Martín Mendieta's logo"
        />
        <input type="checkbox" id="menu-checkbox" />
        <div id="nav-options-container">
          <div id="nav-options">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about-me">About me</a>
            <PixelButton
              text="Contact me"
              size="small"
              onClick={() => {
                setShowContactModal(true);
              }}
            />
          </div>
        </div>
        <label id="menu-icon" htmlFor="menu-checkbox">
          <span className="line" id="line1"></span>
          <span className="line" id="line2"></span>
          <span className="line" id="line3"></span>
        </label>
        {/* CONTACT ME MODAL ----------------------------------------- */}
        <ContactModal show={showContactModal} setShow={setShowContactModal} />
        {/* CONTACT ME MODAL ----------------------------------------- */}
      </nav>
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
          <a className="social" href="https://github.com/martin-men" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a className="social" href="https://www.linkedin.com/in/mart%C3%ADn-sebasti%C3%A1n-mendieta-lucero-a42463239/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="/assets/Resume_MartínMendieta.pdf" download="Resume_MartínMendieta">
            <PixelButton text="Download CV" />
          </a>
        </div>
      </header>
      {/* HEADER ----------------------------------------- */}

      {/* EXPERIENCE ----------------------------------------- */}
      <div id="experience" className="section-container">
        <h2 className="title-text">&lt; Experience /&gt;</h2>
        {expCardsInfo.length === 0 ? (
          <Loader />
        ) : (
          <Slider
            cardsInfo={expCardsInfo}
            slideIndex={expSlideIndex}
            setSlideIndex={setExpSlideIndex}
            cardsPerSlide={cardsPerSlide}
            linkText="Organization"
          />
        )}
        <img
          src="/assets/miniatures/pancha-standing.svg"
          alt="Left section miniature"
          className="left-section-miniature section-miniature"
        />
        <img
          src="/assets/miniatures/pancha-walking.svg"
          alt="Right section miniature"
          className="right-section-miniature section-miniature"
        />
      </div>
      {/* EXPERIENCE ----------------------------------------- */}

      {/* PROJECTS ----------------------------------------- */}
      <div id="projects" className="section-container">
        <h2 className="title-text">&lt; Projects /&gt;</h2>
        {projectCardsInfo.length === 0 ? (
          <Loader />
        ) : (
          <Slider
            cardsInfo={projectCardsInfo}
            slideIndex={projSlideIndex}
            setSlideIndex={setProjSlideIndex}
            cardsPerSlide={cardsPerSlide}
            linkText="Project"
          />
        )}
        <img
          src="/assets/miniatures/anakin.svg"
          alt="Left section miniature"
          className="left-section-miniature section-miniature"
        />
        <img
          src="/assets/miniatures/vader.svg"
          alt="Right section miniature"
          className="right-section-miniature section-miniature"
        />
      </div>
      {/* PROJECTS ----------------------------------------- */}

      {/* SKILLS ----------------------------------------- */}
      <div id="skills" className="section-container">
        <h2 className="title-text">&lt; Skills /&gt;</h2>
        {skillsInfo.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="skills-slide-container">
              <div className="skills-slide skills-slide-1">
                {skillsInfo.map((skill) => {
                  return (
                    <SmallPixelContainer
                      key={skill.skillid}
                      icon={skill.icon}
                      title={skill.title}
                      link={skill.certificate}
                    />
                  );
                })}
              </div>
              <div className="skills-slide skills-slide-1">
                {skillsInfo.map((skill) => {
                  return (
                    <SmallPixelContainer
                      key={skill.skillid}
                      icon={skill.icon}
                      title={skill.title}
                      link={skill.certificate}
                    />
                  );
                })}
              </div>
            </div>
            <div className="skills-slide-container">
              <div className="skills-slide skills-slide-2">
                {skillsInfo.map((skill) => {
                  return (
                    <SmallPixelContainer
                      key={skill.skillid}
                      icon={skill.icon}
                      title={skill.title}
                      link={skill.certificate}
                    />
                  );
                })}
              </div>
              <div className="skills-slide skills-slide-2">
                {skillsInfo.map((skill) => {
                  return (
                    <SmallPixelContainer
                      key={skill.skillid}
                      icon={skill.icon}
                      title={skill.title}
                      link={skill.certificate}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}

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
      <div id="about-me" className="section-container">
        <h2 className="title-text">&lt; About me /&gt;</h2>
        <img
          id="profile-photo-px"
          src="/assets/profile-photo-px.svg"
          alt="Martín Mendieta profile photo in pixel art"
        />
        <p id="my-description">
          Hi! I´m Martín Mendieta, a young developer eager to gain experience in
          the professional world of Software. I believe that a job well done is
          evident from it´s first attempt (even if it fails). My family is, and
          will forever be, my daily motivation to offer the best I can.
          <br></br>I hope you like what you have seen here!
        </p>
        <span>Things I like</span>
        <div id="things-i-like">
          <span>Ping Pong</span>
          <span>Pixel Art</span>
          <span>Movies</span>
          <span>Videogames</span>
        </div>
      </div>
      {/* ABOUT ME ----------------------------------------- */}
    </>
  );
}
