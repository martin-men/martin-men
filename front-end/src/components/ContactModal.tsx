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
        style={{ transform: show ? "translateY(0%)" : "translateY(100%)" }}
      >
        <div
          id="layer-1"
          className="layer"
          style={{ transform: show ? "translateY(0%)" : "translateY(-200%)" }}
        ></div>
        <div
          id="layer-2"
          className="layer"
          style={{ transform: show ? "translateY(0%)" : "translateY(-100%)" }}
        ></div>
        <h2
          className="title-text"
          style={{ transform: show ? "scale(100%)" : "scale(0%)" }}
        >
          &lt;Contact me/&gt;
        </h2>
        <div id="data-image">
          <div id="data">
            <input
              type="text"
              name="name"
              placeholder="Name"
              id="name-input"
              className="px-input"
              style={{ transform: show ? "scale(100%)" : "scale(0%)" }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email-input"
              className="px-input"
              style={{ transform: show ? "scale(100%)" : "scale(0%)" }}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="px-input"
              style={{ transform: show ? "scale(100%)" : "scale(0%)" }}
              required
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
                style={{ transform: show ? "scale(100%)" : "scale(0%)" }}
              />
            </div>
          </div>
          <img
            src="/assets/icons/computer-icon.svg"
            alt="Computer icon"
            style={{ transform: show ? "scale(100%)" : "scale(0%)" }}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          rows={10}
          className="px-input"
          style={{ transform: show ? "scale(100%)" : "scale(0%)" }}
        ></textarea>
        <PixelButton text="Send" size="small" buttonType="submit" />
      </form>
    </div>
  );
};
