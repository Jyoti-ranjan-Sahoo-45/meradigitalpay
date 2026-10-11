import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles, Zap, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import promoVideo from "./../assets/video-hero-promo.mp4";
import heroImage1 from '../assets/hero1.jpeg';
import heroImage2 from '../assets/hero2.jpeg';
import heroImage3 from '../assets/hero3.jpeg';

const heroImages = [heroImage1, heroImage2, heroImage3];

export default function HeroSlider({ onOpenIncomeCalc, onOpenJoin }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const sliderInterval = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => window.clearInterval(sliderInterval);
  }, []);

  const userExplicitlyToggled = useRef(false);

  // Auto-replay video when it reaches the end or loops
  const handleVideoEnded = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const dur = videoRef.current.duration;
      const cur = videoRef.current.currentTime;
      // If within 0.25s of end, loop cleanly back to 0
      if (dur > 0 && cur >= dur - 0.25) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }
  }, []);

  const handleVideoPause = useCallback(() => {
    if (videoRef.current) {
      const dur = videoRef.current.duration;
      const cur = videoRef.current.currentTime;
      if (videoRef.current.ended || (dur > 0 && cur >= dur - 0.4)) {
        handleVideoEnded();
      }
    }
  }, [handleVideoEnded]);

  // Try unmuted autoplay by default; if browser blocks, start muted and auto-unmute on first user touch/click
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1.0;

    const removeListeners = () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };

    const handleUserInteraction = () => {
      removeListeners();
      // If user has already pressed Mute/Unmute, do NOT override their choice!
      if (userExplicitlyToggled.current) return;
      userExplicitlyToggled.current = true;

      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        setIsMuted(false);
        videoRef.current.play().catch(() => {});
      }
    };

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser policy requires user interaction before audio plays:
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});

          window.addEventListener('click', handleUserInteraction, { passive: true });
          window.addEventListener('pointerdown', handleUserInteraction, { passive: true });
          window.addEventListener('touchstart', handleUserInteraction, { passive: true });
          window.addEventListener('keydown', handleUserInteraction, { passive: true });
          window.addEventListener('scroll', handleUserInteraction, { passive: true });
        });
    }

    return () => removeListeners();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

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

  const toggleSound = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    userExplicitlyToggled.current = true; // Mark as explicit user choice
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.volume = 1.0;
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    }
  }, []);

  const togglePlay = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, []);

  const handleVideoClick = useCallback((e) => {
    // Clicking anywhere on the video frame toggles mute/unmute
    toggleSound(e);
  }, [toggleSound]);

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

              <div 
                className="hero-video-banner-frame" 
                onClick={handleVideoClick}
              >
                {/* Floating Top Sound Badge */}
                <button 
                  type="button" 
                  className={`hero-sound-pill ${!isMuted ? 'sound-active' : ''}`}
                  onClick={toggleSound}
                  aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                  title={isMuted ? "Tap to unmute sound" : "Tap to mute sound"}
                >
                  <span className="hero-sound-pulse" />
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  <span>{isMuted ? "Unmute" : "Mute Sound"}</span>
                </button>

                <video 
                  ref={videoRef}
                  src={promoVideo}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onEnded={handleVideoEnded}
                  onTimeUpdate={handleTimeUpdate}
                  onPause={handleVideoPause}
                  className="hero-video-element"
                />

                {/* Video Bottom Control Bar */}
                <div className="hero-video-overlay-bar" onClick={(e) => e.stopPropagation()}>
                  <button 
                    type="button" 
                    className="hero-vid-ctrl-btn"
                    onClick={togglePlay}
                    title={isPlaying ? "Pause" : "Play"}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  
                  <span className="hero-vid-title-tag">Mera Digital Pay</span>

                  <button 
                    type="button" 
                    className={`hero-vid-ctrl-btn sound ${!isMuted ? 'active-audio' : ''}`}
                    onClick={toggleSound}
                    title={isMuted ? "Unmute Sound" : "Mute Sound"}
                    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
