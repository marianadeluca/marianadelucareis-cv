import './footer.styles.scss';

function Footer() {
    return(
        <footer className='page-footer'>
           <p>Mariana De Luca Reis @{new Date().getFullYear()}</p>
           <a className="page-footer__link" href="https://marianadeluca.github.io/marianadelucareis-cv">marianadeluca.github.io</a>
        </footer>
    )
}

export default Footer;