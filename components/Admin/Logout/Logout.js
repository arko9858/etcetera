import React from "react"
import {Grid, Button, Typography} from "@material-ui/core"
import {ExitToApp} from "@material-ui/icons"
import logout from '../utils/logout'
import jwt from 'jsonwebtoken'
const Logout = (props) => {
  

  const {displayName} = props

  
  return (
    <div style={{backgroundColor: "#cfd8dc", padding: "4px 12px"}}>
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Typography align="center">
            User : <b>{displayName?displayName:'Admin'}</b>
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={logout} color="primary" size="small" startIcon={<ExitToApp />}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
export default Logout
