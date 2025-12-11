import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`/api/products?limit=6`).then((res) => setProducts(res.data));
  }, []);

  return (
    <section className="my-14 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
