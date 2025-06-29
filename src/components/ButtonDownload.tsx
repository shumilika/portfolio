'use client';
import { Button } from '@mui/material'
import React from 'react'
import SvgIconDownload from './SvgIconDownload'
import styles from '../styles/Button.module.css'
import {useTranslations} from 'next-intl';



const ButtonDownload = () => {
 
  const t = useTranslations('Buttons');
   
  

  return (
    <Button 
      className={styles.btn}
      variant="contained"
      href='/files/Polina_Shumilina_frontend_developer.pdf'
      download
      startIcon={<SvgIconDownload/>}
    >{t('download_btn')}
  
</Button>
  )
}

export default ButtonDownload