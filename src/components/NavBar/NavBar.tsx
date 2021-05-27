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
import { authStore } from "../../stores/authStore";
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";

function NavBar() {
  const history = useHistory();
  const handleURLChange = () => history.push("/bookview");
  const handleURLChangeDonation = () => history.push("/donation");
  return (
    <div className="NavBar-wrapper">
      <IconButton className="button-icon">
        <MenuIcon></MenuIcon>
      </IconButton>
      <div className="search-wrapper">
        <SearchIcon></SearchIcon>
      </div>
      <div className="icon-wrapper">
        <IconButton className="button-icon" onClick={handleURLChange}>
          <ShoppingBasketIcon className="icons"></ShoppingBasketIcon>
        </IconButton>
        <IconButton className="button-icon" onClick={handleURLChangeDonation}>
          <VisibilityIcon className="icons"></VisibilityIcon>
        </IconButton>
        <IconButton className="button-icon">
          <EventNoteIcon className="icons"></EventNoteIcon>
        </IconButton>
        <IconButton className="button-icon" onClick={authStore.logOut}>
          <ExitToAppIcon className="icons"></ExitToAppIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default inject("authStore")(observer(NavBar));
