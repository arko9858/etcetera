import React, {Fragment, useState, useEffect} from "react"
import {
  Typography,
  Divider,
  IconButton,
  Grid,
  CircularProgress,
} from "@material-ui/core"
import {Edit} from "@material-ui/icons"
import Link from "next/link"
import OrderedProductList from "./OrderedProductList/OrderedProductList"
import axios from "../../../axios/axios"
import moment from "moment"
import StatusEditDialog from "./StatusEditDialog/StatusEditDialog"

const OrderDetails = (props) => {
  const {orderId, token} = props

  // const [productList, setProductList] = useState(null)
  const [orderDetailsData, setOrderDetailsData] = useState(null)
  const [loading, setLoading] = useState(false)

  //status dialog start
  const [statusDialogOpen, setStatusDialogOpen] = useState(false)
  const openStatusDialog = () => {
    setStatusDialogOpen(true)
  }
  const closeStatusDialog = () => {
    setStatusDialogOpen(false)
  }
  const handleStatusChange = (newStatus) => {
    closeStatusDialog()
    updateStatus(newStatus)
  }
  //status dialog end

  //functions
  const fetchOrderDetails = () => {
    setLoading(true)
    const config = {headers: {"x-auth-token": token}}
    axios
      .get("/api/order/" + orderId, config)
      .then((res) => {
        setOrderDetailsData(res.data)
      })
      .catch((err) => {
        console.log(err.response.statusText || "Order loading failed")
        setOrderDetailsData(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const updateStatus = (newStatus) => {
    setLoading(true)
    const config = {headers: {"x-auth-token": token}}
    const data = {newStatus}
    axios
      .put("/api/order/" + orderId, data, config)
      .then((res) => {
        let newOrderDetailsData = orderDetailsData
        newOrderDetailsData.status = newStatus
        setOrderDetailsData(newOrderDetailsData)
      })
      .catch((err) => {
        console.log(err.response.statusText || "Order loading failed")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const formatDate = (datetime) => {
    return moment(datetime).format("h:mm a, DD 	MMM, YYYY")
  }

  let output = (
    <div style={{marginTop: 16, textAlign: "center"}}>
      <CircularProgress />
    </div>
  )

  if (!loading) {
    if (!orderDetailsData) {
      output = (
        <div style={{backgroundColor: "#fafafa", padding: 16, marginTop: 16}}>
          <Typography variant="h5" align="center">
            404 | Order not found.
          </Typography>
        </div>
      )
    } else {
      output = (
        <Fragment>
          <div
            style={{
              backgroundColor: "#fafafa",
              padding: "16px 16px",
            }}>
            <Typography color="textSecondary" variant="h6" align="center">
              Order Details
            </Typography>
            <Grid container direction="column" spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  Order ID
                </Typography>
                <Typography>{orderId} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  total price
                </Typography>
                <Typography>{orderDetailsData.totalPrice} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  total quantity
                </Typography>
                <Typography>{orderDetailsData.totalQuantity} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  ordered date
                </Typography>
                <Typography>
                  {formatDate(orderDetailsData.orderDate)}{" "}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" justify="space-between">
                  <Grid item>
                    <Typography variant="subtitle2" color="textSecondary">
                      status
                    </Typography>
                    <Typography>{orderDetailsData.status} </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={openStatusDialog}>
                      <Edit />
                    </IconButton>
                  </Grid>
                  <StatusEditDialog
                    open={statusDialogOpen}
                    handleClose={closeStatusDialog}
                    handleClick={(newStatus) => handleStatusChange(newStatus)}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Divider variant="middle" style={{margin: "4px 0"}} />
          </div>
          <div
            style={{
              backgroundColor: "#fafafa",
              padding: "8px 0",
              marginTop: 8,
            }}>
            <OrderedProductList listData={orderDetailsData.productsInfo} />
          </div>
          <div
            style={{
              backgroundColor: "#fafafa",
              padding: "32px 16px",
              marginTop: 8,
            }}>
            <Typography color="textSecondary" variant="h6" align="center">
              Customer Info
            </Typography>
            <Grid container direction="column" spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  customer name
                </Typography>
                <Typography>{orderDetailsData.customerName} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  mobile number
                </Typography>
                <Typography>{orderDetailsData.customerMobile}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  alternate number
                </Typography>
                <Typography>
                  {orderDetailsData.customerAlternateMobile}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  address
                </Typography>
                <Typography>
                  {orderDetailsData.customerDeliveryAddress}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Fragment>
      )
    }
  }

  //useEffects
  useEffect(() => {
    fetchOrderDetails()
  }, [])

  return (
    <Fragment>
      <div style={{margin: "0px 0px 8px 16px"}}>
        <Link href="/admin/dashboard">
          <a>Back to dashboard</a>
        </Link>
      </div>
      {output}
    </Fragment>
  )
}
export default OrderDetails
