import React from "react";
import classes from './ListHeader.module.css'
import {Typography} from '@material-ui/core'

const ListHeader = props => {
  return (
    <div className={classes.listHeader}>
    <Typography variant="h5" color="textSecondary">
      {props.children}
    </Typography>
  </div>
  );
};
export default ListHeader;
