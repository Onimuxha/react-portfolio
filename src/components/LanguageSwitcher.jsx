import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => i18n.changeLanguage('en')}
        className={i18n.language === 'en' ? 'font-bold' : ''}
      >
        English
      </button>
      <button 
        onClick={() => i18n.changeLanguage('kh')}
        className={i18n.language === 'kh' ? 'font-bold' : ''}
      >
        ភាសាខ្មែរ
      </button>
      <button 
        onClick={() => i18n.changeLanguage('cn')}
        className={i18n.language === 'cn' ? 'font-bold' : ''}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;