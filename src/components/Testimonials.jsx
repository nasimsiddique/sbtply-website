export default function Testimonials() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#f6f6f6",
        textAlign: "center",
      }}
    >
      {/* TOP TEXT */}
      <p
        style={{
          color: "#c40000",
          letterSpacing: "3px",
          fontSize: "14px",
        }}
      >
        WHAT OUR CLIENTS SAY
      </p>

      {/* HEADING */}
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "60px",
          fontWeight: "700",
        }}
      >
        Testimonials
      </h1>

      {/* CARD */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          textAlign: "left",
        }}
      >
        {/* QUOTE ICON */}
        <div
          style={{
            fontSize: "40px",
            color: "#f1bebe",
            marginBottom: "20px",
          }}
        >
          “
        </div>

        {/* TEXT */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          SBTPLY products are strong, reliable and perfect for interior
          projects. The quality and finish are excellent.
        </p>

        {/* USER INFO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {/* CIRCLE */}
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#f3dede",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              color: "#c40000",
            }}
          >
            RK
          </div>

          {/* NAME + ROLE */}
          <div>
            <h4 style={{ margin: 0 }}>Raj Kumar Yadav</h4>
            <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
              Interior Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}