import React from "react"
import classes from './ProductCard.module.css'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core"


const ProductCard = props => {

  const imageLink = 'https://assets.bigcartel.com/product_images/251177450/blue_hoodie233.png?auto=format&fit=max&h=600&w=600'
  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Product Name - Color"
          image={imageLink}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="body1" color="primary">
            Shadow Dogs Unleashed - Purple
          </Typography>
          <Typography color="textPrimary">BDT 399.00</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default ProductCard
