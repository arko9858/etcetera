import React from "react"
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"

const StatusEditDialog = (props) => {
  //data
  const {handleClose, handleClick, open} = props

  const statusOptions = [ "cancelled","pending", "processing", "delivered"]

  const setBackgroundColor = (status) => {
    switch (status) {
      case "pending":
        return ("#ffe0b2")
      case "cancelled":
        return ("#ffcdd2")
      case "processing":
        return ("#fff9c4")
      case "delivered":
        return ("#c8e6c9")
      default:
        return ("#fafafa")
    }
  }

  return (
    <Dialog maxWidth="xs" onClose={handleClose} open={open}>
      <DialogTitle>Update Status</DialogTitle>
      <List >
        {statusOptions.map((status, index) => (
          <ListItem
            style={{backgroundColor: setBackgroundColor(status),minWidth:"220px", padding:16}}
            button
            onClick={() => handleClick(status)}
            key={index}>
            <ListItemText primary={status} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}
export default StatusEditDialog
