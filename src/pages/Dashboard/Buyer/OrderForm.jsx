import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const OrderForm = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    quantity: 0,
    contactNumber: "",
    address: "",
    notes: "",
  });
  const [orderPrice, setOrderPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axiosSecure.get(`/products/${id}`)
      .then((res) => {
        const data = res.data;
        setProduct(data);
        setFormData((prev) => ({
          ...prev,
          quantity: data.minOrder,
        }));
        setOrderPrice(data.minOrder * data.price);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id, axiosSecure]);

  const handleQuantityChange = (e) => {
    if (!product) return;

    let qty = Number(e.target.value);
    if (qty < product.minOrder) qty = product.minOrder;
    if (qty > product.quantity) qty = product.quantity;

    setFormData({ ...formData, quantity: qty });
    setOrderPrice(qty * product.price);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product || !user) return;

    const orderData = {
      email: user.email,
      productId: product._id,
      productName: product.name,
      unitPrice: product.price,
      quantity: formData.quantity,
      totalPrice: orderPrice,
      firstName: formData.firstName,
      lastName: formData.lastName,
      contactNumber: formData.contactNumber,
      address: formData.address,
      notes: formData.notes,
      paymentMethod: product.payment || "Cash on Delivery",
      status: "pending",
      createdAt: new Date(),
    };

    try {
      const res = await axiosSecure.post("/orders", orderData);
      if (res.data.insertedId) {
        Swal.fire("Success", "Order placed successfully!", "success");
      }
    } catch (error) {
      Swal.fire("Error", "Order failed!", "error");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Order Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full"
        />

        <input
          type="text"
          value={product.name}
          readOnly
          className="input input-bordered w-full"
        />

        <input
          type="number"
          value={product.price}
          readOnly
          className="input input-bordered w-full"
        />

        <input
          type="number"
          value={formData.quantity}
          onChange={handleQuantityChange}
          className="input input-bordered w-full"
        />

        <input
          type="number"
          value={orderPrice}
          readOnly
          className="input input-bordered w-full"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            required
            className="input input-bordered w-full"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="input input-bordered w-full"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>

        <input
          type="text"
          placeholder="Contact Number"
          required
          className="input input-bordered w-full"
          onChange={(e) =>
            setFormData({ ...formData, contactNumber: e.target.value })
          }
        />

        <textarea
          placeholder="Address"
          required
          className="textarea textarea-bordered w-full"
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />

        <textarea
          placeholder="Notes (optional)"
          className="textarea textarea-bordered w-full"
          onChange={(e) =>
            setFormData({ ...formData, notes: e.target.value })
          }
        />

        <button className="btn btn-primary w-full">Confirm Order</button>
      </form>
    </div>
  );
};

export default OrderForm;

