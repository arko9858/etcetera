import Layout from "../../layout/Layout"
import Head from "next/head"
import Login from "../../components/Admin/Login/Login"
import {Container} from "@material-ui/core"
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login - Et Cetera</title>
      </Head>
      <Layout>
        <Container disableGutters maxWidth="xs">
          <div
            style={{
              minHeight: "70vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}>
            <Login />
          </div>
        </Container>
      </Layout>
    </div>
  )
}


export default LoginPage
