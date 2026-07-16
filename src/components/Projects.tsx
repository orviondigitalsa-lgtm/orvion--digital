const projects = [
  {
    category: "Website Design",
    title: "Aura Luxury Real Estate",
    result: "Premium property website designed to build trust and generate high-value enquiries.",
    stat: "+68%",
    statLabel: "More Enquiries",
  },
  {
    category: "SEO & Google Business",
    title: "North West Dental Studio",
    result: "Local search strategy focused on improving visibility for high-intent Google searches.",
    stat: "Top 3",
    statLabel: "Local Search Goal",
  },
  {
    category: "Lead Generation",
    title: "FlowPro Plumbing",
    result: "Lead-focused landing pages and advertising system built around urgent customer enquiries.",
    stat: "3.2×",
    statLabel: "Lead Potential",
  },
  {
    category: "Brand & Social",
    title: "The Foundry Coffee Co.",
    result: "A stronger visual identity and social presence designed to turn a local brand into a destination.",
    stat: "+124%",
    statLabel: "Engagement",
  },
];

export default function Projects() {
  return (
    <section id="work" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div>
            <span className="projects-label">Selected Work</span>

            <h2>
              We don&apos;t just make things look good.
              <br />
              <span>We build for results.</span>
            </h2>
          </div>

          <p>
            A selection of digital projects showing how strategy, design,
            visibility and customer acquisition can work together to build
            stronger businesses.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-visual">
                <div className="visual-topbar">
                  <div className="dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className="visual-url">
                    orviondigital.co.za/project-{index + 1}
                  </span>
                </div>

                <div className="visual-body">
                  <div className="visual-badge">
                    {project.category}
                  </div>

                  <div className="visual-brand">
                    {project.title}
                  </div>

                  <div className="visual-lines">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="visual-button">
                    Explore Experience
                  </div>
                </div>

                <div className="project-stat">
                  <strong>{project.stat}</strong>
                  <span>{project.statLabel}</span>
                </div>
              </div>

              <div className="project-content">
                <div>
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.result}</p>
                </div>

                <a href="#contact" className="project-link">
                  View Case Study
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <div>
            <span>Your business could be next.</span>
            <h3>
              Let&apos;s build something people remember.
            </h3>
          </div>

          <a href="#contact" className="btn-primary">
            Start Your Project →
          </a>
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 130px 20px;
          background:
            radial-gradient(
              circle at 10% 60%,
              rgba(212, 175, 55, 0.055),
              transparent 28%
            ),
            #050505;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .projects-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .projects-header {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          align-items: end;
          margin-bottom: 65px;
        }

        .projects-label {
          display: inline-block;
          color: #d4af37;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .projects-header h2 {
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1.03;
          letter-spacing: -3px;
          font-weight: 900;
        }

        .projects-header h2 span {
          color: #777;
        }

        .projects-header > p {
          max-width: 500px;
          color: #929292;
          font-size: 17px;
          line-height: 1.75;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .project-card {
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(212,175,55,0.28);
        }

        .project-visual {
          position: relative;
          min-height: 390px;
          margin: 12px;
          border-radius: 20px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 70% 30%,
              rgba(212,175,55,0.22),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              #151515,
              #080808 70%
            );
          border: 1px solid rgba(255,255,255,0.07);
        }

        .visual-topbar {
          height: 50px;
          padding: 0 18px;
          display: flex;
          align-items: center;
          gap: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          background: rgba(0,0,0,0.28);
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #555;
        }

        .visual-url {
          color: #555;
          font-size: 11px;
        }

        .visual-body {
          padding: 55px 38px;
        }

        .visual-badge {
          display: inline-flex;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(212,175,55,0.25);
          background: rgba(212,175,55,0.07);
          color: #d4af37;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 25px;
        }

        .visual-brand {
          max-width: 390px;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: -2px;
          margin-bottom: 30px;
        }

        .visual-lines {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 30px;
        }

        .visual-lines span {
          display: block;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
        }

        .visual-lines span:nth-child(1) {
          width: 70%;
        }

        .visual-lines span:nth-child(2) {
          width: 55%;
        }

        .visual-lines span:nth-child(3) {
          width: 42%;
        }

        .visual-button {
          display: inline-flex;
          padding: 12px 18px;
          border-radius: 999px;
          background: #d4af37;
          color: #050505;
          font-size: 12px;
          font-weight: 800;
        }

        .project-stat {
          position: absolute;
          right: 20px;
          bottom: 20px;
          min-width: 120px;
          padding: 15px;
          border-radius: 16px;
          background: rgba(5,5,5,0.8);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
        }

        .project-stat strong,
        .project-stat span {
          display: block;
        }

        .project-stat strong {
          color: #d4af37;
          font-size: 24px;
          margin-bottom: 3px;
        }

        .project-stat span {
          color: #777;
          font-size: 11px;
        }

        .project-content {
          padding: 15px 28px 30px;
          display: flex;
          justify-content: space-between;
          gap: 25px;
          align-items: end;
        }

        .project-category {
          color: #d4af37;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .project-content h3 {
          margin: 10px 0;
          font-size: 25px;
        }

        .project-content p {
          color: #858585;
          line-height: 1.6;
          font-size: 14px;
          max-width: 430px;
        }

        .project-link {
          flex-shrink: 0;
          display: flex;
          gap: 8px;
          align-items: center;
          color: #d4af37;
          font-size: 13px;
          font-weight: 700;
        }

        .projects-cta {
          margin-top: 60px;
          padding: 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          border-radius: 26px;
          background:
            linear-gradient(
              135deg,
              rgba(212,175,55,0.12),
              rgba(255,255,255,0.03)
            );
          border: 1px solid rgba(212,175,55,0.18);
        }

        .projects-cta span {
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .projects-cta h3 {
          margin-top: 8px;
          font-size: clamp(25px, 3vw, 38px);
        }

        @media (max-width: 950px) {
          .projects-header {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .projects-section {
            padding: 90px 18px;
          }

          .projects-header h2 {
            letter-spacing: -2px;
          }

          .project-visual {
            min-height: 330px;
          }

          .visual-body {
            padding: 40px 25px;
          }

          .project-content {
            flex-direction: column;
            align-items: flex-start;
          }

          .projects-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}