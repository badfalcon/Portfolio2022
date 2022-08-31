import {useState} from "react";
import './Language.css';
import LanguageIcon from '@mui/icons-material/Language';
import {
  IconButton,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";
import i18n from "i18next";

export const Language = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [lang, setLang] = useState(i18n.language);

  const handleChange = (event,value) => {
    if(value !== null){
      i18n.changeLanguage(value).then(() => setLang(value));
    }
  }

  return <div className={'lang'}>
    <nav>
      {showLanguages &&
          <ToggleButtonGroup
              orientation="vertical"
              value={lang}
              exclusive
              onChange={handleChange}
          >
            <ToggleButton value="en" aria-label="en">
              EN
            </ToggleButton>
            <ToggleButton value="ja" aria-label="ja">
              JA
            </ToggleButton>
          </ToggleButtonGroup>
      }
    </nav>
    <IconButton className={'langToggleButton'} onClick={() => {
      setShowLanguages(!showLanguages)
    }}>
      <LanguageIcon fontSize={"large"}/>
    </IconButton>
  </div>
}

export default Language;