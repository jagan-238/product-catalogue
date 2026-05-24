import { useParams, useNavigate } from "react-router-dom";
import { useSaved } from "../context/SavedContext";
import products from "../data/products";

export default function ProductDetail() {
  // ✅ useParams: extract the :productId from the URL
  const { productId } = useParams();
  const navigate = useNavigate();
  const { isSaved, saveProduct, removeProduct } = useSaved();

  // Find the matching product from local data
  const product = products.find((p) => p.id === Number(productId));
  const saved = product ? isSaved(product.id) : false;

  // ✅ Conditional rendering: show 404-style message if product not found
  if (!product) {
    return (
      <div className="container">
        <div className="not-found">
          <div className="big-num">404</div>
          <h2>Product not found</h2>
          <p>This product doesn't exist in our catalogue.</p>
          <a onClick={() => navigate("/products")} style={{ cursor: "pointer" }}>
            ← Back to Products
          </a>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - half);
  };

  return (
    <div className="container">
      <div className="product-detail">
        {/* Back button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="detail-grid">
          {/* Product Image */}
          <div className="detail-img">
            <img src={product.image} alt={product.title} />
          </div>

          {/* Product Info */}
          <div className="detail-info">
            <span className="detail-category">{product.category}</span>
            <h1 className="detail-title">{product.title}</h1>

            {/* Rating */}
            <div className="detail-rating">
              <span className="stars">{renderStars(product.rating)}</span>
              <span>{product.rating} / 5</span>
            </div>

            {/* Price */}
            <div className="detail-price">${product.price.toFixed(2)}</div>

            <hr className="detail-divider" />

            {/* Description */}
            <p className="detail-description">{product.description}</p>

            {/* Save / Remove button — conditional rendering based on saved state */}
            <button
              className={`detail-save-btn ${saved ? "saved-state" : "unsaved"}`}
              onClick={() =>
                saved ? removeProduct(product.id) : saveProduct(product)
              }
            >
              {saved ? "❤️ Saved to Favourites" : "🤍 Save to Favourites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
