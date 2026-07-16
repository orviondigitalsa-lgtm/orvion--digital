const points = [
  {
    number: "01",
    title: "We Think Like Business Owners",
    description:
      "We focus on the things that matter most: more enquiries, stronger positioning, better visibility and sustainable growth.",
  },
  {
    number: "02",
    title: "Strategy Before Noise",
    description:
      "We don't believe in posting for the sake of posting. Every website, campaign and digital system should have a clear purpose.",
  },
  {
    number: "03",
    title: "Built Around Your Business",
    description:
      "Your business is different. Your digital strategy should be too. We build solutions around your goals, customers and market.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-left">
            <span className="about-label">
              Why Orvion Digital
            </span>

            <h2>
              We&apos;re not here to
              <br />
              <span>just make things pretty.</span>
            </h2>

            <p className="about-intro">
              We&apos;re here to help build businesses that attract attention,
              earn trust and turn more people into customers.
            </p>

            <div className="mission-box">
              <span>Our Mission</span>

              <p>
                To give ambitious businesses the digital presence, strategy and
                systems they need to compete, grow and become impossible to
                ignore.
              </p>
            </div>
          </div>

          <div className="about-right">
            {points.map((point) => (
              <article className="about-point" key={point.number}>
                <div className="point-number">
                  {point.number}
                </div>

                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="growth-panel">
          <div className="growth-copy">
            <span className="growth-label">
              The Orvion Approach
            </span>

            <h3>
              Attention is good.
              <br />
              <span>Customers are better.</span>
            </h3>

            <p>
              We combine strategy, brand, websites, search visibility, social
              media and lead generation to build digital systems that work
              together.
            </p>

            <a href="#contact" className="btn-primary">
              Let&apos;s Grow Your Business →
            </a>
          </div>

          <div className="growth-visual">
            <div className="growth-step">
              <span>01</span>
              <strong>Get Found</strong>
              <p>Search, Google and visibility</p>
            </div>

            <div className="growth-line" />

            <div className="growth-step">
              <span>02</span>
              <strong>Build Trust</strong>
              <p>Brand, content and websites</p>
            </div>

            <div className="growth-line" />

            <div className="growth-step">
              <span>03</span>
              <strong>Convert</strong>
              <p>Enquiries, leads and sales</p>
            </div>

            <div className="growth-line" />

            <div className="growth-step">
              <span>04</span>
              <strong>Grow</strong>
              <p>Measure, improve and scale</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 130px 20px;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(212, 175, 55, 0.06),
              transparent 28%
            ),
            #080808;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .about-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 85px;
          align-items: start;
        }

        .about-label {
          display: inline-block;
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .about-left h2 {
          font-size: clamp(44px, 5vw, 70px);
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 900;
        }

        .about-left h2 span {
          color: #747474;
        }

        .about-intro {
          margin-top: 30px;
          max-width: 560px;
          color: #a0a0a0;
          font-size: 18px;
          line-height: 1.75;
        }

        .mission-box {
          margin-top: 45px;
          padding: 26px;
          border-radius: 22px;
          background:
            linear-gradient(
              135deg,
              rgba(212,175,55,0.10),
              rgba(255,255,255,0.025)
            );
          border: 1px solid rgba(212,175,55,0.18);
        }

        .mission-box span {
          color: #d4af37;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .mission-box p {
          margin-top: 12px;
          color: #b6b6b6;
          line-height: 1.7;
          font-size: 15px;
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-point {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 22px;
          padding: 28px;
          border-radius: 22px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .about-point:hover {
          transform: translateX(8px);
          border-color: rgba(212,175,55,0.28);
        }

        .point-number {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.18);
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
        }

        .about-point h3 {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .about-point p {
          color: #888;
          font-size: 15px;
          line-height: 1.7;
        }

        .growth-panel {
          margin-top: 90px;
          padding: 48px;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 70px;
          align-items: center;
          border-radius: 30px;
          background:
            linear-gradient(
              135deg,
              rgba(212,175,55,0.10),
              rgba(255,255,255,0.025)
            );
          border: 1px solid rgba(212,175,55,0.18);
          overflow: hidden;
        }

        .growth-label {
          color: #d4af37;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .growth-copy h3 {
          margin-top: 16px;
          font-size: clamp(36px, 4vw, 56px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .growth-copy h3 span {
          color: #d4af37;
        }

        .growth-copy p {
          margin: 22px 0 28px;
          max-width: 500px;
          color: #9a9a9a;
          line-height: 1.75;
          font-size: 16px;
        }

        .growth-visual {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .growth-step {
          position: relative;
          padding: 20px 22px;
          border-radius: 18px;
          background: rgba(5,5,5,0.55);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .growth-step span {
          color: #d4af37;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .growth-step strong {
          display: block;
          margin-top: 6px;
          font-size: 20px;
        }

        .growth-step p {
          margin-top: 4px;
          color: #6f6f6f;
          font-size: 13px;
        }

        .growth-line {
          width: 1px;
          height: 20px;
          margin-left: 36px;
          background: linear-gradient(
            #d4af37,
            rgba(212,175,55,0.15)
          );
        }

        @media (max-width: 950px) {
          .about-grid,
          .growth-panel {
            grid-template-columns: 1fr;
          }

          .about-grid {
            gap: 45px;
          }

          .growth-panel {
            gap: 45px;
          }
        }

        @media (max-width: 650px) {
          .about-section {
            padding: 90px 18px;
          }

          .about-left h2 {
            letter-spacing: -2px;
          }

          .about-point {
            grid-template-columns: 1fr;
          }

          .growth-panel {
            padding: 28px;
          }
        }
      `}</style>
    </section>
  );
}