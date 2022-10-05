import React from 'react'
import './btf.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Menu, MenuItem } from '@mui/material';
const ButtonFilter = () => {
  const handleForm = () => {

  }
  const handleClose = () => {

  }
  return (
    <div>
      <button onClick={handleForm} className='button-filter'>
        <span>Bộ lọc</span>
        <FilterAltIcon sx={{ color: "#ddd" }} />
      </button>
      <Menu open={false}
        onClose={handleClose}
      >
        <MenuItem>1-2</MenuItem>
        <MenuItem>1-2</MenuItem>
        <MenuItem>1-2</MenuItem>
      </Menu>
    </div>
  )
}

export default ButtonFilter