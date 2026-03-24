export default function Footer() {
  return (
    <footer
      style={{
        background: "#0b0b0b",
        color: "#fff",
        padding: "60px 20px 20px",
      }}
    >
      {/* TOP GRID */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* LEFT */}
        <div>
          <h2 style={{ marginBottom: "10px" }}>SBTPLY</h2>
          <p style={{ color: "#bbb" }}>
            India's Trusted Plywood Manufacturer & Supplier
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 style={{ marginBottom: "10px" }}>Quick Links</h3>
          <p style={linkStyle}>About Us</p>
          <p style={linkStyle}>Products</p>
          <p style={linkStyle}>Contact</p>
        </div>

        {/* RIGHT */}
        <div>
          <h3 style={{ marginBottom: "10px" }}>Contact Info</h3>
          <p style={infoStyle}>Phone: +91 9876543210</p>
          <p style={infoStyle}>Email: info@sbtply.com</p>
          <p style={infoStyle}>Location: India</p>
        </div>
      </div>

      {/* LINE */}
      <div
        style={{
          borderTop: "1px solid #222",
          margin: "30px auto 20px",
          maxWidth: "1100px",
        }}
      ></div>

      {/* COPYRIGHT */}
      <p style={{ textAlign: "center", color: "#888" }}>
        © 2026 SBTPLY. All Rights Reserved.
      </p>
    </footer>
  );
}

// STYLES
const linkStyle = {
  color: "#bbb",
  margin: "5px 0",
  cursor: "pointer",
};

const infoStyle = {
  color: "#bbb",
  margin: "5px 0",
};