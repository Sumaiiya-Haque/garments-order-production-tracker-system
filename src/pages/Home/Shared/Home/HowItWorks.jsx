import { motion } from "framer-motion";
import { FaShoppingCart, FaIndustry, FaTruck } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    { id: 1, icon: <FaShoppingCart />, title: "Place Order", desc: "Clients order garments easily." },
    { id: 2, icon: <FaIndustry />, title: "Production", desc: "Cutting, sewing & finishing tracked." },
    { id: 3, icon: <FaTruck />, title: "Delivery", desc: "On‑time delivery guaranteed." },
  ];

  return (
    <section className="my-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl shadow-lg bg-base-100 text-center border"
          >
            <div className="text-4xl text-primary mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
