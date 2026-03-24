export default function Stats() {
  return (
    <section
      style={{
        background: "#e8dfdc",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h1 style={{ color: "#c40000", fontSize: "48px" }}>50+</h1>
        <p>Distributors</p>
      </div>

      <div>
        <h1 style={{ color: "#c40000", fontSize: "48px" }}>200+</h1>
        <p>Dealers</p>
      </div>

      <div>
        <h1 style={{ color: "#c40000", fontSize: "48px" }}>30+</h1>
        <p>Cities</p>
      </div>
    </section>
  );
}