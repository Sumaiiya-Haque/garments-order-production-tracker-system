import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { _id, image, title, category, price, quantity } = product;

  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Category: {category}</p>
        <p>Price: ৳{price}</p>
        <p>Available: {quantity}</p>

        <div className="card-actions justify-end">
          <Link to={`/all-products/${_id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
