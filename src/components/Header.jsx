import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { Menu, X, ChevronRight, LogIn, Store, Building } from 'lucide-react';

export default function Header({ activeSegment = 'retailer', onSelectSegment }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (route, e) => {
    e.preventDefault();
    if (onSelectSegment) {
      onSelectSegment(route);
    }
    setIsMobileMenuOpen(false);
  };

  const handleSectionClick = (sectionId, e) => {
    e.preventDefault();
    if (activeSegment !== 'retailer') {
      if (onSelectSegment) {
        onSelectSegment('retailer', sectionId);
      }
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', `/#${sectionId}`);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isCorporateActive = 
    activeSegment === 'corporate' || 
    activeSegment === 'solutions' || 
    activeSegment === 'case-studies' ||
    activeSegment === 'features';

  return (
    <>
      <div className="header--placeholder"></div>
      <header id="masthead" className="site-header">
        <div className="container--responsive df jcsb aic">
          <div className="site-branding">
            <div className="logo set-retailer">
              <a href="/" onClick={(e) => handleNavClick('retailer', e)} className="brand-header-link">
                <img src={logoImg} alt="Mera Digital Pay" className="brand-header-logo-img" />
              </a>
            </div>

            {/* Segment Switcher (Retailer / Corporate) */}
            <div className="menu-main-menu-container">
              <ul id="menu-main-menu" className="nav navbar-nav main-navigation">
                <li className={`set-retailer menu-item ${activeSegment === 'retailer' ? 'current-menu-item active' : ''}`}>
                  <a href="/" onClick={(e) => handleNavClick('retailer', e)}>
                    Retailer
                  </a>
                </li>
                <li className={`set-corporate menu-item ${isCorporateActive ? 'current-menu-item active' : ''}`}>
                  <a href="/corporate" onClick={(e) => handleNavClick('corporate', e)}>
                    Corporate
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
              type="button"
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} color="#0c4696" /> : <Menu size={26} color="#0c4696" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav id="site-navigation" className="site-navigation-main desktop-nav-only">
            {activeSegment === 'retailer' ? (
              <div className="menu-retailer-menu-container">
                <ul id="menu-retailer-menu" className="nav navbar-nav site-navigation">
                  <li className={`menu-item ${activeSegment === 'income-calculator' ? 'active' : ''}`}>
                    <a href="/income-calculator" onClick={(e) => handleNavClick('income-calculator', e)}>Income Calculator</a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'media' ? 'active' : ''}`}>
                    <a href="/media-listing" onClick={(e) => handleNavClick('media', e)}>Media Center</a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'about-us' ? 'active' : ''}`}>
                    <a href="/about-us" onClick={(e) => handleNavClick('about-us', e)}>About Us</a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'faqs' ? 'active' : ''}`}>
                    <a href="/faqs" onClick={(e) => handleNavClick('faqs', e)}>FAQs</a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'contact-us' ? 'active' : ''}`}>
                    <a href="/contact-us" onClick={(e) => handleNavClick('contact-us', e)}>Contact Us</a>
                  </li>
                  <li className="login-btn menu-item menu-item-has-children">
                    <a href="#" onClick={(e) => e.preventDefault()}>Login</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="https://www.meradigitalpay.com" target="_blank" rel="noopener noreferrer">
                          Retailer Login
                        </a>
                      </li>
                      <li>
                        <a href="https://www.meradigitalpay.com" target="_blank" rel="noopener noreferrer">
                          Distributor Login
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="menu-distributor-menu-container">
                <ul id="menu-distributor-menu" className="nav navbar-nav site-navigation">
                  <li className={`menu-item ${activeSegment === 'solutions' ? 'active' : ''}`}>
                    <a href="/solutions" onClick={(e) => handleNavClick('solutions', e)}>
                      Our Solutions
                    </a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'case-studies' ? 'active' : ''}`}>
                    <a href="/case-studies" onClick={(e) => handleNavClick('case-studies', e)}>
                      Our Impact
                    </a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'features' ? 'active' : ''}`}>
                    <a href="/features" onClick={(e) => handleNavClick('features', e)}>
                      Capabilities
                    </a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'media' ? 'active' : ''}`}>
                    <a href="/media-listing" onClick={(e) => handleNavClick('media', e)}>Media Center</a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'about-us' ? 'active' : ''}`}>
                    <a href="/about-us" onClick={(e) => handleNavClick('about-us', e)}>About Us</a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'faqs' ? 'active' : ''}`}>
                    <a href="/faqs" onClick={(e) => handleNavClick('faqs', e)}>FAQs</a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'contact-us' ? 'active' : ''}`}>
                    <a href="/contact-us" onClick={(e) => handleNavClick('contact-us', e)}>Contact Us</a>
                  </li>
                  <li className="login-btn menu-item menu-item-has-children">
                    <a href="#" onClick={(e) => e.preventDefault()}>Login</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="https://www.meradigitalpay.com" target="_blank" rel="noopener noreferrer">
                          Retailer Login
                        </a>
                      </li>
                      <li>
                        <a href="https://www.meradigitalpay.com" target="_blank" rel="noopener noreferrer">
                          Distributor Login
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>

        {/* Mobile Navigation Drawer & Backdrop */}
        {isMobileMenuOpen && (
          <div className="mobile-drawer-backdrop" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-drawer-header">
                <img src={logoImg} alt="Mera Digital Pay" className="mobile-drawer-logo" />
                <button 
                  type="button" 
                  className="mobile-drawer-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} color="#0c4696" />
                </button>
              </div>

              {/* Mobile Segment Tabs */}
              <div className="mobile-segment-switch">
                <button 
                  type="button"
                  className={`mobile-seg-btn ${activeSegment === 'retailer' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('retailer', e)}
                >
                  <Store size={16} /> Retailer
                </button>
                <button 
                  type="button"
                  className={`mobile-seg-btn ${isCorporateActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('corporate', e)}
                >
                  <Building size={16} /> Corporate
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="mobile-drawer-links">
                {activeSegment === 'retailer' ? (
                  <>
                    <a href="/" onClick={(e) => handleNavClick('retailer', e)} className="mobile-nav-link">
                      <span>Home</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/income-calculator" onClick={(e) => handleNavClick('income-calculator', e)} className="mobile-nav-link">
                      <span>Income Calculator</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/media-listing" onClick={(e) => handleNavClick('media', e)} className="mobile-nav-link">
                      <span>Media Center</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/about-us" onClick={(e) => handleNavClick('about-us', e)} className="mobile-nav-link">
                      <span>About Us</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/faqs" onClick={(e) => handleNavClick('faqs', e)} className="mobile-nav-link">
                      <span>FAQs</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/contact-us" onClick={(e) => handleNavClick('contact-us', e)} className="mobile-nav-link">
                      <span>Contact Us</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                  </>
                ) : (
                  <>
                    <a href="/corporate" onClick={(e) => handleNavClick('corporate', e)} className="mobile-nav-link">
                      <span>Corporate Overview</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/solutions" onClick={(e) => handleNavClick('solutions', e)} className="mobile-nav-link">
                      <span>Our Solutions</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/case-studies" onClick={(e) => handleNavClick('case-studies', e)} className="mobile-nav-link">
                      <span>Our Impact</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/features" onClick={(e) => handleNavClick('features', e)} className="mobile-nav-link">
                      <span>Capabilities</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/media-listing" onClick={(e) => handleNavClick('media', e)} className="mobile-nav-link">
                      <span>Media Center</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/about-us" onClick={(e) => handleNavClick('about-us', e)} className="mobile-nav-link">
                      <span>About Us</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/faqs" onClick={(e) => handleNavClick('faqs', e)} className="mobile-nav-link">
                      <span>FAQs</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                    <a href="/contact-us" onClick={(e) => handleNavClick('contact-us', e)} className="mobile-nav-link">
                      <span>Contact Us</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </a>
                  </>
                )}
              </div>

              {/* Mobile Login Action Buttons */}
              <div className="mobile-drawer-auth">
                <a 
                  href="https://www.meradigitalpay.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-auth-btn green"
                >
                  <LogIn size={18} /> Retailer Login
                </a>
                <a 
                  href="https://www.meradigitalpay.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-auth-btn outline"
                >
                  <LogIn size={18} /> Distributor Login
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
