import React from "react";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import profile from "../assets/profile.jpeg";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <div className="left-line1">
          <h1>Planning/ Nombre del Proyecto</h1>
          <KeyboardArrowDownRoundedIcon color="action" />
          <StarOutlineRoundedIcon color="action" />
        </div>
        <div className="left-line2">
          <button className="btn-rounded">Presupestos</button>
          <button className="btn-rounded">Planning</button>
          <button className="btn-rounded">Certificaciones</button>
        </div>
      </div>
      <div className="topbar-right">
        <div className="right-line1">
          <HelpOutlineRoundedIcon color="action" />
          <ShareRoundedIcon color="action" />
          <input
            type="search"
            className="search-field"
            placeholder="Buscar"
          ></input>
          <img src={profile} className="img-profile" alt="Builder" />
        </div>
        <div className="right-line2">
          <div className="toggle">
            <button className="toggle-btn">Gantt</button>
            <button className="toggle-btn">Kamban</button>
            <button className="toggle-btn">Calendario</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
