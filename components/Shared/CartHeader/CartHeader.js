import React from "react";
import classes from './CartHeader.module.css'
import {Typography} from '@material-ui/core'

const CartHeader = props => {
  return (
    <div className={classes.cartHeader}>
    <Typography variant="h5" color="textSecondary">
      {props.children}
    </Typography>
  </div>
  );
};
export default CartHeader;
