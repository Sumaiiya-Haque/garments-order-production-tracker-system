import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import useAuth from "../../../../hooks/useAuth";
import useRole from "../../../../hooks/useRole";


const Navbar = () => {
  const { user, logOut } = useAuth(); 
  const [open, setOpen] = useState(false);
  const { role, roleLoading } = useRole();

const menuLinks = (
  <>
    <NavLink
      className="px-2 py-1 rounded-md text-gray-700 font-medium hover:text-indigo-600 hover:underline transition duration-200"
      to="/"
    >
      Home
    </NavLink>

    <NavLink
      className="px-2 py-1 rounded-md text-gray-700 font-medium hover:text-indigo-600 hover:underline transition duration-200"
      to="/all-products"
    >
      All-Products
    </NavLink>

    {!user && (
      <>
        <NavLink
          className="px-2 py-1 rounded-md text-gray-700 font-medium hover:text-indigo-600 hover:underline transition duration-200"
          to="/about"
        >
          About Us
        </NavLink>

        <NavLink
          className="px-2 py-1 rounded-md text-gray-700 font-medium hover:text-indigo-600 hover:underline transition duration-200"
          to="/contact"
        >
          Contact
        </NavLink>

        <NavLink
          className="px-3 py-1 border-2 border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-50 font-semibold transition duration-200"
          to="/login"
        >
          Login
        </NavLink>

        <NavLink
          className="px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition duration-200"
          to="/register"
        >
          Register
        </NavLink>
      </>
    )}

    {user && !roleLoading && ["manager", "admin"].includes(role) && (
      <NavLink
        className="px-2 py-1 rounded-md text-gray-700 font-medium hover:text-indigo-600 hover:underline transition duration-200"
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    )}

    {user && (
      <NavLink
        className="px-2 py-1 rounded-md text-gray-700 font-medium hover:text-indigo-600 hover:underline transition duration-200"
        to="/my-orders"
      >
        My Orders
      </NavLink>
    )}
  </>
);


  return (
<header className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-md"
        >
          GO
        </motion.div>
        <div>
          <div className="font-bold text-gray-800 text-lg hover:text-indigo-600 transition">
            GarmentsTracker
          </div>
          <div className="text-xs text-gray-500">Order & Production</div>
        </div>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 text-gray-700">
        {menuLinks}

        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 cursor-pointer transform transition duration-300 hover:scale-110"
            >
              <img
                src={
                  user.photoURL ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user.displayName || "User"
                  )}`
                }
                alt="avatar"
                className="w-8 h-8 rounded-full border-2 border-indigo-400 object-cover shadow-sm"
              />
            </div>
            <ul className="dropdown-content menu bg-white rounded-lg shadow-xl w-44 p-2 mt-2">
              <li>
                <span className="text-sm px-2 font-medium">{user.displayName}</span>
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="text-red-500 hover:bg-red-50 rounded-md w-full text-left px-2 py-1 transition"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 hover:text-indigo-600 transition"
        onClick={() => setOpen(!open)}
      >
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
        transition={{ type: "spring", stiffness: 100 }}
        className="md:hidden bg-white px-4 pb-4 shadow-inner rounded-b-lg"
      >
        <div className="flex flex-col space-y-3 py-3">
          {menuLinks.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 5 }}
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              {link}
            </motion.div>
          ))}

          {user && (
            <div className="pt-2 border-t">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user.displayName || "User"
                    )}`
                  }
                  className="w-8 h-8 rounded-full border-2 border-indigo-400 shadow-sm"
                />
                <span className="font-medium">{user.displayName}</span>
              </div>

              <button
                onClick={() => {
                  setOpen(false);
                  logOut();
                }}
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 rounded-lg font-semibold shadow hover:from-red-600 hover:to-pink-600 transition"
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


