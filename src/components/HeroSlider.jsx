import React, { useState, useEffect, useCallback } from 'react';
import hero1 from "./../assets/hero1.png";
import hero2 from "./../assets/hero2.png";
import hero3 from "./../assets/hero3.png";

const slidesData = [
  {
    id: 0,
    title: "Daudega To Mera Desh Daudega:\nHar Dukaan bane Digital Kendra",
    body: (
      <>
        <p className="body-content">
          A nationwide mission to empower Bharat by providing every neighborhood{" "}
          <span className="text--black text--bold">
            direct access to DBT withdrawals, instant payouts, AEPS, and vital banking solutions.
          </span>
        </p>
        <p className="body-content">Transform your store into a full-service Digital Banking Kendra.</p>
        <p className="body-content text--blue text--bold">Minimal setup cost. High monthly commission earnings.</p>
      </>
    ),
    image: hero1
  },
  {
    id: 1,
    title: "Join India’s Next-Generation\nBranchless Banking & FinTech Network",
    body: (
      <>
        <p className="body-content">
          With thousands of active retail partners across India, Mera Digital Pay delivers{" "}
          <span className="text--bold text--black">secure, high-uptime financial services</span> directly to local communities.
        </p>
        <p className="body-content">Partner with India’s trusted digital payment platform.</p>
        <p className="body-content text--black text--bold">Earn sustainable income on every digital transaction.</p>
      </>
    ),
    image: hero2
  },
  {
    id: 2,
    title: "Upgrade your business and\nmaximize your retail earnings",
    body: (
      <>
        <p className="body-content">
          Equip your business with modern digital payment technology, multi-service utility billings, and recharge portals.
        </p>
        <p className="body-content">
          Become the preferred one-stop digital service hub in your community and grow customer footfall daily.
        </p>
        <p className="body-content text--blue text--bold">Fast onboarding. Zero working capital locks.</p>
      </>
    ),
    image: hero3
  }
];

export default function HeroSlider({ onOpenIncomeCalc, onOpenJoin }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slidesData[currentSlide];

  const handleIncomeCalcClick = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (typeof onOpenIncomeCalc === 'function') {
      onOpenIncomeCalc();
    }
  }, [onOpenIncomeCalc]);

  const handleBookDemoClick = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (typeof onOpenJoin === 'function') {
      onOpenJoin();
    }
  }, [onOpenJoin]);

  return (
    <section className="top-wrapper retail hero-unified-wrapper">
      <div className="container--responsive">
        <div className="retail-top-slider-box">
          <div className="hero-slide-item slide-active">
            <div className="hero-content-col">
              <h2 className="main-header-title" style={{ whiteSpace: 'pre-line' }}>
                {slide.title}
              </h2>
              <div className="content-wrap">
                {slide.body}
                <div className="group-button" style={{ position: 'relative', zIndex: 100 }}>
                  <button 
                    type="button"
                    className="btn border"
                    onClick={handleIncomeCalcClick}
                    style={{ cursor: 'pointer', pointerEvents: 'auto', position: 'relative', zIndex: 101 }}
                  >
                    Income Calculator
                  </button>
                  <button 
                    type="button"
                    className="btn green"
                    onClick={handleBookDemoClick}
                    style={{ cursor: 'pointer', pointerEvents: 'auto', position: 'relative', zIndex: 101 }}
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-interactive-col">
              <img src={slide.image} alt="Mera Digital Pay Retailer" />
            </div>
          </div>

          {/* Slider Dots */}
          <div className="slider-dots-container">
            {slidesData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
