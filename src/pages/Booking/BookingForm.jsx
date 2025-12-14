import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const BookingForm = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    axiosSecure.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
      setQuantity(res.data.minOrder);
    });
  }, []);

  const totalPrice = quantity * product.price;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < product.minOrder || quantity > product.quantity) {
      return alert("Invalid quantity");
    }

    const orderData = {
      email: user.email,
      productId: product._id,
      productTitle: product.title,
      quantity,
      totalPrice,
      status: "pending",
    };

    axiosSecure.post("/orders", orderData).then(() => {
      alert("Order placed successfully");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <input readOnly value={user.email} className="input input-bordered w-full" />
      <input readOnly value={product.title} className="input input-bordered w-full" />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="input input-bordered w-full"
      />
      <input readOnly value={totalPrice} className="input input-bordered w-full" />

      <button className="btn btn-primary w-full">
        Confirm Order
      </button>
    </form>
  );
};

export default BookingForm;

