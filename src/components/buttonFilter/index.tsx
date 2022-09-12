import React from 'react'
import './btf.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const ButtonFilter = () => {
  return (
    <button className='button-filter'>
        <span>Bộ lọc</span>
        <FilterAltIcon sx={{color:"#ddd"}}/>
    </button>
  )
}

export default ButtonFilter