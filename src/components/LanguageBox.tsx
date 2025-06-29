'use client';
import { IconButton, Stack } from '@mui/material'
import React from 'react'
import SvgIconUAFlag from './SvgIconUAFlag'
import SvgIconUKFlag from './SvgIconUKFlag'
import { useRouter } from 'next/navigation';
import styles from '../styles/LanguageBox.module.css'
import { useLocale } from 'next-intl';

const LanguageBox = () => {
  const router = useRouter();
  const locale = useLocale();

  
  
  const changeLanguage = (locale: string) => {
    const nextLocale = locale
    router.replace(`/${nextLocale}`)
  };

  return (
    <div className={styles.languageBox}>

    <Stack
   
      direction='row'
      sx={{
        justifyContent:'center'
      }}
    >
      <IconButton disableRipple onClick={() => changeLanguage('en')}>
        <SvgIconUKFlag active={locale === 'en'}/>
      </IconButton>
      <IconButton disableRipple onClick={() => changeLanguage('ua')}>
        <SvgIconUAFlag active={locale === 'ua'}/>
      </IconButton>
    </Stack>
    </div>
  )
}

export default LanguageBox