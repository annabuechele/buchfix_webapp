import React from "react";
import "./NavBar.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Button from "@material-ui/core/Button";
import { link } from "fs";
import { IconButton } from "@material-ui/core";

function NavBar() {
  return (
    <div className="NavBar-wrapper">
      <IconButton className="button-icon">
        <MenuIcon></MenuIcon>
      </IconButton>
      <div className="search-wrapper">
        <SearchIcon></SearchIcon>
      </div>
      <div className="icon-wrapper">
        <IconButton className="button-icon">
          <ShoppingBasketIcon className="icons"></ShoppingBasketIcon>
        </IconButton>
        <IconButton className="button-icon">
          <VisibilityIcon className="icons"></VisibilityIcon>
        </IconButton>
        <IconButton className="button-icon">
          <EventNoteIcon className="icons"></EventNoteIcon>
        </IconButton>
        <IconButton className="button-icon">
          <ExitToAppIcon className="icons"></ExitToAppIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default NavBar;
