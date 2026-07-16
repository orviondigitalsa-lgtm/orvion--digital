"use client";

export default function ScrollDown() {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className="scroll-down"
        onClick={scrollDown}
        aria-label="Scroll down"
      >
        <span className="scroll-text">
          Explore
        </span>

        <span className="scroll-circle">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scroll-arrow"
          >
            <path
              d="M12 5V19M12 19L6 13M12 19L18 13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <style jsx>{`
        .scroll-down {
          position: absolute;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          z-index: 20;

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;

          padding: 0;

          background: transparent;
          border: none;

          cursor: pointer;
        }

        .scroll-text {
          color: #777777;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 2.5px;
          text-transform: uppercase;

          transition: color 0.25s ease;
        }

        .scroll-circle {
          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            rgba(255, 255, 255, 0.025);

          border:
            1px solid
            rgba(212, 175, 55, 0.3);

          backdrop-filter: blur(12px);

          box-shadow:
            0 0 35px
            rgba(212, 175, 55, 0.08);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .scroll-arrow {
          color: #d4af37;

          animation:
            arrowBounce
            1.7s
            ease-in-out
            infinite;
        }

        .scroll-down:hover
        .scroll-circle {
          transform: scale(1.1);

          background:
            rgba(212, 175, 55, 0.1);

          border-color:
            rgba(212, 175, 55, 0.7);

          box-shadow:
            0 0 40px
            rgba(212, 175, 55, 0.15);
        }

        .scroll-down:hover
        .scroll-text {
          color: #d4af37;
        }

        @keyframes arrowBounce {
          0%,
          100% {
            transform:
              translateY(-3px);
          }

          50% {
            transform:
              translateY(4px);
          }
        }

        @media (max-width: 650px) {
          .scroll-down {
            bottom: 18px;
          }

          .scroll-circle {
            width: 42px;
            height: 42px;
          }

          .scroll-text {
            font-size: 8px;
          }
        }
      `}</style>
    </>
  );
}