import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTools from "@/components/FloatingTools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services Potchefstroom | Orvion Digital",
  description:
    "Explore Orvion Digital's digital marketing services in Potchefstroom, including website design, SEO, lead generation, Google Business Profile optimisation, social media management and digital growth strategy.",
};

const services = [
  {
    title: "Website Design & Development",
    description:
      "Custom websites designed to make your business look credible, premium and easy to trust while guiding visitors towards taking action.",
    includes: [
      "Custom responsive design",
      "Mobile optimisation",
      "Conversion-focused layouts",
      "Speed and performance setup",
      "Contact and enquiry forms",
    ],
  },
  {
    title: "SEO",
    description:
      "Search engine optimisation built to improve your visibility when potential customers are searching for the services you offer.",
    includes: [
      "On-page SEO",
      "Local SEO",
      "Technical improvements",
      "Keyword targeting",
      "Search visibility strategy",
    ],
  },
  {
    title: "Lead Generation",
    description:
      "Digital campaigns and systems designed around one goal: creating more qualified enquiries and opportunities for your business.",
    includes: [
      "Lead generation strategy",
      "Landing pages",
      "Campaign setup",
      "Conversion optimisation",
      "Lead funnel planning",
    ],
  },
  {
    title: "Google Business",
    description:
      "Improve how your business appears in local Google searches and help more customers discover, trust and contact you.",
    includes: [
      "Google Business setup",
      "Profile optimisation",
      "Local search strategy",
      "Review strategy",
      "Business information management",
    ],
  },
  {
    title: "Social Media Management",
    description:
      "A more professional and consistent social media presence designed to keep your business visible and strengthen your brand.",
    includes: [
      "Content planning",
      "Post creation",
      "Visual branding",
      "Page management",
      "Growth strategy",
    ],
  },
  {
    title: "Digital Growth Strategy",
    description:
      "A connected growth plan that brings your website, SEO, Google presence, social media and customer acquisition together.",
    includes: [
      "Digital business audit",
      "Growth opportunities",
      "Customer journey planning",
      "Channel strategy",
      "Ongoing optimisation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="services-page">
        <section className="services-hero">
          <div className="services-page-container">
            <span className="eyebrow">Our Services</span>

            <h1>
              Everything your business needs
              <br />
              <span>to grow online.</span>
            </h1>

            <p>
              Orvion Digital combines strategy, design, visibility and customer
              acquisition to help businesses build stronger digital systems and
              generate more opportunities.
            </p>

            <div className="hero-actions">
              <a href="/#contact" className="btn-primary">
                Book a Free Consultation →
              </a>

              <a href="/#work" className="btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
        </section>

        <section className="services-list">
          <div className="services-page-container">
            {services.map((service, index) => (
              <article className="service-row" key={service.title}>
                <div className="service-row-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="service-row-copy">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>

                <div className="service-row-includes">
                  <span>What&apos;s Included</span>

                  <ul>
                    {service.includes.map((item) => (
                      <li key={item}>
                        <span>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-cta">
          <div className="services-page-container">
            <div className="services-cta-card">
              <span>Not sure where to start?</span>

              <h2>
                Let&apos;s figure out what your business actually needs.
              </h2>

              <p>
                We can look at your current digital presence, identify the
                biggest opportunities and recommend the right next steps.
              </p>

              <a href="/#contact" className="btn-primary">
                Start the Conversation →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingTools />

      <style>{`
        .services-page {
          background: #050505;
          color: #ffffff;
        }

        .services-page-container {
          width: min(calc(100% - 40px), 1250px);
          margin: 0 auto;
        }

        .services-hero {
          position: relative;
          padding: 180px 20px 110px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(212,175,55,0.10),
              transparent 30%
            ),
            #050505;
        }

        .services-hero::after {
          content: "";
          position: absolute;
          right: -160px;
          top: 80px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(212,175,55,0.06);
          filter: blur(130px);
        }

        .eyebrow {
          display: inline-block;
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 22px;
        }

        .services-hero h1 {
          max-width: 1000px;
          font-size: clamp(54px, 8vw, 100px);
          line-height: 0.96;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .services-hero h1 span {
          color: #777;
        }

        .services-hero p {
          max-width: 730px;
          margin-top: 30px;
          color: #9b9b9b;
          font-size: 19px;
          line-height: 1.75;
        }

        .hero-actions {
          margin-top: 35px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .services-list {
          padding: 40px 20px 120px;
        }

        .service-row {
          display: grid;
          grid-template-columns: 90px 1.05fr 0.95fr;
          gap: 45px;
          padding: 48px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .service-row:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .service-row-number {
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .service-row-copy h2 {
          font-size: clamp(28px, 4vw, 46px);
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 18px;
        }

        .service-row-copy p {
          max-width: 570px;
          color: #858585;
          font-size: 16px;
          line-height: 1.75;
        }

        .service-row-includes > span {
          display: block;
          color: #d4af37;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .service-row-includes ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .service-row-includes li {
          display: flex;
          gap: 10px;
          color: #b6b6b6;
          font-size: 14px;
        }

        .service-row-includes li span {
          color: #d4af37;
          font-weight: 900;
        }

        .services-cta {
          padding: 0 20px 120px;
        }

        .services-cta-card {
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

        .services-cta-card > span {
          color: #d4af37;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .services-cta-card h2 {
          max-width: 900px;
          margin-top: 14px;
          font-size: clamp(38px, 6vw, 70px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .services-cta-card p {
          max-width: 650px;
          margin: 22px 0 30px;
          color: #909090;
          font-size: 16px;
          line-height: 1.75;
        }

        @media (max-width: 900px) {
          .service-row {
            grid-template-columns: 50px 1fr;
          }

          .service-row-includes {
            grid-column: 2;
          }
        }

        @media (max-width: 650px) {
          .services-page-container {
            width: min(calc(100% - 28px), 1250px);
          }

          .services-hero {
            padding: 150px 14px 85px;
          }

          .services-hero h1 {
            letter-spacing: -3px;
          }

          .service-row {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 38px 0;
          }

          .service-row-includes {
            grid-column: auto;
          }

          .services-cta-card {
            padding: 30px;
          }
        }
      `}</style>
    </>
  );
}
