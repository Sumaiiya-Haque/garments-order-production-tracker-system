const MyOrders = () => {
  const orders = [
    {
      id: "101",
      product: "Denim Shirt",
      qty: 50,
      total: 25000,
      status: "Pending",
    },
    {
      id: "102",
      product: "Cotton Pant",
      qty: 30,
      total: 24000,
      status: "Approved",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Orders</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="text-center border-t">
              <td>{o.id}</td>
              <td>{o.product}</td>
              <td>{o.qty}</td>
              <td>৳{o.total}</td>
              <td
                className={
                  o.status === "Pending"
                    ? "text-yellow-600"
                    : "text-green-600"
                }
              >
                {o.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
