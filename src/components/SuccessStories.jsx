import React, { useState } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';

import campaignWomanImg from '../assets/girlimg1.jpeg';
import campaignRetailerImg from '../assets/boyimg1.jpeg';
import digitalNaariImg from '../assets/girlimg2.jpeg';
import shgImg from '../assets/boy2img.jpeg';

const storiesData = [
  {
    id: 1,
    category: 'women',
    headline: 'How I became an independent woman with Mera Digital Pay',
    quote: 'Mera Digital Pay gave me the platform and tools to start my own banking point right from my town. Today I manage AePS cash withdrawals, DMT, and utility bills for over 400 families every month.',
    name: 'Rinkle Kamani',
    role: 'Self Employed & Digital Naari',
    location: 'Rajkot, Gujarat',
    rating: 5,
    earnings: '₹35,000+ / month',
    accentColor: '#8b5cf6',
    accentLight: '#f5f3ff',
    badgeColor: '#7c3aed',
    image: campaignWomanImg
  },
  {
    id: 2,
    category: 'retailer',
    headline: 'Doubled footfall & monthly profits at my Kirana Store',
    quote: 'Adding banking services like cash withdrawal, bill payments, and recharge transformed my ordinary grocery shop into a full-fledged neighborhood digital bank. Customers visit every day for cash & recharges.',
    name: 'Rajesh Sharma',
    role: 'Retailer Partner',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    earnings: '₹42,000+ / month',
    accentColor: '#0284c7',
    accentLight: '#f0f9ff',
    badgeColor: '#0369a1',
    image: campaignRetailerImg
  },
  {
    id: 3,
    category: 'women',
    headline: 'Empowering 500+ women in my village with digital banking',
    quote: 'As a Banking Mitra, I help local women and self-help groups access government DBT funds and cash deposits directly at their doorstep without traveling 15km to the bank branch.',
    name: 'Pooja Verma',
    role: 'Banking Mitra & Entrepreneur',
    location: 'Varanasi, Uttar Pradesh',
    rating: 5,
    earnings: '₹28,000+ / month',
    accentColor: '#10b981',
    accentLight: '#ecfdf5',
    badgeColor: '#059669',
    image: digitalNaariImg
  },
  {
    id: 4,
    category: 'distributor',
    headline: 'Managing a thriving 80+ retailer network with 100% automated payouts',
    quote: 'Mera Digital Pay’s distributor dashboard makes onboarding and managing retailers seamless. Real-time commission settlements and 24/7 partner support make it the most reliable fintech platform.',
    name: 'Vikramaditya Patel',
    role: 'Distributor Partner',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    earnings: '₹85,000+ / month',
    accentColor: '#f59e0b',
    accentLight: '#fffbeb',
    badgeColor: '#d97706',
    image: shgImg
  }
];

export default function SuccessStories({ onOpenJoin }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredStories = activeCategory === 'all' 
    ? storiesData 
    : storiesData.filter(s => s.category === activeCategory);

  const activeStory = filteredStories[currentIndex % filteredStories.length] || storiesData[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredStories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  return (
    <section className="success-story-section" id="success-stories">
      <div className="container--responsive">
        
        {/* Section Header */}
        <div className="center-content success-story-header">
          <div className="hindi-story-pill">
            <Sparkles size={16} />
            <span>सक्सेस स्टोरी</span>
          </div>
          <h3 className="section-title-dashed">
            Real Stories of Digital Empowerment
          </h3>
          <p className="body-content">
            Hear from retail champions, women entrepreneurs, and business partners across India who are transforming their lives with Mera Digital Pay.
          </p>

          {/* Filter Chips */}
          <div className="story-filter-tabs">
            <button 
              type="button" 
              className={`story-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('all'); setCurrentIndex(0); }}
            >
              All Stories
            </button>
            <button 
              type="button" 
              className={`story-tab-btn ${activeCategory === 'women' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('women'); setCurrentIndex(0); }}
            >
              Women Entrepreneurs
            </button>
            <button 
              type="button" 
              className={`story-tab-btn ${activeCategory === 'retailer' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('retailer'); setCurrentIndex(0); }}
            >
              Retailers
            </button>
            <button 
              type="button" 
              className={`story-tab-btn ${activeCategory === 'distributor' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('distributor'); setCurrentIndex(0); }}
            >
              Distributors
            </button>
          </div>
        </div>

        {/* Main Featured Success Story Card */}
        <div className="story-card-wrapper">
          <div 
            className="success-featured-card"
            style={{ 
              '--accent-color': activeStory.accentColor,
              '--accent-light': activeStory.accentLight
            }}
          >
            {/* Left Lavender/Purple Curved Shape with Avatar */}
            <div className="story-visual-side">
              <div 
                className="story-curved-backdrop"
                style={{ background: activeStory.accentColor }}
              >
                <div className="story-avatar-container">
                  <img 
                    src={activeStory.image} 
                    alt={activeStory.name} 
                    className="story-avatar-img"
                  />
                  <div className="story-verified-badge" title="Verified Partner">
                    <CheckCircle2 size={16} color="#ffffff" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="story-content-side">
              <div className="story-content-top">
                <div className="story-stars-row">
                  {[...Array(activeStory.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                  <span className="story-verified-text">
                    <Award size={14} /> Verified Partner Story
                  </span>
                </div>

                <h3 className="story-main-headline">
                  "{activeStory.headline}"
                </h3>

                <p className="story-quote-body">
                  {activeStory.quote}
                </p>
              </div>

              <div className="story-author-footer">
                <div className="story-author-details">
                  <h4 className="story-author-name">{activeStory.name}</h4>
                  <p className="story-author-role">
                    {activeStory.role} • <span>{activeStory.location}</span>
                  </p>
                </div>

                <div className="story-earning-pill">
                  <TrendingUp size={16} color={activeStory.badgeColor} />
                  <span>Avg. Earning: <strong>{activeStory.earnings}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="story-controls-row">
            <button 
              type="button" 
              className="story-nav-arrow prev" 
              onClick={handlePrev}
              aria-label="Previous Story"
            >
              <ChevronLeft size={22} />
            </button>
            <div className="story-pagination-dots">
              {filteredStories.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`story-dot ${idx === (currentIndex % filteredStories.length) ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to story ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              type="button" 
              className="story-nav-arrow next" 
              onClick={handleNext}
              aria-label="Next Story"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Small CTA strip */}
        <div className="story-bottom-cta">
          <div className="story-bottom-text">
            <h4>Start your own success story with Mera Digital Pay today</h4>
            <p>Join over 10,000+ retailers & partners earning handsome monthly commissions.</p>
          </div>
          <button 
            type="button" 
            className="btn blue story-cta-action"
            onClick={() => onOpenJoin && onOpenJoin()}
          >
            Become a Partner Free
          </button>
        </div>

      </div>
    </section>
  );
}
