import './section-skills.styles.scss';
import { useTranslation } from 'react-i18next';

import PrimaryTitle from '../_UI/primary-title/primary-title.component';
import SecondaryTitle from './../_UI/secondary-title/secondary-title.component';

import { primarySkills, secondarySkills } from '../../data/skills.js'

function SectionSkills() {
    const { t } = useTranslation();

    return(
        <section className="section-skills">
            <PrimaryTitle titleText={t('section-skills.title')} color="black" />

            <div style={{gridArea: "primarySkill"}}>
                <SecondaryTitle subtitleText={t('section-skills.subtitle-1')} color="black" />

                <ul className="skills-list">
                    {
                    primarySkills.map((primarySkill) => (
                        <li className="skills-list__name" key={primarySkill.id}>{primarySkill.name}</li>
                    ))
                    }
                </ul>
            </div>

            <div style={{gridArea: "secondarySkill"}}>
                <SecondaryTitle subtitleText={t('section-skills.subtitle-2')} color="black" />

                <ul className="skills-list">
                    {
                        secondarySkills.map((secondarySkill) => (
                        <li className="skills-list__name" key={secondarySkill.id}>{secondarySkill.name}</li>
                        ))
                    }
                </ul>
            </div>

            <div style={{gridArea: "otherSkills"}}>
                <SecondaryTitle subtitleText={t('section-skills.subtitle-3')} color="black" />

                <ul className="another-skills-list">
                    <li>
                        {t('section-skills.another.layouts')} <small className="another-skills-list__small"> [Adobe Photoshop | Adobe Illustrator | Adobe InDesign | Figma]</small>
                    </li>

                    <li>Game Design <small className="another-skills-list__small">[Unity 3D | C# | Phaser]</small></li>

                    <li>Desktop Publishing (DTP) <small className="another-skills-list__small">[Adobe Indesign | Adobe Framemaker | Microsoft Word | Microsoft PowerPoint]</small></li>

                    <li>Web-based Training (WBT) <small className="another-skills-list__small">[Articulate Studio | Articulate Storyline]</small></li>
                </ul>
            </div>
        </section>
    )
}

export default SectionSkills;