import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SavedProvider } from "./context/SavedContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Saved from "./pages/Saved";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./styles/global.css";

export default function App() {
  return (
    <ThemeProvider>
      <SavedProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/"                    element={<Home />} />
            <Route path="/products"            element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/saved"               element={<Saved />} />
            <Route path="/about"               element={<About />} />
            <Route path="*"                    element={<NotFound />} />
          </Routes>
          <footer className="footer">
            <div className="container">
               © 2026 Product Catalogue. All rights reserved.
            </div>
          </footer>
        </BrowserRouter>
      </SavedProvider>
    </ThemeProvider>
  );
}
