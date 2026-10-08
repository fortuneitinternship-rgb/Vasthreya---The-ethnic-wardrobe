import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image-box">

        <img
          src={product.image}
          alt={product.name}
        />

        <button
          className="wishlist-icon"
          type="button"
        >
          <i className="bi bi-heart"></i>
        </button>

      </div>

      <div className="product-card-content">

        <p className="product-category">
          {product.category}
        </p>

        <h3>
          {product.name}
        </h3>

        <div className="rating">

          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>

          <span>
            {product.rating}
          </span>

        </div>

        <div className="product-price">

          <strong>
            ₹{product.price}
          </strong>

          <del>
            ₹{product.oldPrice}
          </del>

        </div>

        <Link
          to={`/products/${product.id}`}
          className="vasthreya-btn"
        >
          VIEW DETAILS
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;