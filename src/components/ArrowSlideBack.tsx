import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';

interface ArrowBackProps {

  onClick?:()=>void;
}

const ArrowSlideBack:React.FC<ArrowBackProps> = ({ onClick}) => {
  return (
    <IconButton
    disableRipple
    sx={{
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      '--IconButton-hoverBg': 'transparent', 
    }}
    onClick={onClick}
    size='small'
  >
    <ArrowBackIosIcon  
    sx={{
      color:'#e9d5a1',
      fontSize:80,
      transition: 'color 0.5s ease',
      '&:hover': {
      color: '#caae79', 
    },
     '@media (max-width: 700px)': {
      fontSize: 50, 
    },
      }}/>
  </IconButton>
  )
}

export default ArrowSlideBack

