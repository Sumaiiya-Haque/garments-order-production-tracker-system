import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllProductsTable = () => {
  const axiosSecure = useAxiosSecure();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosSecure.get("/products").then(res => {
      setProducts(res.data);
    });
  }, [axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Product?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/products/${id}`).then(() => {
          setProducts(prev => prev.filter(p => p._id !== id));
          Swal.fire("Deleted!", "Product removed.", "success");
        });
      }
    });
  };

  const toggleHome = (id, current) => {
    axiosSecure.patch(`/products/home/${id}`, {
      showOnHome: !current,
    }).then(() => {
      setProducts(prev =>
        prev.map(p =>
          p._id === id ? { ...p, showOnHome: !current } : p
        )
      );
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-4">🛍 All Products</h2>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Created By</th>
                  <th>Show on Home</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product._id}>
                    <td>
                      <img
                        src={product.image}
                        className="w-12 h-12 rounded"
                        alt=""
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>৳{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.createdBy}</td>
                    <td>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={product.showOnHome}
                        onChange={() =>
                          toggleHome(product._id, product.showOnHome)
                        }
                      />
                    </td>
                    <td className="space-x-2">
                      <button className="btn btn-xs btn-outline btn-info">
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-xs btn-outline btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {products.length === 0 && (
              <p className="text-center py-6 text-gray-500">
                No products found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsTable;
