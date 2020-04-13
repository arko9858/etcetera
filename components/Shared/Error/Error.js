import React from "react"
import {Typography, Divider, Grid, Link} from "@material-ui/core"
const Error = props => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "55vh",
        display: "flex",
        alignItems: "center"
      }}>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={12}>
          <Grid
            style={{height: "32px"}}
            container
            alignItems="center"
            justify="center">
            <Typography variant="h5" color="textPrimary">
              404
            </Typography>
            <Divider
              style={{margin: "0 8px"}}
              orientation="vertical"
              flexItem
            />
            <Typography variant="body1">
              This page could not be found.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            <Link href="/">Back to Homepage</Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
export default Error
