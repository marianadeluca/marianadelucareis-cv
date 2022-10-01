import './button.styles.scss';

function Button({ buttonText, buttonAction }) {
    const toDo = buttonAction;
    return(
        <button className="btn-primary" type="button">
            {buttonText}
        </button>
    )

}

export default Button;