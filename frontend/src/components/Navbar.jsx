import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useSaved } from "../context/SavedContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { savedItems } = useSaved();

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          🛍 Catalogué
        </NavLink>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved" className={({ isActive }) => (isActive ? "active" : "")}>
              <span className="saved-badge">
                Saved
                {/* Conditionally show badge count only when there are saved items */}
                {savedItems.length > 0 && (
                  <span className="saved-count">{savedItems.length}</span>
                )}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
