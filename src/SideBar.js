import { Avatar } from "@mui/material";
import React from "react";
import './SideBar.css'
function SideBar() {

    const recentItem = (topic) => (
          <div className="sidebar__recentItem">
         <span className="sidebar__hash">#</span>
         <p>{topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sonny</h2>
        <h4>Sonny.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>How viewed you</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
        <div className="sidebar__stat">
          <p> Views on post</p>
          <p className="sidebar__statNumber">2,58</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p> Recent</p>
       {recentItem('react.js')}
       {recentItem('programming')}
       {recentItem('developer')}
       {recentItem('design')}
       {recentItem('softwareengineering')}
      </div>
    </div>
  );
}

export default SideBar;
