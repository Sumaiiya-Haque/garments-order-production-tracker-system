import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const axiosSecure = useAxiosSecure();

  const handleImagePreview = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const product = {
      name: form.name.value,
      description: form.description.value,
      category: form.category.value,
      price: Number(form.price.value),
      quantity: Number(form.quantity.value),
      moq: Number(form.moq.value),
      payment: form.payment.value,
      showHome: form.showHome.checked,
    };

    try {
      const res = await axiosSecure.post("/products", product);

      if (res.data.insertedId) {
        Swal.fire("Success!", "Product Added Successfully", "success");
        form.reset();
        setImages([]);
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" required placeholder="Product Name" className="input input-bordered w-full" />

        <textarea name="description" required placeholder="Description" className="textarea textarea-bordered w-full" />

        <select name="category" className="select select-bordered w-full">
          <option>Shirt</option>
          <option>Pant</option>
          <option>Jacket</option>
          <option>Accessories</option>
        </select>

        <input type="number" name="price" required placeholder="Price" className="input input-bordered w-full" />
        <input type="number" name="quantity" required placeholder="Available Quantity" className="input input-bordered w-full" />
        <input type="number" name="moq" required placeholder="MOQ" className="input input-bordered w-full" />

        <input type="file" multiple onChange={handleImagePreview} className="file-input w-full" />

        {/* Image Preview */}
        <div className="flex gap-2">
          {images.map((img, i) => (
            <img key={i} src={URL.createObjectURL(img)} className="w-16 h-16 rounded" />
          ))}
        </div>

        <select name="payment" className="select select-bordered w-full">
          <option>Cash on Delivery</option>
          <option>PayFirst</option>
        </select>

        <label className="flex items-center gap-2">
          <input type="checkbox" name="showHome" />
          Show on Home Page
        </label>

        <button className="btn btn-primary w-full">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

