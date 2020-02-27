import React from "react"
import {
  Hidden,
  Grid,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core"
import {ShoppingCartOutlined} from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu"
import Link from "next/link"
import classes from "./Header.module.css"
const Header = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const navLinksMobile = (
    <nav className={classes.navLinksMobile}>
      <MenuItem onClick={handleClose}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link href="/all-products">
          <a>All Products</a>
        </Link>
      </MenuItem>

      <MenuItem onClick={handleClose}>
        <Link href="/bulk-orders">
          <a>Bulk Orders</a>
        </Link>
      </MenuItem>

      <MenuItem onClick={handleClose}>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
      </MenuItem>

      <MenuItem onClick={handleClose}>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </MenuItem>
    </nav>
  )

  const navLinksDesktop = (
    <nav className={classes.navLinksDesktop}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/all-products">
        <a>All Products</a>
      </Link>
      <Link href="/bulk-orders">
        <a>Bulk Orders</a>
      </Link>
      <Link href="/gallery">
        <a>Gallery</a>
      </Link>
      <Link href="/contact">
        <a>Contact Us</a>
      </Link>
    </nav>
  )

  return (
    <div>
      {/* mobile version */}
      <Hidden mdUp>
        <Grid
          container
          style={{
            backgroundColor: "#263238",
            textAlign: "center",
            padding: "8px 0",
            minHeight: "80px"
          }}
          alignItems="center"
          alignContent="space-around">
          <Grid item xs={2}>
            <IconButton onClick={handleClick}>
              <MenuIcon style={{color:'#eceff1'}} />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <Typography style={{color:'#eceff1'}} variant="h6">Et Cetera</Typography>
          </Grid>
          <Grid item xs={4}>
            <Button style={{color:'#eceff1'}} startIcon={<ShoppingCartOutlined />}>0 items</Button>
          </Grid>
        </Grid>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          {navLinksMobile}
        </Menu>
      </Hidden>

      {/* desktop version */}
      <Hidden smDown>
        <div
          style={{
            textAlign: "start",
            backgroundColor: "#263238",
            minHeight: "80px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <div style={{marginLeft: "16px", flexGrow: 1}}>
            <Typography style={{color:'#eceff1'}} variant="h6">Et Cetera</Typography>
          </div>
          <div style={{flexGrow: 5, textAlign: "center"}}>
            {navLinksDesktop}
          </div>
          <div style={{textAlign: "right", flexGrow: 1}}>
            <Button style={{color:'#eceff1'}} startIcon={<ShoppingCartOutlined />}>
              <Typography style={{color:'#eceff1'}} variant="caption">0 items</Typography>
            </Button>
          </div>
        </div>
      </Hidden>
    </div>
  )
}
export default Header
