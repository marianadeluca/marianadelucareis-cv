import './section-work-experience.styles.scss';
import { useTranslation } from 'react-i18next';

import PrimaryTitle from '../_UI/primary-title/primary-title.component';
import SecondaryTitle from './../_UI/secondary-title/secondary-title.component';

import { experiences } from '../../data/work-experience';

function SectionWorkExperience() {
    const { t } = useTranslation();

    const orderedExperiences = Object.keys(experiences).reverse().map((experience) => {
        return experiences[experience];
    });

    return(
        <section className="section-work-experience">
            <PrimaryTitle titleText={t('section-work-experience.title')} color="white" />
            {
                orderedExperiences.map((experience) => (
                    <div key={experience.key}>
                        <SecondaryTitle subtitleText={experience.name} color="white" />
                        <small>
                            [
                                {t(`section-work-experience.experiences.${experience.key}.role`)} | 
                                {t(`section-work-experience.experiences.${experience.key}.period`)}
                            ]
                        </small>

                        <p>{t(`section-work-experience.experiences.${experience.key}.text`)}</p>
                    </div>
                ))
            }
        </section>
    )


}

export default SectionWorkExperience;