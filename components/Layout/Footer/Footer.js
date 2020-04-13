import React from "react"
import classes from "./Footer.module.css"
import {Typography} from "@material-ui/core" //add Link later

const Footer = (props) => {
  return (
    <div className={classes.root}>
      <div className={classes.text}>Copyright © 2020 etcetera</div>
      <div className={classes.text}>
        {/* Developed by <Link color="inherit" href="https://bholababa.net">Bholababa</Link> */}
        <Typography>Developed by Bholababa</Typography>
      </div>
    </div>
  )
}
export default Footer
