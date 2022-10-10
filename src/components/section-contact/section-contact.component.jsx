import './section-contact.styles.scss';
import { useTranslation } from 'react-i18next';

import PrimaryTitle from '../_UI/primary-title/primary-title.component';

function SectionContact() {
    const { t } = useTranslation();
    return(
        <section className="section-contacts">
            <PrimaryTitle titleText={t('section-contact.title')} color="white"/>

            <ul>
                <li>(19) 9 9291 3893</li>
                <li>marianadeluca.reis@gmail.com</li>
                <li>linkedin.com/in/marianadelucareis</li>
                <li>behance.net/marianadeluca</li>
            </ul>
        </section>
    );
}

export default SectionContact;