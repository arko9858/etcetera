import React from "react"
import {CssBaseline, Container} from "@material-ui/core"
import Header from "../components/Layout/Header/Header"
import Head from "next/head"
const Layout = props => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <CssBaseline />
      <header>
        <Header />
      </header>

      <main style={{minHeight: "100vh", backgroundColor: "#eceff1"}}>
        <Container disableGutters={true} maxWidth="md">{props.children}</Container>
      </main>
      <footer style={{backgroundColor: "grey"}}>footer</footer>
    </div>
  )
}
export default Layout
