import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function Header({ activeSegment = 'retailer', onSelectSegment }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (route, e) => {
    e.preventDefault();
    if (onSelectSegment) {
      onSelectSegment(route);
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
            <div className="logo set-retailer" style={{ display: 'flex', alignItems: 'center' }}>
              <a href="/" onClick={(e) => handleNavClick('retailer', e)} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <img src={logoImg} alt="Mera Digital Pay" style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }} />
                <div className="header-brand-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: '17px', fontWeight: '800', color: '#0c4696', letterSpacing: '-0.2px', lineHeight: '1.1', whiteSpace: 'nowrap' }}>
                    MERA DIGITAL PAY
                  </span>
                  <span style={{ fontSize: '8.5px', fontWeight: '700', color: '#f37023', letterSpacing: '0.4px', textTransform: 'uppercase', marginTop: '2px', whiteSpace: 'nowrap' }}>
                    DAUDEGA TO MERA DESH DAUDEGA
                  </span>
                </div>
              </a>
            </div>
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
            <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <img src="https://paynearby.in/wp-content/themes/paynearby/assets/images/hamburg-menu.png" alt="Menu" />
            </div>
          </div>

          <nav id="site-navigation" className={`site-navigation-main ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            {activeSegment === 'retailer' ? (
              <div className="menu-retailer-menu-container">
                <ul id="menu-retailer-menu" className="nav navbar-nav site-navigation">
                  <li className="menu-item">
                    <a href="#distributors-program" onClick={() => setIsMobileMenuOpen(false)}>Distributors Program</a>
                  </li>
                  <li className="menu-item">
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
                  </li>
                  <li className="menu-item">
                    <a href="#digitalnaari" onClick={() => setIsMobileMenuOpen(false)}>Digital Naari</a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'media' ? 'active' : ''}`}>
                    <a href="/media-listing" onClick={(e) => handleNavClick('media', e)}>Media</a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'about-us' ? 'active' : ''}`}>
                    <a href="/about-us" onClick={(e) => handleNavClick('about-us', e)}>About Us</a>
                  </li>
                  <li className={`menu-item menu-item-has-children ${['events', 'careers-learning', 'faqs', 'gff'].includes(activeSegment) ? 'active' : ''}`}>
                    <a href="#" onClick={(e) => e.preventDefault()}>Know More</a>
                    <ul className="sub-menu">
                      <li><a href="/events" onClick={(e) => handleNavClick('events', e)}>Events</a></li>
                      <li><a href="/careers-learning" onClick={(e) => handleNavClick('careers-learning', e)}>Careers & Learning</a></li>
                      <li><a href="/faqs" onClick={(e) => handleNavClick('faqs', e)}>FAQ’s</a></li>
                      <li><a href="/gff" onClick={(e) => handleNavClick('gff', e)}>Global Fintech Fest</a></li>
                    </ul>
                  </li>
                  <li className={`menu-item ${activeSegment === 'contact-us' ? 'active' : ''}`}>
                    <a href="/contact-us" onClick={(e) => handleNavClick('contact-us', e)}>Contact Us</a>
                  </li>
                  <li className="login-btn menu-item menu-item-has-children">
                    <a href="#" onClick={(e) => e.preventDefault()}>Login</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="https://retailerportal.paynearby.in?source=paynearby-site" target="_blank" rel="noopener noreferrer">
                          Retailer
                        </a>
                      </li>
                      <li>
                        <a href="https://distributor.paynearby.in/dist/pages/examples/DistLogin.aspx?source=paynearby-site" target="_blank" rel="noopener noreferrer">
                          Distributor
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
                      Solutions
                    </a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'case-studies' ? 'active' : ''}`}>
                    <a href="/case-studies" onClick={(e) => handleNavClick('case-studies', e)}>
                      Case Studies
                    </a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'features' ? 'active' : ''}`}>
                    <a href="/features" onClick={(e) => handleNavClick('features', e)}>
                      Features
                    </a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'media' ? 'active' : ''}`}>
                    <a href="/media-listing" onClick={(e) => handleNavClick('media', e)}>Media</a>
                  </li>
                  <li className={`menu-item ${activeSegment === 'about-us' ? 'active' : ''}`}>
                    <a href="/about-us" onClick={(e) => handleNavClick('about-us', e)}>About Us</a>
                  </li>
                  <li className={`menu-item menu-item-has-children ${['events', 'careers-learning', 'faqs', 'gff'].includes(activeSegment) ? 'active' : ''}`}>
                    <a href="#" onClick={(e) => e.preventDefault()}>Know More</a>
                    <ul className="sub-menu">
                      <li><a href="/events" onClick={(e) => handleNavClick('events', e)}>Events</a></li>
                      <li><a href="/faqs" onClick={(e) => handleNavClick('faqs', e)}>FAQ’s</a></li>
                      <li><a href="/careers-learning" onClick={(e) => handleNavClick('careers-learning', e)}>Careers & Learning</a></li>
                      <li><a href="/gff" onClick={(e) => handleNavClick('gff', e)}>Global Fintech Fest</a></li>
                    </ul>
                  </li>
                  <li className={`menu-item ${activeSegment === 'contact-us' ? 'active' : ''}`}>
                    <a href="/contact-us" onClick={(e) => handleNavClick('contact-us', e)}>Contact Us</a>
                  </li>
                </ul>
              </div>
            )}

            <div className="clear"></div>
            {isMobileMenuOpen && (
              <div 
                className="mobile-menu-close" 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ cursor: 'pointer', textAlign: 'right', padding: '10px 20px', fontWeight: 'bold' }}
              >
                ✕ Close
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
