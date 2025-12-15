import { Outlet, NavLink, useNavigate } from "react-router";
import { FiHome, FiPlus, FiBox, FiClock, FiCheck, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const links = [
    { name: "Add Product", to: "/dashboard/add-product", icon: <FiPlus /> },
    { name: "Manage Products", to: "/dashboard/manage-products", icon: <FiBox /> },
    { name: "Pending Orders", to: "/dashboard/pending-orders", icon: <FiClock /> },
    { name: "Approved Orders", to: "/dashboard/approved-orders", icon: <FiCheck /> },
    { name: "My Profile", to: "/dashboard/profile", icon: <FiUser /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white p-4 transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"}`}>
        <div className="flex items-center justify-between mb-6">
          {sidebarOpen && <h2 className="text-xl font-bold">Manager Dashboard</h2>}
          <button
            className="text-white text-xl md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition ${
                  isActive ? "bg-gray-700 font-bold" : ""
                }`
              }
            >
              {link.icon}
              {sidebarOpen && link.name}
            </NavLink>
          ))}
        </nav>

        {/* Back to Home Button */}
        {sidebarOpen && (
          <button
            className="mt-6 btn btn-primary w-full flex items-center justify-center gap-2"
            onClick={() => navigate("/")}
          >
            <FiHome /> Back to Home
          </button>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

