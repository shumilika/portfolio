'use client';
import React from 'react'
import {useTranslations} from 'next-intl';
import ButtonDownload from './ButtonDownload';
import SvgIconCode from './SvgIconCode';
import { Stack } from '@mui/material';
import AnimatedHeader from './AnimatedHeader';


const Header = () => {
    const t = useTranslations('Header');

  return (
    <header style={{height:'400px', paddingTop:'250px'}}>
        <Stack
            direction={'column'}
            spacing={0}
            sx={{
                justifyContent:'center',
                alignItems:'center'
            }}
        >
         <div>
            <Stack
                sx={{
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
         <SvgIconCode /> 
            </Stack>
            </div>
     <div>
        <Stack
            spacing={2}
            sx={{
                justifyContent:'center',
                alignItems:'center'
            }}
        >
        <h1>{t('name')}</h1>
      <div className='title'>
     <p> <AnimatedHeader/></p>
      </div>
       <ButtonDownload/>
        </Stack>
     </div>
         

        </Stack>
    </header>
  )
}

export default Header