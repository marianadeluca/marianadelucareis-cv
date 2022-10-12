import './section-education.styles.scss'
import { useTranslation } from 'react-i18next';

import CommonTitle from './../_UI/common-title/common-title.component';
import PrimaryTitle from '../_UI/primary-title/primary-title.component';
import SecondaryTitle from './../_UI/secondary-title/secondary-title.component';


function SectionEducation() {
    const { t } = useTranslation();

    return(
        <section className="section-education">
            <PrimaryTitle titleText={t(`section-education.title`)} color="black" />
            <div className='section-education__degree'>
                <SecondaryTitle className="section-education__titles" subtitleText={t(`section-education.games.title`)} color="black"/>
                <small className='section-education__small'>[2017 - 2021]</small>
                <p className='section-education__paragraph'>{t(`section-education.games.text`)}</p>
            </div>

            <div className='section-education__degree'>
                <SecondaryTitle className="section-education__titles" subtitleText={t(`section-education.design.title`)} color="black"/>
                <small className='section-education__small'>[2008 - 2014]</small>
                <p className='section-education__paragraph'>{t(`section-education.design.text`)}</p>
            </div>

            <div className='section-education__degree'>
                <CommonTitle text={t(`section-education.other.title`)} color="black" />
                <ul className='section-education__list'>
                    <li>

                        <div className="section-education__list-content">
                        {t(`section-education.other.courses.plsql`)}
                        <small className='section-education__small'>[Thomson Reuters Campinas | 2019]</small>
                        </div>
                    </li>

                    <li>
                        <div className="section-education__list-content">
                            {t(`section-education.other.courses.angular`)}
                            <small className='section-education__small'>[Thomson Reuters Campinas | 2019]</small>
                        </div>
                    </li>

                    <li>
                        <div className="section-education__list-content">
                            {t(`section-education.other.courses.ux`)}
                            <small className='section-education__small'>[São Paulo Digital School | 2016] </small>
                        </div>
                    </li>

                    <li>
                        <div className="section-education__list-content">
                            {t(`section-education.other.courses.english`)}
                            <small className='section-education__small'>[Fatec Americana and Genesse Community College (GCC - New York) | 2015]</small>
                        </div>
                    </li>

                    <li>
                        <div className="section-education__list-content">
                            {t(`section-education.other.courses.sebrae.title`)}
                            <small className='section-education__small'>[SEBRAE - Piracicaba | 2015]</small>

                            <p className='section-education__description'>{t(`section-education.other.courses.sebrae.description`)}</p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>
    )
}

export default SectionEducation;