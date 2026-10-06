import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';
import downloadImage from '../assets/download.png';
import logoImg from '../assets/logo.png';
import meraDigitalApsImg from '../assets/brands/mera-digital-aps.png';
import digitalPartnerPayImg from '../assets/brands/digital-partner-pay.jpeg';
import smartEarnPartnerImg from '../assets/brands/smart-earn-partner.jpeg';
import smvdkPartnerImg from '../assets/brands/smvdk-partner.jpeg';
import partnerLogo1 from '../assets/logo/logo1.png';
import partnerLogo2 from '../assets/logo/logo2.png';
import partnerLogo3 from '../assets/logo/logo3.png';
import partnerLogo4 from '../assets/logo/logo4.png';
import partnerLogo5 from '../assets/logo/logo5.png';
import partnerLogo6 from '../assets/logo/logo6.png';
import partnerLogo7 from '../assets/logo/logo7.png';
import partnerLogo8 from '../assets/logo/logo8.png';
import partnerLogo9 from '../assets/logo/logo9.png';
import partnerLogo10 from '../assets/logo/logo10.png';
import partnerLogo11 from '../assets/logo/logo11.png';
import partnerLogo12 from '../assets/logo/logo12.png';
import partnerLogo13 from '../assets/logo/logo13.png';
import partnerLogo14 from '../assets/logo/logo14.png';
import partnerLogo15 from '../assets/logo/logo15.png';
import partnerLogo16 from '../assets/logo/logo16.png';
import partnerLogo17 from '../assets/logo/logo17.png';
import partnerLogo18 from '../assets/logo/logo18.png';
import partnerLogo19 from '../assets/logo/logo19.png';

const ourBrandsList = [
  { id: 1, name: 'Mera Digital Pay', subtitle: 'Flagship Digital Payment Platform', logo: logoImg, isMain: true },
  { id: 2, name: 'Mera Digital APS', subtitle: 'AePS & Micro-ATM Banking Solutions', logo: meraDigitalApsImg },
  { id: 3, name: 'Digital Partner Pay', subtitle: 'Merchant & Business Partner Hub', logo: digitalPartnerPayImg },
  { id: 4, name: 'Smart Earn Partner', subtitle: 'High Earning Retail Network', logo: smartEarnPartnerImg },
  { id: 5, name: 'SMVDK Partner', subtitle: 'Enterprise & Distributor Network', logo: smvdkPartnerImg }
];

const partners = [
  { id: 1, name: 'Flipkart', category: 'Insurance', color: '#005a9c', logo: partnerLogo1 },
  { id: 2, name: 'Amazon', category: 'Banking', color: '#b02a30', logo: partnerLogo2 },
  { id: 3, name: 'Bharat Connect', category: 'Banking', color: '#861f41', logo: partnerLogo3 },
  { id: 4, name: 'Ondc', category: 'Banking', color: '#da251c', logo: partnerLogo4 },
  { id: 5, name: 'Lic', category: 'Payments Bank', color: '#00579e', logo: partnerLogo5 },
  { id: 6, name: 'Digilocker', category: 'Banking', color: '#003874', logo: partnerLogo6 },
  { id: 7, name: 'Protean', category: 'Banking', color: '#2b3990', logo: partnerLogo7 },
  { id: 8, name: 'Nsdl', category: 'Banking', color: '#9d2235', logo: partnerLogo8 },
  { id: 9, name: 'IDFC FIRST Bank', category: 'Banking', color: '#004c8f', logo: partnerLogo9 },
  { id: 10, name: 'Jio', category: 'Banking', color: '#0b7285', logo: partnerLogo10 },
  { id: 11, name: 'Npcl', category: 'Banking', color: '#e8590c', logo: partnerLogo11 },
  { id: 12, name: 'ICICI Bank', category: 'Payments Bank', color: '#e02424', logo: partnerLogo12 },
  { id: 13, name: 'Axis Bank', category: 'Payments Bank', color: '#be185d', logo: partnerLogo13 },
  { id: 14, name: 'Fino', category: 'Payments Bank', color: '#0c4a6e', logo: partnerLogo14 },
  { id: 15, name: 'kotak', category: 'Fintech', color: '#7c3aed', logo: partnerLogo15 },
  { id: 16, name: 'YES BANK', category: 'Govt Services', color: '#0284c7', logo: partnerLogo16 },
  { id: 17, name: 'AU SMALL FINANCE BANK', category: 'Payment Gateway', color: '#0c4696', logo: partnerLogo17 },
  { id: 18, name: 'Payments Bank', category: 'Fintech', color: '#ea580c', logo: partnerLogo18 },
  { id: 19, name: 'SBM', category: 'Payments Infrastructure', color: '#0369a1', logo: partnerLogo19 }
];

