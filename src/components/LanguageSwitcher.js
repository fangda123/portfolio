import React from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'th', label: 'ไทย' },
  { code: 'zh', label: '中文' },
  { code: 'ru', label: 'Русский' },
  { code: 'ar', label: 'العربية' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl size="small">
      <Select
        value={i18n.language}
        onChange={handleChange}
        variant="outlined"
        sx={{
          color: 'primary.main',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main'
          },
          '& .MuiSvgIcon-root': {
            color: 'primary.main'
          }
        }}
      >
        {languages.map((lang) => (
          <MenuItem 
            value={lang.code} 
            key={lang.code}
            sx={{
              fontFamily: '"Fira Code", monospace',
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 0, 0.1)'
              }
            }}
          >
            {lang.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher; 