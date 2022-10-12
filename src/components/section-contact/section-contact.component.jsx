import './section-contact.styles.scss';
import { useTranslation } from 'react-i18next';
import { FaBehanceSquare, FaEnvelopeSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

import PrimaryTitle from '../_UI/primary-title/primary-title.component';

function SectionContact() {
    const { t } = useTranslation();
    return(
        <section className="section-contact">
            <PrimaryTitle titleText={t('section-contact.title')} color="white"/>

            <ul className="section-contact__list">
                <li>
                    <FaWhatsappSquare className="section-contact__icon"/>
                    <a 
                        className="section-contact__link" 
                        href="https://wa.me/5519992913893" 
                        target="_blank" rel="noreferrer">
                        {t('section-contact.phone')}
                    </a>
                </li>
                <li>
                    <FaEnvelopeSquare className="section-contact__icon"/>
                    <a
                        className="section-contact__link"  
                        href="mailto:marianadeluca.reis@gmail.com?subject=Mail%20from%20the%20Web%20Site" target="_blank" rel="noreferrer">
                        marianadeluca.reis@gmail.com
                    </a>
                </li>
                <li>
                    <FaLinkedin className="section-contact__icon"/>
                    <a
                        className="section-contact__link"
                        href="https://www.linkedin.com/in/marianadelucareis/" 
                        target="_blank" rel="noreferrer">
                        linkedin.com/in/marianadelucareis
                    </a>
                </li>
                <li>
                    <FaBehanceSquare className="section-contact__icon"/>
                    <a 
                        className="section-contact__link"
                        href="https://www.behance.net/marianadeluca" 
                        target="_blank" rel="noreferrer">
                        behance.net/marianadeluca
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default SectionContact;