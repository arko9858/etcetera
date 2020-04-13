import React, {Fragment, useState, useEffect} from "react"
import {Typography, CircularProgress} from "@material-ui/core"
import OrderList from "./OrderList/OrderList"
import Logout from "../Logout/Logout"
import axios from "../../../axios/axios"

const Dashboard = (props) => {
  const {displayName, token} = props

  //states
  const [orderSummaryList, setOrderSummaryList] = useState(null)
  const [loading, setLoading] = useState(true)

  //functions
  const fetchOrderSummaryList = () => {
    const config = {headers: {"x-auth-token": token}}
    axios
      .get("/api/order", config)
      .then((res) => {
        setOrderSummaryList(res.data)
      })
      .catch((err) => {
        console.log(err.response.statusText || "Order loading failed")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    // get orderSummary onLoad
    fetchOrderSummaryList()
  }, [])

  let orderList = <CircularProgress />
  if (!loading) {
    orderList = <OrderList listData={orderSummaryList} />
  }

  return (
    <Fragment>
      <Logout displayName={displayName} />
      <div style={{paddingTop: 16}}>
        <Typography color="textSecondary" variant="h4" align="center">
          Latest Orders
        </Typography>
        <div style={{marginTop: 16, textAlign: "center"}}>{orderList}</div>
      </div>
    </Fragment>
  )
}
export default Dashboard
