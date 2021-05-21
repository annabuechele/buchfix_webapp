import React from "react";
import "./Bookcard.scss";

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

interface BookcardProps {
  image: any;
  title: string;
  description: string;
  pages: number;
}

function Bookcard(props: BookcardProps) {
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
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
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
