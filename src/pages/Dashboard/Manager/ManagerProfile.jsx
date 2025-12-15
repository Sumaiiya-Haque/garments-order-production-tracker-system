import useAuth from "../../../hooks/useAuth";
import { FiLogOut, FiUser } from "react-icons/fi";

const ManagerProfile = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <FiUser className="text-3xl text-primary" />
          <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
        </div>

        {/* User Info */}
        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Name:</span>
            <span>{user?.displayName || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Email:</span>
            <span>{user?.email || "N/A"}</span>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={logOut}
          className="btn btn-error w-full mt-6 flex items-center justify-center gap-2"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ManagerProfile;

