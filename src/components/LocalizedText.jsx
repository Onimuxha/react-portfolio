import { useTranslation } from 'react-i18next';

const LocalizedText = ({ children }) => {
  const { i18n } = useTranslation();

  return (
    <span className={i18n.language === 'kh' ? 'font-khmer' : ''}>
      {children}
    </span>
  );
};

export default LocalizedText;