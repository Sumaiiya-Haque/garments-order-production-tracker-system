const PendingOrders = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Pending Orders</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#123</td>
            <td>John</td>
            <td>Jacket</td>
            <td>2</td>
            <td className="space-x-2">
              <button className="btn btn-success btn-sm">Approve</button>
              <button className="btn btn-error btn-sm">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
