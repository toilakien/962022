import React from 'react'
import './ips.css';
import img from '../../resource/image/1024px-Search_Icon.svg.png'
const InputSearch = () => {
  return (
    <div className='input-search'>
            <img src={img} alt="" />
        <input placeholder='Tìm kiếm theo mã khách hàng ,tên ,SĐT khách hàng'/>
    </div>
  )
}

export default InputSearch;