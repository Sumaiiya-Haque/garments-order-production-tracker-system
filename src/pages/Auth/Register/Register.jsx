import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [role, setRole] = useState("buyer");
  const { registerUser, updateUserProfile } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // 🔑 imgbb api key
  const imageHostingKey = "0c82c2c8707e2ebdb830fdcdc8ca8276";
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

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
      // 🔹 Image Upload
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgRes = await fetch(imageHostingUrl, {
        method: "POST",
        body: formData,
      });

      const imgData = await imgRes.json();

      if (!imgData.success) {
        throw new Error("Image upload failed");
      }

      const photoURL = imgData.data.display_url;

      // 🔹 Firebase Register
      await registerUser(email, password);

      // 🔹 Update Profile
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL,
      });

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Status: Pending",
      });

      form.reset();
      navigate(from, { replace: true });

    } catch (error) {
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
              <input
                type="text"
                name="name"
                required
                className="input input-bordered"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label-text flex items-center gap-2">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="input input-bordered"
              />
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
                className="file-input file-input-bordered"
              />
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
            <div className="form-control">
              <label className="label-text flex items-center gap-2">
                <FaLock /> Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="input input-bordered"
              />
            </div>

            <button className="btn btn-primary w-full">
              Register
            </button>

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


