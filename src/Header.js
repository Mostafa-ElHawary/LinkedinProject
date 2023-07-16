import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOpetion from "./HeaderOpetion";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <LinkedInIcon style={{ color: "#0076B6" }} />

        <div className="header__search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>

      <div className="header__right">
        <HeaderOpetion Icon={HomeIcon} title="Home" />
        <HeaderOpetion Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOpetion Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOpetion Icon={ChatIcon} title="Messaging" />
        <HeaderOpetion Icon={NotificationsIcon} title="Notifications" />
        <HeaderOpetion
          avatar="https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-4-1024x1024.jpg"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
