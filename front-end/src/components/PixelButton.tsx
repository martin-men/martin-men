import "../styles/PixelButton.css"

type PixelButtonProps = {
    text: string;
    size?: "small" | "normal";
    onClick: () => void;
}

export function PixelButton( { text, size, onClick }: PixelButtonProps ) {
    return (
        <button className={"pixel-btn " + (size === "small"? "small-pixel-btn" : "normal-pixel-btn")} onClick={() => onClick()}>
            <span>{text}</span>
            <div className="layer-1"></div>
            <div className="layer-2"></div>
        </button>
    )
}