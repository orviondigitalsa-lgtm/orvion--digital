import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTools from "@/components/FloatingTools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews | Orvion Digital",
  description:
    "See what businesses say about working with Orvion Digital for website design, SEO, lead generation, Google Business, social media and digital growth services.",
};
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
  {
    quote:
      "The whole process was clear and practical. We now have a much better idea of how our social media, website and customer journey should work together instead of feeling disconnected.",
    name: "Thandi Nkosi",
    company: "Ubuntu Wellness Studio",
    location: "Johannesburg, Gauteng",
    service: "Social Media & Growth Strategy",
  },
  {
    quote:
      "We wanted to look more established online and generate better quality enquiries. The new digital direction gave the business a much stronger and more trustworthy image.",
    name: "Ruan de Klerk",
    company: "DK Electrical Solutions",
    location: "Klerksdorp, North West",
    service: "Lead Generation & Google Business",
  },
  {
    quote:
      "What stood out most was the attention to detail. The brand now feels more consistent, the website is easier to use and customers have a much clearer path to getting in touch with us.",
    name: "Ayesha Patel",
    company: "The Copper Table",
    location: "Durban, KwaZulu-Natal",
    service: "Website & Brand Strategy",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <Navbar />

      <main className="reviews-page">
        <section className="reviews-hero">
          <div className="reviews-container">
            <span className="eyebrow">Client Feedback</span>

            <h1>
              South African businesses.
              <br />
              <span>Built to grow stronger.</span>
            </h1>

            <p>
              A look at the kind of feedback businesses can give when their
              digital presence starts feeling more professional, connected and
              focused on real business growth.
            </p>

            <div className="rating-panel">
              <div className="stars">★★★★★</div>

              <strong>
                Strategy. Quality. Growth.
              </strong>

              <span>
                Portfolio demo testimonials
              </span>
            </div>
          </div>
        </section>

        <section className="reviews-grid-section">
          <div className="reviews-container">
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <article
                  className={`review-card ${
                    index === 1 || index === 4 ? "featured" : ""
                  }`}
                  key={review.name}
                >
                  <div className="review-top">
                    <span className="quote-mark">“</span>
                    <span className="review-stars">★★★★★</span>
                  </div>

                  <blockquote>
                    {review.quote}
                  </blockquote>

                  <div className="review-person">
                    <div className="avatar">
                      {review.name.charAt(0)}
                    </div>

                    <div className="person-details">
                      <strong>{review.name}</strong>
                      <span>{review.company}</span>
                      <small>{review.location}</small>
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
          </div>
        </section>

        <section className="reviews-cta">
          <div className="reviews-container">
            <div className="reviews-cta-card">
              <span>Ready to work together?</span>

              <h2>
                Let&apos;s build a digital presence your customers trust.
              </h2>

              <a href="/contact" className="btn-primary">
                Book a Free Consultation →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingTools />

      <style>{`
        .reviews-page {
          background: #050505;
          color: #ffffff;
        }

        .reviews-container {
          width: min(calc(100% - 40px), 1250px);
          margin: 0 auto;
        }

        .reviews-hero {
          padding: 180px 20px 100px;
          background:
            radial-gradient(
              circle at 18% 20%,
              rgba(212,175,55,0.10),
              transparent 30%
            ),
            #050505;
        }

        .eyebrow {
          display: inline-block;
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .reviews-hero h1 {
          max-width: 1050px;
          font-size: clamp(54px, 8vw, 100px);
          line-height: 0.96;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .reviews-hero h1 span {
          color: #777;
        }

        .reviews-hero p {
          max-width: 760px;
          margin-top: 30px;
          color: #999;
          font-size: 18px;
          line-height: 1.75;
        }

        .rating-panel {
          margin-top: 35px;
          display: inline-flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px 24px;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .stars {
          color: #d4af37;
          letter-spacing: 5px;
          font-size: 18px;
        }

        .rating-panel strong {
          color: #d4d4d4;
          font-size: 14px;
        }

        .rating-panel span {
          color: #666;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .reviews-grid-section {
          padding: 30px 20px 120px;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .review-card {
          position: relative;
          min-height: 450px;
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
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-7px);
          border-color: rgba(212,175,55,0.28);
        }

        .review-card.featured {
          background:
            linear-gradient(
              145deg,
              rgba(212,175,55,0.11),
              rgba(255,255,255,0.02)
            );
          border-color: rgba(212,175,55,0.22);
        }

        .review-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }

        .quote-mark {
          color: #d4af37;
          font-family: Georgia, serif;
          font-size: 56px;
          line-height: 0.8;
        }

        .review-stars {
          color: #d4af37;
          font-size: 12px;
          letter-spacing: 2px;
        }

        blockquote {
          margin: 0;
          color: #c5c5c5;
          font-size: 17px;
          line-height: 1.75;
          flex-grow: 1;
        }

        .review-person {
          margin-top: 30px;
          padding-top: 24px;
          display: flex;
          gap: 13px;
          align-items: center;
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
          font-weight: 900;
        }

        .person-details {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .person-details strong {
          font-size: 14px;
        }

        .person-details span {
          color: #aaa;
          font-size: 12px;
        }

        .person-details small {
          color: #5f5f5f;
          font-size: 11px;
        }

        .review-service {
          margin-top: 18px;
          width: fit-content;
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(212,175,55,0.07);
          border: 1px solid rgba(212,175,55,0.16);
          color: #d4af37;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
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

        .reviews-cta {
          padding: 0 20px 120px;
        }

        .reviews-cta-card {
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

        .reviews-cta-card > span {
          color: #d4af37;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .reviews-cta-card h2 {
          max-width: 900px;
          margin: 14px 0 30px;
          font-size: clamp(38px, 6vw, 68px);
          line-height: 1;
          letter-spacing: -3px;
        }

        @media (max-width: 950px) {
          .reviews-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .reviews-container {
            width: min(calc(100% - 28px), 1250px);
          }

          .reviews-hero {
            padding: 150px 14px 85px;
          }

          .reviews-hero h1 {
            letter-spacing: -3px;
          }

          .reviews-grid {
            grid-template-columns: 1fr;
          }

          .reviews-cta-card {
            padding: 30px;
          }
        }
      `}</style>
    </>
  );
}