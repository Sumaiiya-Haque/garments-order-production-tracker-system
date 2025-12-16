import { motion } from "framer-motion";

const ExtraSection2 = () => {
  return (
    <section className="my-32 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="https://i.ibb.co/f0v2hy5/garments-factory.jpg"
            alt="Garments Factory"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
            Real‑Time Production Insights
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Monitor cutting, sewing, finishing & QC in real‑time using a modern dashboard for complete production visibility.
          </p>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">•</span> Live progress updates
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">•</span> Worker activity insights
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">•</span> Delay alerts & performance tracking
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraSection2;

