const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Premium, high-converting websites built to make your business look credible, professional and impossible to ignore.",
    icon: "↗",
    features: [
      "Custom Website Design",
      "Mobile Optimisation",
      "Conversion Strategy",
    ],
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Get discovered by customers who are actively searching for the products and services your business offers.",
    icon: "⌕",
    features: [
      "Search Optimisation",
      "Local SEO",
      "Organic Growth",
    ],
  },
  {
    number: "03",
    title: "Lead Generation",
    description:
      "We build digital systems designed to turn online attention into real enquiries, opportunities and customers.",
    icon: "◎",
    features: [
      "Lead Strategy",
      "Conversion Funnels",
      "Customer Acquisition",
    ],
  },
  {
    number: "04",
    title: "Google Business",
    description:
      "Strengthen your local presence and help customers discover, trust and contact your business through Google.",
    icon: "G",
    features: [
      "Profile Optimisation",
      "Local Visibility",
      "Review Strategy",
    ],
  },
  {
    number: "05",
    title: "Social Media Management",
    description:
      "Build a stronger digital presence with strategic content designed to keep your brand visible and relevant.",
    icon: "#",
    features: [
      "Content Strategy",
      "Social Management",
      "Brand Growth",
    ],
  },
  {
    number: "06",
    title: "Digital Growth Strategy",
    description:
      "We connect your website, search presence, social media and marketing into one strategy focused on business growth.",
    icon: "+",
    features: [
      "Growth Consulting",
      "Digital Strategy",
      "Business Positioning",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-heading">
          <div>
            <span className="services-label">
              What We Do
            </span>

            <h2>
              Everything your business needs
              <br />
              <span>to grow digitally.</span>
            </h2>
          </div>

          <p>
            We don't believe in random marketing. We build connected digital
            systems designed to help businesses attract attention, build trust
            and turn more people into customers.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className="card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              <div>
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="features">
                {service.features.map((feature) => (
                  <span key={feature}>
                    <i>✓</i>
                    {feature}
                  </span>
                ))}
              </div>

              <a href="#contact" className="learn-more">
                Explore Service
                <span>→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="services-bottom">
          <p>
            Not sure what your business needs?
          </p>

          <a href="#contact">
            Let's build your growth strategy
            <span>→</span>
          </a>
        </div>
      </div>

      <style>{`
        .services-section {
          position: relative;
          padding: 130px 20px;
          background:
            radial-gradient(
              circle at 80% 30%,
              rgba(212, 175, 55, 0.055),
              transparent 30%
            ),
            #070707;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .services-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .services-heading {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          align-items: end;
          margin-bottom: 65px;
        }

        .services-label {
          display: inline-block;
          color: #d4af37;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .services-heading h2 {
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1.02;
          letter-spacing: -3px;
          font-weight: 900;
        }

        .services-heading h2 span {
          color: #777777;
        }

        .services-heading > p {
          color: #929292;
          font-size: 17px;
          line-height: 1.75;
          max-width: 500px;
        }

        .services-grid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .service-card {
          position: relative;
          min-height: 440px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          border-radius: 24px;
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.045),
              rgba(255,255,255,0.015)
            );
          border:
            1px solid rgba(255,255,255,0.09);
          overflow: hidden;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .service-card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          top: -100px;
          right: -100px;
          border-radius: 50%;
          background:
            rgba(212,175,55,0.13);
          filter: blur(50px);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color:
            rgba(212,175,55,0.35);
          box-shadow:
            0 25px 70px rgba(0,0,0,0.35);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 55px;
        }

        .service-number {
          color: #555555;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .service-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background:
            rgba(212,175,55,0.08);
          border:
            1px solid rgba(212,175,55,0.2);
          color: #d4af37;
          font-size: 20px;
          font-weight: 800;
        }

        .service-card h3 {
          font-size: 24px;
          line-height: 1.2;
          margin-bottom: 15px;
        }

        .service-card p {
          color: #858585;
          line-height: 1.7;
          font-size: 15px;
        }

        .features {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-top: 25px;
        }

        .features span {
          color: #a5a5a5;
          font-size: 13px;
        }

        .features i {
          color: #d4af37;
          font-style: normal;
          margin-right: 8px;
        }

        .learn-more {
          margin-top: auto;
          padding-top: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #d4af37;
          font-size: 14px;
          font-weight: 700;
          border-top:
            1px solid rgba(255,255,255,0.07);
        }

        .learn-more span {
          transition: transform 0.25s ease;
        }

        .service-card:hover
        .learn-more span {
          transform: translateX(5px);
        }

        .services-bottom {
          margin-top: 45px;
          padding: 25px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          color: #777777;
        }

        .services-bottom a {
          color: #d4af37;
          font-weight: 700;
        }

        .services-bottom a span {
          margin-left: 7px;
        }

        @media (max-width: 1000px) {
          .services-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .services-heading {
            grid-template-columns: 1fr;
            gap: 25px;
          }
        }

        @media (max-width: 650px) {
          .services-section {
            padding: 90px 18px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            min-height: 400px;
          }

          .services-heading h2 {
            letter-spacing: -2px;
          }

          .services-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}