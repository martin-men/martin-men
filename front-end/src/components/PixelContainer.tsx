import "../styles/PixelContainers.css";
import { PixelCarousel } from "./PixelCarousel";

type PixelContainerProps = {
  icon: string;
  title: string;
  description: string;
  images: string[] | null;
  linkText?: string;
  link?: string;
};

export function PixelContainer({
  icon,
  title,
  description,
  images,
  linkText,
  link,
}: PixelContainerProps) {
  return (
    <article className="px-cont">
      <div className="px-cont px-cont-layer-0"></div>
      <div className="px-cont px-cont-layer-1"></div>
      <div className="px-cont px-cont-layer-2">
        <div className="px-container-cover">
          <img
            className="px-cont-icon"
            src={`/assets/icons/${icon}`}
            alt="Experience icon"
          />
          <h3 className="cont-title px-cont-title">{title}</h3>
        </div>
        <div className="hover-data">
          {images && <PixelCarousel images={images} />}
          <p>{description}</p>
          {link && linkText && <a href={link} target="_blank">{linkText}</a>}
        </div>
      </div>
    </article>
  );
}
