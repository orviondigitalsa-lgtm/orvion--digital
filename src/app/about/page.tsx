import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTools from "@/components/FloatingTools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Meet Orvion Digital",
  description:
    "Learn about Orvion Digital and founder and CEO Bruce Willemse. Discover how we help South African businesses improve their digital presence, generate leads and turn attention into real customers.",
};

const values = [
  {
    number: "01",
    title: "Growth First",
    description:
      "We care about what actually moves your business forward: visibility, enquiries, trust, conversion and long-term growth.",
  },
  {
    number: "02",
    title: "Strategy Over Noise",
    description:
      "We do not believe in random marketing. Every page, campaign and platform should have a clear purpose.",
  },
  {
    number: "03",
    title: "Premium by Default",
    description:
      "Your business should look as good as the work you do. We build digital experiences that feel polished, credible and memorable.",
  },
  {
    number: "04",
    title: "Built Around You",
    description:
      "No two businesses are the same, so we do not believe in copy-paste solutions. We build around your goals, customers and market.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-container">
            <span className="eyebrow">About Orvion Digital</span>

            <h1>
              We help businesses become
              <br />
              <span>impossible to ignore.</span>
            </h1>

            <p>
              Orvion Digital is built around a simple idea: businesses do not
              need more noise. They need better positioning, stronger digital
              systems and marketing that creates real opportunities and brings
              in more customers.
            </p>
          </div>
        </section>

        <section className="story-section">
          <div className="about-container story-grid">
            <div>
              <span className="section-label">Our Approach</span>

              <h2>
                More than websites.
                <br />
                More than marketing.
              </h2>
            </div>

            <div className="story-copy">
              <p>
                We create websites, improve search visibility, generate leads,
                manage social media, optimise Google Business profiles and build
                digital strategies around one goal: helping businesses attract
                more customers.
              </p>

              <p>
                That means thinking beyond individual services. Your website,
                Google presence, social media, reputation and customer journey
                should all work together.
              </p>

              <p>
                Orvion Digital exists to help businesses build that connected
                system and present themselves with the confidence of a premium
                brand.
              </p>
            </div>
          </div>
        </section>

        <section className="founder-section">
          <div className="about-container">
            <div className="founder-card">
              <div className="founder-image-wrap">
                <Image
                  src="/bruce_willemse.jpg"
                  alt="Bruce Willemse, Founder and CEO of Orvion Digital"
                  fill
                  className="founder-image"
                  sizes="(max-width: 900px) 100vw, 45vw"
                  priority
                />

                <div className="founder-image-overlay" />

                <div className="founder-badge">
                  Founder & CEO
                </div>
              </div>

              <div className="founder-content">
                <span className="section-label">
                  Meet the Founder
                </span>

                <h2>
                  Bruce Willemse
                </h2>

                <span className="founder-role">
                  Founder & CEO — Orvion Digital
                </span>

                <p>
                  Bruce founded Orvion Digital with a clear focus: help
                  businesses turn their digital presence into something that
                  actually creates opportunities, generates enquiries and wins
                  customers.
                </p>

                <p>
                  The goal is not simply to build websites or run marketing
                  campaigns. It is to understand what a business needs to grow
                  and then connect the right digital tools, strategy and
                  customer journey to make that happen.
                </p>

                <blockquote>
                  “A business should not just exist online. It should use its
                  digital presence to become easier to find, easier to trust and
                  easier to choose.”
                </blockquote>

                <a href="/contact" className="btn-primary">
                  Work With Orvion →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="about-container">
            <div className="values-header">
              <span className="section-label">What We Believe</span>

              <h2>
                The principles behind
                <br />
                <span>everything we build.</span>
              </h2>
            </div>

            <div className="values-grid">
              {values.map((value) => (
                <article className="value-card" key={value.number}>
                  <span>{value.number}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="about-container">
            <div className="mission-card">
              <div>
                <span>Our Mission</span>

                <h2>
                  Build stronger businesses.
                  <br />
                  Create better opportunities.
                </h2>
              </div>

              <p>
                Our goal is to help ambitious businesses look better, get found
                more easily, earn trust faster and convert more attention into
                real customers.
              </p>

              <a href="/contact" className="btn-primary">
                Work With Orvion →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingTools />

      <style>{`
        .about-page {
          background: #050505;
          color: #fff;
        }

        .about-container {
          width: min(calc(100% - 40px), 1250px);
          margin: 0 auto;
        }

        .about-hero {
          padding: 180px 20px 110px;
          background:
            radial-gradient(
              circle at 18% 20%,
              rgba(212,175,55,0.10),
              transparent 30%
            ),
            #050505;
        }

        .eyebrow,
        .section-label {
          display: inline-block;
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .about-hero h1 {
          max-width: 1050px;
          font-size: clamp(54px, 8vw, 100px);
          line-height: 0.96;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .about-hero h1 span {
          color: #777;
        }

        .about-hero p {
          max-width: 760px;
          margin-top: 30px;
          color: #999;
          font-size: 18px;
          line-height: 1.75;
        }

        .story-section {
          padding: 120px 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .story-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: start;
        }

        .story-grid h2 {
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .story-copy {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .story-copy p {
          color: #969696;
          font-size: 17px;
          line-height: 1.8;
        }

        .founder-section {
          padding: 120px 20px;
          background:
            radial-gradient(
              circle at 75% 30%,
              rgba(212,175,55,0.07),
              transparent 30%
            ),
            #080808;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .founder-card {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          min-height: 620px;
          overflow: hidden;
          border-radius: 32px;
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.045),
              rgba(255,255,255,0.015)
            );
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 35px 100px rgba(0,0,0,0.35);
        }

        .founder-image-wrap {
          position: relative;
          min-height: 620px;
          overflow: hidden;
          background: #111;
        }

        .founder-image {
          object-fit: cover;
          object-position: center;
        }

        .founder-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(5,5,5,0.6),
              transparent 50%
            );
        }

        .founder-badge {
          position: absolute;
          left: 24px;
          bottom: 24px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(5,5,5,0.75);
          border: 1px solid rgba(212,175,55,0.28);
          color: #d4af37;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          backdrop-filter: blur(12px);
        }

        .founder-content {
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .founder-content h2 {
          font-size: clamp(44px, 5vw, 72px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .founder-role {
          margin-top: 12px;
          color: #d4af37;
          font-size: 14px;
          font-weight: 800;
        }

        .founder-content p {
          margin-top: 24px;
          color: #929292;
          font-size: 16px;
          line-height: 1.8;
        }

        .founder-content blockquote {
          margin: 30px 0;
          padding: 22px 24px;
          border-left: 2px solid #d4af37;
          background: rgba(212,175,55,0.055);
          color: #d0d0d0;
          font-size: 17px;
          font-style: italic;
          line-height: 1.7;
        }

        .founder-content .btn-primary {
          width: fit-content;
        }

        .values-section {
          padding: 120px 20px;
          background: #080808;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .values-header h2 {
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .values-header h2 span {
          color: #777;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 60px;
        }

        .value-card {
          min-height: 280px;
          padding: 30px;
          border-radius: 24px;
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.045),
              rgba(255,255,255,0.015)
            );
          border: 1px solid rgba(255,255,255,0.08);
        }

        .value-card > span {
          color: #d4af37;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .value-card h3 {
          margin-top: 36px;
          font-size: 28px;
        }

        .value-card p {
          margin-top: 14px;
          color: #858585;
          line-height: 1.7;
          font-size: 15px;
        }

        .mission-section {
          padding: 120px 20px;
        }

        .mission-card {
          padding: 55px;
          border-radius: 30px;
          background:
            linear-gradient(
              135deg,
              rgba(212,175,55,0.12),
              rgba(255,255,255,0.025)
            );
          border: 1px solid rgba(212,175,55,0.18);
        }

        .mission-card > div > span {
          color: #d4af37;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .mission-card h2 {
          margin-top: 14px;
          max-width: 850px;
          font-size: clamp(38px, 6vw, 68px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .mission-card > p {
          max-width: 700px;
          margin: 24px 0 30px;
          color: #929292;
          font-size: 16px;
          line-height: 1.75;
        }

        @media (max-width: 900px) {
          .story-grid,
          .founder-card {
            grid-template-columns: 1fr;
          }

          .story-grid {
            gap: 35px;
          }

          .founder-image-wrap {
            min-height: 520px;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .about-container {
            width: min(calc(100% - 28px), 1250px);
          }

          .about-hero {
            padding: 150px 14px 85px;
          }

          .about-hero h1,
          .story-grid h2,
          .founder-content h2,
          .values-header h2,
          .mission-card h2 {
            letter-spacing: -2px;
          }

          .story-section,
          .founder-section,
          .values-section,
          .mission-section {
            padding: 90px 14px;
          }

          .founder-image-wrap {
            min-height: 400px;
          }

          .founder-content {
            padding: 30px;
          }

          .mission-card {
            padding: 30px;
          }
        }
      `}</style>
    </>
  );
}