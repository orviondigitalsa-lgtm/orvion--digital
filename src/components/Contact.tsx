"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong. Please try again."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="contact-label">
              Let&apos;s Talk
            </span>

            <h2>
              Ready to turn attention
              <br />
              <span>into real customers?</span>
            </h2>

            <p className="contact-intro">
              Tell us about your business and what you want to achieve.
              Whether you need a new website, better Google visibility,
              stronger social media or more leads, we&apos;ll help you find
              the right digital strategy.
            </p>

            <div className="contact-benefits">
              <div>
                <span>✓</span>
                <p>No-pressure initial conversation</p>
              </div>

              <div>
                <span>✓</span>
                <p>Clear recommendations for your business</p>
              </div>

              <div>
                <span>✓</span>
                <p>Strategy focused on real customer growth</p>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-info-card">
                <span>Email</span>
                <a href="mailto:orviondigitalsa@gmail.com">
                  orviondigitalsa@gmail.com
                </a>
              </div>

              <div className="contact-info-card">
                <span>WhatsApp</span>
                <a
                  href="https://wa.me/27647569787"
                  target="_blank"
                  rel="noreferrer"
                >
                  +27 64 756 9787
                </a>
              </div>

              <div className="contact-info-card">
                <span>Location</span>
                <strong>
                  Potchefstroom, South Africa
                </strong>
              </div>

              <div className="contact-info-card">
                <span>Response</span>
                <strong>
                  Usually within one business day
                </strong>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {!submitted ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-header">
                  <span>Start a Project</span>

                  <h3>
                    Tell us about your business.
                  </h3>

                  <p>
                    Fill in the form and your enquiry will be sent directly to
                    Orvion Digital.
                  </p>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="business">
                      Business Name
                    </label>

                    <input
                      id="business"
                      name="business"
                      type="text"
                      placeholder="Your Business"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@business.co.za"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+27"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="service">
                    What do you need help with?
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Website Design & Development">
                      Website Design & Development
                    </option>

                    <option value="SEO">
                      SEO
                    </option>

                    <option value="Lead Generation">
                      Lead Generation
                    </option>

                    <option value="Google Business">
                      Google Business
                    </option>

                    <option value="Social Media Management">
                      Social Media Management
                    </option>

                    <option value="Complete Digital Growth Strategy">
                      Complete Digital Growth Strategy
                    </option>

                    <option value="Not Sure Yet">
                      I&apos;m Not Sure Yet
                    </option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">
                    Tell us about your goals
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us what you want to improve, what challenges you're facing, or what you want your business to achieve."
                    required
                  />
                </div>

                {error && (
                  <div className="form-error">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-button"
                  disabled={sending}
                >
                  <span>
                    {sending
                      ? "Sending Your Enquiry..."
                      : "Send My Enquiry"}
                  </span>

                  <span>
                    {sending ? "•••" : "→"}
                  </span>
                </button>

                <p className="form-note">
                  Your enquiry will be sent securely to Orvion Digital.
                </p>
              </form>
            ) : (
              <div className="success-card">
                <div className="success-icon">
                  ✓
                </div>

                <span>
                  Enquiry Sent
                </span>

                <h3>
                  Thank you.
                </h3>

                <p>
                  Your enquiry has been sent successfully to Orvion Digital.
                  We&apos;ll be in touch as soon as possible.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="contact-bottom">
          <span>
            Orvion Digital
          </span>

          <h3>
            Better visibility. More enquiries. More customers.
          </h3>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 130px 20px 80px;
          background:
            radial-gradient(
              circle at 75% 30%,
              rgba(212,175,55,0.08),
              transparent 30%
            ),
            #080808;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .contact-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: start;
        }

        .contact-label {
          display: inline-block;
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .contact-copy h2 {
          font-size: clamp(44px, 5vw, 70px);
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 900;
        }

        .contact-copy h2 span {
          color: #777;
        }

        .contact-intro {
          margin-top: 28px;
          max-width: 600px;
          color: #989898;
          font-size: 17px;
          line-height: 1.75;
        }

        .contact-benefits {
          margin-top: 35px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-benefits div {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .contact-benefits span {
          width: 27px;
          height: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.18);
          color: #d4af37;
          font-size: 12px;
          font-weight: 900;
        }

        .contact-benefits p {
          color: #b5b5b5;
          font-size: 14px;
        }

        .contact-info {
          margin-top: 45px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-info-card {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-radius: 17px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
        }

        .contact-info-card span {
          color: #6f6f6f;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .contact-info-card a,
        .contact-info-card strong {
          color: #f3f3f3;
          font-size: 14px;
          font-weight: 700;
        }

        .contact-info-card a:hover {
          color: #d4af37;
        }

        .contact-form-wrap {
          border-radius: 30px;
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.05),
              rgba(255,255,255,0.02)
            );
          border: 1px solid rgba(255,255,255,0.09);
          padding: 12px;
          box-shadow: 0 35px 90px rgba(0,0,0,0.35);
        }

        .contact-form {
          padding: 35px;
          border-radius: 22px;
          background: #090909;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .form-header {
          margin-bottom: 30px;
        }

        .form-header > span {
          color: #d4af37;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .form-header h3 {
          margin-top: 10px;
          font-size: 30px;
        }

        .form-header p {
          margin-top: 8px;
          color: #777;
          font-size: 14px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .form-field label {
          color: #a9a9a9;
          font-size: 12px;
          font-weight: 700;
        }

        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          padding: 15px 16px;
          border-radius: 13px;
          border: 1px solid rgba(255,255,255,0.09);
          outline: none;
          background: rgba(255,255,255,0.025);
          color: #fff;
          transition:
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          border-color: rgba(212,175,55,0.55);
          background: rgba(212,175,55,0.035);
        }

        .form-field textarea {
          resize: vertical;
        }

        .form-field select option {
          background: #111;
          color: white;
        }

        .form-error {
          margin-bottom: 16px;
          padding: 13px 15px;
          border-radius: 12px;
          background: rgba(255,70,70,0.08);
          border: 1px solid rgba(255,70,70,0.22);
          color: #ff8b8b;
          font-size: 13px;
          line-height: 1.5;
        }

        .submit-button {
          width: 100%;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 22px;
          border: none;
          border-radius: 14px;
          background:
            linear-gradient(
              135deg,
              #f3d978,
              #d4af37
            );
          color: #050505;
          font-size: 14px;
          font-weight: 900;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            opacity 0.25s ease;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow:
            0 18px 45px rgba(212,175,55,0.2);
        }

        .submit-button:disabled {
          cursor: not-allowed;
          opacity: 0.65;
        }

        .form-note {
          margin-top: 14px;
          color: #555;
          font-size: 11px;
          line-height: 1.6;
          text-align: center;
        }

        .success-card {
          min-height: 600px;
          padding: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 22px;
          background: #090909;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .success-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #d4af37;
          color: #050505;
          font-size: 28px;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .success-card > span {
          color: #d4af37;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .success-card h3 {
          margin-top: 12px;
          font-size: 42px;
        }

        .success-card p {
          max-width: 480px;
          margin-top: 15px;
          color: #888;
          line-height: 1.7;
        }

        .success-card button {
          margin-top: 28px;
          padding: 14px 22px;
          border-radius: 999px;
          border: 1px solid rgba(212,175,55,0.25);
          background: rgba(212,175,55,0.08);
          color: #d4af37;
          font-weight: 800;
        }

        .contact-bottom {
          margin-top: 90px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.07);
          text-align: center;
        }

        .contact-bottom span {
          color: #d4af37;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .contact-bottom h3 {
          margin-top: 12px;
          font-size: clamp(26px, 4vw, 46px);
          color: #e9e9e9;
        }

        @media (max-width: 950px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .contact-section {
            padding: 90px 18px 60px;
          }

          .contact-copy h2 {
            letter-spacing: -2px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .contact-form {
            padding: 24px;
          }

          .success-card {
            min-height: 450px;
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
}