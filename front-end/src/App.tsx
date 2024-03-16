import "./styles/App.css";
import githubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";
import profilePhoto from "./assets/profile-photo.webp";
import { PixelButton } from "./components/PixelButton";

export function App() {
  return (
    <>
      <nav></nav>

      <header className="section-container">
        <h1>
          Hi!
          <br />
          I'm MARTÍN MENDIETA
        </h1>
        <h2 id="role">Software Engineering Student</h2>
        <h2 id="role-focus">&lt; Front-end /&gt;</h2>
        <img id="profile-photo" src={profilePhoto} alt="Martín Mendieta profile photo" />
        <div id="socials-cv">
          <a href=""><img src={githubIcon} alt="Github icon" /></a>
          <a href=""><img src={linkedinIcon} alt="Linkedin icon" /></a>
          <PixelButton text="Download CV" onClick={() => { }} />
        </div>
      </header>

      <div id="experience" className="section-container"></div>

      <div id="projects" className="section-container"></div>

      <div id="skills" className="section-container"></div>

      <div id="about-me" className="section-container"></div>
    </>
  );
}
