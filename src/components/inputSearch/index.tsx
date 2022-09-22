import React, { useState } from 'react'
import './ips.css';
import img from '../../resource/image/1024px-Search_Icon.svg.png'
const InputSearch = () => {
  const [open, setOpen] = useState<any>("");
  const handleFocus = () => {
    setOpen("boder")
  }
  const fcn = () => {
    setOpen("")
  }
  return (
    <div className={`input-search ${open}`}>
      <img src={img} alt="" />
      <input onFocus={handleFocus} onBlur={fcn} placeholder='Tìm kiếm theo mã khách hàng ,tên ,SĐT khách hàng' />
    </div>
  )
}

export default InputSearch;