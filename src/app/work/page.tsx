import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTools from "@/components/FloatingTools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Websites & Digital Marketing Projects",
  description:
    "Explore selected Orvion Digital projects across website design, SEO, Google Business, lead generation, branding and social media for businesses in South Africa.",
};

const projects = [
  {
    number: "01",
    category: "Website Design",
    title: "Aura Luxury Real Estate",
    location: "Cape Town, Western Cape",
    image: "/projects/aura_real_estate.jpg",
    description:
      "A premium property website concept designed to position a luxury real estate brand with stronger trust, elegant listings and a clearer enquiry journey.",
    outcome:
      "Premium positioning, stronger credibility and a more conversion-focused property experience.",
  },
  {
    number: "02",
    category: "SEO & Google Business",
    title: "North West Dental Studio",
    location: "Potchefstroom, North West",
    image: "/projects/north_west_dental.png",
    description:
      "A local visibility concept focused on helping potential patients discover a dental practice through high-intent Google searches and stronger local trust signals.",
    outcome:
      "Improved local visibility, clearer service discovery and a stronger online reputation.",
  },
  {
    number: "03",
    category: "Lead Generation",
    title: "FlowPro Plumbing",
    location: "Johannesburg, Gauteng",
    image: "/projects/flowpro_plumbing.jpg",
    description:
      "A lead-generation concept designed around urgent plumbing enquiries, fast response options and a conversion-first mobile experience.",
    outcome:
      "A faster route from search to enquiry with clearer contact options and stronger lead potential.",
  },
  {
    number: "04",
    category: "Brand & Social Media",
    title: "The Foundry Coffee Co.",
    location: "Pretoria, Gauteng",
    image: "/projects/foundry_coffee.jpg",
    description:
      "A brand and social media concept created to make a local coffee business feel more memorable, premium and visually consistent across digital channels.",
    outcome:
      "Stronger brand recognition, more consistent content and a more engaging customer experience.",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="work-page">
        <section className="work-hero">
          <div className="work-container">
            <span className="eyebrow">Selected Work</span>

            <h1>
              Work that looks premium.
              <br />
              <span>Strategy built for growth.</span>
            </h1>

            <p>
              Explore portfolio concepts showing how Orvion Digital combines
              website design, SEO, lead generation, branding and digital
              strategy to help businesses build stronger online presences.
            </p>

            <div className="portfolio-note">
              Portfolio concepts created to demonstrate Orvion Digital&apos;s
              design and strategy capabilities.
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="work-container">
            <div className="projects-list">
              {projects.map((project, index) => (
                <article
                  className={`project ${
                    index % 2 === 1 ? "project-reverse" : ""
                  }`}
                  key={project.title}
                >
                  <div className="project-image-wrap">
                    <Image
                      src={project.image}
                      alt={`${project.title} portfolio project`}
                      fill
                      priority={index === 0}
                      className="project-image"
                      sizes="(max-width: 950px) 100vw, 55vw"
                    />

                    <div className="image-overlay" />

                    <div className="image-top">
                      <span className="project-number">{project.number}</span>

                      <span className="project-category-badge">
                        {project.category}
                      </span>
                    </div>

                    <div className="image-bottom">
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <div className="project-content">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h2>{project.title}</h2>

                    <span className="project-location">
                      {project.location}
                    </span>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-outcome">
                      <span>Strategic Outcome</span>

                      <p>{project.outcome}</p>
                    </div>

                    <div className="project-actions">
                      <a href="/contact" className="project-button">
                        Start a Similar Project
                        <span>→</span>
                      </a>

                      <span className="portfolio-badge">
                        Portfolio Concept
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-cta">
          <div className="work-container">
            <div className="work-cta-card">
              <span>Your business could be next.</span>

              <h2>
                Let&apos;s build a digital presence your competitors wish they
                had.
              </h2>

              <p>
                Whether you need a new website, better Google visibility, more
                leads or a complete digital growth strategy, Orvion Digital can
                help you build the right system for your business.
              </p>

              <a href="/contact" className="btn-primary">
                Start Your Project →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingTools />

      <style>{`
        .work-page {
          background: #050505;
          color: #ffffff;
        }

        .work-container {
          width: min(calc(100% - 40px), 1250px);
          margin: 0 auto;
        }

        .work-hero {
          padding: 180px 20px 110px;
          background:
            radial-gradient(
              circle at 18% 20%,
              rgba(212, 175, 55, 0.11),
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

        .work-hero h1 {
          max-width: 1100px;
          font-size: clamp(54px, 8vw, 100px);
          line-height: 0.95;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .work-hero h1 span {
          color: #777777;
        }

        .work-hero p {
          max-width: 760px;
          margin-top: 30px;
          color: #999999;
          font-size: 18px;
          line-height: 1.75;
        }

        .portfolio-note {
          display: inline-flex;
          margin-top: 30px;
          padding: 11px 15px;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.07);
          border: 1px solid rgba(212, 175, 55, 0.16);
          color: #9e8640;
          font-size: 11px;
          font-weight: 700;
        }

        .projects-section {
          padding: 30px 20px 130px;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 35px;
        }

        .project {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          min-height: 560px;
          overflow: hidden;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .project:hover {
          transform: translateY(-6px);
          border-color: rgba(212, 175, 55, 0.25);
          box-shadow: 0 35px 100px rgba(0, 0, 0, 0.35);
        }

        .project-reverse {
          grid-template-columns: 0.85fr 1.15fr;
        }

        .project-reverse .project-image-wrap {
          order: 2;
        }

        .project-reverse .project-content {
          order: 1;
        }

        .project-image-wrap {
          position: relative;
          min-height: 560px;
          overflow: hidden;
          background: #111111;
        }

        .project-image {
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .project:hover .project-image {
          transform: scale(1.045);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.04),
              rgba(0, 0, 0, 0.08) 45%,
              rgba(0, 0, 0, 0.72)
            );
        }

        .image-top {
          position: absolute;
          z-index: 2;
          top: 24px;
          left: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .project-number {
          color: #ffffff;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .project-category-badge {
          padding: 9px 13px;
          border-radius: 999px;
          background: rgba(5, 5, 5, 0.68);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(12px);
          color: #d4af37;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .image-bottom {
          position: absolute;
          z-index: 2;
          left: 24px;
          bottom: 24px;
        }

        .image-bottom span {
          padding: 10px 13px;
          border-radius: 999px;
          background: rgba(5, 5, 5, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(12px);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
        }

        .project-content {
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .project-category {
          color: #d4af37;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .project-content h2 {
          margin-top: 12px;
          font-size: clamp(38px, 4vw, 58px);
          line-height: 0.98;
          letter-spacing: -3px;
        }

        .project-location {
          display: block;
          margin-top: 12px;
          color: #636363;
          font-size: 12px;
        }

        .project-description {
          margin-top: 30px;
          color: #929292;
          font-size: 16px;
          line-height: 1.75;
        }

        .project-outcome {
          margin-top: 28px;
          padding: 20px;
          border-radius: 18px;
          background: rgba(212, 175, 55, 0.055);
          border: 1px solid rgba(212, 175, 55, 0.14);
        }

        .project-outcome > span {
          color: #d4af37;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .project-outcome p {
          margin-top: 8px;
          color: #bebebe;
          font-size: 14px;
          line-height: 1.6;
        }

        .project-actions {
          margin-top: 30px;
          padding-top: 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .project-button {
          display: flex;
          align-items: center;
          gap: 20px;
          color: #d4af37;
          font-size: 14px;
          font-weight: 800;
        }

        .project-button span {
          transition: transform 0.25s ease;
        }

        .project-button:hover span {
          transform: translateX(6px);
        }

        .portfolio-badge {
          color: #4f4f4f;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .work-cta {
          padding: 0 20px 120px;
        }

        .work-cta-card {
          padding: 55px;
          border-radius: 30px;
          background:
            linear-gradient(
              135deg,
              rgba(212, 175, 55, 0.12),
              rgba(255, 255, 255, 0.025)
            );
          border: 1px solid rgba(212, 175, 55, 0.18);
        }

        .work-cta-card > span {
          color: #d4af37;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .work-cta-card h2 {
          max-width: 900px;
          margin-top: 14px;
          font-size: clamp(38px, 6vw, 68px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .work-cta-card p {
          max-width: 690px;
          margin: 22px 0 30px;
          color: #909090;
          line-height: 1.75;
        }

        @media (max-width: 950px) {
          .project,
          .project-reverse {
            grid-template-columns: 1fr;
          }

          .project-reverse .project-image-wrap,
          .project-reverse .project-content {
            order: initial;
          }

          .project-image-wrap {
            min-height: 450px;
          }
        }

        @media (max-width: 650px) {
          .work-container {
            width: min(calc(100% - 28px), 1250px);
          }

          .work-hero {
            padding: 150px 14px 85px;
          }

          .work-hero h1 {
            letter-spacing: -3px;
          }

          .project-image-wrap {
            min-height: 340px;
          }

          .project-content {
            padding: 28px;
          }

          .project-content h2 {
            letter-spacing: -2px;
          }

          .project-actions {
            flex-direction: column;
            align-items: flex-start;
          }

          .work-cta-card {
            padding: 30px;
          }
        }
      `}</style>
    </>
  );
}