export default function WhyUs() {
  const data = [
    {
      title: "Extraordinary Strength",
      desc: "Our plywood is known for durability and long life.",
      icon: "🛡️",
    },
    {
      title: "Termite Resistant",
      desc: "Anti-borer and termite protection.",
      icon: "🐛",
    },
    {
      title: "Premium Quality",
      desc: "Manufactured with high-grade materials.",
      icon: "🏅",
    },
    {
      title: "Stylish Designs",
      desc: "Perfect for modern interior spaces.",
      icon: "✨",
    },
  ];

  return (
    <section
      id="whyus"  // ✅ IMPORTANT (Navbar ke liye)
      style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "#f4eaea",
      }}
    >
      <p
        style={{
          color: "#c40000",
          letterSpacing: "3px",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        OUR ADVANTAGES
      </p>

      <h1
        style={{
          fontSize: "48px",
          marginBottom: "60px",
          fontWeight: "700",
        }}
      >
        Why Choose Us
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              width: "260px",
              padding: "30px 20px",
              borderRadius: "12px",
              background: "#ffffff",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                margin: "0 auto 20px",
                borderRadius: "50%",
                background: "#f8dede",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
              }}
            >
              {item.icon}
            </div>

            <h3 style={{ marginBottom: "10px" }}>
              {item.title}
            </h3>

            <p style={{ color: "#666" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}