import { Outlet, NavLink, useNavigate } from "react-router";
import {
  FiHome,
  FiPlus,
  FiBox,
  FiClock,
  FiCheck,
  FiUser,
  FiMenu,
  FiX,
  FiUsers,
  FiShoppingCart
} from "react-icons/fi";
import { useState } from "react";
// import { useAuth } from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { role } = useRole(); // buyer | manager | admin
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // ===== Role Based Links =====
  const buyerLinks = [
    { name: "My Orders", to: "/dashboard/my-orders", icon: <FiShoppingCart /> },
    { name: "Track Order", to: "/dashboard/track-order/123", icon: <FiClock /> },
    { name: "My Profile", to: "/dashboard/buyer-profile", icon: <FiUser /> },
  ];

  const managerLinks = [
    { name: "Add Product", to: "/dashboard/add-product", icon: <FiPlus /> },
    { name: "Manage Products", to: "/dashboard/manage-products", icon: <FiBox /> },
    { name: "Pending Orders", to: "/dashboard/pending-orders", icon: <FiClock /> },
    { name: "Approved Orders", to: "/dashboard/approved-orders", icon: <FiCheck /> },
    { name: "My Profile", to: "/dashboard/manager-profile", icon: <FiUser /> },
  ];

  const adminLinks = [
    { name: "All Orders", to: "/dashboard/all-orders", icon: <FiShoppingCart /> },
    { name: "All Products", to: "/dashboard/all-products-table", icon: <FiBox /> },
    { name: "Manage Users", to: "/dashboard/manage-users", icon: <FiUsers /> },
  ];

  // ===== Pick Links by Role =====
  const links =
    role === "admin"
      ? adminLinks
      : role === "manager"
      ? managerLinks
      : buyerLinks;

  const dashboardTitle =
    role === "admin"
      ? "Admin Dashboard"
      : role === "manager"
      ? "Manager Dashboard"
      : "Buyer Dashboard";

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ===== Sidebar ===== */}
      <aside
        className={`bg-gray-800 text-white p-4 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {sidebarOpen && (
            <h2 className="text-lg font-bold truncate">{dashboardTitle}</h2>
          )}
          <button
            className="text-xl md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded transition ${
                  isActive
                    ? "bg-gray-700 font-semibold"
                    : "hover:bg-gray-700"
                }`
              }
            >
              <span className="text-lg">{link.icon}</span>
              {sidebarOpen && <span>{link.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Back to Home */}
        {sidebarOpen && (
          <button
            onClick={() => navigate("/")}
            className="mt-8 w-full flex items-center justify-center gap-2 bg-primary py-2 rounded text-white hover:opacity-90"
          >
            <FiHome />
            Back to Home
          </button>
        )}
      </aside>

      {/* ===== Main Content ===== */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;


