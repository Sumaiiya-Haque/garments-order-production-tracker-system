import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  const canOrder =
    user && user.role !== "admin" && user.role !== "manager";

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={product.image} className="w-full rounded mb-4" />

      <h2 className="text-3xl font-bold">{product.title}</h2>
      <p>{product.description}</p>

      <p>Category: {product.category}</p>
      <p>Price: ৳{product.price}</p>
      <p>Available: {product.quantity}</p>
      <p>Minimum Order: {product.minOrder}</p>

      {canOrder && (
        <Link to={`/booking/${product._id}`} className="btn btn-primary mt-4">
          Order / Booking
        </Link>
      )}
    </div>
  );
};

export default ProductDetails;

