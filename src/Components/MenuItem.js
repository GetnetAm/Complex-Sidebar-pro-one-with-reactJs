import React, { useState } from "react";
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Dashboard } from '@mui/icons-material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';


function MenuItem(props) {
  const { name, subMenus, iconClassName, onClick } = props;
  const [expand, setExpand] =useState(false);
  return (
    <li onClick={props.onClick}>
      <a onClick={() => setExpand(!expand)} className="menu-item">
        <div className="menu-icon">
          
          
           {/* <iconClassName  className="icon"/> */}
           {<iconClassName  className="icon"/>}
          
        </div>
        <span>{name}</span>
      </a>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand ? "active" : " "}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <a>{menu.name}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default MenuItem;
