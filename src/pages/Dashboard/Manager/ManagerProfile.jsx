import useAuth from "../../../hooks/useAuth";

const ManagerProfile = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>

      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>

      <button onClick={logOut} className="btn btn-error mt-4">
        Logout
      </button>
    </div>
  );
};

export default ManagerProfile;
