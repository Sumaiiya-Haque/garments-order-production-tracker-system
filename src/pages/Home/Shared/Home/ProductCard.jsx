import { Link } from "react-router";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card bg-base-100 shadow-xl border"
    >
      <figure>
        <img src={''} alt={''} className="h-48 w-full  object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{''}</h2>
        <p className="text-gray-600">{''}</p>
        <p className="font-bold text-primary">${''}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${''}`} className="btn btn-outline btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
