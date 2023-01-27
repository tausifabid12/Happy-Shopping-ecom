import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Products from '../components/Products/Products';

export default function Home({ products }) {
  console.log(products);
  return (
    <Layout title="Home">
      <main className="max-w-screen-2xl mx-auto">
        <Hero />
        <Products products={products} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: { products },
  };
}
