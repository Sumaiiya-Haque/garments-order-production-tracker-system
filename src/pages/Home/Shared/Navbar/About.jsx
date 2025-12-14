import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-gray-800 mb-6"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center mb-8"
        >
          GarmentsTracker is a smart solution for managing garments orders,
          production tracking, and delivery updates efficiently.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 border rounded-lg hover:shadow transition">
            <h3 className="font-semibold text-lg mb-2 text-indigo-600">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm">
              To simplify garments order management and improve transparency
              between buyers, managers, and admins.
            </p>
          </div>

          <div className="p-5 border rounded-lg hover:shadow transition">
            <h3 className="font-semibold text-lg mb-2 text-indigo-600">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm">
              Become a reliable digital platform for garments industries
              worldwide.
            </p>
          </div>

          <div className="p-5 border rounded-lg hover:shadow transition">
            <h3 className="font-semibold text-lg mb-2 text-indigo-600">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 text-sm">
              Easy dashboard, real-time updates, and role-based secure access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
