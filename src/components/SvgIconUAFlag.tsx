import { SvgIcon } from '@mui/material'
import React from 'react'


const SvgIconUAFlag = ({ active = false }: { active?: boolean }) => {
  return (
    <SvgIcon
    sx={{fontSize:'3rem',

        filter: active ? 'brightness(40%)' : 'none',
        transition: 'filter 0.2s ease'
    }}
    
    >
        <svg
         viewBox="0 0 36 36" 
         xmlns="http://www.w3.org/2000/svg" 
         xmlnsXlink="http://www.w3.org/1999/xlink" 
         aria-hidden="true" 
         role="img" 
         className="iconify iconify--twemoji" 
         preserveAspectRatio="xMidYMid meet" 
         fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path 
                    fill="#005BBB" 
                    d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z"
                >
                </path>
                <path 
                    fill="#FFD500" 
                    d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36v9z"
                >
                </path>
            </g>
        </svg>
    </SvgIcon>
  )
}

export default SvgIconUAFlag