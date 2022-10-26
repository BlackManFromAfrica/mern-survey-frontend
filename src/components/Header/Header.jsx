import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import ConstructionIcon from '@mui/icons-material/Construction';

const Header = () => {
  const isAuth = true;
  return (
    <div class="menu__container menu__container--4">
      <div class="menu">
        <NavLink to="/polls">Polls</NavLink>
        {isAuth ? (
          <NavLink to="/constructor">
            <ConstructionIcon fontSize="small" />
          </NavLink>) : (<></>)}
        <NavLink to="/statistic">Statistic</NavLink>
        <NavLink to="/about">About</NavLink>
        {isAuth ? <NavLink to="/">Log Out</NavLink>: <></>}
      </div>
    </div>
  );
};

export default Header;
