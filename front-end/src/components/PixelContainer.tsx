import "../styles/PixelContainer.css";
import { PixelCarousel } from "./PixelCarousel";

type PixelContainerProps = {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  link?: string;
};

export function PixelContainer({
  icon,
  title,
  description,
  linkText,
  link,
}: PixelContainerProps) {
  return (
    <article className="px-cont-gradient">
      <div id="px-cont-layer-0" className="px-cont-gradient"></div>
      <div id="px-cont-layer-1" className="px-cont-gradient"></div>
      <div id="px-cont-layer-2" className="px-cont-gradient">
        <div id="px-container-cover">
          <img
            id="px-cont-icon"
            src={`/assets/${icon}`}
            alt="Experience icon"
          />
          <h3 id="px-cont-title">{title}</h3>
        </div>
        <div id="hover-data">
          <PixelCarousel
            images={[
              "https://picsum.photos/200",
              "https://picsum.photos/200/500",
              "https://picsum.photos/200",
            ]}
          />
          <p>{description}</p>
          {link && linkText && <a href={link} target="_blank">{linkText}</a>}
        </div>
      </div>
    </article>
  );
}
