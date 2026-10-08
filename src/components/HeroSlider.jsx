import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles, Zap, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
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
    <section className="top-wrapper retail hero-unified-wrapper" style={{ position: 'relative', overflow: 'visible' }}>
      <div className="container--responsive">
        <div className="retail-top-slider-box">
          <div className="hero-slide-item slide-active">
            <div className="hero-content-col">
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '6px 14px', 
                  borderRadius: '100px', 
                  background: 'rgba(201, 162, 39, 0.12)', 
                  border: '1px solid #C9A227', 
                  color: '#0A1931', 
                  fontWeight: 800, 
                  fontSize: '12.5px', 
                  marginBottom: '14px',
                  boxShadow: '0 4px 12px rgba(201, 162, 39, 0.15)'
                }}
              >
                <span className="live-pulse-dot" />
                <span>1,00,000+ Active Banking Kendras Live across India</span>
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
                <div className="group-button" style={{ position: 'relative', zIndex: 100, display: 'flex', gap: '14px', marginTop: '16px' }}>
                  <button 
                    type="button"
                    className="btn border"
                    onClick={handleIncomeCalcClick}
                    style={{ 
                      cursor: 'pointer', 
                      pointerEvents: 'auto', 
                      position: 'relative', 
                      zIndex: 101,
                      border: '1.5px solid #0A1931',
                      color: '#0A1931',
                      borderRadius: '100px',
                      fontWeight: 800,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    Income Calculator
                  </button>
                  <button 
                    type="button"
                    className="btn green hero-cta-pulse"
                    onClick={handleBookDemoClick}
                    style={{ 
                      cursor: 'pointer', 
                      pointerEvents: 'auto', 
                      position: 'relative', 
                      zIndex: 101,
                      background: 'linear-gradient(135deg, #C9A227 0%, #A68018 100%)',
                      color: '#0A1931',
                      border: '1.5px solid #C9A227',
                      borderRadius: '100px',
                      fontWeight: 800,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    Book Demo • Join Now
                  </button>
                </div>
              </div>
            </div>

            <div className="hero-interactive-col" style={{ position: 'relative' }}>
              {/* Floating Dynamic WOW Badges */}
              <div className="hero-floating-chip hero-floating-chip-1">
                <div style={{ background: '#FEF3C7', padding: '6px', borderRadius: '50%', display: 'flex' }}>
                  <Zap size={16} color="#C9A227" />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0A1931', lineHeight: 1.2 }}>Instant Settlement</div>
                  <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 600 }}>0-Second Payouts</div>
                </div>
              </div>

              <div className="hero-floating-chip hero-floating-chip-2">
                <div style={{ background: '#DCFCE7', padding: '6px', borderRadius: '50%', display: 'flex' }}>
                  <ShieldCheck size={16} color="#16A34A" />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0A1931', lineHeight: 1.2 }}>NPCI & RBI Certified</div>
                  <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 600 }}>100% Bank Grade Security</div>
                </div>
              </div>

              <div className="hero-floating-chip hero-floating-chip-3">
                <div style={{ background: '#EFF6FF', padding: '6px', borderRadius: '50%', display: 'flex' }}>
                  <TrendingUp size={16} color="#2563EB" />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0A1931', lineHeight: 1.2 }}>High Commissions</div>
                  <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 600 }}>Earn ₹50,000+/Month</div>
                </div>
              </div>

              <div className="hero-video-banner-frame" style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', border: '2px solid #C9A227', boxShadow: '0 20px 45px rgba(10, 25, 49, 0.18)' }}>
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
