import './primary-title.styles.scss';

function PrimaryTitle({ titleText, color }) {

    const style = 
        color === "white" ? "primary-title__white" : "primary-title__black";	
   
    return(
        <h2 className={`primary-title  ${style}`}>
            {titleText}
        </h2>
    )

}

export default PrimaryTitle;