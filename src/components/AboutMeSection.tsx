import { Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import styles from '../styles/AboutMe.module.css'
import photo from '../../public/images/avatar.jpg'
import SvgIconDot from './SvgIconDot'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const AboutMeSection = () => {
      const t = useTranslations('About');
  return (
    <div>
        <Stack className={styles.title}>
            <h2 className='standard_header'>{t('title')} 🌱</h2>
        </Stack>
        <Grid container
        
            direction={{  md: 'row' }}
            sx={{
                justifyContent:'space-around',
                marginBottom: '70px'
            }}
            
        >
                <Grid size={{ xs:6 ,sm: 4, md: 'auto' }}
                sx={{ mb: { xs: 3, md: 0 } }}
                >
                <Paper elevation={3} className={styles.imgBox}>
                    <Image src={photo.src} width={500} height={500} alt='avatar'  />
                </Paper>
                </Grid>
            <Grid size={{md:6, sm:6, xs:10}}>
            <Paper elevation={3} className={styles.cardAboutBox}>
                <div className={styles.cardHeader}>
                        <Stack
                        direction={'row'}
                    spacing={1}
                        >
                        <SvgIconDot color='#f24545'/>
                        <SvgIconDot color='#FDCB58'/>
                        <SvgIconDot color='#5abf86'/>
                        </Stack>
                </div>
                    <div className={styles.textBox}>
                        <span className={styles.wave}> {t('hi')} 👋 </span>
                        <br />
                        <p>
                        {t('1 path')} ⚛️  {t('2 path')} 🎨, {t('3 path')}
                        
                        </p>
                            <p>
                            {t('4 path')} 💡, {t('5 path')} 💃  {t('6 path')} ✈️ - {t('7 path')}.
                            </p>
                            <p>
                        {t('8 path')} 🤝.
                            </p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    </div>
  )
}

export default AboutMeSection