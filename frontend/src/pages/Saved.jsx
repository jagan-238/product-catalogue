import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useSaved } from "../context/SavedContext";
import ProductCard from "../components/ProductCard";

export default function Saved() {
  const { savedItems } = useSaved();

  // ✅ useMemo: compute summary stats only when savedItems changes
  const summary = useMemo(() => {
    const count = savedItems.length;
    const totalValue = savedItems.reduce((sum, item) => sum + item.price, 0);
    const avgRating =
      count > 0
        ? (savedItems.reduce((sum, item) => sum + item.rating, 0) / count).toFixed(1)
        : 0;
    const categories = new Set(savedItems.map((i) => i.category)).size;
    return { count, totalValue, avgRating, categories };
  }, [savedItems]);

  return (
    <div className="container saved-page">
      <div className="page-header">
        <h1>Saved Products</h1>
        <p>Your personal collection of favourite items</p>
      </div>

      {/* Conditional rendering: show summary only when items exist */}
      {savedItems.length > 0 ? (
        <>
          {/* Summary bar — powered by useMemo */}
          <div className="saved-summary">
            <div className="summary-item">
              <span className="summary-label">Items Saved</span>
              <span className="summary-value">{summary.count}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Total Value</span>
              <span className="summary-value">${summary.totalValue.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Avg Rating</span>
              <span className="summary-value">{summary.avgRating} ★</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Categories</span>
              <span className="summary-value">{summary.categories}</span>
            </div>
          </div>

          {/* Saved products grid — list rendering with map() */}
          <div className="products-grid">
            {savedItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        /* Empty state */
        <div className="empty-state">
          <div className="emoji">🛍</div>
          <h3>Nothing saved yet</h3>
          <p>Browse the catalogue and tap the heart to save products you love.</p>
          <Link to="/products">Browse Products →</Link>
        </div>
      )}
    </div>
  );
}
