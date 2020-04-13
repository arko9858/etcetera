import React, {useEffect, useState} from "react"
import Layout from "../../../layout/Layout"
import Head from "next/head"
import OrderDetails from "../../../components/Admin/OrderDetails/OrderDetails"
import {Container} from "@material-ui/core"
import {useRouter} from "next/router"
import nextCookie from "next-cookies"
import logout from "../../../components/Admin/utils/logout"


const OrderDetailsPage = (props) => {
  const router = useRouter()
  const {orderId} = router.query
  const {token, expiredAt} = props

  //components
  const [output, setOutput] = useState(null)

  //functions
  const tokenValidityCheck = () => {
    if (Date.now() < expiredAt ? expiredAt : 0) {
      const timeRemaining = expiredAt - Date.now()
      setTimeout(() => {
        logout()
      }, timeRemaining)
    } else {
      logout()
    }
  }

  const authCheck = () => {
    if (!token || Date.now() > expiredAt) {
      //auth failed
      router.push("/admin/login")
    } else {
      setOutput(<OrderDetails orderId={orderId} token={token} />)
    }
  }

  //useEffect
  useEffect(() => {
    tokenValidityCheck()
    authCheck()
  }, [])

  return (
    <div>
      <Head>
        <title>Order Details - Et Cetera</title>
      </Head>
      <Layout>
        <Container
          style={{minHeight: "100vh"}}
          disableGutters={true}
          maxWidth="sm">
          {output}
        </Container>
      </Layout>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {token, expiredAt} = nextCookie(context)

  return {
    props: {
      token: token ? token : null,
      expiredAt: expiredAt ? expiredAt : null,
    }, // will be passed to the page component as props
  }
}

export default OrderDetailsPage
