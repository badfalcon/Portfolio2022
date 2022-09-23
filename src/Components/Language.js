import {useState} from "react";
import LanguageIcon from '@mui/icons-material/Language';
import {
  Box,
  FormControl, MenuItem, Select,
} from "@mui/material";
import i18n from "i18next";
import {SelectChangeEvent} from "@mui/material";

export const Language = () => {
  const [lang, setLang] = useState(i18n.language);
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    console.log("handle change");
    let value = event.target.value;
    i18n.changeLanguage(value).then(() => setLang(value));
  }

  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);
  }

  const handleOpen = () => {
    console.log("handleOpen");
    setOpen(true);
  }
  return <Box sx={{display: 'inline-flex', alignItems: 'center'}}>
    <LanguageIcon onClick={handleOpen} color="action" />
    <FormControl variant="standard" >
      <Select
          id="language_select"
          value={lang}
          label="Language"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
      >
        <MenuItem value="ja">JA</MenuItem>
        <MenuItem value="en">EN</MenuItem>
      </Select>
    </FormControl>
  </Box>
}

export default Language;