const ApprovedOrders = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Approved Orders</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Product</th>
            <th>Approved Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#222</td>
            <td>Pant</td>
            <td>12 Dec</td>
            <td>
              <button className="btn btn-sm btn-primary">Add Tracking</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedOrders;
