// import { useTranslation } from 'react-i18next';
// import { withTranslation } from 'react-i18next';
// import i18n from "../i18n";
// import i18n from "i18next";

export const Language = (props) => {
  // const { t, i18n } = useTranslation();
  return <div>
    <nav>
      <ul>
        <li>
          <button type="submit" onClick={() => props.click('ja')}>
            JA
          </button>
        </li>
        <li>
          <button type="submit" onClick={() => props.click('en')}>
            EN
          </button>
        </li>
      </ul>
    </nav>
  </div>
}

export default Language;