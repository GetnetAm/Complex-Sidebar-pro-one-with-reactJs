import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png";
import user from "../assets/GetnetD.jpg";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SearchIcon from '@mui/icons-material/Search';
import { Dashboard } from '@mui/icons-material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ListAltIcon from '@mui/icons-material/ListAlt';
import  MenuItem  from './MenuItem';


const menuItems =[
            
  {name: "Dashboard", to: "/", iconClassName:'DesignServicesIcon'},
  {name: "Content", to: "/content",iconClassName:"ListAltIcon",
subMenus:[{name: "Courses"}, {name:"Video"}, {name: "Questions"}],
},
  {name: "Design", to: "/design",iconClassName:"DesignServicesIcon"}
];

function SideMenu(props) {
  const [inactive, setInactive]= useState(false);

  useEffect(()=>{
    if(inactive){
      document.querySelectorAll(".sub-menu").forEach((e1)=>{
        e1.classList.remove("active");
      });
    }

  }, [inactive])
  return (
    <div className={`side-menu ${inactive ? "inactive" :""}`}>
      <div className='top-section'>
        <div className='logo'>
            <img src={logo} />

        </div>
        <div className='toggle-menu-btn' onClick={() => setInactive(!inactive)}>
           {inactive ?( <ArrowCircleRightIcon /> ):( <ArrowCircleLeftIcon variant="contained" /> )}

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

      <div className='main-menu'>
        <ul>

          {menuItems.map((menuItem, index)=>(
            <MenuItem
            key={index}
            name={menuItem.name}
            to={menuItem.to}
            subMenus={menuItem.subMenus || []}
            iconClassName={menuItem.iconClassName}
            onClick={()=>{
              if(inactive){
                setInactive(false);
              }
            }}
            
            
            />
          ))}



          {/* <li>
            <a 
            className='menu-item'>
            <div className='menu-icon'>
             <i> <Dashboard className='icon' /></i>
            </div>
            <span> Dashboard </span>
            </a>
          </li>

          <MenuItem
          name={"Content"}
          subMenus={[{name: "Courses"}, {name:"video"}, {name: "Questions"}]}

          
          />
          

          <li>
            <a 
            className='menu-item'>
            <div className='menu-icon'>
             <i> <DesignServicesIcon className='icon' /></i>
            </div>
          <span>Design</span> 
            </a>
          </li> */}
        </ul>

      </div>

      <div className='side-menu-footer'>
        <div className='avater'>
          <img src={user} alt='user' />
        </div>

        <div className='user-info'>
          <h5>Getnet Amsalu</h5>
          <p>getnet@gamil.com</p>

        </div>
      </div>

    </div>
  )
}

export default SideMenu
