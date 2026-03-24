import plywood from "../assets/images/plywood.jpg";
import boards from "../assets/images/boards.jpg";
import doors from "../assets/images/doors.jpg";

export default function Products() {
  const data = [
    {
      title: "Plywood",
      desc: "Premium grade plywood for furniture and construction",
      img: plywood,
    },
    {
      title: "Boards",
      desc: "High-quality MDF and particle boards for interiors",
      img: boards,
    },
    {
      title: "Decorative Doors",
      desc: "Stylish and durable doors for modern spaces",
      img: doors,
    },
  ];

  return (
    <section id="products" className="products"> {/* ✅ IMPORTANT */}
      <p style={{ color: "#c40000", letterSpacing: "3px" }}>
        OUR COLLECTION
      </p>

      <h1>Premium Products</h1>

      <div className="products-grid">
        {data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="learn">Learn More →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}