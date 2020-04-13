import React, {Fragment} from "react"
import {
  List,
  ListItem,
  Grid,
  Typography,
  Link,
  Divider
} from "@material-ui/core"
const OrderedProductList = props => {
  const {listData} = props

  const productInfoListHeads = (
    <ListItem>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={4}>
          <Typography color="textSecondary" variant="body1">
            product name
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography color="textSecondary">size</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography color="textSecondary">qty</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography color="textSecondary">rate</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography color="textSecondary">price</Typography>
        </Grid>
      </Grid>
    </ListItem>
  )

  let productInfoList = (
    <Typography style={{marginTop: 8}} align="center" color="textSecondary">
      List Empty
    </Typography>
  )

  if (listData) {
    if (listData.length > 0) {
      productInfoList = listData.map(item => {
        return (
          <Fragment key={item.key}>
            <Divider variant="middle" />
            <ListItem>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center">
                <Grid item xs={4}>
                  <Typography color="primary" variant="body1">
                    <Link href={"/product/" + item.productId}>
                      {item.productName}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>{item.productSize}</Typography>
                </Grid>
                <Grid item xs={2}>
                  {item.quantity} pcs
                </Grid>
                <Grid item xs={2}>
                  {item.rate}
                </Grid>
                <Grid item xs={2}>
                  {item.price}
                </Grid>
              </Grid>
            </ListItem>
          </Fragment>
        )
      })
    }
  }

  return (
    <div style={{margin: "16px 0"}}>
      <Typography color="textSecondary" variant="h6" align="center">
        Product Info
      </Typography>
      <List>
        {productInfoListHeads}
        {productInfoList}
      </List>
    </div>
  )
}
export default OrderedProductList
