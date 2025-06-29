import { IconButton, Grid } from '@mui/material'
import React from 'react'
import SvgIconInstagram from './SvgIconInstagram'
import SvgIconGitHub from './SvgIconGitHub'
import SvgIconLinkedin from './SvgIconLinkedin'

const Footer = () => {
  return (
    <footer>
      <Grid style={{paddingTop:'50px'}}>

      <div>
        <IconButton href='https://github.com/shumilika'><SvgIconGitHub/></IconButton>
        <IconButton href='https://www.linkedin.com/in/polina-shumilina/'><SvgIconLinkedin/></IconButton>
        <IconButton href='https://www.instagram.com/shumilika/'><SvgIconInstagram/></IconButton>
      </div>
        <div className='copyright'><p>© 2025 Shumilika. Design inspired by an existing example.</p></div>
      </Grid>
    </footer>
  )
}

export default Footer
