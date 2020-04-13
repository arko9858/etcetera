import React, {Fragment, useState, useEffect} from "react"
import {CssBaseline} from "@material-ui/core"
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer"
import Head from "next/head"
import classes from "./Layout.module.css"
import CartContext from "../contexts/CartContext"

const Layout = props => {
  const [cartItemCount, setCartItemCount] = useState(0)

  const getCartItemCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart"))
    let itemCount = 0
    if (cart) {
      if (cart.length > 0) {
        itemCount = cart.length
      }
    }
    return itemCount
  }

  const refreshCartItemCount = () => {
    setCartItemCount(getCartItemCount())
  }
  useEffect(() => {
    refreshCartItemCount()
  }, [])

  return (
    <Fragment>
      <CssBaseline />
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <header>
        <Header cartItemCount={cartItemCount} />
      </header>

      <main className={classes.main}>
        {/* <Container
          style={{backgroundColor: "#fafafa", minHeight: "100vh"}}
          disableGutters={true}
          maxWidth="md">
        </Container> */}
        <CartContext.Provider
          value={{
            refreshCartItemCount
          }}>
          {props.children}
        </CartContext.Provider>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  )
}
export default Layout
