"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: "18px",
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 20px",
      }}
    >
      <nav
        style={{
          maxWidth: "1250px",
          height: "72px",
          margin: "0 auto",
          padding: "0 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(10,10,10,0.82)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
          boxShadow: "0 15px 50px rgba(0,0,0,0.35)",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontWeight: 900,
            fontSize: "20px",
          }}
        >
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid rgba(212,175,55,0.35)",
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.jpg"
              alt="Orvion Digital logo"
              width={46}
              height={46}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              priority
            />
          </div>

          <span>
            ORVION <span style={{ color: "#D4AF37" }}>DIGITAL</span>
          </span>
        </a>

        <div className="desktop-menu">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/work">Our Work</a>
          <a href="/about">About</a>
          <a href="/reviews">Reviews</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="desktop-cta">
          <a href="/contact" className="nav-cta">
            Book a Consultation
          </a>
        </div>

        <button
          className="mobile-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="/work" onClick={() => setMenuOpen(false)}>
            Our Work
          </a>

          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="/reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </a>

          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <a
            href="/contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Book a Consultation
          </a>
        </div>
      )}

      <style jsx>{`
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .desktop-menu a {
          color: #b5b5b5;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .desktop-menu a:hover {
          color: #d4af37;
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          padding: 0 20px;
          border-radius: 100px;
          background: linear-gradient(135deg, #f3d978, #d4af37);
          color: #050505;
          font-size: 14px;
          font-weight: 800;
        }

        .mobile-button {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 25px;
        }

        .mobile-menu {
          max-width: 1250px;
          margin: 10px auto 0;
          padding: 25px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: rgba(10, 10, 10, 0.97);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(20px);
        }

        .mobile-menu a {
          color: #d0d0d0;
          font-weight: 600;
        }

        .mobile-cta {
          padding: 14px;
          text-align: center;
          border-radius: 100px;
          background: #d4af37;
          color: #050505 !important;
          font-weight: 800 !important;
        }

        @media (max-width: 1000px) {
          .desktop-menu,
          .desktop-cta {
            display: none;
          }

          .mobile-button {
            display: block;
          }
        }

        @media (min-width: 1001px) {
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}