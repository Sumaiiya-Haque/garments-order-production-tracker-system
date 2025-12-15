const BuyerProfile = () => {
  return (
    <div className="max-w-md">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>

      <p><b>Name:</b> Buyer User</p>
      <p><b>Email:</b> buyer@gmail.com</p>
      <p><b>Role:</b> Buyer</p>

      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default BuyerProfile;
