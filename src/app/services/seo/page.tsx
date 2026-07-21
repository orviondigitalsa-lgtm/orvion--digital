
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTools from "@/components/FloatingTools";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Services Potchefstroom | Orvion Digital",
  description:
    "Professional SEO services in Potchefstroom from Orvion Digital. Improve your Google visibility, attract more local customers and generate more enquiries with strategic search engine optimisation.",
};

export default function SEOPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          background: "#0B0B0B",
          color: "#FFFFFF",
          minHeight: "100vh",
        }}
      >
        {/* HERO */}
        <section
          style={{
            padding: "120px 24px 90px",
            textAlign: "center",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "20px",
            }}
          >
            SEO Services in Potchefstroom
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 90px)",
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: "-3px",
              marginBottom: "28px",
            }}
          >
            Get Found on Google.
            <br />
            <span style={{ color: "#D4AF37" }}>
              Get More Customers.
            </span>
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 36px",
              fontSize: "clamp(17px, 1.8vw, 21px)",
              lineHeight: 1.7,
              color: "#A8A8A8",
            }}
          >
            Orvion Digital provides professional SEO services in Potchefstroom
            to help businesses improve their Google rankings, increase online
            visibility and attract more potential customers searching for the
            products and services they offer.
          </p>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "#D4AF37",
              color: "#0B0B0B",
              padding: "16px 28px",
              borderRadius: "999px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Get a Free SEO Consultation
          </Link>
        </section>

        {/* WHY SEO */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "80px 24px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              marginBottom: "24px",
              fontWeight: 800,
            }}
          >
            SEO built for real business growth.
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#A8A8A8",
              maxWidth: "850px",
            }}
          >
            Search engine optimisation helps your business appear when
            potential customers search on Google. Our SEO strategy focuses on
            improving your website structure, targeting valuable search terms,
            strengthening your local presence and creating a better experience
            for both Google and your customers.
          </p>
        </section>

        {/* SERVICES */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "60px 24px 100px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              marginBottom: "40px",
              fontWeight: 800,
            }}
          >
            Our SEO Services
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Local SEO",
                text: "Improve your visibility for local searches in Potchefstroom and help nearby customers find your business.",
              },
              {
                title: "On-Page SEO",
                text: "Optimise your page titles, headings, website content, internal links and keyword targeting.",
              },
              {
                title: "Technical SEO",
                text: "Improve website speed, crawlability, indexing and technical performance so search engines can understand your site.",
              },
              {
                title: "Keyword Strategy",
                text: "Target the search terms your ideal customers actually use when looking for your services online.",
              },
              {
                title: "Google Business Optimisation",
                text: "Strengthen your Google Business Profile and increase your chances of appearing in local search and Google Maps.",
              },
              {
                title: "SEO Tracking",
                text: "Monitor rankings, impressions, clicks and search performance to identify opportunities for continued growth.",
              },
            ].map((service) => (
              <div
                key={service.title}
                style={{
                  padding: "30px",
                  borderRadius: "20px",
                  background: "#151515",
                  border: "1px solid #2A2A2A",
                }}
              >
                <h3
                  style={{
                    fontSize: "23px",
                    marginBottom: "14px",
                    color: "#D4AF37",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#A8A8A8",
                    lineHeight: 1.7,
                  }}
                >
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* LOCAL SEO */}
        <section
          style={{
            background: "#111111",
            padding: "90px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                marginBottom: "24px",
                fontWeight: 800,
              }}
            >
              SEO for businesses in Potchefstroom.
            </h2>

            <p
              style={{
                color: "#A8A8A8",
                lineHeight: 1.8,
                fontSize: "18px",
                maxWidth: "850px",
              }}
            >
              If your customers are searching for your services in
              Potchefstroom, your business should be visible. Orvion Digital
              helps local businesses strengthen their Google presence, improve
              their search visibility and create more opportunities for
              customers to discover and contact them.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            textAlign: "center",
            padding: "100px 24px",
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(38px, 5vw, 64px)",
              marginBottom: "24px",
              fontWeight: 900,
            }}
          >
            Ready to get found on Google?
          </h2>

          <p
            style={{
              color: "#A8A8A8",
              fontSize: "18px",
              lineHeight: 1.7,
              marginBottom: "34px",
            }}
          >
            Let Orvion Digital help improve your search visibility and turn
            more Google searches into real business enquiries.
          </p>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "#D4AF37",
              color: "#0B0B0B",
              padding: "16px 30px",
              borderRadius: "999px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Book a Free Consultation
          </Link>
        </section>
      </main>

      <FloatingTools />
      <Footer />
    </>
  );
}
