import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useSaved } from "../context/SavedContext";

// ✅ React.memo: prevents re-render if props haven't changed
const ProductCard = memo(function ProductCard({ product }) {
  const { isSaved, saveProduct, removeProduct } = useSaved();
  const navigate = useNavigate();
  const saved = isSaved(product.id);

  // Render filled stars based on rating
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - half);
  };

  const handleSaveToggle = (e) => {
    e.stopPropagation(); // don't navigate when clicking save
    if (saved) {
      removeProduct(product.id);
    } else {
      saveProduct(product);
    }
  };

  return (
    <div className="product-card">
      {/* Image + overlay buttons */}
      <div className="card-img-wrapper">
        <img src={product.image} alt={product.title} loading="lazy" />
        {/* Category badge */}
        <span className="card-category-badge">{product.category}</span>
        {/* Save / Unsave button */}
        <button
          className={`card-save-btn ${saved ? "saved" : ""}`}
          onClick={handleSaveToggle}
          title={saved ? "Remove from saved" : "Save product"}
        >
          {saved ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Card body */}
      <div className="card-body">
        <p className="card-title">{product.title}</p>

        {/* Rating display */}
        <div className="card-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span>{product.rating}</span>
        </div>

        {/* Price + View Details */}
        <div className="card-footer">
          <span className="card-price">${product.price.toFixed(2)}</span>
          <button
            className="card-details-btn"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            Details →
          </button>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
