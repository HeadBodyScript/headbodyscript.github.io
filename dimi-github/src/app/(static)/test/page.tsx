"use client";

import { useEffect, useRef, useState } from "react";

export default function CyberPage() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Noto+Sans+JP:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --black: #0a0a0a;
          --white: #f0ece4;
          --yellow: #f5c400;
          --gray-mid: #1c1c1c;
          --gray-light: #2e2e2e;
          --text-dim: #888;
          --font-display: 'Bebas Neue', sans-serif;
          --font-mono: 'Space Mono', monospace;
          --font-jp: 'Noto Sans JP', sans-serif;
        }

        body {
          background: var(--black);
          color: var(--white);
          font-family: var(--font-mono);
          overflow-x: hidden;
        }

        /* ── NAV ── */
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 36px;
          position: relative;
          z-index: 10;
          opacity: 0;
          transform: translateY(-12px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .nav.visible { opacity: 1; transform: translateY(0); }
        .nav a {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--white);
          text-decoration: none;
          opacity: 0.75;
          transition: opacity 0.2s;
        }
        .nav a:hover { opacity: 1; }
        .nav-links { display: flex; gap: 48px; }

        /* ── HERO ── */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          padding: 0 36px 36px;
          gap: 0;
          position: relative;
          min-height: calc(100vh - 70px);
        }

        /* Left col top */
        .hero-title-area {
          grid-column: 1;
          grid-row: 1;
          position: relative;
          padding-bottom: 0;
        }

        .title-row {
          display: flex;
          align-items: baseline;
          gap: 16px;
        }

        .cyber-text {
          font-family: var(--font-display);
          font-size: clamp(80px, 12vw, 160px);
          line-height: 0.9;
          letter-spacing: -0.01em;
          color: var(--white);
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .cyber-text.visible { opacity: 1; transform: translateX(0); }

        .title-bracket {
          font-family: var(--font-jp);
          font-size: clamp(14px, 2vw, 22px);
          color: var(--white);
          opacity: 0.55;
          letter-spacing: 0.05em;
          opacity: 0;
          transition: opacity 0.7s ease 0.45s;
        }
        .title-bracket.visible { opacity: 0.55; }

        /* Marquee */
        .marquee-wrap {
          overflow: hidden;
          border-top: 1.5px solid var(--yellow);
          border-bottom: 1.5px solid var(--yellow);
          padding: 8px 0;
          margin: 16px 0;
          grid-column: 1 / -1;
          grid-row: 2;
          opacity: 0;
          transition: opacity 0.6s ease 0.5s;
        }
        .marquee-wrap.visible { opacity: 1; }

        .marquee-inner {
          display: flex;
          white-space: nowrap;
          animation: marquee 18s linear infinite;
        }
        .marquee-item {
          font-family: var(--font-jp);
          font-size: 13px;
          font-weight: 700;
          color: var(--yellow);
          letter-spacing: 0.08em;
          padding-right: 40px;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Left col bottom */
        .hero-left-bottom {
          grid-column: 1;
          grid-row: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-top: 32px;
          gap: 32px;
        }

        .tagline {
          font-size: 9.5px;
          line-height: 1.9;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--white);
          opacity: 0.55;
          max-width: 280px;
          opacity: 0;
          transition: opacity 0.7s ease 0.7s;
        }
        .tagline.visible { opacity: 0.5; }

        .icons-row {
          display: flex;
          align-items: center;
          gap: 20px;
          opacity: 0;
          transition: opacity 0.7s ease 0.85s;
        }
        .icons-row.visible { opacity: 1; }

        .icon-compass {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: spin 20s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .badge-ar {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Right col — photos */
        .hero-right {
          grid-column: 2;
          grid-row: 1 / 4;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 8px;
          padding-left: 24px;
          position: relative;
        }

        /* Large card bottom-left */
        .photo-card {
          position: relative;
          overflow: hidden;
          background: var(--gray-mid);
        }
        .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%) contrast(1.05);
          transition: transform 0.6s ease;
        }
        .photo-card:hover img { transform: scale(1.04); }

        .card-main {
          grid-column: 1;
          grid-row: 2;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s;
        }
        .card-main.visible { opacity: 1; transform: translateY(0); }

        .card-side {
          grid-column: 2;
          grid-row: 1 / 3;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.75s, transform 0.7s ease 0.75s;
        }
        .card-side.visible { opacity: 1; transform: translateY(0); }

        /* Tag badge on cards */
        .card-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          background: var(--black);
          border: 1px solid var(--white);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
          padding: 3px 8px;
          z-index: 2;
        }

        .card-tag-corner {
          position: absolute;
          top: 10px;
          left: 10px;
          background: var(--white);
          color: var(--black);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
          padding: 3px 8px;
          z-index: 2;
        }

        /* Vertical FUTURE label */
        .vertical-label {
          position: absolute;
          right: -2px;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          font-size: 8px;
          letter-spacing: 0.25em;
          color: var(--white);
          opacity: 0.35;
          white-space: nowrap;
          font-family: var(--font-jp);
        }

        /* 80-A45 top-right badge */
        .badge-code {
          grid-column: 2;
          grid-row: 1;
          align-self: start;
          justify-self: end;
          background: var(--white);
          color: var(--black);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          padding: 4px 12px;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 5;
        }

        /* SCROLL label bottom-right */
        .scroll-hint {
          position: absolute;
          bottom: 0;
          right: -36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.7s ease 1s;
        }
        .scroll-hint.visible { opacity: 0.45; }
        .scroll-hint-text {
          font-size: 8px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          font-family: var(--font-jp);
        }
        .scroll-line {
          width: 1px;
          height: 60px;
          background: var(--white);
          opacity: 0.5;
        }

        /* Noise overlay */
        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* Glitch line decoration */
        .glitch-bar {
          position: absolute;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--yellow);
          opacity: 0.15;
          top: 50%;
        }

        /* Placeholder image blocks when no real images */
        .photo-placeholder {
          width: 100%;
          height: 100%;
          min-height: 220px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.1);
          font-size: 10px;
          letter-spacing: 0.2em;
        }
      `}</style>

      <div className="noise" />

      {/* NAV */}
      <nav className={`nav ${loaded ? "visible" : ""}`}>
        <a href="#">STORE</a>
        <nav className="nav-links">
          <a href="#">CART</a>
        </nav>
        <a href="#">LOGIN</a>
      </nav>

      {/* HERO */}
      <div className="hero">
        {/* Title */}
        <div className="hero-title-area">
          <div className="title-row">
            <h1 className={`cyber-text ${loaded ? "visible" : ""}`}>CYBER</h1>
            <span className={`title-bracket ${loaded ? "visible" : ""}`}>[コマース]</span>
          </div>
        </div>

        {/* Marquee — spans full width */}
        <div className={`marquee-wrap ${loaded ? "visible" : ""}`}>
          <div className="marquee-inner" ref={marqueeRef}>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="marquee-item">サイバー &mdash;&nbsp;</span>
            ))}
          </div>
        </div>

        {/* Left bottom */}
        <div className="hero-left-bottom">
          <p className={`tagline ${loaded ? "visible" : ""}`}>
            In an industry where seemingly<br />
            everything has already been said,<br />
            サイバー seeks to comment<br />
            more than state.
          </p>
          <div className={`icons-row ${loaded ? "visible" : ""}`}>
            <div className="icon-compass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor"/>
              </svg>
            </div>
            <div className="badge-ar">AR</div>
          </div>
        </div>

        {/* Right photo grid */}
        <div className="hero-right">
          {/* 80-A45 badge */}
          <div className="badge-code">80-A45</div>

          {/* Top-left of right grid — empty / dark */}
          <div style={{ gridColumn: 1, gridRow: 1, background: "var(--gray-mid)", position: "relative" }}>
            <div className="glitch-bar" />
          </div>

          {/* Main photo — bottom-left */}
          <div className={`photo-card card-main`} style={{ gridColumn: 1, gridRow: 2, opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)", transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s" }}>
            <div className="card-tag">407</div>
            <div className="photo-placeholder">
              {/* Replace with your <Image /> component */}
              <span>PHOTO 01</span>
            </div>
          </div>

          {/* Side photo — right full height */}
          <div className={`photo-card card-side`} style={{ gridColumn: 2, gridRow: "1 / 3", opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)", transition: "opacity 0.7s ease 0.75s, transform 0.7s ease 0.75s" }}>
            <div className="card-tag-corner">@FUTURE</div>
            <div className="vertical-label">@FUTURE [スクロール]</div>
            <div className="photo-placeholder" style={{ minHeight: "100%" }}>
              {/* Replace with your <Image /> component */}
              <span>PHOTO 02</span>
            </div>
          </div>

          {/* Scroll hint */}
          <div className={`scroll-hint ${loaded ? "visible" : ""}`}>
            <span className="scroll-hint-text">SCROLL [スクロール]</span>
            <div className="scroll-line" />
          </div>
        </div>
      </div>
    </>
  );
}
