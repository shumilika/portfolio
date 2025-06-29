import { SvgIcon } from '@mui/material'
import React from 'react'

interface SvgColorProps{
    color:string;
}

const SvgIconDot: React.FC<SvgColorProps> = ({color}) => {
  return (
    <SvgIcon
      sx={{
        fontSize:'0.7rem'
      }}
    >
      <svg 
        viewBox="9.5 9.5 5 5" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none"
      >
        <path 
          d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 
          9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" 
          fill={color}
        />
      </svg>

    </SvgIcon>
  )
}

export default SvgIconDot