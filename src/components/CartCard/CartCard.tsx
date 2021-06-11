import React from "react";
import "./CartCard.scss";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
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
import { inject, observer } from "mobx-react";

interface CartCardProps {
  image: any;
  title: string;
}

function CartCard(props: CartCardProps) {
  return (
    <div className="cart-wrapper">
      <Card className="bookcard-main">
        <CardMedia
          image={props.image}
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
            <DeleteIcon
              className="icons-card"
              onClick={() => {
                cartStore.removeCart(props.title);
              }}
            ></DeleteIcon>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default inject("cartStore")(observer(CartCard));
