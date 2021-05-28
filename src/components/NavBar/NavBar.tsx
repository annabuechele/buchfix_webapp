import React, { useState } from "react";
import "./NavBar.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
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
import InputBase from "@material-ui/core/InputBase";

import axios from "axios";
import { betterRequests } from "../../helpers/buchfixRequest";

function NavBar() {
  const [drawerState, setDrawerState] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<any>>([]);
  const history = useHistory();

  const handleMenuClick = () => {
    setDrawerState(!drawerState);
  };

  const handleSearchChange = (e: any) => {
    console.log(e.target.value.length);
    if (e.target.value.length == 1) setSearchResults([]);
    if (e.target.value.length < 3) return;
    betterRequests
      .get(
        process.env.REACT_APP_API_URL +
          `/book/getsearchresult?queryItems=5&queryString=${e.target.value}`
      )
      .then((data) => {
        setSearchResults(data.data);
      })
      .catch((err) => {
        setSearchResults([]);
        console.log(err);
      });

    console.log();
    // Haupt env scheise, "/book/getsearchresult?queryItems=anzahl&queryString="state""
  };

  return (
    <>
      <Drawer anchor="left" open={drawerState}>
        <List style={{ width: "250px" }}>
          <ListItem onClick={handleMenuClick} button>
            <ListItemIcon>
              <CloseIcon></CloseIcon>
            </ListItemIcon>
            <ListItemText></ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            onClick={() => {
              console.log("push");
              history.push("/");
              handleMenuClick();
            }}
            button
          >
            {/* <ListItemIcon>
              <CloseIcon></CloseIcon>
            </ListItemIcon> */}
            <ListItemText>Startseite</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              console.log("push");
              history.push("/donation");
              handleMenuClick();
            }}
          >
            {/* <ListItemIcon>
              <CloseIcon></CloseIcon>
            </ListItemIcon> */}
            <ListItemText>Spenden</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              console.log("push");
              history.push("/bookview");
              handleMenuClick();
            }}
          >
            {/* <ListItemIcon>
              <CloseIcon></CloseIcon>
            </ListItemIcon> */}
            <ListItemText>Bücherübersicht</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <div className="NavBar-wrapper">
        <IconButton className="button-icon" onClick={handleMenuClick}>
          <MenuIcon id="menue"></MenuIcon>
        </IconButton>
        <div className="search-wrapper">
          <SearchIcon></SearchIcon>
          <InputBase
            id="input-search"
            placeholder=" Suche..."
            type="search"
            // classes={{
            //   root: "",
            //   input: "",
            // }}
            inputProps={{ "aria-label": "search" }}
            onChange={handleSearchChange}
          />
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
          <IconButton className="button-icon" onClick={authStore.logOut}>
            <ExitToAppIcon className="icons"></ExitToAppIcon>
          </IconButton>
        </div>
      </div>
      <div id="searchContainer">
        {searchResults.map((result) => {
          return <div className="searchItem">{result.title}</div>;
        })}
      </div>
    </>
  );
}

export default inject("authStore")(observer(NavBar));
