import React, { useState, useEffect } from 'react';

const slidesData = [
  {
    id: 0,
    title: "Atmanirbhar Bharat ki Pehchan, Har Dukaan Digital Pradhan",
    body: (
      <>
        <p className="body-content">
          A national movement to uplift Bharat by giving every household{" "}
          <span className="text--black text--bold">
            easy access to DBT funds, digital payments and essential banking services at a store nearby.
          </span>
        </p>
        <p className="body-content">Upgrade your shop. Be the one stop banking service provider.</p>
        <p className="body-content text--blue text--bold">No working capital required. Earn ₹2,00,000+ per year.</p>
      </>
    ),
    image: "https://paynearby.in/wp-content/uploads-efs/2023/07/Group-40387_optimized.png"
  },
  {
    id: 1,
    title: "Join the world’s largest\nbranchless banking & digital network",
    body: (
      <>
        <p className="body-content">
          With a growing network of{" "}
          <span className="text--bold text--black">15,00,000 active Retail partners</span>, covering every district in the country, we service the financial needs of{" "}
          <span className="text--bold text--black">5,00,00,000 customers.</span>
        </p>
        <p className="body-content">Join India’s most trusted network of banking service providers.</p>
        <p className="body-content text--black text--bold">No working capital required. Earn ₹2,00,000+ per year.</p>
      </>
    ),
    image: "https://paynearby.in/wp-content/uploads-efs/2023/07/retailer-banner-img-2-1_optimized.png"
  },
  {
    id: 2,
    title: "Upgrade your business and \nmake more money",
    body: (
      <>
        <p className="body-content">
          Power your business with the latest digital payment technology. Take your store online and reach more customers.
        </p>
        <p className="body-content">
          Become the one stop digital and financial service centre in your area and service your customers better.
        </p>
        <p className="body-content text--blue text--bold">No working capital required. Earn ₹2,00,000+ per year.</p>
      </>
    ),
    image: "https://paynearby.in/wp-content/uploads-efs/2023/07/retailer-banner-img-3-1_resized.png"
  }
];

export default function HeroSlider({ onOpenIncomeCalc, onOpenJoin }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="top-wrapper retail hero-unified-wrapper">
      <div className="container--responsive">
        <div className="retail-top-slider-box">
          <div className="retail-slider-inner">
            {slidesData.map((slide, index) => (
              <div 
                key={slide.id} 
                className={`top-container hero-slide-item ${index === currentSlide ? 'slide-active' : ''}`}
              >
                <div className="top-content hero-content-col">
                  <h2 className="main-header-title" style={{ whiteSpace: 'pre-line' }}>
                    {slide.title}
                  </h2>
                  <div className="content-wrap">
                    {slide.body}
                    <img src={slide.image} alt="" className="mob-img" />
                    <div className="group-button">
                      <a 
                        href="#income-calculator" 
                        className="btn border"
                        onClick={(e) => { e.preventDefault(); onOpenIncomeCalc(); }}
                      >
                        Income Calculator
                      </a>
                      <a 
                        href="#join-paynearby" 
                        className="btn green"
                        onClick={(e) => { e.preventDefault(); onOpenJoin(); }}
                      >
                        Join Mera Digital Pay
                      </a>
                    </div>
                  </div>
                </div>
                <div className="top-interactive hero-interactive-col">
                  <img src={slide.image} alt="Mera Digital Pay Retailer" />
                </div>
              </div>
            ))}
          </div>

          {/* Slider Dots */}
          <div className="slider-dots-container">
            {slidesData.map((_, idx) => (
              <button
                key={idx}
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
