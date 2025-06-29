import { Box, Grid } from '@mui/material'
import React from 'react'
import ProjectCard from './ProjectCard'
import styles from '../styles/Projects.module.css'
import { useTranslations } from 'next-intl'

const ProjectsSection = () => {

  const t = useTranslations('Projects')

  return (
    <Box className={styles.projectsBox}>
    <Grid size={12} sx={{ 
      textAlign:'center'
    }}>
      <h2 className='standard_header'>{t('title')}</h2>
    </Grid>
    <Grid container
    spacing={3}
    sx={{
      justifyContent: "space-around",
      alignItems: "center",
    }} >
     
      <Grid>
        <ProjectCard 
          title='Clean Services' 
          imgSrc="/images/cleanIt_screenshot.png"  
          imgSlide1='/images/deepclean.png'
          imgSlide2='/images/bookclea.png'
          gitHubUrl='https://github.com/shumilika/cleanit'
          liveDemo='https://cleanit-red.vercel.app/'
          description={t('clean description')}
          chips={['React', 'Firebase','Redux','Material UI','Git','GitHub']}
        />
      </Grid>
      <Grid>
        <ProjectCard 
          title='Tea Store' 
          imgSrc="/images/teaStore_screenshot.png"
          imgSlide1='/images/shopte.png'
          imgSlide2='/images/fagcart.png' 
          gitHubUrl='https://github.com/shumilika/teaStore'
          liveDemo='https://tea-store-one.vercel.app/'
          description={t('tea description')}
          chips={['React', 'Firebase','Redux','React Router','Ant Design','Git','GitHub', 'Axios']}
        />
      </Grid>
      <Grid>
        <ProjectCard 
          title='Recipe app' 
          imgSrc="/images/recipeApp_screenshot.png"
          imgSlide1='/images/catalog_recipes.png'
          imgSlide2='/images/currentrecipe.png' 
          gitHubUrl='https://github.com/shumilika/recipes_book'  
          liveDemo='https://recipes-book-eta.vercel.app/'
          description={t('recipe description')}
          chips={['React','Next.js','TypeScript','Ant Design', 'Firebase','Git','GitHub']}
        />
      </Grid>
  
    </Grid>
    </Box>
    
  )
}

export default ProjectsSection