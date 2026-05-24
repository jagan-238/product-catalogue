import { useState, useRef, useMemo, useCallback } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

// Get all unique categories from the product list
const allCategories = ["All", ...new Set(products.map((p) => p.category))];

export default function Products() {
  // ✅ useState: controlled input & filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ useRef: focus the search input programmatically
  const searchRef = useRef(null);

  // ✅ useCallback: stable reference, won't recreate on every render
  const handleFocusSearch = useCallback(() => {
    searchRef.current?.focus();
  }, []);

  // ✅ useMemo: expensive filter computation only re-runs when dependencies change
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container">
      {/* Page Header */}
      <div className="page-header">
        <h1>All Products</h1>
        <p>Find exactly what you're looking for</p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="toolbar">
        {/* Search bar with useRef attached */}
        <div className="search-wrapper">
          <input
            ref={searchRef}         // ← useRef attached here
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* useCallback-wrapped focus handler */}
          <button className="search-btn" onClick={handleFocusSearch}>
            🔍 Search
          </button>
        </div>

        {/* Category filter dropdown */}
        <select
          className="filter-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Results count — conditional rendering */}
      {(searchTerm || selectedCategory !== "All") && (
        <p className="results-count">
          Showing <span>{filteredProducts.length}</span> result
          {filteredProducts.length !== 1 ? "s" : ""}
          {selectedCategory !== "All" && <> in <span>{selectedCategory}</span></>}
          {searchTerm && <> for "<span>{searchTerm}</span>"</>}
        </p>
      )}

      {/* Product grid — list rendering with map() */}
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            // ✅ React.memo: ProductCard won't re-render unless its product prop changes
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Conditional rendering: no results state */
        <div className="no-results">
          <h3>No products found</h3>
          <p>Try adjusting your search or filter.</p>
        </div>
      )}
    </div>
  );
}
