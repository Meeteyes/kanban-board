import React from "react";
import logo from "../assets/logo.jpeg";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Nav = () => {
  return (
    <div className="nav-container">
      <img className="logo-image" src={logo} alt="logo" />
      <div className="icons-group">
        <HomeOutlinedIcon color="action" fontSize="large" />
        <CheckBoxOutlinedIcon color="action" fontSize="large" />
        <EmailOutlinedIcon color="action" fontSize="large" />
        <PersonOutlineOutlinedIcon color="action" fontSize="large" />
        <CalendarMonthOutlinedIcon color="action" fontSize="large" />
        <FolderOutlinedIcon color="action" fontSize="large" />
      </div>
      <StarOutlineRoundedIcon color="action" fontSize="large" />
      <SettingsRoundedIcon
        className="setting-icon"
        color="action"
        fontSize="large"
      />
    </div>
  );
};

export default Nav;
