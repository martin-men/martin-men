import "./styles/App.css";
import githubIcon from "/assets/github.svg";
import linkedinIcon from "/assets/linkedin.svg";
import profilePhoto from "/assets/profile-photo.webp";
import { PixelButton } from "./components/PixelButton";
import { PixelContainer } from "./components/PixelContainer";

export function App() {
  return (
    <>
      <nav></nav>

      <header className="section-container">
        <h1 className="title-text">
          Hi!
          <br />
          I'm MARTÍN MENDIETA
        </h1>
        <h2 id="role" className="subtitle-text">Software Engineering Student</h2>
        <h2 id="role-focus" className="subtitle-text">&lt; Front-end /&gt;</h2>
        <img id="profile-photo" src={profilePhoto} alt="Martín Mendieta profile photo" />
        <div id="socials-cv">
          <a href=""><img src={githubIcon} alt="Github icon" /></a>
          <a href=""><img src={linkedinIcon} alt="Linkedin icon" /></a>
          <PixelButton text="Download CV" onClick={() => {}} />
        </div>
      </header>

      <div id="experience" className="section-container">
        <PixelContainer title="Presidential member" icon="presidential-member-icon.svg" description="Hoy como un analista estoy tacho de mi lista un toy no voy por el camino que voz de vhuparserla hast akoi si yo gane todo lo que soy" linkText="Organization" link="github.com" />
      </div>

      <div id="projects" className="section-container"></div>

      <div id="skills" className="section-container"></div>

      <div id="about-me" className="section-container"></div>
    </>
  );
}
