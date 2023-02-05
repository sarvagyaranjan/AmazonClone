import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
// import { Providers } from "next-auth/providers";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* <h1>Hey PAPAFAM</h1> */}
      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        <ProductFeed products={products} />
        {/* <p>{products}</p> */}




        {/* Product Feed */}
      </main>





    </div>
  );
}

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products")
  const data = await products.json()

  return {
    props: {
      products: data,
    }
  }
}

