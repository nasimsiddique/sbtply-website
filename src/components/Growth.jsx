export default function Growth() {
  return (
    <section
      style={{
        background: "#c40000",
        color: "white",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      {/* ICON CIRCLE */}
      <div
        style={{
          width: "70px",
          height: "70px",
          margin: "0 auto 30px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
        }}
      >
        🌿
      </div>

      {/* HEADING */}
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Your Partner in Sustainable Growth
      </h1>

      {/* TEXT */}
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "18px",
          lineHeight: "1.6",
          opacity: "0.9",
        }}
      >
        We believe in responsible manufacturing and sustainable wood sourcing.
        Our products are made using eco-friendly processes while maintaining the
        highest quality standards.
      </p>
    </section>
  );
}