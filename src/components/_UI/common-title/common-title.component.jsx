import './common-title.styles.scss';

function CommonTitle({ text, color }) {

    const style = 
        color === "white" ? "section-title__white" : "section-title__black";	
   
    return(
        <h4 className={`section-title  ${style}`}>
            {text}
        </h4>
    )

}

export default CommonTitle;