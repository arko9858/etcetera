import React from "react"
import {
  Grid,
  Typography,
  IconButton,
  Divider,
  ListItem,
  Link
} from "@material-ui/core"
import {Clear} from "@material-ui/icons"

const ProductItem = props => {
  const {itemData, clearOnClick} = props

  const clearButtonClicked = () => {
    clearOnClick(itemData.key)
  }

  return (
    <React.Fragment>
      <Divider variant="middle" />
      <ListItem>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={5}>
            <Typography color="primary" variant="body1">
              <Link href={"/product/"+itemData.productId}>{itemData.productName}</Link>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{itemData.productSize}</Typography>
          </Grid>
          <Grid item xs={2}>
            {itemData.quantity} pcs
          </Grid>
          <Grid item xs={2}>
            {itemData.totalPrice}
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={clearButtonClicked} size="small">
              <Clear />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
    </React.Fragment>
  )
}
export default ProductItem
