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

interface BookcardProps {
  image: any;
  title: string;

  pages: number;
}

function Bookcard(props: BookcardProps) {
  const history = useHistory();
  const handleURLChange = () => {
    history.push("/ShoppingCart");
  };
  return (
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
          <ShoppingBasketIcon
            className="icons-card"
            onClick={handleURLChange}
          ></ShoppingBasketIcon>
        </IconButton>
      </CardActions>
    </Card>
    // <div className="bookcard-container">
    //   <img id="product-image" src={ProductImage} alt="" />

    //   <p>Harry Potter und der gefangene von Askaban</p>
    //   <div id="product-content-wrapper">
    //     <VisibilityIcon></VisibilityIcon>

    //     <ShoppingBasketIcon></ShoppingBasketIcon>
    //   </div>
    // </div>
  );
}

export default Bookcard;
