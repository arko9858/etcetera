import React from "react"
import ProductCard from "../ProductCard/ProductCard"
import {Grid} from "@material-ui/core"
const ProductList = props => {
  const {cards} = props

  return (
    <div style={{width: "100%", padding: "8px"}}>
      <Grid container spacing={1}>
        {cards.map(card => (
          <Grid item key={card} xs={6} sm={4} md={3}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
export default ProductList
