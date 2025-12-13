import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

  const menuLinks = (
    <>
      <NavLink className="hover:text-indigo-600 transition" to="/">Home</NavLink>
      <NavLink className="hover:text-indigo-600 transition" to="/products">All-Products</NavLink>

      {!user && (
        <>
          <NavLink className="hover:text-indigo-600 transition" to="/about">About Us</NavLink>
          <NavLink className="hover:text-indigo-600 transition" to="/contact">Contact</NavLink>
          <NavLink className="px-3 py-1 border rounded-md border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition" to="/login">
            Login
          </NavLink>
          <NavLink className="px-3 py-1 rounded-md bg-primary text-white hover:bg-yellow-300 transition" to="/register">
            Register
          </NavLink>
        </>
      )}

      {user && (
        <>
          <NavLink className="hover:text-indigo-600 transition" to="/dashboard">Dashboard</NavLink>
        </>
      )}
    </>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white font-bold"
            >
              GO
            </motion.div>
            <div>
              <div className="font-semibold text-gray-800">GarmentsTracker</div>
              <div className="text-xs text-gray-500">Order & Production</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-gray-700">
            {menuLinks}

            {user && (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="flex items-center gap-2">
                  <img
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "User")}`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full border object-cover"
                  />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-md shadow-md w-40 p-2">
                  <li><span className="text-sm px-2">{user.displayName}</span></li>
                  <li>
                    <button onClick={onLogout} className="text-red-500">Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-4 pb-4 shadow-inner"
          >
            <div className="flex flex-col space-y-3 py-3">
              {menuLinks}

              {user && (
                <div className="pt-2 border-t">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "User")}`}
                      className="w-8 h-8 rounded-full border"
                    />
                    <span>{user.displayName}</span>
                  </div>

                  <button
                    onClick={() => {
                      setOpen(false);
                      onLogout();
                    }}
                    className="w-full bg-red-500 text-white py-2 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

