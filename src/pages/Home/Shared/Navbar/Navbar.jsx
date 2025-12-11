import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-indigo-600 text-white font-bold">
              GO
            </div>
            <div>
              <div className="font-semibold text-gray-800">GarmentsTracker</div>
              <div className="text-xs text-gray-500">Order & Production</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className="text-gray-700 hover:text-indigo-600">Home</NavLink>
            <NavLink to="/products" className="text-gray-700 hover:text-indigo-600">All-Products</NavLink>

            {!user && (
              <>
                <NavLink to="/about" className="text-gray-700 hover:text-indigo-600">About Us</NavLink>
                <NavLink to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</NavLink>
                <NavLink to="/login" className="px-3 py-1 border rounded-md border-indigo-600 text-indigo-600">Login</NavLink>
                <NavLink to="/register" className="px-3 py-1 rounded-md bg-indigo-600 text-white">Register</NavLink>
              </>
            )}

            {user && (
              <>
                <NavLink to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</NavLink>

                <div className="flex items-center gap-3">
                  <img  
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "User")}`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full border object-cover"
                  />
                  <button
                    onClick={onLogout}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:opacity-90"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t px-4 py-4 space-y-2">
          <NavLink to="/" onClick={() => setOpen(false)} className="block">Home</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)} className="block">All-Products</NavLink>

          {!user && (
            <>
              <NavLink to="/about" onClick={() => setOpen(false)} className="block">About Us</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className="block">Contact</NavLink>
              <NavLink to="/login" onClick={() => setOpen(false)} className="block">Login</NavLink>
              <NavLink to="/register" onClick={() => setOpen(false)} className="block bg-indigo-600 text-white px-3 py-2 rounded-md">
                Register
              </NavLink>
            </>
          )}

          {user && (
            <>
              <NavLink to="/dashboard" onClick={() => setOpen(false)} className="block">Dashboard</NavLink>

              <div className="flex items-center gap-3">
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
                className="bg-red-500 text-white px-3 py-2 rounded-md w-full"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
