import { motion } from "framer-motion";

const ExtraSection1 = () => {
  return (
    <section className="my-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-gradient-to-r from-primary to-secondary text-white p-12 md:p-20 rounded-3xl shadow-2xl overflow-hidden text-center"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
          Why Choose Us?
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-white/90">
          We provide a complete garments production tracking system with advanced monitoring,
          automated updates, and real‑time insights, ensuring efficiency, transparency, and
          on-time delivery.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 bg-white text-primary font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ExtraSection1;

