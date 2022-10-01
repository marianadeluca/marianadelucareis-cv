import './header.styles.scss';
import { useTranslation, Trans } from 'react-i18next';

import Button from './../_UI/button/button.component';

const languages = {
    en: { nativeName:'English'},
    pt: { nativeName: 'Português' }
}

function Header() {
    const { t, i18n} = useTranslation();
    return (
        <header className="page-head">

        <div>
        {Object.keys(languages).map((language) => (
          <button 
            key={language} 
            style={{ fontWeight: i18n.resolvedLanguage === language ? 'bold' : 'normal' }} type="submit" 
            onClick={() => i18n.changeLanguage(language)}
          >
            {languages[language].nativeName}
          </button>
        ))}
      </div>
         
            <h1 className="page-head__title">Mariana De Luca Reis</h1>
            <span className="page-head__subtitle">
                <Trans i18nKey="tagline">developer</Trans>
            </span>

            <Button buttonText={t('btnDownload')} />
            <Button buttonText={t('btnContact')} />
        </header>
    );
}

export default Header;