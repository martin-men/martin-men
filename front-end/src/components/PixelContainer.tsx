import "../styles/PixelContainer.css"

type PixelContainerProps = {
    icon: string;
    title: string;
}

export function PixelContainer( { icon, title }: PixelContainerProps ) {
    return (
        <article className="px-cont-gradient">
            <div id="px-cont-layer-0" className="px-cont-gradient"></div>
            <div id="px-cont-layer-1" className="px-cont-gradient"></div>
            <div id="px-cont-layer-2" className="px-cont-gradient">
                <img id="px-cont-icon" src={`/assets/${icon}`} alt="Experience icon" />
                <h3 id="px-cont-title">{title}</h3>
            </div>
        </article>
    )
}