import React from "react"
import classes from "./Home.module.css"
import {Typography} from "@material-ui/core"
import ProductList from "../Shared/ProductList/ProductList"
import {homeProducts} from '../../data/products'

const imageLink ="https://assets.bigcartel.com/product_images/251177450/blue_hoodie233.png?auto=format&fit=max&h=600&w=600"

const Home = props => {
  return (
    <React.Fragment>
      <div className={classes.promoImage}>
        <img
          alt="promo image"
          src={imageLink}
        />
      </div>
      <div className={classes.listHeader}>
        <Typography variant="h5" color="textSecondary">
          Featured Products
        </Typography>
      </div>
      <ProductList cards={homeProducts} />
    </React.Fragment>
  )
}
export default Home
