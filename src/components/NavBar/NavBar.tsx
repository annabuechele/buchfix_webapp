import React from "react";
import "./NavBar.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EventNoteIcon from "@material-ui/icons/EventNote";

function NavBar() {
  return (
    <div className="NavBar-wrapper">
      <MenuIcon id="hamburgerIcon"></MenuIcon>
      <div className="search-wrapper">
        <SearchIcon></SearchIcon>
      </div>
      <div id="icon-right-wrapper">
        <ShoppingBasketIcon></ShoppingBasketIcon>
        <VisibilityIcon></VisibilityIcon>
        <EventNoteIcon></EventNoteIcon>
        <ExitToAppIcon></ExitToAppIcon>
      </div>
    </div>
  );
}

export default NavBar;
