export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 20px",
        textAlign: "center",
        background: "#f8f8f8",
      }}
    >
      {/* TOP SMALL TEXT */}
      <p
        style={{
          color: "#c40000",
          letterSpacing: "3px",
          fontWeight: "600",
          marginBottom: "15px",
          fontSize: "14px",
        }}
      >
        WHO WE ARE
      </p>

      {/* MAIN HEADING */}
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "800",
          marginBottom: "30px",
          color: "#111",
        }}
      >
        About SBTPLY
      </h1>

      {/* TEXT */}
      <p
        style={{
          maxWidth: "850px",
          lineHeight: "2",
          color: "#555",
          fontSize: "18px",
          marginBottom: "25px",
        }}
      >
        SBTPLY is a trusted plywood brand dedicated to delivering strong,
        stylish and durable plywood products. Our company focuses on high-quality
        manufacturing standards to ensure long-lasting performance for furniture,
        interiors and construction.
      </p>

      <p
        style={{
          maxWidth: "850px",
          lineHeight: "2",
          color: "#555",
          fontSize: "18px",
        }}
      >
        We combine modern technology with premium raw materials to produce plywood
        that meets the highest standards of strength and reliability.
      </p>
    </section>
  );
}