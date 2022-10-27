import './header.styles.scss';
import { useTranslation, Trans } from 'react-i18next';

import Button from './../_UI/button/button.component';

const languages = {
    en: { nativeName:'EN'},
    pt: { nativeName: 'PT' }
}

function Header() {
    const { t, i18n} = useTranslation();
   
    return (
        <header className="page-header">

          <div className='page-header__languages'>
            {Object.keys(languages).map((language) => (
              <button
                className={`page-header__button 
                  ${i18n.resolvedLanguage === language ? 'page-header__button--active' : 'page-header__button--inactive'}`}
                key={language} 
                style={{ fontWeight: i18n.resolvedLanguage === language ? '500' : '300' }} type="submit" 
                onClick={() => i18n.changeLanguage(language)}
              >
                {languages[language].nativeName}
              </button>
            ))}
          </div>
         
          <div className='page-header__titles'>
            <h1 className="page-header__title">Mariana De Luca Reis</h1>
            <span className="page-header__subtitle">
                <Trans i18nKey="tagline">developer</Trans>
            </span>
          </div>

          <div className="page-header__buttons">          
            <Button buttonText={t('btnDownload')} />
            <Button buttonText={t('btnContact')} />
          </div>
        </header>
    );
}

export default Header;