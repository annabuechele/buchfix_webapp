import React, { useState } from "react";
import "./NavBar.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { link } from "fs";
import { Divider, IconButton } from "@material-ui/core";
import { authStore } from "../../stores/authStore";
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

function NavBar() {
  const [drawerState, setDrawerState] = useState(false);
  const history = useHistory();
  const handleURLChange = () => history.push("/bookview");

  const handleMenuClick = () => {
    setDrawerState(!drawerState);
  };

  return (
    <>
      <Drawer anchor="left" open={drawerState}>
        <List style={{ width: "250px" }}>
          <ListItem onClick={handleMenuClick} button>
            <ListItemIcon>
              <CloseIcon></CloseIcon>
            </ListItemIcon>
            <ListItemText>Close</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            onClick={() => {
              console.log("push");
              history.push("/donation");
              handleMenuClick();
            }}
            button
          >
            <ListItemIcon>
              <CloseIcon></CloseIcon>
            </ListItemIcon>
            <ListItemText>Spenden</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              console.log("push");
              history.push("/");
              handleMenuClick();
            }}
          >
            <ListItemIcon>
              <CloseIcon></CloseIcon>
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <div className="NavBar-wrapper">
        <IconButton className="button-icon" onClick={handleMenuClick}>
          <MenuIcon></MenuIcon>
        </IconButton>
        <div className="search-wrapper">
          <SearchIcon></SearchIcon>
        </div>
        <div className="icon-wrapper">
          <IconButton className="button-icon" onClick={handleURLChange}>
            <ShoppingBasketIcon className="icons"></ShoppingBasketIcon>
          </IconButton>
          <IconButton className="button-icon">
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
    </>
  );
}

export default inject("authStore")(observer(NavBar));
