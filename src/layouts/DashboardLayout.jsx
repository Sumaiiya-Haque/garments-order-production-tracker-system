import { Outlet, NavLink } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Manager Dashboard</h2>

        <nav className="space-y-2">
          <NavLink to="/dashboard/add-product">Add Product</NavLink><br />
          <NavLink to="/dashboard/manage-products">Manage Products</NavLink><br />
          <NavLink to="/dashboard/pending-orders">Pending Orders</NavLink><br />
          <NavLink to="/dashboard/approved-orders">Approved Orders</NavLink><br />
          <NavLink to="/dashboard/profile">My Profile</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout;
