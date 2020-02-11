import React from "react"
import {CssBaseline} from "@material-ui/core"
const Layout = props => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </head>
      <body>
        <CssBaseline />
        <header>header</header>
        <main style={{minHeight: "100vh"}}>{props.children}</main>
        <footer style={{backgroundColor: "grey"}}>footer</footer>
      </body>
    </html>
  )
}
export default Layout
