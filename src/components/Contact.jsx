export default function Contact() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#f4eaea",
      }}
    >
      {/* HEADING */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "60px",
          fontWeight: "700",
        }}
      >
        Contact Us
      </h1>

      {/* MAIN GRID */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "15px" }}>Let's Connect</h2>

          <p style={{ color: "#555", marginBottom: "30px" }}>
            Have questions about our products? Get in touch with us and our team
            will be happy to assist you.
          </p>

          {/* PHONE */}
          <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#f3dede",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              📞
            </div>
            <div>
              <h4 style={{ margin: 0 }}>Phone</h4>
              <p style={{ margin: 0, color: "#666" }}>+91 8874999719</p>
            </div>
          </div>

          {/* EMAIL */}
          <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#f3dede",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✉️
            </div>
            <div>
              <h4 style={{ margin: 0 }}>Email</h4>
              <p style={{ margin: 0, color: "#666" }}>nasimsiddique71@gmail.com</p>
            </div>
          </div>

          {/* ADDRESS */}
          <div style={{ display: "flex", gap: "15px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#f3dede",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              📍
            </div>
            <div>
              <h4 style={{ margin: 0 }}>Address</h4>
              <p style={{ margin: 0, color: "#666" }}>India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div
         id="contact"
          style={{
            flex: 1,
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          {/* NAME */}
          <label>Name</label>
          <input
            type="text"
            placeholder="Your name"
            style={inputStyle}
          />

          {/* EMAIL */}
          <label>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            style={inputStyle}
          />

          {/* PHONE */}
          <label>Phone</label>
          <input
            type="text"
            placeholder="+91 XXXXX XXXXX"
            style={inputStyle}
          />

          {/* MESSAGE */}
          <label>Message</label>
          <textarea
            placeholder="How can we help you?"
            rows="4"
            style={inputStyle}
          ></textarea>

          {/* BUTTON */}
          <button
            style={{
              width: "100%",
              padding: "12px",
              background: "#c40000",
              color: "white",
              border: "none",
              borderRadius: "8px",
              marginTop: "20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

// COMMON INPUT STYLE
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none",
};