import { useState } from "react";

const OrderPage = () => {
  const product = {
    title: "Denim Shirt",
    price: 500,
    minQty: 10,
    stock: 200,
  };

  const [qty, setQty] = useState(10);
  const total = qty * product.price;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>

      <div className="space-y-3">
        <input value="buyer@gmail.com" readOnly className="input w-full" />
        <input value={product.title} readOnly className="input w-full" />

        <input
          type="number"
          min={product.minQty}
          max={product.stock}
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="input w-full"
        />

        <input value={`Total: ৳${total}`} readOnly className="input w-full" />

        <input placeholder="Contact Number" className="input w-full" />
        <textarea
          placeholder="Delivery Address"
          className="input w-full"
        ></textarea>

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
