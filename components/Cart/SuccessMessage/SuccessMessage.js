import React from "react"
import {Typography, Container, Link} from "@material-ui/core"

const SuccessMessage = props => {
  return (
    <Container
      style={{backgroundColor: "#fafafa", padding: "32px"}}
      disableGutters={true}
      maxWidth="sm">
      <Typography
        style={{marginBottom: 16}}
        align="center"
        variant="h4"
        color="textSecondary">
        Order Success
      </Typography>
      <Typography variant="h6">
        Your order has been placed successfully, You will get a call in a few
        hours for confirmation.
      </Typography>
      <Typography align="center" style={{marginTop:'24px'}}>
        <Link href="/">Back to Home</Link>
      </Typography>
    </Container>
  )
}
export default SuccessMessage
