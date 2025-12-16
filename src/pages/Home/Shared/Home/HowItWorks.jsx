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
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((s, index) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8 rounded-2xl shadow-xl bg-gradient-to-tr from-white to-gray-50 border border-gray-200 text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/40 text-primary text-3xl md:text-4xl">
              {s.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{s.title}</h3>
            <p className="text-gray-600 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

