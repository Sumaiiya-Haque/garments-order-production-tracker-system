import { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
//   const axiosSecure = useAxiosSecure();

//   useEffect(() => {
//     axiosSecure.get("/products").then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        All Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

