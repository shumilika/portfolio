import React from 'react'
import styles from '../styles/Skills.module.css'
import { Grid } from '@mui/material'
import SvgIconReact from './SvgIconReact'
import SvgIconNextJS from './SvgIconNextJs'
import SvgIconTypeScript from './SvgIconTypeScript'
import SvgIconHTML from './SvgIconHTML'
import SvgIconCSS from './SvgIconCSS'
import SvgIconRedux from './SvgIconReactRedux'
import SvgIconJavaScript from './SvgIconJS'
import SvgIconPostman from './SvgIconPostman'
import SvgIconMUI from './SvgIconMUI'
import SvgIconAntDesign from './SvgIconAntDesign'
import SvgIconFirebase from './SvgIconFirebase'
import SvgIconGit from './SvgIconGit'
import SvgIconLinux from './SvgIconLinux'
import { useTranslations } from 'next-intl'

const SkillsSection = () => {

  const t = useTranslations("Skills");

  const skillsArray = [
    {icon: <SvgIconReact/>, name: 'React'}, 
    {icon: <SvgIconNextJS/>, name: 'Next.js'},  
    {icon: <SvgIconTypeScript/>, name: 'TypeScript'}, 
    {icon: <SvgIconHTML/>, name: 'HTML 5'}, 
    {icon: <SvgIconCSS/>, name: 'CSS 3'}, 
    {icon: <SvgIconRedux/>, name: 'Redux'}, 
    {icon: <SvgIconJavaScript/>, name: 'JavaScript'}, 
    {icon: <SvgIconPostman/>, name: 'Postman'},
    {icon: <SvgIconMUI/>, name: 'MUI'}, 
    {icon: <SvgIconAntDesign/>, name: 'Ant Design'}, 
    {icon: <SvgIconFirebase/>, name: 'Firebase'}, 
    {icon: <SvgIconLinux/>, name: 'Linux'},
    {icon: <SvgIconGit/>, name:'Git'}
  ]
  return (
    <div className={styles.skillsBox}>
 <Grid size={12} sx={{ 
      textAlign:'center'
    }}>
      <h2 className='standard_header' >{t('title')}</h2>
    </Grid>
    <Grid container spacing={3} sx={{
      justifyContent:'center',
      alignItems:'center'
    }}>
    {skillsArray.map((skill, index) => (

          <Grid key={index} minWidth={{ xs:115, md:'auto' }}>
            <div className={styles.skillItem}>
           <div>
            {skill.icon}
            </div>
           <p>{skill.name}</p>
            </div>
            </Grid>
        ))}
      
      


    </Grid>
    </div>
  )
}

export default SkillsSection