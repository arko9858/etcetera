import Layout from "../layout/Layout"
import Head from "next/head"
import Home from "../components/Home/Home"
import {Container} from "@material-ui/core"
const Index = () => {
  return (
    <div>
      <Head>
        <title>Et Cetera - Home</title>
      </Head>
      <Layout>
        <Container
          style={{backgroundColor: "#fafafa", minHeight: "100vh"}}
          disableGutters={true}
          maxWidth="md">
          <Home />
        </Container>
      </Layout>
    </div>
  )
}

export default Index
