import "../styles/ContactModal.css";
import { PixelButton } from "./PixelButton";

type ContactModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const ContactModal = ({ show, setShow }: ContactModalProps) => {
  return (
    <div
      id="contact-modal-bg"
      style={{ transform: show ? "scale(100%)" : "scale(0%)" }}
    >
      <img
        src="/assets/icons/close-icon.svg"
        id="modal-close-icon"
        onClick={() => {
          setShow(false);
        }}
        alt="Close icon"
      />
      <form
        action="https://formsubmit.co/marmenthor@gmail.com"
        method="POST"
        autoComplete="off"
      >
        <div id="layer-1" className="layer"></div>
        <div id="layer-2" className="layer"></div>
        <h2 className="title-text">&lt;Contact me/&gt;</h2>
        <div id="data-image">
          <div id="data">
            <input
              type="text"
              name="name"
              placeholder="Name"
              id="name-input"
              className="px-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email-input"
              className="px-input"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="px-input"
            />
            <input
              type="hidden"
              name="_subject"
              value="Portfolio new message!"
            ></input>
            <div id="receiver">
              <span>To: </span>
              <input
                type="email"
                value="marmenthor@gmail.com"
                readOnly
                className="px-input"
              />
            </div>
          </div>
          <img src="/assets/icons/computer-icon.svg" alt="Computer icon" />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          rows={10}
          className="px-input"
        ></textarea>
        <PixelButton text="Send" size="small" buttonType="submit" />
      </form>
    </div>
  );
};
