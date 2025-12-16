import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [role, setRole] = useState("buyer");
  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const { registerUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const imageHostingKey = "0c82c2c8707e2ebdb830fdcdc8ca8276";
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  // Handle photo preview
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageFile = form.photo.files[0];

    // ✅ Password Validation
    if (!/[A-Z]/.test(password)) {
      return Swal.fire("Error", "Password must contain an uppercase letter", "error");
    }
    if (!/[a-z]/.test(password)) {
      return Swal.fire("Error", "Password must contain a lowercase letter", "error");
    }
    if (password.length < 6) {
      return Swal.fire("Error", "Password must be at least 6 characters", "error");
    }

    try {
      // 🔹 1. Upload image
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgRes = await fetch(imageHostingUrl, { method: "POST", body: formData });
      const imgData = await imgRes.json();
      if (!imgData.success) throw new Error("Image upload failed");

      const photoURL = imgData.data.display_url;

      // 🔹 2. Firebase Register
      await registerUser(email, password);

      // 🔹 3. Update Firebase Profile
      await updateUserProfile({ displayName: name, photoURL });

      // 🔹 4. Save to MongoDB backend
      const userInfo = { name, email, photoURL, role };
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userInfo),
      });
      const data = await res.json();
      if (!data.insertedId && data.message !== "User already exists") {
        throw new Error("User database save failed");
      }

      // ✅ Success
      Swal.fire({ icon: "success", title: "Registration Successful", text: "Status: Pending" });
      form.reset();
      setPreview(null);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Register</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label-text flex items-center gap-2">
                <FaUser /> Name
              </label>
              <input type="text" name="name" required className="input input-bordered" />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label-text flex items-center gap-2">
                <FaEnvelope /> Email
              </label>
              <input type="email" name="email" required className="input input-bordered" />
            </div>

            {/* Photo Upload */}
            <div className="form-control">
              <label className="label-text flex items-center gap-2">
                <FaImage /> Photo
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                required
                onChange={handlePhotoChange}
                className="file-input file-input-bordered"
              />
              {preview && (
                <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
              )}
            </div>

            {/* Role */}
            <div className="form-control">
              <label className="label-text">Role</label>
              <select
                className="select select-bordered"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="buyer">Buyer</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            {/* Password */}
            <div className="form-control relative">
              <label className="label-text flex items-center gap-2">
                <FaLock /> Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="input input-bordered pr-10"
              />
              <span
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <button className="btn btn-primary w-full">Register</button>

            {/* Social Login */}
            <SocialLogin />
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;



