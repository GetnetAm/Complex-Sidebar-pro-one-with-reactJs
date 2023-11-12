import React from 'react'
import logo from "../assets/logo.png";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SearchIcon from '@mui/icons-material/Search';

function SideMenu(props) {
  return (
    <div className='side-menu inactive'>
      <div className='top-section'>
        <div className='logo'>
            <img src={logo} />

        </div>
        <div className='toggle-menu-btn'>
            <ArrowCircleLeftIcon variant="contained" />

        </div>

      </div>
    <div className='search-controller'>
      <button className='search-btn'>
      <i><SearchIcon /> </i>
      </button>
        <input type='text' placeholder='search' />

    </div>

      <div className='divider'>

      </div>

    </div>
  )
}

export default SideMenu
