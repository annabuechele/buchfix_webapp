import React from "react";
import "./Bookcard.scss";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {
  Card,
  CardActionArea,
  CardMedia,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { cartStore } from "../../stores/cartStore";
import { Book } from "@material-ui/icons";

interface BookcardProps {
  path: any;
  title: string;

  pages: number;
}

function Bookcard(props: BookcardProps) {
  const history = useHistory();
  const handleAddToCart = (book: any) => {
    cartStore.addToCart(book);
  };
  return (
    <Card className="bookcard-main">
      <CardMedia
        onClick={() => history.push("/detail/" + props.title)}
        image={props.path}
        className="card-image"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions className="icon-wrapper">
        <IconButton>
          <VisibilityIcon className="icons-card"></VisibilityIcon>
        </IconButton>

        <IconButton>
          <ShoppingBasketIcon
            className="icons-card"
            onClick={() => {
              handleAddToCart({ title: props.title, path: props.path });
            }}
          ></ShoppingBasketIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Bookcard;
