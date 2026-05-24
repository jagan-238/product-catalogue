import { Link } from "react-router-dom";
import products from "../data/products";

const categoriesCount = new Set(products.map((p) => p.category)).size;

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <span className="hero-eyebrow">Modern Shopping Experience</span>

        <h1>
          Explore Trending <br />
          <span>Products Online</span>
        </h1>

        <p>
          Discover electronics, fashion, kitchen essentials, home décor,
          beauty products, and more in one place with a smooth shopping experience.
        </p>

        <Link to="/products" className="hero-btn">
          View Products →
        </Link>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">{products.length}+</div>
            <div className="stat-label">Products Available</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">{categoriesCount}+</div>
            <div className="stat-label">Product Categories</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Online Shopping</div>
          </div>
        </div>
      </section>
    </div>
  );
}