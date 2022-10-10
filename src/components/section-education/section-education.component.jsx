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
            <div className=''>
                <SecondaryTitle className="section-education__titles" subtitleText={t(`section-education.games.title`)} color="white"/>
                <small>[2017 - 2021]</small>
                <p>{t(`section-education.games.text`)}</p>
            </div>

            <div className=''>
                <SecondaryTitle className="section-education__titles" subtitleText={t(`section-education.design.title`)} color="white"/>
                <small>[2008 - 2014]</small>
                <p>{t(`section-education.design.text`)}</p>
            </div>

            <div className=''>
                <CommonTitle text={t(`section-education.other.title`)} color="black" />
                <ul>
                    <li>{t(`section-education.other.courses.plsql`)}<small>[Thomson Reuters Campinas | 2019]</small></li>
                    <li>{t(`section-education.other.courses.angular`)}<small>[Thomson Reuters Campinas | 2019]</small></li>
                    <li>{t(`section-education.other.courses.ux`)}<small>[São Paulo Digital School | 2016] </small></li>
                    <li>{t(`section-education.other.courses.english`)}<small>[Fatec Americana and Genesse Community College (GCC - New York) | 2015]</small></li>
                    <li>
                        {t(`section-education.other.courses.sebrae.title`)}<small>[SEBRAE - Piracicaba | 2015]</small>

                        <p>{t(`section-education.other.courses.sebrae.description`)}</p>
                    </li>
                </ul>
            </div>
            
        </section>
    )
}

export default SectionEducation;