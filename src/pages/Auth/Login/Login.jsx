import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔥 Firebase login
    signInUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaEnvelope /> Email
                </span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaLock /> Password
                </span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-primary w-full">Login</button>
          </form>

          {/* Google Login */}
          <SocialLogin />

          <p className="text-center mt-4">
            New here?{" "}
            <Link to="/register" className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


