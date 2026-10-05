import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/logo.png';
import { 
  Menu, X, ChevronDown, UserPlus, LogIn, 
  FileCheck2, Users, Image, Info, Calculator, 
  Layers, Home, ArrowUpRight, ShieldCheck, Sparkles,
  Landmark, CreditCard, Zap, Shield, FileText, UserCheck, Plane, Briefcase
} from 'lucide-react';

export default function Header({ activeSegment = 'retailer', onSelectSegment, onOpenJoin }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const loginDropdownRef = useRef(null);
  const companyDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setIsLoginDropdownOpen(false);
      }
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target)) {
        setIsCompanyDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    if (e) e.preventDefault();
    if (onSelectSegment) {
      onSelectSegment(route);
    }
    setIsMobileMenuOpen(false);
    setIsLoginDropdownOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServicesClick = (e) => {
    if (e) e.preventDefault();
    if (activeSegment !== 'retailer') {
      if (onSelectSegment) {
        onSelectSegment('retailer', 'services');
      }
    } else {
      const el = document.getElementById('services');
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', `/#services`);
      }
    }
    setIsMobileMenuOpen(false);
    setIsLoginDropdownOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleServiceItemClick = (serviceName, e) => {
    if (e) e.preventDefault();
    handleServicesClick(e);
  };

  const handleRegisterClick = (e) => {
    if (e) e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsLoginDropdownOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    if (typeof onOpenJoin === 'function') {
      onOpenJoin();
    }
  };

  const isCompanyActive = ['corporate', 'case-studies', 'media', 'about-us'].includes(activeSegment);

  // Exact 8 Category Columns as requested
  const serviceColumns = [
    {
      top: {
        title: "Banking Services",
        icon: Landmark,
        items: ["AEPS", "Money Transfer (DMT)", "Micro ATM Withdrawal"]
      },
      bottom: {
        title: "Neo Banking",
        icon: CreditCard,
        items: ["Digital Bank Account", "Physical Card", "UPI Payment", "Loan", "Investment"]
      }
    },
    {
      top: {
        title: "Utility & Bill Payment",
        icon: Zap,
        items: ["Mobile & DTH Recharge", "BBPS", "OTT Recharge"]
      },
      bottom: {
        title: "Insurance",
        icon: Shield,
        items: ["Health Insurance", "Motor Insurance", "Shop Insurance", "Device Insurance"]
      }
    },
    {
      top: {
        title: "E-Governance",
        icon: FileText,
        items: ["PAN Card", "ITR Filing", "GST Registration", "MSME Registration"]
      },
      bottom: {
        title: "Account Services",
        icon: UserCheck,
        items: ["Account Opening", "Credit Card Apply", "SBM FD Card Apply"]
      }
    },
    {
      top: {
        title: "Travel Services",
        icon: Plane,
        items: ["IRCTC Ticket Booking", "Flight Booking", "Bus Booking", "Hotel Booking"]
      },
      bottom: {
        title: "Business",
        icon: Briefcase,
        items: ["NSDL BC Apply", "Kotak BC Apply", "CMS Airtel", "Payout"]
      }
    }
  ];

  return (
    <>
      <div className="header--placeholder" style={{ height: '76px' }}></div>
      <header 
        id="masthead" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(10, 43, 94, 0.05)',
          height: '76px',
          display: 'flex',
          alignItems: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif'
        }}
      >
        <div 
          style={{ 
            width: '100%', 
            maxWidth: '1360px', 
            margin: '0 auto', 
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <a 
              href="/" 
              onClick={(e) => handleNavClick('retailer', e)} 
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              title="Mera Digital Pay"
            >
              <img 
                src={logoImg} 
                alt="Mera Digital Pay" 
                style={{ height: '52px', width: 'auto', objectFit: 'contain' }} 
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav 
            className="desktop-nav-only" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              flexWrap: 'nowrap'
            }}
          >
            {/* Home */}
            <a 
              href="/" 
              onClick={(e) => handleNavClick('retailer', e)}
              style={{
                color: activeSegment === 'retailer' ? '#0A2B5E' : '#475569',
                backgroundColor: activeSegment === 'retailer' ? '#EEF4FF' : 'transparent',
                fontWeight: activeSegment === 'retailer' ? 700 : 600,
                fontSize: '14px',
                padding: '8px 14px',
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                if (activeSegment !== 'retailer') e.currentTarget.style.backgroundColor = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                if (activeSegment !== 'retailer') e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Home
            </a>

            {/* Services with 4-Column Category Mega Menu */}
            <div 
              ref={servicesDropdownRef}
              style={{ position: 'relative' }}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button 
                type="button"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                style={{
                  color: isServicesDropdownOpen ? '#D97706' : '#475569',
                  backgroundColor: isServicesDropdownOpen ? '#FFFBEB' : 'transparent',
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                Services
                <ChevronDown 
                  size={14} 
                  style={{ 
                    transition: 'transform 0.2s', 
                    transform: isServicesDropdownOpen ? 'rotate(180deg)' : 'none',
                    color: isServicesDropdownOpen ? '#D97706' : '#64748B'
                  }} 
                />
              </button>

              {/* Mega Menu Category Card */}
              {isServicesDropdownOpen && (
                <div 
                  style={{
                    position: 'fixed',
                    top: '76px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '980px',
                    maxWidth: 'calc(100vw - 40px)',
                    zIndex: 1200,
                    paddingTop: '8px',
                    animation: 'fadeInMenu 0.2s ease forwards'
                  }}
                >
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: '24px',
                      boxShadow: '0 25px 60px -15px rgba(10, 43, 94, 0.18), 0 0 0 1px rgba(0,0,0,0.03)',
                      padding: '28px 32px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '28px'
                    }}
                  >
                    {serviceColumns.map((col, idx) => (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                        {/* Top Category */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <col.top.icon size={17} color="#0A2B5E" style={{ flexShrink: 0 }} />
                            <h4 style={{ margin: 0, fontSize: '14.5px', fontWeight: 800, color: '#0A2B5E', letterSpacing: '-0.2px' }}>
                              {col.top.title}
                            </h4>
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {col.top.items.map((item, iIdx) => (
                              <li key={iIdx}>
                                <a
                                  href="/#services"
                                  onClick={(e) => handleServiceItemClick(item, e)}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '13px',
                                    color: '#475569',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    transition: 'all 0.15s ease'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#D97706';
                                    e.currentTarget.style.transform = 'translateX(2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#475569';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                  }}
                                >
                                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F97316', flexShrink: 0 }}></span>
                                  <span>{item}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div style={{ height: '1px', background: '#F1F5F9' }}></div>

                        {/* Bottom Category */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <col.bottom.icon size={17} color="#0A2B5E" style={{ flexShrink: 0 }} />
                            <h4 style={{ margin: 0, fontSize: '14.5px', fontWeight: 800, color: '#0A2B5E', letterSpacing: '-0.2px' }}>
                              {col.bottom.title}
                            </h4>
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {col.bottom.items.map((item, iIdx) => (
                              <li key={iIdx}>
                                <a
                                  href="/#services"
                                  onClick={(e) => handleServiceItemClick(item, e)}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '13px',
                                    color: '#475569',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    transition: 'all 0.15s ease'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#D97706';
                                    e.currentTarget.style.transform = 'translateX(2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#475569';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                  }}
                                >
                                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F97316', flexShrink: 0 }}></span>
                                  <span>{item}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products & API */}
            <a 
              href="/solutions" 
              onClick={(e) => handleNavClick('solutions', e)}
              style={{
                color: activeSegment === 'solutions' ? '#0A2B5E' : '#475569',
                backgroundColor: activeSegment === 'solutions' ? '#EEF4FF' : 'transparent',
                fontWeight: activeSegment === 'solutions' ? 700 : 600,
                fontSize: '14px',
                padding: '8px 14px',
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                if (activeSegment !== 'solutions') e.currentTarget.style.backgroundColor = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                if (activeSegment !== 'solutions') e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Products & API
            </a>

            {/* Income Calculator */}
            <a 
              href="/income-calculator" 
              onClick={(e) => handleNavClick('income-calculator', e)}
              style={{
                color: activeSegment === 'income-calculator' ? '#0A2B5E' : '#475569',
                backgroundColor: activeSegment === 'income-calculator' ? '#EEF4FF' : 'transparent',
                fontWeight: activeSegment === 'income-calculator' ? 700 : 600,
                fontSize: '14px',
                padding: '8px 14px',
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                if (activeSegment !== 'income-calculator') e.currentTarget.style.backgroundColor = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                if (activeSegment !== 'income-calculator') e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Income Calculator
            </a>

            {/* Company Mega Dropdown */}
            <div 
              ref={companyDropdownRef}
              style={{ position: 'relative' }}
              onMouseEnter={() => setIsCompanyDropdownOpen(true)}
              onMouseLeave={() => setIsCompanyDropdownOpen(false)}
            >
              <button 
                type="button"
                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                style={{
                  color: isCompanyActive ? '#0A2B5E' : '#475569',
                  backgroundColor: isCompanyActive ? '#EEF4FF' : (isCompanyDropdownOpen ? '#f8fafc' : 'transparent'),
                  fontWeight: isCompanyActive ? 700 : 600,
                  fontSize: '14px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                Company
                <ChevronDown 
                  size={14} 
                  style={{ 
                    transition: 'transform 0.2s', 
                    transform: isCompanyDropdownOpen ? 'rotate(180deg)' : 'none' 
                  }} 
                />
              </button>

              {isCompanyDropdownOpen && (
                <div 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '8px',
                    zIndex: 1100
                  }}
                >
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '16px',
                      boxShadow: '0 20px 40px -15px rgba(10, 43, 94, 0.15), 0 0 0 1px rgba(0,0,0,0.03)',
                      padding: '12px',
                      width: '320px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    {/* Legal Documents */}
                    <a
                      href="/case-studies"
                      onClick={(e) => handleNavClick('case-studies', e)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        background: activeSegment === 'case-studies' ? '#EEF4FF' : 'transparent',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeSegment === 'case-studies' ? '#EEF4FF' : 'transparent'}
                    >
                      <div style={{ background: '#E0F2FE', color: '#0284C7', padding: '8px', borderRadius: '8px', display: 'flex' }}>
                        <FileCheck2 size={18} />
                      </div>
                      <div>
                        <div style={{ color: '#0A2B5E', fontWeight: 700, fontSize: '13.5px' }}>Legal Documents</div>
                        <div style={{ color: '#64748B', fontSize: '11.5px', marginTop: '2px' }}>ISO 9001:2015, MCA, GSTIN & MSME</div>
                      </div>
                    </a>

                    {/* Directors & Staff */}
                    <a
                      href="/corporate"
                      onClick={(e) => handleNavClick('corporate', e)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        background: activeSegment === 'corporate' ? '#EEF4FF' : 'transparent',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeSegment === 'corporate' ? '#EEF4FF' : 'transparent'}
                    >
                      <div style={{ background: '#FEF3C7', color: '#D97706', padding: '8px', borderRadius: '8px', display: 'flex' }}>
                        <Users size={18} />
                      </div>
                      <div>
                        <div style={{ color: '#0A2B5E', fontWeight: 700, fontSize: '13.5px' }}>Directors & Staff</div>
                        <div style={{ color: '#64748B', fontSize: '11.5px', marginTop: '2px' }}>Board of Directors & Key Management</div>
                      </div>
                    </a>

                    {/* Gallery & Events */}
                    <a
                      href="/media-listing"
                      onClick={(e) => handleNavClick('media', e)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        background: activeSegment === 'media' ? '#EEF4FF' : 'transparent',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeSegment === 'media' ? '#EEF4FF' : 'transparent'}
                    >
                      <div style={{ background: '#FCE7F3', color: '#DB2777', padding: '8px', borderRadius: '8px', display: 'flex' }}>
                        <Image size={18} />
                      </div>
                      <div>
                        <div style={{ color: '#0A2B5E', fontWeight: 700, fontSize: '13.5px' }}>Gallery & Events</div>
                        <div style={{ color: '#64748B', fontSize: '11.5px', marginTop: '2px' }}>Office Celebrations & Fintech Summits</div>
                      </div>
                    </a>

                    {/* About Us */}
                    <a
                      href="/about-us"
                      onClick={(e) => handleNavClick('about-us', e)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        background: activeSegment === 'about-us' ? '#EEF4FF' : 'transparent',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeSegment === 'about-us' ? '#EEF4FF' : 'transparent'}
                    >
                      <div style={{ background: '#DCFCE7', color: '#16A34A', padding: '8px', borderRadius: '8px', display: 'flex' }}>
                        <Info size={18} />
                      </div>
                      <div>
                        <div style={{ color: '#0A2B5E', fontWeight: 700, fontSize: '13.5px' }}>About Us</div>
                        <div style={{ color: '#64748B', fontSize: '11.5px', marginTop: '2px' }}>Our Mission, Vision & Core Values</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Desktop Right Action Buttons (Adhikari Registration & Login) */}
          <div 
            className="desktop-nav-only" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              flexShrink: 0
            }}
          >
            {/* Adhikari Registration CTA */}
            <button
              type="button"
              onClick={handleRegisterClick}
              style={{
                background: 'linear-gradient(135deg, #D9940A 0%, #B87B00 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '9px 18px',
                borderRadius: '100px',
                fontWeight: 700,
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(217, 148, 10, 0.28)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.2px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(217, 148, 10, 0.38)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(217, 148, 10, 0.28)';
              }}
            >
              <UserPlus size={15} /> Adhikari Registration
            </button>

            {/* Adhikari Login */}
            <div ref={loginDropdownRef} style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                style={{
                  background: '#0A2B5E',
                  color: '#ffffff',
                  border: 'none',
                  padding: '9px 18px',
                  borderRadius: '100px',
                  fontWeight: 700,
                  fontSize: '13px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(10, 43, 94, 0.22)',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.2px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.backgroundColor = '#0d387a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#0A2B5E';
                }}
              >
                <LogIn size={15} /> Adhikari Login 
                <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: isLoginDropdownOpen ? 'rotate(180deg)' : 'none' }} />
              </button>

              {isLoginDropdownOpen && (
                <div 
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    boxShadow: '0 16px 36px rgba(10, 43, 94, 0.16)',
                    minWidth: '210px',
                    zIndex: 1100,
                    padding: '8px'
                  }}
                >
                  <a 
                    href="https://www.meradigitalpay.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      color: '#0A2B5E',
                      fontWeight: 700,
                      fontSize: '13.5px',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span>Retailer Portal Login</span>
                    <ArrowUpRight size={14} color="#64748B" />
                  </a>
                  <a 
                    href="https://www.meradigitalpay.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      color: '#0A2B5E',
                      fontWeight: 700,
                      fontSize: '13.5px',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span>Distributor Portal Login</span>
                    <ArrowUpRight size={14} color="#64748B" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            type="button"
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            {isMobileMenuOpen ? <X size={28} color="#0A2B5E" /> : <Menu size={28} color="#0A2B5E" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-drawer-backdrop" 
            onClick={() => setIsMobileMenuOpen(false)} 
            style={{ 
              position: 'fixed', 
              inset: 0, 
              background: 'rgba(0,0,0,0.6)', 
              zIndex: 9999 
            }}
          >
            <div 
              className="mobile-drawer-panel" 
              onClick={(e) => e.stopPropagation()} 
              style={{ 
                position: 'absolute', 
                top: 0, 
                right: 0, 
                bottom: 0, 
                width: '320px', 
                background: '#ffffff', 
                padding: '24px 20px', 
                display: 'flex', 
                flexDirection: 'column', 
                overflowY: 'auto',
                boxShadow: '-4px 0 24px rgba(0,0,0,0.2)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <img src={logoImg} alt="Mera Digital Pay" style={{ maxHeight: '44px', width: 'auto' }} />
                <button 
                  type="button" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  style={{ 
                    background: '#f1f5f9', 
                    border: 'none', 
                    borderRadius: '50%', 
                    width: '34px', 
                    height: '34px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer' 
                  }}
                >
                  <X size={20} color="#0A2B5E" />
                </button>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <button 
                  type="button" 
                  onClick={handleRegisterClick}
                  style={{
                    background: 'linear-gradient(135deg, #D9940A 0%, #B87B00 100%)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <UserPlus size={16} /> Adhikari Registration
                </button>
                <a 
                  href="https://www.meradigitalpay.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    background: '#0A2B5E',
                    color: '#ffffff',
                    padding: '12px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <LogIn size={16} /> Adhikari Login
                </a>
              </div>

              {/* Navigation Items */}
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                Main Navigation
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>
                  <a 
                    href="/" 
                    onClick={(e) => handleNavClick('retailer', e)} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '10px 12px', 
                      borderRadius: '8px', 
                      color: activeSegment === 'retailer' ? '#0A2B5E' : '#334155', 
                      background: activeSegment === 'retailer' ? '#EEF4FF' : 'transparent',
                      fontWeight: 700, 
                      fontSize: '14.5px', 
                      textDecoration: 'none' 
                    }}
                  >
                    <Home size={18} color="#0A2B5E" /> Home
                  </a>
                </li>
                
                {/* Services Expandable Accordion in Mobile */}
                <li>
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '10px 12px', 
                      borderRadius: '8px', 
                      color: isMobileServicesOpen ? '#D97706' : '#334155', 
                      background: isMobileServicesOpen ? '#FFFBEB' : 'transparent',
                      fontWeight: 700, 
                      fontSize: '14.5px', 
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Layers size={18} color={isMobileServicesOpen ? "#D97706" : "#0A2B5E"} /> Services
                    </div>
                    <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: isMobileServicesOpen ? 'rotate(180deg)' : 'none' }} />
                  </button>

                  {isMobileServicesOpen && (
                    <div style={{ padding: '8px 0 8px 18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {serviceColumns.map((col, cIdx) => (
                        <div key={cIdx} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: '#0A2B5E', marginBottom: '6px' }}>
                              <col.top.icon size={14} color="#D97706" /> {col.top.title}
                            </div>
                            <ul style={{ listStyle: 'none', padding: '0 0 0 12px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              {col.top.items.map((it, i) => (
                                <li key={i}>
                                  <a 
                                    href="/#services" 
                                    onClick={(e) => handleServiceItemClick(it, e)} 
                                    style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#64748B', textDecoration: 'none' }}
                                  >
                                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#F97316' }}></span>
                                    {it}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: '#0A2B5E', marginBottom: '6px' }}>
                              <col.bottom.icon size={14} color="#D97706" /> {col.bottom.title}
                            </div>
                            <ul style={{ listStyle: 'none', padding: '0 0 0 12px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              {col.bottom.items.map((it, i) => (
                                <li key={i}>
                                  <a 
                                    href="/#services" 
                                    onClick={(e) => handleServiceItemClick(it, e)} 
                                    style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#64748B', textDecoration: 'none' }}
                                  >
                                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#F97316' }}></span>
                                    {it}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </li>

                <li>
                  <a 
                    href="/solutions" 
                    onClick={(e) => handleNavClick('solutions', e)} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '10px 12px', 
                      borderRadius: '8px', 
                      color: activeSegment === 'solutions' ? '#0A2B5E' : '#334155', 
                      background: activeSegment === 'solutions' ? '#EEF4FF' : 'transparent',
                      fontWeight: 700, 
                      fontSize: '14.5px', 
                      textDecoration: 'none' 
                    }}
                  >
                    <ShieldCheck size={18} color="#0A2B5E" /> Products & API
                  </a>
                </li>
                <li>
                  <a 
                    href="/income-calculator" 
                    onClick={(e) => handleNavClick('income-calculator', e)} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '10px 12px', 
                      borderRadius: '8px', 
                      color: activeSegment === 'income-calculator' ? '#0A2B5E' : '#334155', 
                      background: activeSegment === 'income-calculator' ? '#EEF4FF' : 'transparent',
                      fontWeight: 700, 
                      fontSize: '14.5px', 
                      textDecoration: 'none' 
                    }}
                  >
                    <Calculator size={18} color="#0A2B5E" /> Income Calculator
                  </a>
                </li>
              </ul>

              <div style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.8px', margin: '20px 0 8px' }}>
                Company & Compliance
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>
                  <a 
                    href="/case-studies" 
                    onClick={(e) => handleNavClick('case-studies', e)} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '10px 12px', 
                      borderRadius: '8px', 
                      color: activeSegment === 'case-studies' ? '#0A2B5E' : '#334155', 
                      background: activeSegment === 'case-studies' ? '#EEF4FF' : 'transparent',
                      fontWeight: 600, 
                      fontSize: '14px', 
                      textDecoration: 'none' 
                    }}
                  >
                    <FileCheck2 size={18} color="#0284C7" /> Legal Documents
                  </a>
                </li>
                <li>
                  <a 
                    href="/corporate" 
                    onClick={(e) => handleNavClick('corporate', e)} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '10px 12px', 
                      borderRadius: '8px', 
                      color: activeSegment === 'corporate' ? '#0A2B5E' : '#334155', 
                      background: activeSegment === 'corporate' ? '#EEF4FF' : 'transparent',
                      fontWeight: 600, 
                      fontSize: '14px', 
                      textDecoration: 'none' 
                    }}
                  >
                    <Users size={18} color="#D97706" /> Directors & Staff
                  </a>
                </li>
                <li>
                  <a 
                    href="/media-listing" 
                    onClick={(e) => handleNavClick('media', e)} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '10px 12px', 
                      borderRadius: '8px', 
                      color: activeSegment === 'media' ? '#0A2B5E' : '#334155', 
                      background: activeSegment === 'media' ? '#EEF4FF' : 'transparent',
                      fontWeight: 600, 
                      fontSize: '14px', 
                      textDecoration: 'none' 
                    }}
                  >
                    <Image size={18} color="#DB2777" /> Gallery & Events
                  </a>
                </li>
                <li>
                  <a 
                    href="/about-us" 
                    onClick={(e) => handleNavClick('about-us', e)} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '10px 12px', 
                      borderRadius: '8px', 
                      color: activeSegment === 'about-us' ? '#0A2B5E' : '#334155', 
                      background: activeSegment === 'about-us' ? '#EEF4FF' : 'transparent',
                      fontWeight: 600, 
                      fontSize: '14px', 
                      textDecoration: 'none' 
                    }}
                  >
                    <Info size={18} color="#16A34A" /> About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

      </header>
    </>
  );
}
