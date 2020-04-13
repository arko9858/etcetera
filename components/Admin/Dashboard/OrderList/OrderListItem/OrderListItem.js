import React, {useState, useEffect} from "react"
import {
  Grid,
  ListItem,
  Typography,
  Paper,
  Link,
} from "@material-ui/core"
import moment from "moment"

const OrderListItem = (props) => {
  const {itemData} = props

  const [bgColor, setBgColor] = useState("#fafafa")

  //functions
  const setBackgroundColor = (status) => {
    switch (status) {
      case "pending":
        setBgColor("#ffe0b2")
        break
      case "cancelled":
        setBgColor("#ffcdd2")
        break
      case "processing":
        setBgColor("#fff9c4")
        break
      case "delivered":
        setBgColor("#c8e6c9")
        break
      default:
        setBgColor("#fafafa")
        break
    }
  }

  const formatDate = (datetime) => {
    return moment(datetime).format("h:mm a, DD 	MMM")
  }

  //useEffects
  useEffect(() => {
    setBackgroundColor(itemData.status)
  }, [itemData.status])

  const listItem = (
    <ListItem>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={6}>
          <Grid spacing={1} container direction="column">
            <Grid item xs={12}>
              <Typography variant="caption" color="textSecondary">
                ordered on
              </Typography>
              <Typography>{formatDate(itemData.orderDate)}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" color="textSecondary">
                status
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {itemData.status}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Grid spacing={1} container direction="column">
            <Grid item xs={12}>
              <Typography variant="caption" color="textSecondary">
                total price
              </Typography>
              <Typography>{itemData.totalPrice}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" color="textSecondary">
                total quantity
              </Typography>
              <Typography>{itemData.totalQuantity}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2}>
          <Link href={"/admin/order-details/" + itemData._id}>Details</Link>
        </Grid>
      </Grid>
    </ListItem>
  )

  return <Paper style={{margin: 8, backgroundColor: bgColor}}>{listItem}</Paper>
}
export default OrderListItem
