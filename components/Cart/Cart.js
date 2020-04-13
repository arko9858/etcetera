import React, {useState, Fragment, useEffect, useContext} from "react"
import {
  Typography,
  List,
  Divider,
  Grid,
  Container,
  ListItem
} from "@material-ui/core"
import {ShoppingCart} from "@material-ui/icons"
import classes from "./Cart.module.css"
import ProductItem from "./ProductItem/ProductItem"
import CartHeader from "../Shared/CartHeader/CartHeader"
import ShippingAddressForm from "./ShippingAddressForm/ShippingAddressForm"
import SuccessMessage from "./SuccessMessage/SuccessMessage"
import MoreProducts from "../../components/Shared/MoreProducts/MoreProducts"
import CartContext from "../../contexts/CartContext"

const Cart = props => {
  //contexts
  const {refreshCartItemCount} = useContext(CartContext)

  // states
  const [itemList, setItemList] = useState(null)

  const [orderPlaced, setOrderPlaced] = useState(false)

  const [totalPrice, setTotalPrice] = useState(0)

  const [showProductsList, setShowProductsList] = useState(true)
  //functions

  const updateTotalPrice = () => {
    let totalPrice = 0
    if (itemList) {
      if (itemList.length > 0) {
        itemList.map(item => {
          totalPrice += item.totalPrice
        })
      }
    }
    setTotalPrice(totalPrice)
  }

  const removeItem = key => {
    const newList = itemList.filter(item => item.key !== key)
    if (newList) {
      setItemList(newList)
      localStorage.setItem("cart", JSON.stringify(newList))
    }
    refreshCartItemCount()
  }

  const emptyCart = ()=>{
    localStorage.removeItem('cart')
  }

  const orderSubmit = () => {
    setOrderPlaced(true)
    emptyCart()
    refreshCartItemCount()
  }

  //useEffects
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"))
    setItemList(cart)
  }, [])

  useEffect(() => {
    updateTotalPrice()
    setShowProductsList(true)
    if (itemList) {
      if (itemList.length >= 1) {
        setShowProductsList(false)
      }
    }
  }, [itemList])
  //components

  const orderSummeryTableHeads = (
    <ListItem>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={5}>
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
        <Grid item xs={3}>
          <Typography color="textSecondary">price (BDT)</Typography>
        </Grid>
      </Grid>
    </ListItem>
  )

  let productItemList = (
    <div style={{padding: 16}}>
      <Typography align="center" variant="h6">
        Cart is empty, come back after you added at least one product.{" "}
      </Typography>
    </div>
  )

  let shippingAddress = (
    <Container
      style={{backgroundColor: "#fafafa", marginTop: "16px"}}
      disableGutters={true}
      maxWidth="sm">
      <div className={classes.section}>
        <CartHeader>Shipping Address</CartHeader>
        <form>
          <ShippingAddressForm onSubmit={orderSubmit} />
        </form>
      </div>
    </Container>
  )
  if (itemList) {
    if (itemList.length > 0) {
      productItemList = (
        <Fragment>
          <List>
            {orderSummeryTableHeads}
            {itemList.map(item => {
              return (
                <ProductItem
                  key={item.key}
                  clearOnClick={key => removeItem(key)}
                  itemData={item}
                />
              )
            })}
          </List>
          <Divider variant="middle" />
          <Grid container style={{padding: "16px 0"}}>
            <Grid item xs={6}>
              <Typography color="textSecondary" variant="h6" align="center">
                Total Price{" "}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color="textSecondary" variant="h6" align="center">
                {totalPrice} BDT
              </Typography>
            </Grid>
          </Grid>
        </Fragment>
      )
    } else {
      shippingAddress = null
    }
  } else {
    shippingAddress = null
  }

  let output = (
    <div style={{marginBottom: 32}}>
      <Container
        style={{backgroundColor: "#fafafa", paddingBottom: "16px"}}
        disableGutters={true}
        maxWidth="sm">
        <div className={classes.section}>
          <div style={{textAlign: "center", paddingTop: 16}}>
            <Typography variant="h4" color="textSecondary">
              <ShoppingCart /> Cart
            </Typography>
          </div>
          <CartHeader>Order Summary</CartHeader>
          <div style={{marginBottom: "16px"}}>{productItemList}</div>
        </div>
      </Container>
      {shippingAddress}
    </div>
  )

  if (orderPlaced) {
    output = (
      <div style={{marginTop:32}}>
        <SuccessMessage />
      </div>
    )
  }
  let moreProducts = null
  if (showProductsList) {
    moreProducts = (
      <Container maxWidth="md" disableGutters>
        <MoreProducts title="Our Products" />
      </Container>
    )
  }
  return (
    <div className={classes.root}>
      {output}
      {moreProducts}
    </div>
  )
}
export default Cart
