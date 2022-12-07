import './primary-title.styles.scss';

function PrimaryTitle({ titleText, color, height }) {

    const style = 
        color === "white" ? "primary-title__white" : "primary-title__black";
    
    const heightProperty = 
        height === undefined ? "" : "primary-title__" + height;	
   
    return(
        <h2 className={`primary-title  ${style} ${heightProperty}`}>
            {titleText}
        </h2>
    )

}

export default PrimaryTitle;