
import React from "react";

function Slidingtext() {
  const message = (
    <span className="sliding-text-message">
      Daudega To Mera Desh Daudega:
      <span className="sliding-text-highlight">Har Dukaan bane Digital Kendra</span>
      <span aria-hidden="true" style={{ color: '#DC2626' }}>✦</span>
    </span>
  );

  return (
    <section className="sliding-text-section">
      <div className="sliding-text-track">
        <div className="sliding-text-group">{message}{message}{message}</div>
        <div className="sliding-text-group" aria-hidden="true">
          {message}{message}{message}
        </div>
      </div>

      <style>{`
        @keyframes slidingTextMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .sliding-text-section {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, #07172c 0%, #0A2B5E 50%, #07172c 100%);
          border-top: 1.5px solid rgba(217, 148, 10, 0.35);
          border-bottom: 1.5px solid rgba(217, 148, 10, 0.35);
          padding: 16px 0;
        }

        .sliding-text-track,
        .sliding-text-group {
          display: flex;
          width: max-content;
          flex-wrap: nowrap;
        }

        .sliding-text-track {
          animation: slidingTextMove 24s linear infinite;
          will-change: transform;
        }

        .sliding-text-message {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 16px;
          padding-right: 32px;
          color: #ffffff;
          font-size: clamp(1.1rem, 2.5vw, 1.875rem);
          font-weight: 600;
          line-height: 1.3;
          white-space: nowrap;
        }

        .sliding-text-highlight {
          color: #FBBF24;
          font-weight: 700;
          text-shadow: 0 0 12px rgba(251, 191, 36, 0.3);
          white-space: nowrap;
        }

        @media (prefers-reduced-motion: reduce) {
          .sliding-text-track {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
}

export default Slidingtext;
