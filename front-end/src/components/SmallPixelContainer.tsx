import "../styles/PixelContainers.css";

type SmallPixelContainerProps = {
  icon: string;
  title: string;
  link?: string;
};

export function SmallPixelContainer({
  icon,
  title,
  link,
}: SmallPixelContainerProps) {
  return (
    <div className="px-cont small-px-parent-layer">
      {link && (
        <a className="small-px-cont-link" href={link} target="_blank">
          Certified
        </a>
      )}
      <div className="px-cont small-px-cont-layer-0"></div>
      <div className="px-cont small-px-cont-layer-1"></div>
      <div className="px-cont small-px-cont-layer-2">
        <div className="px-container-cover">
          <h3 className="cont-title small-px-cont-title">{title}</h3>
          <img
            className="px-cont-icon"
            src={`/assets/icons/${icon}`}
            alt="Experience icon"
          />
        </div>
      </div>
    </div>
  );
}
