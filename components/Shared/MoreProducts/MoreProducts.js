import React, {Fragment} from "react"
import classes from "./MoreProducts.module.css"
import ProductList from "../ProductList/ProductList"
import {Typography} from "@material-ui/core"
import {allProducts} from "../../../data/products"

const MoreProducts = props => {
  const {currentProductId, title} = props

  let productsData = allProducts

  if (currentProductId) {
    productsData = allProducts.filter(
      item => item.productId !== currentProductId
    )
  }

  return (
    <Fragment>
      <div className={classes.listHeader}>
        <Typography variant="h5" color="textSecondary">
          {title ? title : "Other Products"}
        </Typography>
      </div>
      <ProductList cards={productsData} />
    </Fragment>
  )
}
export default MoreProducts