const youtubeVideos = [
  {
    id: 'JBCWEtggJpE',
    title: 'Dukaan Ek, Sevaayein Anek',
    url: 'https://youtube.com/shorts/JBCWEtggJpE?si=9E74lVrlUQmZYJ2r'
  },
  {
    id: 'kGop3zBURGA',
    title: 'Grow Digital Business & Earnings',
    url: 'https://youtube.com/shorts/kGop3zBURGA?si=XdRbT3ZMUm4EBCz-'
  },
  {
    id: 'UnaQd2HSRG4',
    title: 'Complete Digital Payment Solutions',
    url: 'https://youtube.com/shorts/UnaQd2HSRG4?si=XZ5NWWpUdydOM52f'
  }
];

function PartnerLogoItem({ partner }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="partner-logo-card" title={`${partner.name} - ${partner.category || 'Partner'}`}>
      {!imgError && partner.logo ? (
        <img 
          src={partner.logo} 
          alt={partner.name} 
          onError={() => setImgError(true)}
          style={{ maxHeight: '42px', maxWidth: '140px', objectFit: 'contain' }}
        />
      ) : (
        <div 
          className="partner-fallback-badge"
          style={{ 
            color: partner.color || '#0c4696',
            fontWeight: 800,
            fontSize: '0.92rem',
            letterSpacing: '0.3px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: partner.color || '#0c4696', display: 'inline-block' }}></span>
          <span>{partner.name}</span>
        </div>
      )}
    </div>
  );
}

export default function PartnersSection() {
  const [selectedPopupVideo, setSelectedPopupVideo] = useState(null);

  return (
    <section className="our-partner-wraper bgcolor--white" id="partners">
      <div className="container--responsive">
        {/* Our Brands Ecosystem */}
        <div className="our-brands-section" style={{ marginBottom: '60px', paddingTop: '20px' }}>
          <div className="center-content" style={{ textAlign: 'center', marginBottom: '35px' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', background: '#eff6ff', color: '#0c4696', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '10px' }}>
              Shri Mata Vaishno Devi Traders Ecosystem
            </span>
            <h3 className="section-title-dashed" style={{ margin: '0 auto', fontSize: '2rem', fontWeight: 800, color: '#1e293b' }}>
              Our Brands
            </h3>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '650px', margin: '12px auto 0' }}>
              Pioneering financial inclusion, digital payments, AePS banking, and distributor networks across India
            </p>
          </div>

          <div className="our-brands-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '0 10px' }}>
            {ourBrandsList.map((b) => (
              <div 
                key={b.id} 
                className="brand-card-item"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px 16px',
                  border: b.isMain ? '2px solid #0c4696' : '1px solid #e2e8f0',
                  boxShadow: b.isMain ? '0 10px 25px rgba(12, 70, 150, 0.12)' : '0 4px 15px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                {b.isMain && (
                  <span style={{ position: 'absolute', top: '-11px', background: '#0c4696', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, padding: '3px 10px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Main Brand
                  </span>
                )}
                <div style={{ width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', background: '#f8fafc', borderRadius: '12px', padding: '6px' }}>
                  <img 
                    src={b.logo} 
                    alt={b.name} 
                    style={{ maxHeight: '78px', maxWidth: '78px', width: 'auto', height: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0c4696', margin: '0 0 6px 0', lineHeight: 1.25 }}>
                  {b.name}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                  {b.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="center-content">
          <h3 className="section-title-dashed">Our Partners</h3>
        </div>

        {/* Seamless Smooth Partner Marquee Slider with all 19 Partners */}
        <div className="partner-marquee-container">
          <div className="partner-marquee-track">
            {/* First Set of Logos */}
            {partners.map((p) => (
              <PartnerLogoItem key={`p1-${p.id}`} partner={p} />
            ))}
            {/* Duplicate Set for Infinite Continuous Loop */}
            {partners.map((p) => (
              <PartnerLogoItem key={`p2-${p.id}`} partner={p} />
            ))}
          </div>
        </div>

        {/* Download App & Video Showcase Carousel Section */}
        <div className="download-app-wraper" id="download-app-sec">
          <div className="app-wraper" style={{ alignItems: 'center' }}>
            <div className="content-wraper" style={{ flex: '1 1 540px', maxWidth: '620px' }}>
              <h3 className="section-title-dashed margin--b30" style={{ fontSize: '1.9rem', fontWeight: 800, color: '#093774', marginBottom: '12px' }}>
                Download Mera Digital Pay now
              </h3>
              <p className="body-content" style={{ color: '#1e293b', fontSize: '1.05rem', lineHeight: 1.5, marginBottom: '24px' }}>
                Use Mera Digital Pay app & take charge of all your transactions to grow your business
              </p>

              {/* Rectangular Video Cards Carousel */}
              <div className="video-cards-carousel-wrap" style={{ position: 'relative', marginTop: '10px' }}>
                {/* Carousel Nav Controls */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#093774', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#dc2626">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Watch Videos in Action
                  </span>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById('video-carousel-scroll');
                        if (el) el.scrollBy({ left: -260, behavior: 'smooth' });
                      }}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        border: '1px solid #94a3b8',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#0c4696',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                      }}
                      title="Previous"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById('video-carousel-scroll');
                        if (el) el.scrollBy({ left: 260, behavior: 'smooth' });
                      }}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        border: '1px solid #94a3b8',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#0c4696',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                      }}
                      title="Next"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Horizontal Scrollable Carousel Track of Rectangular Cards */}
                <div
                  id="video-carousel-scroll"
                  style={{
                    display: 'flex',
                    gap: '16px',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    paddingBottom: '8px',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {youtubeVideos.map((video, idx) => (
                    <div
                      key={video.id}
                      onClick={() => setSelectedPopupVideo(video.id)}
                      style={{
                        flex: '0 0 240px',
                        scrollSnapAlign: 'start',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        position: 'relative',
                        cursor: 'pointer',
                        aspectRatio: '16 / 10',
                        background: '#0f172a',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(12, 70, 150, 0.25)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                      }}
                    >
                      {/* Video Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />

                      {/* Dark Gradient Overlay */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '12px'
                      }}>
                        {/* Top Badge */}
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                          <span style={{
                            background: 'rgba(220, 38, 38, 0.9)',
                            color: '#ffffff',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            padding: '3px 8px',
                            borderRadius: '4px',
                            letterSpacing: '0.5px'
                          }}>
                            PLAY VIDEO
                          </span>
                        </div>

                        {/* Centered Glowing Red Play Button */}
                        <div style={{
                          alignSelf: 'center',
                          width: '46px',
                          height: '46px',
                          borderRadius: '50%',
                          background: 'rgba(220, 38, 38, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 0 20px rgba(220, 38, 38, 0.6)',
                          color: '#ffffff'
                        }}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>

                        {/* Bottom Title */}
                        <div>
                          <p style={{
                            margin: 0,
                            color: '#ffffff',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            lineHeight: 1.3,
                            textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                            {video.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="content-wraper download-phone-mockup" style={{ flex: '1 1 360px', textAlign: 'center' }}>
              <img 
                src={downloadImage} 
                alt="Mera Digital Pay App" 
                style={{ maxHeight: '460px', width: 'auto', maxWidth: '100%' }}
              />
            </div>

          </div>
        </div>

        {/* Video Popup Modal */}
        {selectedPopupVideo && typeof document !== 'undefined' && createPortal(
          <div 
            className="modal-backdrop-custom" 
            onClick={() => setSelectedPopupVideo(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.88)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              boxSizing: 'border-box'
            }}
          >
            <div 
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '780px',
                background: '#000000',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
              }} 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button"
                onClick={() => setSelectedPopupVideo(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '20px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Close"
              >
                ✕
              </button>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${selectedPopupVideo}?autoplay=1&rel=0`}
                  title="Mera Digital Pay Video"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
