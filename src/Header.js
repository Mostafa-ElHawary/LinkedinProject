import React from "react";
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="" alt=""> </img>
        <div className="header__search">
          <SearchIcon />
          <input></input>
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
