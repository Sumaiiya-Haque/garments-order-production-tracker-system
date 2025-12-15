import { useNavigate, useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = {
    name: "Denim Shirt",
    description: "Premium quality export denim shirt.",
    price: 500,
    minQty: 10,
    stock: 200,
    payment: "Cash on Delivery",
    image: "https://via.placeholder.com/500",
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      <img src={product.image} alt={product.name} className="rounded" />

      <div>
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="my-3">{product.description}</p>
        <p>Price: ৳{product.price}</p>
        <p>Minimum Order: {product.minQty}</p>
        <p>Available: {product.stock}</p>
        <p>Payment: {product.payment}</p>

        <button
          onClick={() => navigate(`/order/${id}`)}
          className="mt-4 bg-green-600 text-white px-5 py-2 rounded"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

