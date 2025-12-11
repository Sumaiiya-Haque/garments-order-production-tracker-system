import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero min-h-[80vh] bg-base-200 rounded-xl px-6 mt-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src="https://i.ibb.co/0mGNj2c/garments-hero.jpg"
          className="w-full max-w-xl rounded-lg shadow-2xl"
        />
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold">Track Your Garments Production Smartly</h1>
          <p className="py-6 text-lg text-gray-600">
            A complete garments order & production tracking system made to simplify workflow.
          </p>
          <Link to="/products" className="btn btn-primary flex items-center gap-2">
            View Products <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
