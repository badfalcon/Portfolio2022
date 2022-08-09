import { useTranslation } from 'react-i18next';

export const Language = () => {
  const { i18n } = useTranslation();
  return <div>
    <nav>
      <ul>
        <li>
          <button type="submit" onClick={() => i18n.changeLanguage('ja')}>
            JA
          </button>
        </li>
        <li>
          <button type="submit" onClick={() => i18n.changeLanguage('en')}>
            EN
          </button>
        </li>
      </ul>
    </nav>
  </div>
}

export default Language;