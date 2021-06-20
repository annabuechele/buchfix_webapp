import React, { useEffect, useState } from "react";
import "./Detail.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useTheme } from "@material-ui/core/styles";
import axios, { AxiosError } from "axios";
import { betterRequests } from "../../helpers/buchfixRequest";
import { Typography, Fab } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";

import { cartStore } from "../../stores/cartStore";
import { inject, observer } from "mobx-react";

interface bookType {
  title: string;
  sites: number;
  isbn: string;
  path: string;
  format: string;
  genre: string;
}

function Detail() {
  const [book, setBook] = useState<bookType | null>(null);
  const theme = useTheme();
  console.log(theme.palette.primary);
  const history = useHistory();

  useEffect(() => {
    const res = betterRequests
      .get(
        process.env.REACT_APP_API_URL +
          "/book/findbytitle" +
          window.location.pathname.substring(
            window.location.pathname.lastIndexOf("/")
          )
      )
      .then((data) => {
        console.log(data.data);
        if (!data) return;
        setBook(data.data);
      })
      .catch((err: AxiosError) => {
        if (err.message.substring(err.message.length - 3) == 404 + "")
          history.push("/");
      });

    return () => {};
  }, []);

  const BookData: any = (
    <>
      <div className="bookdata-main">
        <div className="bookdata-main__left">
          <img src={book?.path} alt={book?.title} />
        </div>
        <div className="bookdata-main__right">
          <Typography variant="h2">{book?.title}</Typography>
          <Typography variant="h5">ISBN: {book?.isbn}</Typography>
          <Typography variant="subtitle1">Format: {book?.format}</Typography>
          <Typography variant="subtitle1">Genre: {book?.genre}</Typography>
          <Typography variant="subtitle1">Seiten: {book?.sites}</Typography>
        </div>
      </div>
      <div className="bookdata-fab">
        <Fab color="primary" onClick={() => history.goBack()}>
          Zurück
        </Fab>
        <Fab color="primary">
          <VisibilityIcon></VisibilityIcon>
        </Fab>
        <Fab color="primary" onClick={() => cartStore.addToCart(book)}>
          <ShoppingBasketIcon></ShoppingBasketIcon>
        </Fab>
      </div>
    </>
  );

  return (
    <div
      style={
        book
          ? {}
          : {
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              height: "400px",
            }
      }
    >
      {book ? (
        BookData
      ) : (
        <Loader
          type="TailSpin"
          color={theme.palette.primary.main}
          height=""
          width="100"
        ></Loader>
      )}
    </div>
  );
}

export default inject("cartStore")(observer(Detail));
