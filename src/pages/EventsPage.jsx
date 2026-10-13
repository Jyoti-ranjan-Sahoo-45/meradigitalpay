import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import PartnersSection from '../components/PartnersSection';
import { 
  Calendar, Sparkles, Clock, Bell, CheckCircle2, 
  ArrowLeft, MapPin, Award, Users, Shield, 
  Tv, Megaphone, Share2, MessageCircle
} from 'lucide-react';

export default function EventsPage({ onNavigate }) {
  const [notifyInput, setNotifyInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [countdown, setCountdown] = useState({ days: 42, hours: 18, minutes: 24, seconds: 50 });

  // Subtle real-time countdown ticker for visual dynamism
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!notifyInput.trim()) return;
    setIsSubscribed(true);
  };

  const handleGoHome = (e) => {
    if (e) e.preventDefault();
    if (typeof onNavigate === 'function') {
      onNavigate('retailer');
    } else {
      window.location.href = '/';
    }
  };

  const upcomingPreviewEvents = [
    {
      id: 1,
      badge: 'Annual Mega Summit',
      badgeColor: '#C9A227',
      title: 'National Adhikari & Partner Summit 2026',
      desc: 'Annual flagship gathering celebrating Bharat’s top-performing Banking Mitras, Master Distributors, and District Franchise leaders.',
      location: 'New Delhi • Bharat Mandapam',
      icon: Award
    },
    {
      id: 2,
      badge: 'FinTech Expo & Conclave',
      badgeColor: '#0284C7',
      title: 'Bharat Digital Banking & Financial Inclusion Conclave',
      desc: 'High-level industry keynotes and policy roundtables on AEPS, UPI 123Pay, micro-ATMs, and last-mile branchless banking.',
      location: 'Mumbai & Virtual Broadcast',
      icon: Tv
    },
    {
      id: 3,
      badge: 'Empowerment Initiative',
      badgeColor: '#16A34A',
      title: 'Naari Shakti & Lakhpati Didi Leadership Meet',
      desc: 'Special honors and dedicated training workshops empowering women banking entrepreneurs across rural clusters.',
      location: 'Regional Hubs • Nationwide',
      icon: Users
    },
    {
      id: 4,
      badge: 'Tech & Product Launch',
      badgeColor: '#9333EA',
      title: 'Mera Digital Pay 3.0 API & Portal Launchpad',
      desc: 'Exclusive developer sessions and showcase of next-generation Whitelabel panels, Biometric SDKs, and instant settlement APIs.',
      location: 'Live Stream on YouTube & App',
      icon: Megaphone
    }
  ];

  return (
    <main className="events-page-main" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      
      {/* 1. Breadcrumbs */}
      <div id="breadcrumbs" className="breadcrumbs-wrapper" style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container--responsive" style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 20px' }}>
          <ul style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', padding: 0, margin: 0, fontSize: '13.5px', color: '#64748b' }}>
            <li>
              <a 
                href="/" 
                onClick={handleGoHome}
                style={{ color: '#0c4696', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <ArrowLeft size={14} /> Home
              </a>
            </li>
            <li style={{ color: '#cbd5e1' }}>/</li>
            <li>
              <span style={{ color: '#475569', fontWeight: 500 }}>Company</span>
            </li>
            <li style={{ color: '#cbd5e1' }}>/</li>
            <li>
              <span style={{ fontWeight: 700, color: '#C9A227' }}>Events</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 2. Main Hero Showcase with Brand Logo and Bold "Coming Soon" */}
      <section 
        style={{ 
          background: 'radial-gradient(ellipse at top, #0A1931 0%, #071224 50%, #030813 100%)', 
          color: '#ffffff', 
          padding: '70px 20px 80px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle decorative glowing mesh elements */}
        <div 
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '650px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(201, 162, 39, 0.22) 0%, rgba(12, 70, 150, 0.15) 50%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }} 
        />

        <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          
          {/* Prominent Logo Presentation Box */}
          <div 
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1.5px solid rgba(201, 162, 39, 0.45)',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 35px rgba(201, 162, 39, 0.2)',
              borderRadius: '24px',
              padding: '24px 36px',
              backdropFilter: 'blur(16px)',
              marginBottom: '28px',
              position: 'relative'
            }}
          >
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '12px 24px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src={logoImg} 
                alt="Mera Digital Pay Logo" 
                style={{ 
                  height: '72px', 
                  maxWidth: '240px', 
                  objectFit: 'contain',
                  display: 'block' 
                }} 
              />
            </div>
            <div 
              style={{ 
                marginTop: '12px', 
                fontSize: '11px', 
                letterSpacing: '2.5px', 
                fontWeight: 800, 
                color: '#FEE78A',
                textTransform: 'uppercase'
              }}
            >
              MERA DIGITAL PAY • DAUDEGA BHARAT
            </div>
          </div>

          {/* Animated Gold Pill Badge */}
          <div style={{ marginBottom: '20px' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(201, 162, 39, 0.15)',
                border: '1px solid #C9A227',
                padding: '7px 20px',
                borderRadius: '30px',
                color: '#FEE78A',
                fontSize: '13.5px',
                fontWeight: 700,
                letterSpacing: '0.6px',
                boxShadow: '0 4px 15px rgba(201, 162, 39, 0.15)'
              }}
            >
              <Sparkles size={16} color="#FEE78A" />
              OFFICIAL EVENTS &amp; MEDIA CONCLAVE
            </span>
          </div>

          {/* Giant "Coming Soon" Typography */}
          <h1 
            style={{ 
              fontFamily: "'Cera Pro', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: 'clamp(40px, 6vw, 68px)', 
              fontWeight: 900, 
              lineHeight: 1.08,
              margin: '0 0 16px',
              letterSpacing: '-1.5px',
              background: 'linear-gradient(135deg, #ffffff 0%, #FEE78A 55%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Coming Soon
          </h1>

          <p 
            style={{ 
              fontSize: 'clamp(16px, 2vw, 19px)', 
              color: '#94a3b8', 
              lineHeight: 1.65, 
              maxWidth: '740px', 
              margin: '0 auto 34px',
              fontWeight: 400
            }}
          >
            We are preparing an exclusive events portal featuring live national retailer conventions, FinTech leadership summits, partner awards, and broadcast updates across Bharat.
          </p>

          {/* Interactive Countdown Timer Ticker */}
          <div 
            style={{ 
              display: 'inline-flex', 
              gap: '14px', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              marginBottom: '38px',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '16px 24px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            {[
              { val: countdown.days, label: 'Days' },
              { val: countdown.hours, label: 'Hours' },
              { val: countdown.minutes, label: 'Minutes' },
              { val: countdown.seconds, label: 'Seconds' }
            ].map((unit, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'rgba(10, 25, 49, 0.75)', 
                  border: '1px solid rgba(201, 162, 39, 0.3)',
                  borderRadius: '14px', 
                  padding: '12px 18px', 
                  minWidth: '78px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.35)'
                }}
              >
                <div 
                  style={{ 
                    fontSize: '28px', 
                    fontWeight: 900, 
                    color: '#ffffff', 
                    fontFamily: "'Cera Pro', monospace",
                    lineHeight: 1
                  }}
                >
                  {String(unit.val).padStart(2, '0')}
                </div>
                <div style={{ fontSize: '11px', color: '#C9A227', textTransform: 'uppercase', fontWeight: 700, marginTop: '4px' }}>
                  {unit.label}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive "Get Notified" Form */}
          <div style={{ maxWidth: '540px', margin: '0 auto 28px' }}>
            {isSubscribed ? (
              <div 
                style={{
                  background: 'rgba(22, 163, 74, 0.15)',
                  border: '1.5px solid #16a34a',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#86efac',
                  textAlign: 'left'
                }}
              >
                <CheckCircle2 size={24} color="#22c55e" style={{ flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', color: '#ffffff', fontSize: '15px' }}>
                    You're on the priority invitation list!
                  </strong>
                  <span style={{ fontSize: '13px', color: '#bbf7d0' }}>
                    We'll notify you as soon as the event schedule and registration dates are published.
                  </span>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={handleSubscribe}
                style={{
                  display: 'flex',
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '6px',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.35)',
                  gap: '6px'
                }}
              >
                <input 
                  type="text" 
                  value={notifyInput}
                  onChange={(e) => setNotifyInput(e.target.value)}
                  placeholder="Enter WhatsApp Number or Email ID" 
                  required
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    padding: '12px 18px',
                    fontSize: '14.5px',
                    color: '#0A1931',
                    borderRadius: '12px'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #C9A227 0%, #D4AF37 100%)',
                    color: '#0A1931',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    transition: 'transform 0.15s, box-shadow 0.15s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                >
                  <Bell size={15} /> Get Notified
                </button>
              </form>
            )}
          </div>

          {/* Quick Action Navigation Buttons */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleGoHome}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '11px 22px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
            >
              <ArrowLeft size={16} /> Back to Home
            </button>

            <a
              href="https://wa.me/919675695450?text=Hello%20Mera%20Digital%20Pay,%20I%20want%20information%20regarding%20upcoming%20events"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(22, 163, 74, 0.18)',
                color: '#4ade80',
                border: '1px solid #16a34a',
                padding: '11px 22px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(22, 163, 74, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(22, 163, 74, 0.18)'}
            >
              <MessageCircle size={16} /> WhatsApp Inquiry
            </a>
          </div>

        </div>
      </section>

      {/* 3. Upcoming Event Categories Sneak Peek */}
      <section style={{ padding: '60px 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span 
            style={{ 
              color: '#0c4696', 
              fontSize: '12.5px', 
              fontWeight: 800, 
              letterSpacing: '1.2px', 
              textTransform: 'uppercase', 
              display: 'block', 
              marginBottom: '8px' 
            }}
          >
            What To Expect
          </span>
          <h2 
            style={{ 
              fontFamily: "'Cera Pro', sans-serif", 
              fontSize: '32px', 
              fontWeight: 800, 
              color: '#0A1931', 
              margin: '0 0 10px' 
            }}
          >
            Upcoming Event Lineup
          </h2>
          <p style={{ color: '#64748b', fontSize: '15.5px', maxWidth: '640px', margin: '0 auto' }}>
            Here is a preview of the company programs, annual summits, and regional conclaves being organized by Mera Digital Pay.
          </p>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
            gap: '24px' 
          }}
        >
          {upcomingPreviewEvents.map((ev) => {
            const Icon = ev.icon;
            return (
              <div
                key={ev.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1px solid #e2e8f0',
                  padding: '28px 24px',
                  boxShadow: '0 6px 20px rgba(10, 25, 49, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(10, 25, 49, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(10, 25, 49, 0.04)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div 
                    style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '12px', 
                      background: 'rgba(201, 162, 39, 0.12)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#0c4696'
                    }}
                  >
                    <Icon size={22} color="#0c4696" />
                  </div>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 800, 
                      padding: '4px 10px', 
                      borderRadius: '20px', 
                      background: '#f1f5f9', 
                      color: ev.badgeColor,
                      border: `1px solid ${ev.badgeColor}33`
                    }}
                  >
                    {ev.badge}
                  </span>
                </div>

                <h3 
                  style={{ 
                    fontSize: '18px', 
                    fontWeight: 800, 
                    color: '#0A1931', 
                    margin: '0 0 10px', 
                    lineHeight: 1.35 
                  }}
                >
                  {ev.title}
                </h3>

                <p 
                  style={{ 
                    fontSize: '14px', 
                    color: '#64748b', 
                    lineHeight: 1.6, 
                    margin: '0 0 18px', 
                    flex: 1 
                  }}
                >
                  {ev.desc}
                </p>

                <div 
                  style={{ 
                    borderTop: '1px solid #f1f5f9', 
                    paddingTop: '12px', 
                    fontSize: '12.5px', 
                    color: '#475569', 
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <MapPin size={13} color="#C9A227" />
                  {ev.location}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Official Partners & Trust Bar */}
      <PartnersSection />

    </main>
  );
}
