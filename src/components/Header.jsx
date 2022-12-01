import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {logout, selectIsAuth} from '../redux/slices/auth'
const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const onClickLogout = ()=>{
    dispatch(logout())
    window.localStorage.removeItem('token')
  }
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["polls"]}
    >
        <Menu.Item key="polls">
          <NavLink to="/">Polls</NavLink>
        </Menu.Item>
        <Menu.Item key="statistic">
          <NavLink to="/statistic">Statistic</NavLink>
        </Menu.Item>
        <Menu.Item key="about">
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
   

      {isAuth ? (
        <>
          <Menu.Item key="constructor">
            <NavLink to="/constructor">Creator</NavLink>
          </Menu.Item>
          <Menu.Item key="results">
            <NavLink to="/results">My Polls</NavLink>
          </Menu.Item>
          <Menu.Item key="logout">
            <p onClick = {onClickLogout}>Log Out</p>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="login">
            <NavLink to="/login">Login</NavLink>
          </Menu.Item>
          <Menu.Item key="register">
            <NavLink to="/register">Register</NavLink>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default Header;
