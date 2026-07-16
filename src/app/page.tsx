import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollDown from "@/components/ScrollDown";

const services = [
  "Web Design",
  "SEO",
  "Lead Generation",
  "Google Business",
  "Social Media",
  "Digital Strategy",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          style={{
            position: "relative",
            minHeight: "100vh",
            overflow: "hidden",
            padding: "150px 20px 100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* BACKGROUND GLOWS */}

          <div
            style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: "rgba(212,175,55,0.12)",
              filter: "blur(110px)",
              top: "-120px",
              left: "-140px",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "rgba(212,175,55,0.08)",
              filter: "blur(140px)",
              right: "-160px",
              top: "120px",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              width: "min(1250px, calc(100% - 20px))",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "60px",
              alignItems: "center",
              position: "relative",
              zIndex: 2,
            }}
            className="hero-grid"
          >
            {/* LEFT SIDE */}

            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 14px",
                  borderRadius: "999px",
                  background: "rgba(212,175,55,0.07)",
                  border: "1px solid rgba(212,175,55,0.22)",
                  color: "#D4AF37",
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "28px",
                }}
              >
                <span>●</span>
                Digital Growth. Built Differently.
              </div>

              <h1
                style={{
                  fontSize: "clamp(54px, 7vw, 98px)",
                  lineHeight: 0.95,
                  fontWeight: 900,
                  letterSpacing: "-4px",
                  marginBottom: "28px",
                }}
              >
                We Turn Attention Into
                <br />

                <span className="gold-text">
                  Real Customers.
                </span>
              </h1>

              <p
                style={{
                  maxWidth: "690px",
                  fontSize: "clamp(17px, 1.8vw, 21px)",
                  lineHeight: 1.7,
                  color: "#a8a8a8",
                  marginBottom: "34px",
                }}
              >
                Orvion Digital helps businesses get found, attract more
                enquiries and turn attention into real customers through
                premium websites, SEO, lead generation, Google Business, social
                media and intelligent digital strategy.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginBottom: "38px",
                }}
              >
                <a href="/contact" className="btn-primary">
                  Book a Free Consultation →
                </a>

                <a href="/work" className="btn-secondary">
                  View Our Work
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "28px",
                  flexWrap: "wrap",
                  color: "#bdbdbd",
                  fontSize: "14px",
                }}
              >
                <span>✓ More visibility</span>
                <span>✓ More enquiries</span>
                <span>✓ More customers</span>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  borderRadius: "28px",
                  padding: "24px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.45), 0 0 80px rgba(212,175,55,0.06)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "28px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "#8e8e8e",
                        fontSize: "13px",
                        marginBottom: "7px",
                      }}
                    >
                      CUSTOMER ACQUISITION
                    </p>

                    <h3
                      style={{
                        fontSize: "26px",
                        fontWeight: 800,
                      }}
                    >
                      Orvion Customer Acquisition
                    </h3>
                  </div>

                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#D4AF37",
                      boxShadow: "0 0 18px rgba(212,175,55,0.8)",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "14px",
                    marginBottom: "18px",
                  }}
                >
                  <div className="stat-card">
                    <span className="stat-label">Leads</span>
                    <strong className="stat-number">+184%</strong>
                    <span className="stat-small">
                      More enquiry potential
                    </span>
                  </div>

                  <div className="stat-card">
                    <span className="stat-label">Visibility</span>
                    <strong className="stat-number">Top 3</strong>
                    <span className="stat-small">
                      Local search target
                    </span>
                  </div>

                  <div className="stat-card">
                    <span className="stat-label">Conversion</span>
                    <strong className="stat-number">3.7×</strong>
                    <span className="stat-small">
                      Stronger customer journey
                    </span>
                  </div>

                  <div className="stat-card">
                    <span className="stat-label">Positioning</span>
                    <strong className="stat-number">Premium</strong>
                    <span className="stat-small">
                      Stronger brand trust
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "20px",
                    padding: "20px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        color: "#bfbfbf",
                        fontSize: "14px",
                      }}
                    >
                      Customer Momentum
                    </span>

                    <span
                      style={{
                        color: "#D4AF37",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      +72%
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: "9px",
                      height: "110px",
                    }}
                  >
                    {[28, 42, 38, 55, 66, 61, 78, 92].map(
                      (height, index) => (
                        <div
                          key={index}
                          style={{
                            flex: 1,
                            height: `${height}%`,
                            borderRadius: "8px 8px 3px 3px",
                            background:
                              index === 7
                                ? "linear-gradient(#f3d978, #d4af37)"
                                : "rgba(255,255,255,0.10)",
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  right: "-20px",
                  bottom: "-25px",
                  padding: "14px 18px",
                  borderRadius: "16px",
                  background: "#D4AF37",
                  color: "#050505",
                  fontWeight: 900,
                  boxShadow: "0 20px 50px rgba(212,175,55,0.25)",
                }}
              >
                Customers &gt; Clicks
              </div>
            </div>
          </div>

          <ScrollDown />
        </section>

        {/* SERVICE STRIP */}

        <section
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            background: "#080808",
            padding: "24px 20px",
          }}
        >
          <div
            style={{
              maxWidth: "1250px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {services.map((service) => (
              <span
                key={service}
                style={{
                  color: "#8f8f8f",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.4px",
                }}
              >
                {service}
              </span>
            ))}
          </div>
        </section>

        <Services />
        <Projects />
        <About />
        <Reviews />
        <Contact />
        <Footer />

        <style>{`
          .stat-card {
            padding: 18px;
            border-radius: 18px;
            background: rgba(255,255,255,0.035);
            border: 1px solid rgba(255,255,255,0.08);
            display: flex;
            flex-direction: column;
            gap: 7px;
          }

          .stat-label {
            color: #8f8f8f;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .stat-number {
            font-size: 24px;
            color: #ffffff;
          }

          .stat-small {
            color: #696969;
            font-size: 12px;
          }

          @media (max-width: 950px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 600px) {
            .hero-grid h1 {
              letter-spacing: -2px !important;
            }
          }
        `}</style>
      </main>
    </>
  );
}