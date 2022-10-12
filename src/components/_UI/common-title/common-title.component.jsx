import './common-title.styles.scss';

function CommonTitle({ text, color }) {
   
    return(
        <h4 className={`common-title`}>
            {text}
        </h4>
    )

}

export default CommonTitle;