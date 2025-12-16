import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
    moq: "",
    paymentMode: "",
    showHome: false,
    image: "",
  });

  const paymentOptions = ["Cash On Delivery", "PayFirst"];
  const categoryOptions = ["Shirt", "Pant", "Jacket", "Accessories"];

  useEffect(() => {
    axiosSecure.get(`/products/${id}`)
      .then(res => {
        // Ensure all fields exist
        setProduct({
          name: res.data.name || "",
          description: res.data.description || "",
          category: res.data.category || "",
          price: res.data.price || "",
          quantity: res.data.quantity || "",
          minOrder: res.data.minOrder || "",
          paymentOptions: res.data.payment || "",
          showHome: res.data.showHome || false,
          image: res.data.image || "",
        });
      })
      .catch(err => console.error(err));
  }, [id, axiosSecure]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosSecure.put(`/products/${id}`, product)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Product updated successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/dashboard/manage-products");
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Update failed!',
          text: 'Please try again.'
        });
      });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl mb-4">Update Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select category</option>
          {categoryOptions.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Available Quantity"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="minOrder"
          value={product.moq}
          onChange={handleChange}
          placeholder="MinOrder"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        />
        <select
          name="paymentMode"
          value={product.paymentMode}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select payment mode</option>
          {paymentOptions.map(mode => (
            <option key={mode} value={mode}>{mode}</option>
          ))}
        </select>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="showHome"
            checked={product.showHome}
            onChange={handleChange}
          />
          Show on Home Page
        </label>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;


