import Layout from "../layout/Layout"
import Head from "next/head"
import ListHeader from "../components/Shared/ListHeader/ListHeader"
import ProductList from "../components/Shared/ProductList/ProductList"

const AllProducts = () => {
  const hoddieCards = [1, 2, 3]
  const tShirts = [1,2,3,4,5]
  const winterJackets = [1,2,3,4]
  return (
    <div>
      <Head>
        <title>All Products - Et Cetera</title>
      </Head>
      <Layout>
        <ListHeader>Hoodies (3)</ListHeader>
        <ProductList cards={hoddieCards} />
        <ListHeader>T-Shirts (5)</ListHeader>
        <ProductList cards={tShirts} />
        <ListHeader>Winter Jackets (4)</ListHeader>
        <ProductList cards={winterJackets} />
      </Layout>
    </div>
  )
}

export default AllProducts
