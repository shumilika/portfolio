'use client';
import { useTranslations } from 'next-intl';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const AnimatedHeader = () => {
    const t = useTranslations('Header');
  return ( 
 
<TypeAnimation
preRenderFirstString={true}
  sequence={[
    t('job'),
    2000,
    '',
   1000,
  ]}
  repeat={Infinity}
/>
  )
}

export default AnimatedHeader