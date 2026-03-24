import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // ✅ detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToProducts = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      style={{
        height: isMobile ? "60vh" : "100vh", // ✅ FIX
        marginTop: "70px", // ✅ navbar space
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={images[index]}
        alt="hero"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          width: "90%",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "1.8rem" : "3rem", // ✅ responsive text
            fontWeight: "bold",
          }}
        >
          Premium Plywood Solutions
        </h1>

        <p style={{ marginTop: "10px" }}>
          Strong. Stylish. Built to Last.
        </p>

        <button
          onClick={goToProducts}
          style={{
            marginTop: "20px",
            padding: isMobile ? "8px 15px" : "10px 25px",
            background: "#c40000",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Explore Products
        </button>
      </div>

      {/* arrows hidden on mobile */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.3)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              color: "white",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.3)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              color: "white",
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </>
      )}
    </section>
  );
}