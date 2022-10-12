import './section-languages.styles.scss';
import { useTranslation } from 'react-i18next';

import PrimaryTitle from '../_UI/primary-title/primary-title.component';
import SecondaryTitle from '../_UI/secondary-title/secondary-title.component';

function SectionLanguages() {
    const { t } = useTranslation();
    return(
        <section className="section-languages">
            <PrimaryTitle titleText={t('section-languages.title')} color="white"/>
            <SecondaryTitle subtitleText={t('section-languages.english.name')} color="white"/>
            <small className='section-languages__small'>[{t('section-languages.english.level')}]</small>
            <SecondaryTitle subtitleText={t('section-languages.spanish.name')} color="white"/>
            <small className='section-languages__small'>[{t('section-languages.spanish.level')}]</small>
        </section>
    )
}

export default SectionLanguages;