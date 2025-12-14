const ManageProducts = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><img src="https://via.placeholder.com/40" /></td>
            <td>Shirt</td>
            <td>500</td>
            <td>COD</td>
            <td className="space-x-2">
              <button className="btn btn-sm btn-info">Update</button>
              <button className="btn btn-sm btn-error">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
