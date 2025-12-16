import { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/orders?email=${user.email}`).then(res => {
        setOrders(res.data);
        setLoading(false);
      });
    }
  }, [user, axiosSecure]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Cancel Order?",
      text: "This order will be permanently canceled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/orders/cancel/${id}`).then(() => {
          setOrders(prev =>
            prev.map(o =>
              o._id === id ? { ...o, status: "Canceled" } : o
            )
          );
          Swal.fire("Canceled!", "Your order has been canceled.", "success");
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">
            🛒 My Orders
            <span className="badge badge-primary ml-2">{orders.length}</span>
          </h2>

          {orders.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              You have not placed any orders yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Status</th>
                    <th>Payment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order._id}>
                      <td className="font-mono text-xs">
                        {order._id.slice(0, 8)}...
                      </td>
                      <td>{order.productName}</td>
                      <td>{order.qty}</td>
                      <td>
                        <span className={`badge ${
                          order.status === "Pending"
                            ? "badge-warning"
                            : order.status === "Canceled"
                            ? "badge-error"
                            : "badge-success"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${
                          order.payment === "Paid"
                            ? "badge-success"
                            : "badge-outline"
                        }`}>
                          {order.payment || "Unpaid"}
                        </span>
                      </td>
                      <td className="space-x-2">
                        <Link
                          to={`/dashboard/track-order/${order._id}`}
                          className="btn btn-xs btn-outline btn-primary"
                        >
                          View
                        </Link>

                        {order.status === "Pending" && (
                          <button
                            onClick={() => handleCancel(order._id)}
                            className="btn btn-xs btn-outline btn-error"
                          >
                            Cancel
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;



