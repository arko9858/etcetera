import React, {Fragment} from "react"
import OrderListItem from "./OrderListItem/OrderListItem"
import {Typography, List, ListItem, Grid} from "@material-ui/core"

const OrderList = props => {
  const {listData} = props

  let list = <Typography align="center">List Empty</Typography>

  if (listData) {
    if (listData.length > 0) {
      list = (
        <Fragment>
          <List>
            {listData.map(item => {
              return <OrderListItem key={item._id} itemData={item} />
            })}
          </List>
        </Fragment>
      )
    }
  }

  return <div>{list}</div>
}
export default OrderList
