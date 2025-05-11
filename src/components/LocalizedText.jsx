import { useTranslation } from 'react-i18next';

const Text = ({ children }) => {
  const { t, i18n } = useTranslation();

  const content = typeof children === 'string' ? t(children) : children;

  return <span className={i18n.language === 'kh' ? 'font-khmer' : ''}>{content}</span>;
};

export default Text;
