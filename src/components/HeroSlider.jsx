import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';
import promoVideo from "./../assets/video-hero-promo.mp4";
import heroImage1 from '../assets/hero1.jpeg';
import heroImage2 from '../assets/hero2.jpeg';
import heroImage3 from '../assets/hero3.jpeg';

const heroImages = [heroImage1, heroImage2, heroImage3];

export default function HeroSlider({ onOpenIncomeCalc, onOpenJoin }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const sliderInterval = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => window.clearInterval(sliderInterval);
  }, []);

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

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="top-wrapper retail hero-unified-wrapper">
      <div className="container--responsive">
        <div className="retail-top-slider-box">
          <div className="hero-slide-item slide-active">
            <div className="hero-content-col">
              <div className="hero-video-pill-badge">
                <Sparkles size={14} color="#0c4696" />
                <span>Official Brand Film • Mera Digital Pay</span>
              </div>
              <div className="hero-promo-slider" aria-label="Mera Digital Pay promotional images">
                <div
                  className="hero-promo-track"
                  style={{
                    transform: `translateX(-${activeHeroImage * (100 / heroImages.length)}%)`
                  }}
                >
                  {heroImages.map((image, index) => (
                    <div className="hero-promo-slide" key={image}>
                      <img
                        src={image}
                        alt={`Mera Digital Pay promotion ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="hero-promo-dots" aria-label="Choose promotional image">
                  {heroImages.map((image, index) => (
                    <button
                      aria-label={`Show promotional image ${index + 1}`}
                      aria-current={activeHeroImage === index ? 'true' : undefined}
                      className={activeHeroImage === index ? 'active' : ''}
                      key={image}
                      onClick={() => setActiveHeroImage(index)}
                      type="button"
                    />
                  ))}
                </div>
              </div>
              <div className="content-wrap">
                {/* <p className="body-content">
                  A nationwide mission to empower Bharat by providing every neighborhood{" "}
                  <span className="text--black text--bold">
                    direct access to DBT withdrawals, instant payouts, AEPS, and vital banking solutions.
                  </span>
                </p>
                <p className="body-content">Transform your store into a full-service Digital Banking Kendra.</p>
                <p className="body-content text--blue text--bold">Minimal setup cost. High monthly commission earnings.</p> */}
                
                <div className="group-button" style={{ position: 'relative', zIndex: 100, display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button 
                    type="button"
                    className="btn border"
                    onClick={handleIncomeCalcClick}
                    style={{ cursor: 'pointer', pointerEvents: 'auto', position: 'relative', zIndex: 101, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span>Income Calculator</span>
                    <span className="cta-arrow" style={{ transition: 'transform 0.25s ease' }}>→</span>
                  </button>
                  <button 
                    type="button"
                    className="btn green"
                    onClick={handleBookDemoClick}
                    style={{ cursor: 'pointer', pointerEvents: 'auto', position: 'relative', zIndex: 101, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span>Book Demo</span>
                    <span className="cta-arrow" style={{ transition: 'transform 0.25s ease' }}>→</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="hero-interactive-col" style={{ position: 'relative' }}>
              {/* Floating Fintech Badges */}
              <div 
                className="floating-fintech-badge" 
                style={{ top: '15px', left: '-20px' }}
              >
                <span style={{ fontSize: '15px' }}>⚡</span>
                <span>Instant Settlement</span>
              </div>

              <div 
                className="floating-fintech-badge badge-slow" 
                style={{ bottom: '25px', right: '-15px' }}
              >
                <span style={{ fontSize: '15px' }}>🛡️</span>
                <span>100% Bank Grade Security</span>
              </div>

              <div 
                className="floating-fintech-badge" 
                style={{ bottom: '-15px', left: '30px' }}
              >
                <span style={{ fontSize: '15px' }}>💰</span>
                <span>High Monthly Earnings</span>
              </div>

              <div className="hero-video-banner-frame">
                <video 
                  ref={videoRef}
                  src={promoVideo}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="hero-video-element"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
