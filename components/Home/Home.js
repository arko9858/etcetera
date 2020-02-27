import React from "react"
import classes from "./Home.module.css"

import {Typography, Grid} from "@material-ui/core"
// import ProductCard from "../Shared/ProductCard/ProductCard"
import ProductList from '../Shared/ProductList/ProductList'
const Home = props => {
  const featuredCards = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <React.Fragment>
      <div className={classes.promoImage}>
        <img
          alt="promo image"
          src="https://scontent.fdac13-1.fna.fbcdn.net/v/t1.0-9/76702473_2421359877986106_306801196264325120_o.jpg?_nc_cat=106&_nc_ohc=lWlDobSu_OkAX_-KcQa&_nc_ht=scontent.fdac13-1.fna&oh=204ec11e7742768bed2fe42b3b9d9250&oe=5EFA4521"
        />
      </div>
      <div className={classes.listHeader}>
        <Typography variant="h5" color="textSecondary">
          Featured Products
        </Typography>
      </div>
      <ProductList cards={featuredCards}/>
    </React.Fragment>
  )
}
export default Home
