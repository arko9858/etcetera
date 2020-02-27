import Layout from "../layout/Layout"
import Head from "next/head"
import Home from "../components/Home/Home"

const Index = () => {
  return (
    <div>
      <Head>
        <title>Et Cetera - Home</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default Index
