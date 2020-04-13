import Layout from "../layout/Layout"
import Head from "next/head"
import ListHeader from "../components/Shared/ListHeader/ListHeader"
import ProductList from "../components/Shared/ProductList/ProductList"
import {Container} from "@material-ui/core"
import {tShirts,hoodies,jackets} from '../data/products'

const AllProducts = () => {
 
  return (
    <div>
      <Head>
        <title>All Products - Et Cetera</title>
      </Head>
      <Layout>
        <Container
          style={{backgroundColor: "#fafafa", minHeight: "100vh"}}
          disableGutters={true}
          maxWidth="md">
          <ListHeader>Hoodies ({hoodies.length})</ListHeader>
          <ProductList cards={hoodies} />
          <ListHeader>T-Shirts ({tShirts.length})</ListHeader>
          <ProductList cards={tShirts} />
          <ListHeader>Winter Jackets ({jackets.length})</ListHeader>
          <ProductList cards={jackets} />
        </Container>
      </Layout>
    </div>
  )
}

export default AllProducts
