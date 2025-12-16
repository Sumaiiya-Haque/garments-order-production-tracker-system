import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/users").then(res => {
      setUsers(res.data);
    });
  }, [axiosSecure]);

  const handleRoleUpdate = (user) => {
    Swal.fire({
      title: "Update User Role",
      input: "select",
      inputOptions: {
        buyer: "Buyer",
        manager: "Manager",
        admin: "Admin",
        suspended: "Suspend User",
      },
      inputValue: user.role,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/role/${user._id}`, {
          role: result.value,
        }).then(() => {
          setUsers(prev =>
            prev.map(u =>
              u._id === user._id
                ? { ...u, role: result.value }
                : u
            )
          );
          Swal.fire("Updated!", "User role updated.", "success");
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-4">👥 Manage Users</h2>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id}>
                    <td>{user.name || "N/A"}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge ${
                        user.role === "admin"
                          ? "badge-success"
                          : user.role === "manager"
                          ? "badge-info"
                          : user.role === "suspended"
                          ? "badge-error"
                          : "badge-outline"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => handleRoleUpdate(user)}
                        className="btn btn-xs btn-outline btn-primary"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {users.length === 0 && (
              <p className="text-center py-6 text-gray-500">
                No users found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
