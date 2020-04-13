import React, {useState,useContext} from "react"
import {useRouter} from 'next/router'
import {
  Grid,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  IconButton,
  Hidden
} from "@material-ui/core"
import {Add, Remove} from "@material-ui/icons"
import classes from "./Product.module.css"
import CartContext from '../../contexts/CartContext'

const Product = props => {

  const {productData} = props
  const router = useRouter()

  //contexts
  const {refreshCartItemCount} = useContext(CartContext)

  //states
  const [size, setSize] = React.useState("L")
  const [labelWidth, setLabelWidth] = React.useState(0)
  const [quantity, setQuantity] = useState(1)

  //refs
  const inputLabel = React.useRef(null)

  //useEffects
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  //used for logging cart items
  // React.useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem("cart"))
  //   console.log(cart)
  // }, [])


  //functions
  const handleChange = event => {
    setSize(event.target.value)
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const resetCart = () => {
    localStorage.removeItem("cart")
  }
  const addItemToCart = () => {
    const newItem = {
      key: productData.productId+'-'+Date.now(),
      productId: productData.productId,
      productName: productData.productName,
      productSize: size,
      quantity,
      totalPrice: productData.productPriceRate * quantity
    }

    let storedCart = JSON.parse(localStorage.getItem("cart"))
    if (!storedCart) {
      const newCart = JSON.stringify([newItem])
      localStorage.setItem("cart", newCart)
    } else {
      const updatedCart = JSON.stringify(storedCart.concat(newItem))
      localStorage.setItem("cart", updatedCart)
    }
    refreshCartItemCount()
  }
  const redirectToCheckout = () => {
    router.push('/cart')
  }

  const buyNow = () => {
    resetCart()
    addItemToCart()
    redirectToCheckout()
  }
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <img
            className={classes.productImage}
            alt={productData ? productData.productName : "image not found"}
            src={productData ? productData.productImageUrl : "image not found"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.productDescriptions}>
            {/* for mobile */}
            <Hidden smUp>
              <Typography variant="h5" color="primary">
                {productData ? productData.productName : "-"}
              </Typography>
            </Hidden>
            {/* for pc */}
            <Hidden xsDown>
              <Typography variant="h4" color="primary">
                {productData ? productData.productName : "-"}
              </Typography>
            </Hidden>

            <Typography
              style={{marginTop: "8px"}}
              variant="h6"
              color="textPrimary">
              Total Price -{" "}
              {productData
                ? productData.productPriceRate * quantity + " BDT"
                : "0 BDT"}
            </Typography>
            <ul style={{paddingLeft: "16px"}}>
              <li>
                <Typography>Athletic Midnight Blue</Typography>
              </li>
              <li>
                <Typography>Ring-Spun Cotton/Poly Blend</Typography>
              </li>
              <li>
                <Typography>Soft DTG Print</Typography>
              </li>
              <li>
                <Typography>Pre-Shrunk</Typography>
              </li>
            </ul>
            <div style={{display: "flex", alignItems: "center"}}>
              <Typography style={{marginRight: "8px"}}>Quantity: </Typography>
              <IconButton
                onClick={decreaseQuantity}
                style={{backgroundColor: "#eeeeee"}}
                size="small"
                aria-label="decrease">
                <Remove />
              </IconButton>
              <Typography style={{padding: "0px 8px"}}>{quantity}</Typography>
              <IconButton
                onClick={increaseQuantity}
                style={{backgroundColor: "#eeeeee"}}
                size="small"
                aria-label="increase">
                <Add />
              </IconButton>
            </div>
          </div>

          <div className={classes.actionButtons}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  style={{width: "100%", height: 56, marginBottom: "8px"}}>
                  <InputLabel ref={inputLabel} id="select-size-label">
                    Size
                  </InputLabel>
                  <Select
                    id="select-size"
                    labelId="select-size-label"
                    value={size}
                    labelWidth={labelWidth}
                    onChange={handleChange}>
                    <MenuItem value={"S"}>S - Chest 18, Length 25</MenuItem>
                    <MenuItem value={"M"}>M - Chest 19, Length 27</MenuItem>
                    <MenuItem value={"L"}>L - Chest 20, Length 28</MenuItem>
                    <MenuItem value={"XL"}>XL - Chest 21, Length 29</MenuItem>
                    <MenuItem value={"XXL"}>XXL - Chest 22, Length 30</MenuItem>
                    <MenuItem value={"XXXL"}>
                      XXXL - Chest 24, Length 30
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={buyNow}
                  style={{
                    width: "100%",
                    height: 56,
                    backgroundColor: "#ef5350",
                    margin: "8px 0"
                  }}
                  variant="outlined">
                  <span style={{color: "#fff", fontSize: "1.2em"}}>
                    Buy Now
                  </span>
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={addItemToCart}
                  style={{
                    width: "100%",
                    height: 56,
                    backgroundColor: "#ffa726",
                    margin: "8px 0"
                  }}
                  variant="outlined">
                  <span style={{color: "#fff", fontSize: "1.2em"}}>
                    Add To Cart
                  </span>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
export default Product
