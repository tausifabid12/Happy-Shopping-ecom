import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ products }) => {
  console.log(products);
  return (
    <section className="w-full h-screen">
      <div>
        <h2>Products</h2>
      </div>
      <div className="grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <div className="w-full h-64 md:col-span-3 lg:col-span-4">
          <img
            src="assets/adbanner.jpg"
            className="w-full h-full rounded-md"
            alt="adBanner"
          />
        </div>
        <div className="w-full h-full md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.slice(6, products.length).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
