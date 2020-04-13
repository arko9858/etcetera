import {useRouter} from "next/router"
import Layout from "../../layout/Layout"
import Head from "next/head"
import Product from "../../components/Product/Product"
import {Container} from "@material-ui/core"
import {allProducts} from "../../data/products"
import Error from "../../components/Shared/Error/Error"
import MoreProducts from "../../components/Shared/MoreProducts/MoreProducts"

const ProductDetails = () => {
  const router = useRouter()
  const {productId} = router.query
  const productData = allProducts.filter(item => item.productId === productId)
  
  let output = <Product productData={productData[0]} />

  if (!productData) {
    output = <Error />
  } else {
    if (productData.length < 1) {
      output = <Error />
    }
  }

  return (
    <div>
      <Head>
        <title>
          {productData[0] ? productData[0].productName : ""} - Et Cetera
        </title>
      </Head>
      <Layout>
        <Container
          style={{backgroundColor: "#fafafa", minHeight: "100vh"}}
          disableGutters={true}
          maxWidth="md">
          {output}
          <MoreProducts currentProductId={productId}/>
        </Container>
      </Layout>
    </div>
  )
}

export default ProductDetails
