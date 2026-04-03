import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer
  style={{
    padding: "15px 20px",
    backgroundColor: "#111",
    color: "#aaa",
    fontSize: "14px"
  }}
>
  <p
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "15px",
      alignItems: "center",
      margin: 0
    }}
  >
    <small>Thank you for visiting our website</small>

    <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
      Terms
    </a>

    <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
      Privacy
    </a>

    <a href="/fb" style={{ color: "#fff", textDecoration: "none" }}>
      Facebook
    </a>
  </p>
</footer>
            
        </div>
    );
};

export default Footer;