import React, {useEffect, useState} from "react"
import Layout from "../../layout/Layout"
import Head from "next/head"
import Dashboard from "../../components/Admin/Dashboard/Dashboard"
import {Container} from "@material-ui/core"
import nextCookie from "next-cookies"
import router from "next/router"
import logout from "../../components/Admin/utils/logout"

const DashboardPage = (props) => {
  const {token, expiredAt, displayName} = props

  //components
  const [output, setOutput] = useState(null)

  //functions
  const tokenValidityCheck = () => {
    if (Date.now() < expiredAt) {
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
      setOutput(<Dashboard token={token} displayName={displayName} />)
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
        <title>Admin Dashboard - Et Cetera</title>
      </Head>
      <Layout>
        <Container
          style={{backgroundColor: "#fafafa", minHeight: "100vh"}}
          disableGutters={true}
          maxWidth="md">
          {output}
        </Container>
      </Layout>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {token, expiredAt, displayName} = nextCookie(context)

  return {
    props: {
      token: token ? token : null,
      expiredAt: expiredAt ? expiredAt : null,
      displayName: displayName ? displayName : null,
    }, // will be passed to the page component as props
  }
}
export default DashboardPage
