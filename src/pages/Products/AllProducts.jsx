import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";

// import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // axios.get(`/products/manager?email=${user.email}`)
// 
    axiosSecure
      .get("http://localhost:3000/products") // API call
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);



  

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="border rounded-lg shadow">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p>Price: ৳{p.price}</p>
              <p>MOQ: {p.minQty}</p>

              <Link
                to={`/product/${p._id}`}
                className="block mt-3 bg-blue-600 text-white text-center py-2 rounded"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

