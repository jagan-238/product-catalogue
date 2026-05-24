const features = [
  {
    icon: "🛍️",
    title: "Product Browsing",
    desc: "Users can explore different products with images, pricing, ratings, and category information.",
  },
  {
    icon: "🔍",
    title: "Smart Search",
    desc: "Products can be searched instantly by name to quickly find items.",
  },
  {
    icon: "📂",
    title: "Category Filtering",
    desc: "Users can filter products based on categories for a better shopping experience.",
  },
  {
    icon: "❤️",
    title: "Saved Products",
    desc: "Favourite products can be saved and accessed later from the Saved page.",
  },
  {
    icon: "🌙",
    title: "Dark & Light Mode",
    desc: "Users can switch between dark and light themes for comfortable viewing.",
  },
  {
    icon: "📱",
    title: "Responsive Layout",
    desc: "The application works smoothly across desktop, tablet, and mobile devices.",
  },
  {
    icon: "⚡",
    title: "Fast Navigation",
    desc: "Pages load quickly with smooth navigation between products and details.",
  },
  {
    icon: "🧾",
    title: "Detailed Product View",
    desc: "Each product has its own page with complete information and actions.",
  },
];

const tech = [
  "React 18",
  "Vite",
  "React Router DOM",
  "Context API",
  "JavaScript",
  "CSS3",
  "Responsive Design",
  "React Hooks",
];

export default function About() {
  return (
    <div className="container about-page">
      <div className="page-header">
        <h1>About Product Catalogue</h1>

        <p>
          A modern product browsing application where users can explore,
          search, filter, and save their favourite products with a clean
          and responsive user interface.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="about-grid">
        {features.map((f) => (
          <div className="about-card" key={f.title}>
            <div className="icon">{f.icon}</div>

            <h3>{f.title}</h3>

            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="about-card" style={{ marginTop: "1rem" }}>
        <div className="icon">🛠</div>

        <h3>Tech Stack</h3>

        <p>
          Built using React and modern frontend technologies with focus on
          performance, responsive design, and smooth user experience.
        </p>

        <div className="tech-list">
          {tech.map((t) => (
            <span className="tech-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}