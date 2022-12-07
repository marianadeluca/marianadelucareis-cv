import './section-about.styles.scss';
import { useTranslation } from 'react-i18next';

import PrimaryTitle from '../_UI/primary-title/primary-title.component';

function SectionAbout() {
    const { t } = useTranslation();
    return(
        <section className="section-about">
            <PrimaryTitle titleText={t('section-about.title')} color="white" />
         
            <div className="section-about__text">
                <p className="section-about__paragraph">{t('section-about.paragraph-1')}</p>
                <p className="section-about__paragraph">{t('section-about.paragraph-2')}</p>
            </div>
        </section>
    );
}

export default SectionAbout;