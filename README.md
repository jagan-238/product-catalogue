# 🛍 Catalogué — React Product Catalogue App

A beginner-friendly React project built with **React 18 + Vite**, demonstrating core React concepts through a fully functional product catalogue application.

---

## 📸 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section with product stats |
| Products | `/products` | Search, filter, and browse all products |
| Product Detail | `/products/:id` | Full details for a single product |
| Saved | `/saved` | Your saved/favourited products |
| About | `/about` | Project feature breakdown |
| 404 | `*` | Catch-all not found page |

---

## ⚙️ Tech Stack

- **React 18** — UI library
- **Vite** — Fast dev server and bundler
- **React Router v6** — Client-side routing
- **Context API** — Global state (theme + saved items)
- **CSS Variables** — Light/dark theme switching
- **Local data only** — No backend, no database

---

## 🧠 React Concepts Covered

| Concept | File | How It's Used |
|---------|------|---------------|
| `useState` | `Products.jsx` | Tracks search term and selected category |
| `useRef` | `Products.jsx` | Focuses the search input on button click |
| `useMemo` | `Products.jsx`, `Saved.jsx` | Memoizes filtered list and saved summary stats |
| `useCallback` | `Products.jsx` | Stable reference for the focus handler |
| `useParams` | `ProductDetail.jsx` | Reads `:productId` from the URL |
| `React.memo` | `ProductCard.jsx` | Skips re-render when product prop hasn't changed |
| `Context API` | `ThemeContext.jsx`, `SavedContext.jsx` | Global theme and saved items without prop drilling |
| Conditional Rendering | Throughout | Empty states, badges, button labels |
| List Rendering | Throughout | `.map()` for product grids and category lists |
| Dynamic Routing | `App.jsx` | `/products/:productId` resolves to individual product pages |

---

## 🗂 Project Structure

```
product-catalogue/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    ├── data/
    │   └── products.js          # 12 local sample products
    ├── context/
    │   ├── ThemeContext.jsx      # Dark / light theme
    │   └── SavedContext.jsx      # Saved / favourites state
    ├── components/
    │   ├── Navbar.jsx
    │   └── ProductCard.jsx       # Wrapped with React.memo
    └── pages/
        ├── Home.jsx
        ├── Products.jsx
        ├── ProductDetail.jsx
        ├── Saved.jsx
        ├── About.jsx
        └── NotFound.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone or unzip the project
cd product-catalogue

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## ✨ Features

- 🔍 **Live search** — filter products by title as you type
- 🗂 **Category filter** — dropdown to filter by product category
- 📊 **Result count** — shows how many products match current filters
- 🎯 **Focus via useRef** — Search button focuses the input field
- ❤️ **Save products** — save favourites from any card or detail page
- 🚫 **No duplicates** — duplicate saves are prevented automatically
- 🗑 **Remove saved** — remove items from the saved page or product card
- 📈 **Saved summary** — total value, average rating, and category count (useMemo)
- 🌙 **Dark / Light theme** — toggle from the navbar, applies globally
- 📱 **Responsive** — works on mobile, tablet, and desktop
- 🔗 **Dynamic routes** — each product has its own URL `/products/:id`
- 🚧 **404 handling** — unknown routes and unknown product IDs both handled

---

## 📦 Sample Product Data

The app ships with **12 local products** across 7 categories:

- Electronics
- Accessories
- Kitchen
- Furniture
- Footwear
- Stationery
- Home Decor

Each product has: `id`, `title`, `category`, `price`, `rating`, `description`, `image`

---

## 📄 License

This project is open source and available for personal and educational use.

---

*Catalogué · Built with React 18, Vite, React Router & Context API*
