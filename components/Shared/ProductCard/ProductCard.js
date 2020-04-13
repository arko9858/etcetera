import React from "react"
import classes from "./ProductCard.module.css"
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core"
import {useRouter} from "next/router"

const ProductCard = props => {
  const {productId, productName, productPrice, productImageUrl} = props
  const router = useRouter()
  const forwardToProductPage = () => {
    router.push(productId ? "/product/" + productId : "/")
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={forwardToProductPage}>
        <CardMedia
          className={classes.media}
          title={productName ? productName : "loading failed"}
          image={productImageUrl ? productImageUrl : "loading failed"}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="body1" color="primary">
            {productName ? productName : " - "}
          </Typography>
          <Typography color="textPrimary">
            {productPrice ? productPrice + " BDT" : "0 BDT"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default ProductCard
