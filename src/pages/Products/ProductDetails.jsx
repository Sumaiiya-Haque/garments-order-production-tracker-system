import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure.get(`http://localhost:3000/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id, axiosSecure]);

  if (!product) {
    return <p className="text-center mt-10">Loading product details...</p>;
  }

  const canOrder =
    user && user.role !== "admin" && user.role !== "manager";

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Image Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[350px] object-cover rounded-lg shadow"
        />

        {/* Info Section */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ৳{product.price}
            </p>
            <p>
              <span className="font-semibold">Available Quantity:</span>{" "}
              {product.quantity}
            </p>
            <p>
              <span className="font-semibold">Minimum Order:</span>{" "}
              {product.minOrder}
            </p>
          </div>

          {/* Payment Options */}
          {product.paymentOptions?.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-1">Payment Options</h4>
              <div className="flex gap-2 flex-wrap">
                {product.paymentOptions.map((option, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Order Button */}
          <div className="mt-6">
            {canOrder ? (
              <Link
                to={`/order/${product._id}`}
                className="btn btn-primary"
              >
                Order
              </Link>
            ) : (
              <p className="text-red-500 text-sm">
                Only buyers can place orders
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      {product.features?.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-3">Product Features</h3>
          <ul className="list-disc list-inside space-y-1">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;


