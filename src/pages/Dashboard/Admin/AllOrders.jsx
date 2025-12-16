import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllOrders = () => {
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get("/orders").then(res => {
      setOrders(res.data);
      setLoading(false);
    });
  }, [axiosSecure]);

  const filteredOrders =
    statusFilter === "All"
      ? orders
      : orders.filter(o => o.status === statusFilter);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
            <h2 className="text-2xl font-bold">📦 All Orders</h2>

            <select
              className="select select-bordered w-full md:w-56"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map(order => (
                  <tr key={order._id}>
                    <td className="font-mono text-xs">
                      {order._id.slice(0, 8)}...
                    </td>
                    <td>{order.email}</td>
                    <td>{order.productName}</td>
                    <td>{order.qty}</td>
                    <td>
                      <span className={`badge ${
                        order.status === "Pending"
                          ? "badge-warning"
                          : order.status === "Approved"
                          ? "badge-success"
                          : "badge-error"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <Link
                        to={`/dashboard/order-details/${order._id}`}
                        className="btn btn-xs btn-outline btn-primary"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredOrders.length === 0 && (
              <p className="text-center text-gray-500 py-6">
                No orders found for this status.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllOrders;
