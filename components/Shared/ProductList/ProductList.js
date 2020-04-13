import React from "react"
import ProductCard from "../ProductCard/ProductCard"
import {Grid} from "@material-ui/core"
const ProductList = props => {
  const {cards} = props

  return (
    <div style={{width: "100%", padding: "8px"}}>
      <Grid container spacing={1} >
        {cards.map(card => (
          // const {productId, productName, productPrice, productImageUrl} = props

          <Grid item key={card.productId} xs={6} sm={4} md={3}>
            <ProductCard
              productId={card.productId}
              productName={card.productName}
              productPrice={card.productPriceRate}
              productImageUrl={card.productImageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
export default ProductList
