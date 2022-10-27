import './secondary-title.styles.scss';

function SecondaryTitle({ subtitleText, color, width }) {

    const subtitleStyle = 
        color === "white" ? "section-subtitle__white" : "section-subtitle__black";

   
    return(
        <h3 className={`section-subtitle  ${subtitleStyle}`} style={{maxWidth: width}}>
            {subtitleText}
        </h3>
    );
}

export default SecondaryTitle;