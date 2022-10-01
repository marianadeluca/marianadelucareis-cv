import './section-skills.styles.scss';
import { useTranslation } from 'react-i18next';

import PrimaryTitle from '../_UI/primary-title/primary-title.component';
import SecondaryTitle from './../_UI/secondary-title/secondary-title.component';

function SectionSkills() {
    const { t } = useTranslation();
    return(
        <section className="section-skills">
            <PrimaryTitle titleText={t('section-skills.title')} color="black" />
            

            <SecondaryTitle subtitleText={t('section-skills.subtitle-1')} color="black" />

            <ul>
                <li>
                
                </li>
            </ul>

            <SecondaryTitle subtitleText={t('section-skills.subtitle-2')} color="black" />

            <ul>
                <li>
                
                </li>
            </ul>

            <SecondaryTitle subtitleText={t('section-skills.subtitle-3')} color="black" />

            <ul>
                <li>
                
                </li>
            </ul>
        </section>
    )

}

export default SectionSkills;