"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type Step =
  | "welcome"
  | "customers"
  | "website"
  | "google"
  | "social"
  | "unsure";

const whatsappUrl =
  "https://wa.me/27647569787?text=Hi%20Orvion%20Digital%2C%20I%20found%20you%20through%20your%20website%20and%20would%20like%20to%20discuss%20how%20you%20can%20help%20grow%20my%20business.";

export default function FloatingTools() {
  const [chatOpen, setChatOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [typing, setTyping] = useState(false);

  function chooseStep(nextStep: Step) {
    setTyping(true);

    setTimeout(() => {
      setStep(nextStep);
      setTyping(false);
    }, 650);
  }

  function resetChat() {
    setStep("welcome");
    setTyping(false);
  }

  function renderResponse() {
    if (typing) {
      return (
        <div className="typing-message">
          Orvion Assistant is typing
          <span className="typing-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      );
    }

    switch (step) {
      case "customers":
        return (
          <>
            <div className="bot-message">
              If your goal is to get more customers, we usually look at your
              full customer journey first.
            </div>

            <div className="bot-message">
              That can include lead generation, SEO, Google Business, landing
              pages and conversion-focused website improvements.
            </div>

            <div className="recommendation-card">
              <span>Recommended</span>
              <strong>Lead Generation + SEO</strong>
              <p>
                Best for businesses that want more enquiries and a stronger
                flow of potential customers.
              </p>
            </div>

            <div className="chat-options">
              <a href="/services">
                Explore Services
              </a>

              <a href="/contact">
                Book a Free Consultation
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-option"
              >
                <FaWhatsapp size={17} />
                Chat on WhatsApp
              </a>

              <button onClick={resetChat}>
                ← Start Again
              </button>
            </div>
          </>
        );

      case "website":
        return (
          <>
            <div className="bot-message">
              A good website should do more than look nice. It should make your
              business feel credible, professional and easy to contact.
            </div>

            <div className="bot-message">
              Orvion Digital builds websites around trust, conversion and
              customer action.
            </div>

            <div className="recommendation-card">
              <span>Recommended</span>
              <strong>Website Design & Development</strong>
              <p>
                Best for businesses that need a stronger online presence and a
                better way to turn visitors into enquiries.
              </p>
            </div>

            <div className="chat-options">
              <a href="/work">
                View Our Work
              </a>

              <a href="/contact">
                Start a Website Project
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-option"
              >
                <FaWhatsapp size={17} />
                Chat on WhatsApp
              </a>

              <button onClick={resetChat}>
                ← Start Again
              </button>
            </div>
          </>
        );

      case "google":
        return (
          <>
            <div className="bot-message">
              If customers are searching for your services on Google, you want
              your business to be visible at the right time.
            </div>

            <div className="bot-message">
              We can help improve your SEO and Google Business presence so more
              local customers can find and trust you.
            </div>

            <div className="recommendation-card">
              <span>Recommended</span>
              <strong>SEO + Google Business</strong>
              <p>
                Best for businesses that want stronger local visibility and
                more high-intent enquiries.
              </p>
            </div>

            <div className="chat-options">
              <a href="/services">
                View SEO Services
              </a>

              <a href="/contact">
                Improve My Google Visibility
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-option"
              >
                <FaWhatsapp size={17} />
                Chat on WhatsApp
              </a>

              <button onClick={resetChat}>
                ← Start Again
              </button>
            </div>
          </>
        );

      case "social":
        return (
          <>
            <div className="bot-message">
              A strong social presence helps your business stay visible and
              builds trust before a customer ever contacts you.
            </div>

            <div className="bot-message">
              We can help with content strategy, posting, brand consistency and
              social media management.
            </div>

            <div className="recommendation-card">
              <span>Recommended</span>
              <strong>Social Media Management</strong>
              <p>
                Best for businesses that want a more professional, consistent
                and active online presence.
              </p>
            </div>

            <div className="chat-options">
              <a href="/services">
                Explore Social Media Services
              </a>

              <a href="/contact">
                Discuss My Social Media
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-option"
              >
                <FaWhatsapp size={17} />
                Chat on WhatsApp
              </a>

              <button onClick={resetChat}>
                ← Start Again
              </button>
            </div>
          </>
        );

      case "unsure":
        return (
          <>
            <div className="bot-message">
              No problem. You don&apos;t need to know exactly what service you
              need.
            </div>

            <div className="bot-message">
              We can look at your current website, Google presence, social media
              and customer journey, then recommend the best next step.
            </div>

            <div className="recommendation-card">
              <span>Recommended</span>
              <strong>Free Strategy Conversation</strong>
              <p>
                Tell us where your business is now and where you want to go.
                We&apos;ll help identify the right digital opportunities.
              </p>
            </div>

            <div className="chat-options">
              <a href="/contact">
                Book a Free Consultation
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-option"
              >
                <FaWhatsapp size={17} />
                Ask Us on WhatsApp
              </a>

              <button onClick={resetChat}>
                ← Start Again
              </button>
            </div>
          </>
        );

      default:
        return (
          <>
            <div className="bot-message">
              Hi 👋 I&apos;m the Orvion Digital assistant.
            </div>

            <div className="bot-message">
              What would you like help with today?
            </div>

            <div className="chat-options">
              <button onClick={() => chooseStep("customers")}>
                📈 I want more customers
              </button>

              <button onClick={() => chooseStep("website")}>
                💻 I need a better website
              </button>

              <button onClick={() => chooseStep("google")}>
                🔎 I want to rank better on Google
              </button>

              <button onClick={() => chooseStep("social")}>
                📱 I need help with social media
              </button>

              <button onClick={() => chooseStep("unsure")}>
                🤔 I&apos;m not sure what I need
              </button>
            </div>
          </>
        );
    }
  }

  return (
    <>
      <div className="floating-tools">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-button"
          aria-label="Chat with Orvion Digital on WhatsApp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={29} />
        </a>

        <button
          className={`robot-button ${chatOpen ? "robot-active" : ""}`}
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Open Orvion Assistant"
          title="Ask Orvion Assistant"
        >
          🤖
        </button>
      </div>

      {chatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="assistant-profile">
              <div className="assistant-avatar">
                🤖
              </div>

              <div>
                <span className="chat-status">
                  ● Online
                </span>

                <h3>
                  Orvion Assistant
                </h3>

                <small>
                  Digital growth assistant
                </small>
              </div>
            </div>

            <button
              className="close-button"
              onClick={() => setChatOpen(false)}
              aria-label="Close Orvion Assistant"
            >
              ✕
            </button>
          </div>

          <div className="chat-body">
            {renderResponse()}
          </div>

          <div className="chat-footer">
            <span>
              Powered by Orvion Digital
            </span>

            {step !== "welcome" && (
              <button onClick={resetChat}>
                Restart Chat
              </button>
            )}
          </div>
        </div>
      )}

      <style>{`
        .floating-tools {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .whatsapp-button,
        .robot-button {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: none;
          box-shadow: 0 15px 45px rgba(0,0,0,0.35);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .whatsapp-button {
          background: #25d366;
          color: #ffffff;
        }

        .robot-button {
          position: relative;
          background:
            linear-gradient(
              135deg,
              #f3d978,
              #d4af37
            );
          color: #050505;
          font-size: 24px;
        }

        .robot-button::before {
          content: "";
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.28);
          animation: robotPulse 2.2s ease-out infinite;
        }

        .robot-active::before {
          display: none;
        }

        .whatsapp-button:hover,
        .robot-button:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 20px 55px rgba(0,0,0,0.45);
        }

        @keyframes robotPulse {
          0% {
            transform: scale(0.92);
            opacity: 0.8;
          }

          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        .chat-window {
          position: fixed;
          right: 22px;
          bottom: 160px;
          width: min(390px, calc(100vw - 32px));
          max-height: min(650px, calc(100vh - 190px));
          z-index: 1999;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-radius: 24px;
          background: #0b0b0b;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow:
            0 30px 100px rgba(0,0,0,0.62),
            0 0 80px rgba(212,175,55,0.06);
          animation: chatOpen 0.3s ease;
        }

        @keyframes chatOpen {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          background:
            linear-gradient(
              135deg,
              rgba(212,175,55,0.15),
              rgba(255,255,255,0.025)
            );
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .assistant-profile {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .assistant-avatar {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background:
            linear-gradient(
              135deg,
              #f3d978,
              #d4af37
            );
          font-size: 21px;
        }

        .chat-header h3 {
          margin-top: 2px;
          font-size: 17px;
        }

        .chat-header small {
          display: block;
          margin-top: 2px;
          color: #666;
          font-size: 10px;
        }

        .chat-status {
          color: #d4af37;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .close-button {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: #ffffff;
          transition:
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .close-button:hover {
          background: rgba(212,175,55,0.08);
          border-color: rgba(212,175,55,0.25);
        }

        .chat-body {
          padding: 20px;
          overflow-y: auto;
        }

        .bot-message {
          width: fit-content;
          max-width: 92%;
          padding: 12px 14px;
          margin-bottom: 10px;
          border-radius: 16px 16px 16px 4px;
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.07);
          color: #c8c8c8;
          font-size: 14px;
          line-height: 1.55;
        }

        .typing-message {
          width: fit-content;
          padding: 12px 14px;
          border-radius: 16px 16px 16px 4px;
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.07);
          color: #8d8d8d;
          font-size: 13px;
        }

        .typing-dots span {
          display: inline-block;
          animation: typingDot 1.2s infinite;
        }

        .typing-dots span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .typing-dots span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes typingDot {
          0%,
          60%,
          100% {
            opacity: 0.25;
          }

          30% {
            opacity: 1;
          }
        }

        .recommendation-card {
          margin: 18px 0;
          padding: 16px;
          border-radius: 16px;
          background:
            linear-gradient(
              135deg,
              rgba(212,175,55,0.11),
              rgba(212,175,55,0.035)
            );
          border: 1px solid rgba(212,175,55,0.2);
        }

        .recommendation-card > span {
          display: block;
          color: #d4af37;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .recommendation-card strong {
          display: block;
          color: #ffffff;
          font-size: 16px;
        }

        .recommendation-card p {
          margin-top: 7px;
          color: #8c8c8c;
          font-size: 12px;
          line-height: 1.55;
        }

        .chat-options {
          margin-top: 18px;
          display: grid;
          gap: 9px;
        }

        .chat-options a,
        .chat-options button {
          width: 100%;
          padding: 13px 15px;
          border-radius: 12px;
          background: rgba(212,175,55,0.07);
          border: 1px solid rgba(212,175,55,0.16);
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 9px;
          transition:
            background 0.2s ease,
            transform 0.2s ease,
            border-color 0.2s ease;
        }

        .chat-options a:hover,
        .chat-options button:hover {
          transform: translateX(4px);
          background: rgba(212,175,55,0.12);
          border-color: rgba(212,175,55,0.3);
        }

        .chat-options .whatsapp-option {
          color: #43db78;
          border-color: rgba(37,211,102,0.18);
          background: rgba(37,211,102,0.06);
        }

        .chat-options .whatsapp-option:hover {
          background: rgba(37,211,102,0.11);
          border-color: rgba(37,211,102,0.28);
        }

        .chat-footer {
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: #4f4f4f;
          font-size: 9px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .chat-footer button {
          border: none;
          background: transparent;
          color: #6f6f6f;
          font-size: 9px;
        }

        .chat-footer button:hover {
          color: #d4af37;
        }

        @media (max-width: 600px) {
          .floating-tools {
            right: 16px;
            bottom: 16px;
          }

          .chat-window {
            right: 16px;
            bottom: 150px;
            width: calc(100vw - 32px);
            max-height: calc(100vh - 180px);
          }
        }
      `}</style>
    </>
  );
}