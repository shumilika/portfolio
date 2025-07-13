'use client'
import React from 'react'
import styles from '../styles/Experience.module.css'
import { Chip, Grid } from '@mui/material'
import { useTranslations } from 'next-intl'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const ExperienceSection = () => {

  const t = useTranslations('Experience');

  return (
    <div className={styles.experienceBox}>
 <Grid size={12} sx={{ 
      textAlign:'center'
    }}>
      <h2 className='standard_header' >{t('title')}</h2>
    </Grid>
   <div style={{paddingBottom:'20px'}}>
   <VerticalTimeline>
  <VerticalTimelineElement
    intersectionObserverProps={{
      rootMargin: '0px 0px -40px 0px',
      triggerOnce: false,
    }}
    className={`vertical-timeline-element--work ${styles.timeline_element}`}
    date="03 - 12.2024"
    iconStyle={{ background: 'rgb(174, 148, 79)',border:'2px solid #fff', color: '#fff'}}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">TXTsoft Taiwan</h4>
    <div className={styles.chips}>
    <Chip label='React' />
    <Chip label='JavaScript' />
    <Chip label='Postman' />
    <Chip label='Git' />
    <Chip label='GitHub' />
    <Chip label='Swagger' />
    <Chip label='API' />
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    intersectionObserverProps={{
      rootMargin: '0px 0px -40px 0px',
      triggerOnce: false,
    }}
    className={`vertical-timeline-element--work ${styles.timeline_element}`}
    date="05.2022 - 10.2023"
    iconStyle={{ background: 'rgb(174, 148, 79)',border:'2px solid #fff', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
    <div className={styles.chips}>
    <Chip label='React' />
    <Chip label='TypeScript' />
    <Chip label='Next JS' />
    <Chip label='Git' />
    <Chip label='GitHub' />
    <Chip label='API' />
    <Chip label='Firebase' />
    </div>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
  className={styles.hourGlassBox}
    iconStyle={{ background: 'rgb(174, 148, 79)',border:'2px solid #fff', color: '#fff' }}
    icon={<HourglassTopIcon />}
  />
</VerticalTimeline>
   </div>
    </div>
  )
}

export default ExperienceSection