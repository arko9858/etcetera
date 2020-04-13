import React from "react"
import {Button} from "@material-ui/core"

const ConfirmButton = props => {
  return (
    <Button
      onClick={props.onClick}
      style={{
        width: "100%",
        height: 56,
        backgroundColor: "#ef5350",
        margin: "16px 8px"
      }}
      variant="outlined">
      <span style={{color: "#fff", fontSize: "1.2em"}}>{props.children}</span>
    </Button>
  )
}
export default ConfirmButton
