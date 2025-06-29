import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

interface ArrowNextProps {

  onClick?:()=>void;
}

const ArrowSlideNext:React.FC<ArrowNextProps> = ({ onClick}) => {
  return (
    <IconButton
    disableRipple
    sx={{
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      '--IconButton-hoverBg': 'transparent', 
    }}
    onClick={onClick}
    size='small'
  >
    <ArrowForwardIosIcon 
    sx={{
      color:'#e9d5a1',
      fontSize:80,
      transition: 'color 0.5s ease',
      '&:hover': {
      color: '#caae79', 
    },
    }}/>
  </IconButton>
  )
}

export default ArrowSlideNext

