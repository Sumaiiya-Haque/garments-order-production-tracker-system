import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FiEdit, FiTrash2, FiSearch } from "react-icons/fi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // Fetch products
  const fetchProducts = () => {
    axiosSecure
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, [axiosSecure]);

  // Delete product
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/products/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Product has been deleted.", "success");
            fetchProducts(); // Refresh list
          })
          .catch((err) => console.error(err));
      }
    });
  };

  // Update product
  const handleUpdate = (id) => {
    navigate(`/dashboard/update-product/${id}`);
  };

  // Filter products by search term
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.category && p.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Products</h2>

      {/* Search bar */}
      <div className="mb-4 relative w-full max-w-md">
        <FiSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered pl-10 w-full rounded-md"
        />
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="table w-full border rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 ">
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Payment Mode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((p) => (
              <tr
                key={p._id}
                className="hover:bg-gray-100 transition-all duration-200 text-center"
              >
                <td>
                  <img src={p.image} alt={p.name} className="w-16 h-16 mx-auto rounded" />
                </td>
                <td className="font-medium">{p.name}</td>
                <td>${p.price}</td>
                <td>{p.paymentMode || "N/A"}</td>
                <td className="flex justify-center gap-2">
                  <button
                    onClick={() => handleUpdate(p._id)}
                    className="btn btn-sm btn-primary flex items-center gap-1"
                  >
                    <FiEdit /> Update
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="btn btn-sm btn-error flex items-center gap-1"
                  >
                    <FiTrash2 /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-6 text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default ManageProducts;



