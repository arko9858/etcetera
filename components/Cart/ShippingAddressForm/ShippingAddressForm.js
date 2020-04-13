import React from "react"
import {Grid, TextField, Typography} from "@material-ui/core"
import ConfirmButton from "../../Shared/ConfirmButton/ConfirmButton"
import {useRouter} from 'next/router'

const ShippingAddressForm = props => {

  const router = useRouter()

  const orderConfirmHandler = ()=>{
    router.push('/order-success')
  }

  return (
    <div style={{padding: 16,paddingBottom:32}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            variant="outlined"
            id="fullName"
            name="fullName"
            label="Full Name"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            id="altPhoneNumber"
            name="altPhoneNumber"
            label="Alternate Number (Optional)"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            multiline
            variant="outlined"
            id="address"
            name="address"
            label="Shipping Address"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
         <Typography color="textPrimary">
           - Payment method is cash on delivery.
         </Typography>
        </Grid>
        <ConfirmButton onClick={props.onSubmit}>Confirm Order</ConfirmButton>
      </Grid>
    </div>
  )
}
export default ShippingAddressForm
