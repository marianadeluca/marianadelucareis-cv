import './common-title.styles.scss';

function CommonTitle({ titleText, color }) {

    const style = 
        color === "white" ? "section-title__white" : "section-title__black";	
   
    return(
        <h4 className={`section-title  ${style}`}>
            {titleText}
        </h4>
    )

}

export default CommonTitle;