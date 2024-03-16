import "../styles/PixelButton.css"

type PixelButtonProps = {
    text: string;
    onClick: () => void;
}

export function PixelButton( { text, onClick }: PixelButtonProps ) {
    return (
        <button onClick={() => onClick()}>
            <span>{text}</span>
            <div id="layer-1"></div>
            <div id="layer-2"></div>
        </button>
    )
}