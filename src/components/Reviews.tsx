const reviews = [
  {
    quote:
      "Orvion Digital completely changed the way our business presents itself online. The new website feels professional, modern and makes it much easier for potential customers to understand what we offer.",
    name: "Johan van der Merwe",
    company: "VanderBuilt Construction",
    location: "Potchefstroom, North West",
    service: "Website & Digital Strategy",
  },
  {
    quote:
      "What impressed us most was that the focus was not only on getting more clicks. The strategy was about getting the right people to find our business and actually contact us.",
    name: "Naledi Mokoena",
    company: "Mokoena Property Group",
    location: "Johannesburg, Gauteng",
    service: "SEO & Lead Generation",
  },
  {
    quote:
      "Our online presence finally feels like it represents the quality of our business. Everything from the branding to the website and Google presence feels more professional and connected.",
    name: "Stefan Botha",
    company: "Botha Auto Solutions",
    location: "Pretoria, Gauteng",
    service: "Brand & Website Development",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">

        <div className="reviews-header">
          <div>
            <span className="reviews-label">
              Client Feedback
            </span>

            <h2>
              Trusted by businesses
              <br />
              <span>ready to grow.</span>
            </h2>
          </div>

          <div className="reviews-header-right">
            <div className="rating">
              <div className="stars">
                ★ ★ ★ ★ ★
              </div>

              <strong>
                Built around client success
              </strong>

              <span>
                Strategy. Quality. Growth.
              </span>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article
              className={`review-card ${
                index === 1 ? "featured-review" : ""
              }`}
              key={review.name}
            >
              <div className="review-top">
                <div className="quote-icon">
                  “
                </div>

                <div className="review-stars">
                  ★★★★★
                </div>
              </div>

              <blockquote>
                {review.quote}
              </blockquote>

              <div className="review-person">
                <div className="avatar">
                  {review.name.charAt(0)}
                </div>

                <div className="person-info">
                  <strong>
                    {review.name}
                  </strong>

                  <span>
                    {review.company}
                  </span>

                  <small>
                    {review.location}
                  </small>
                </div>
              </div>

              <div className="review-service">
                {review.service}
              </div>

              <div className="demo-label">
                Portfolio Demo
              </div>
            </article>
          ))}
        </div>

        <div className="trust-panel">
          <div className="trust-item">
            <strong>01</strong>

            <div>
              <h3>Understand</h3>

              <p>
                We start by understanding your business,
                customers and growth goals.
              </p>
            </div>
          </div>

          <div className="trust-divider" />

          <div className="trust-item">
            <strong>02</strong>

            <div>
              <h3>Build</h3>

              <p>
                We create the digital presence and systems
                your business needs.
              </p>
            </div>
          </div>

          <div className="trust-divider" />

          <div className="trust-item">
            <strong>03</strong>

            <div>
              <h3>Grow</h3>

              <p>
                We focus on visibility, trust, enquiries
                and long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reviews-section {
          position: relative;
          padding: 130px 20px;
          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(212,175,55,0.065),
              transparent 28%
            ),
            #050505;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .reviews-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .reviews-header {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          align-items: end;
          margin-bottom: 65px;
        }

        .reviews-label {
          display: inline-block;
          color: #d4af37;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .reviews-header h2 {
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1.03;
          letter-spacing: -3px;
          font-weight: 900;
        }

        .reviews-header h2 span {
          color: #777;
        }

        .reviews-header-right {
          display: flex;
          justify-content: flex-end;
        }

        .rating {
          min-width: 280px;
          padding: 24px;
          border-radius: 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .stars {
          color: #d4af37;
          letter-spacing: 5px;
          font-size: 17px;
          margin-bottom: 14px;
        }

        .rating strong {
          display: block;
          color: #fff;
          font-size: 16px;
          margin-bottom: 6px;
        }

        .rating span {
          color: #777;
          font-size: 13px;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 18px;
        }

        .review-card {
          position: relative;
          min-height: 440px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          border-radius: 26px;
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.045),
              rgba(255,255,255,0.015)
            );
          border: 1px solid rgba(255,255,255,0.08);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .review-card:hover {
          transform: translateY(-8px);
          border-color: rgba(212,175,55,0.28);
          box-shadow: 0 25px 70px rgba(0,0,0,0.35);
        }

        .featured-review {
          background:
            linear-gradient(
              145deg,
              rgba(212,175,55,0.10),
              rgba(255,255,255,0.025)
            );
          border-color: rgba(212,175,55,0.20);
        }

        .review-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
        }

        .quote-icon {
          color: #d4af37;
          font-size: 55px;
          line-height: 0.7;
          font-family: Georgia, serif;
        }

        .review-stars {
          color: #d4af37;
          font-size: 12px;
          letter-spacing: 2px;
        }

        blockquote {
          color: #c1c1c1;
          font-size: 18px;
          line-height: 1.7;
          font-weight: 500;
          margin: 0;
          flex-grow: 1;
        }

        .review-person {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .avatar {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background:
            linear-gradient(
              135deg,
              #f3d978,
              #d4af37
            );
          color: #050505;
          font-size: 15px;
          font-weight: 900;
        }

        .person-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .person-info strong {
          font-size: 14px;
          color: #fff;
        }

        .person-info span {
          color: #aaa;
          font-size: 12px;
        }

        .person-info small {
          color: #5f5f5f;
          font-size: 11px;
        }

        .review-service {
          margin-top: 18px;
          display: inline-flex;
          width: fit-content;
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(212,175,55,0.07);
          border: 1px solid rgba(212,175,55,0.16);
          color: #d4af37;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .demo-label {
          position: absolute;
          right: 20px;
          bottom: 22px;
          color: #444;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .trust-panel {
          margin-top: 60px;
          padding: 35px;
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 30px;
          align-items: center;
          border-radius: 26px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
        }

        .trust-item {
          display: flex;
          gap: 17px;
          align-items: flex-start;
        }

        .trust-item > strong {
          color: #d4af37;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .trust-item h3 {
          font-size: 17px;
          margin-bottom: 7px;
        }

        .trust-item p {
          color: #777;
          font-size: 13px;
          line-height: 1.6;
        }

        .trust-divider {
          width: 1px;
          height: 65px;
          background: rgba(255,255,255,0.08);
        }

        @media (max-width: 950px) {
          .reviews-header {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .reviews-header-right {
            justify-content: flex-start;
          }

          .reviews-grid {
            grid-template-columns: 1fr;
          }

          .trust-panel {
            grid-template-columns: 1fr;
          }

          .trust-divider {
            width: 100%;
            height: 1px;
          }
        }

        @media (max-width: 650px) {
          .reviews-section {
            padding: 90px 18px;
          }

          .reviews-header h2 {
            letter-spacing: -2px;
          }

          .rating {
            min-width: 100%;
          }

          .review-card {
            padding: 24px;
          }

          blockquote {
            font-size: 16px;
          }

          .trust-panel {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
}