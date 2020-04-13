import Layout from "../layout/Layout"
import Head from "next/head"
import Cart from "../components/Cart/Cart"

const Index = () => {
  return (
    <div>
      <Head>
        <title>Cart - Et Cetera</title>
      </Head>
      <Layout>
        <Cart />
      </Layout>
    </div>
  )
}

export default Index
