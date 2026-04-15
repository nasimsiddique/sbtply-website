import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const linkStyle = {
    color: "#000",
    textDecoration: "none",
    fontWeight: "500",
    cursor: "pointer",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        position: "fixed",
        width: "100%",
        top: 0,
        background: "#ffffff",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      {/* LOGO */}
      <div
        onClick={() => scrollToSection("home")}
        style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
      >
        <img src={logo} style={{ height: "40px" }} />
        <h2 style={{ color: "#c40000", fontWeight: "700" }}>SBTPLY</h2>
      </div>

      {/* DESKTOP MENU */}
      {!isMobile && (
        <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <span onClick={() => scrollToSection("home")} style={linkStyle}>Home</span>
          <span onClick={() => scrollToSection("about")} style={linkStyle}>About Us</span>
          <span onClick={() => scrollToSection("products")} style={linkStyle}>Products</span>
          <span onClick={() => scrollToSection("whyus")} style={linkStyle}>Why Choose Us</span>
          <span onClick={() => scrollToSection("contact")} style={linkStyle}>Contact Us</span>

          {/* 🔐 ADMIN LOGIN BUTTON */}
          <Link
            to="/login"
            style={{ ...linkStyle, color: "#c40000", fontWeight: "600" }}
          >
            Admin
          </Link>
        </div>
      )}

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {!isMobile && (
          <button
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            style={{
              background: "#25D366",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            WhatsApp
          </button>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "22px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            width: "100%",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            padding: "20px 0",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <span onClick={() => scrollToSection("home")} style={linkStyle}>Home</span>
          <span onClick={() => scrollToSection("about")} style={linkStyle}>About Us</span>
          <span onClick={() => scrollToSection("products")} style={linkStyle}>Products</span>
          <span onClick={() => scrollToSection("whyus")} style={linkStyle}>Why Choose Us</span>
          <span onClick={() => scrollToSection("contact")} style={linkStyle}>Contact Us</span>

          {/* 🔐 ADMIN LOGIN MOBILE */}
          <Link
            to="/login"
            style={{ ...linkStyle, color: "#c40000", fontWeight: "600" }}
            onClick={() => setMenuOpen(false)}
          >
            Admin
          </Link>

          <button
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            style={{
              background: "#25D366",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            WhatsApp
          </button>
        </div>
      )}
    </nav>
  );
}