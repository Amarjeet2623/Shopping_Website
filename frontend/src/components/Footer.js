import React from 'react'

const Footer = () => {
  return (
   <footer
    style={{
      padding: "0.5rem 1rem",
      background: "linear-gradient(to right,rgb(148, 157, 157),rgb(76, 95, 122))",
      color: "#1e293b",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      boxShadow: "0 -5px 15px rgba(0,0,0,0.1)",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
      }}
    >
      {/* Section 1 */}
      <div style={{ flex: "1 1 250px" }}>
        <p style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "1rem", color: "#0f172a" }}>
          CloudShop
        </p>
        <p style={{ marginBottom: "0.75rem", fontSize: "1rem" }}>
          CloudShop is your one-stop destination for online shopping — simple, fast, and convenient.
        </p>
        <p style={{ fontSize: "0.9rem", color: "#475569" }}>&copy; 2025 | All Rights Reserved</p>
      </div>

      {/* Section 2 */}
      <div style={{ flex: "1 1 250px" }}>
        <p style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "#0f172a" }}>
          Contact Us
        </p>
        <p style={{ marginBottom: "0.5rem" }}>cloudshop@gmail.com</p>
        <p>7488323874</p>
      </div>

      {/* Section 3 */}
      <div style={{ flex: "1 1 250px" }}>
        <p style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "#0f172a" }}>
          Social Media
        </p>
        <p style={{ marginBottom: "0.5rem" }}>
          <a href="https://www.facebook.com" target="_blank" style={{ textDecoration: "none", color: "#0f172a" }}>
            Facebook
          </a>
        </p>
        <p style={{ marginBottom: "0.5rem" }}>
          <a href="https://www.twitter.com" target="_blank" style={{ textDecoration: "none", color: "#0f172a" }}>
            Twitter
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com" target="_blank" style={{ textDecoration: "none", color: "#0f172a" }}>
            Instagram
          </a>
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
