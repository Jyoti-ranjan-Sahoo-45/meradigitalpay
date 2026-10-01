import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Shield, 
  Send, 
  Star, 
  CheckCircle2, 
  Smartphone, 
  Clock, 
  Building2, 
  HelpCircle,
  X,
  RefreshCw
} from 'lucide-react';
import contactVideo from '../assets/contact-hero-video.mp4';

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi NCR', 'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh'
];

const serviceQueryTypes = [
  'AEPS & Micro ATM Services',
  'Domestic Money Transfer (DMT)',
  'BBPS & Electricity Bill Payments',
  'Mobile & DTH Recharge',
  'NSDL & Kotak Biometric Account Opening',
  'UPI Cash & QR Soundbox',
  'Distributor / Super Distributor Inquiry',
  'Retailer Partnership Registration',
  'Corporate & B2B API Integration',
  'PAN Card (UTI & NSDL) Service',
  'Insurance & Loan Services',
  'IRCTC & Travel Ticket Booking',
  'Technical Support & Issue Escalation',
  'Other General Query'
];

export default function ContactUsPage() {
  // Service Rating State
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingComment, setRatingComment] = useState('');
  const [ratingContact, setRatingContact] = useState('');
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [ratingError, setRatingError] = useState('');

  // Send Query State
  const [queryForm, setQueryForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    state: '',
    city: '',
    service: '',
    message: ''
  });
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpValue, setOtpValue] = useState(['', '', '', '']);
  const [otpTimer, setOtpTimer] = useState(45);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [queryError, setQueryError] = useState('');

  // SMS App State
  const [smsPhone, setSmsPhone] = useState('');
  const [smsSuccess, setSmsSuccess] = useState(false);

  // OTP countdown effect
  useEffect(() => {
    let interval = null;
    if (showOtpModal && otpTimer > 0 && !isOtpVerified) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showOtpModal, otpTimer, isOtpVerified]);

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setRatingError('Please select a star rating.');
      return;
    }
    if (!ratingContact || ratingContact.length < 10) {
      setRatingError('Please enter a valid 10-digit contact number.');
      return;
    }
    setRatingError('');
    setRatingSubmitted(true);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    if (!queryForm.name || !queryForm.email || !queryForm.whatsapp || !queryForm.state || !queryForm.service) {
      setQueryError('Please fill in all required fields.');
      return;
    }
    if (queryForm.whatsapp.length < 10) {
      setQueryError('Please enter a valid 10-digit WhatsApp number.');
      return;
    }
    setQueryError('');
    setOtpTimer(45);
    setOtpValue(['', '', '', '']);
    setShowOtpModal(true);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otpValue];
    newOtp[index] = value;
    setOtpValue(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpValue[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyOtp = () => {
    const entered = otpValue.join('');
    if (entered.length < 4) {
      alert('Please enter complete 4-digit OTP.');
      return;
    }
    setIsOtpVerified(true);
  };

  const handleSmsSubmit = (e) => {
    e.preventDefault();
    if (smsPhone.length === 10) {
      setSmsSuccess(true);
      setTimeout(() => setSmsSuccess(false), 5000);
      setSmsPhone('');
    }
  };

  return (
    <main className="contact-us-page-main">
      {/* 1. Breadcrumbs */}
      <div id="breadcrumbs" className="breadcrumbs-wrapper bgcolor--white">
        <div className="container--responsive">
          <ul className="breadcrumbs-container" style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: '16px 0', margin: 0, fontSize: '14px', color: '#64748b' }}>
            <li className="item-home">
              <a className="bread-link bread-home set-retailer" href="/" style={{ color: '#0c4696', textDecoration: 'none', fontWeight: 600 }}>
                Home
              </a>
            </li>
            <li className="separator separator-home">::</li>
            <li className="item-current item-contact">
              <span className="bread-current" style={{ fontWeight: 600, color: '#1e293b' }}>
                Contact Us
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 2. Top Contact Hero Section with Video */}
      <section className="contact-hero-section" style={{ background: '#ffffff', padding: '40px 0 60px' }}>
        <div className="container--responsive">
          <div className="contact-hero-grid">
            
            {/* Left Content */}
            <div className="contact-hero-content">
              <div className="contact-hero-pill">
                <MessageCircle size={15} color="#58b147" />
                <span>24/7 Fast Support Response</span>
              </div>
              <h1 className="contact-hero-title">
                Let's connect to <span style={{ color: '#58b147' }}>create impact</span>
              </h1>
              <p className="contact-hero-subtitle">
                Have questions about partnering with Mera Digital Pay, scaling your retail store, or integrating our B2B FinTech APIs? We are here to help you every step of the way.
              </p>

              <div className="contact-hero-cards">
                {/* Head Office Card */}
                <div className="contact-office-card">
                  <div className="contact-office-icon">
                    <Building2 size={20} color="#0c4696" />
                  </div>
                  <div>
                    <h4>Head &amp; Corporate Office</h4>
                    <p>Office No. 82, Aonla, Bareilly, UP - 243301</p>
                    <p style={{ marginTop: '4px', color: '#64748b', fontSize: '13.5px' }}>Branch: 1/2, Ekta Nagar, Bareilly, UP - 243122</p>
                  </div>
                </div>

                {/* Direct Helplines */}
                <div className="contact-helpline-row">
                  <a href="tel:+917088898725" className="contact-quick-badge call-badge">
                    <Phone size={18} />
                    <div>
                      <span className="badge-label">Call Support</span>
                      <strong className="badge-val">+91 7088898725</strong>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/919675695450?text=Hello%20Mera%20Digital%20Pay%20Team,%20I%20have%20an%20inquiry" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-quick-badge wa-badge"
                  >
                    <MessageCircle size={18} />
                    <div>
                      <span className="badge-label">WhatsApp Direct</span>
                      <strong className="badge-val">+91 9675695450</strong>
                    </div>
                  </a>
                </div>

                {/* Social Channels Strip */}
                <div className="contact-social-strip">
                  <span className="contact-social-label">Follow Us:</span>
                  <div className="contact-social-icons">
                    {[
                      { href: 'https://www.youtube.com/@meradigitalaps_official', label: 'YouTube', bg: '#ff0000', icon: '▶' },
                      { href: 'https://www.instagram.com/meradigitalaps_', label: 'Instagram', bg: '#e1306c', icon: '📷' },
                      { href: 'https://www.facebook.com/meradigitalaps', label: 'Facebook', bg: '#1877f2', icon: 'f' },
                      { href: 'https://www.whatsapp.com/channel/0029Vb6Xac9Gk1FmZbg5kD3G', label: 'WhatsApp Channel', bg: '#25d366', icon: '💬' },
                      { href: 'https://t.me/+kuz7ioMUeC1iMjM9', label: 'Telegram Channel', bg: '#0088cc', icon: '✈' },
                      { href: 'https://www.linkedin.com/in/mera-digital-aps-daudega-to-mera-desh-daudega-070b9424a', label: 'LinkedIn', bg: '#0077b5', icon: 'in' },
                      { href: 'https://aratt.ai/@meradigitalapsdaudega', label: 'Aratt.ai', bg: '#4f46e5', icon: '🌐' }
                    ].map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.label}
                        className="contact-social-btn"
                        style={{ backgroundColor: s.bg }}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Right Video Embed */}
            <div className="contact-hero-video-box">
              <div className="contact-video-wrapper">
                <video
                  src={contactVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="contact-showcase-video"
                />
                <div className="contact-video-badge">
                  <Shield size={16} color="#58b147" />
                  <span>Mera Digital Pay Official Helpdesk</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Forms Section: Service Rating & Send Query */}

      {/* 4. Interactive Forms Section: Service Rating & Send Query */}
      <section className="contact-forms-section">
        <div className="container--responsive">
          <div className="contact-forms-header">
            <h2 className="section-title-dashed">
              Get in Touch &amp; Rate Our Service
            </h2>
            <p className="body-content">
              Your feedback fuels our innovation. Send a direct query or rate your experience with Mera Digital Pay.
            </p>
          </div>

          <div className="contact-cards-grid">
            
            {/* ═════════════════════════════════════════════════════════════
                CARD 1: SERVICE RATING
                ═════════════════════════════════════════════════════════════ */}
            <div className="mdp-contact-card rating-card">
              <h3 className="mdp-card-heading">Service Rating</h3>

              {ratingSubmitted ? (
                <div className="rating-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={44} color="#16a34a" />
                  </div>
                  <h4>Thank you for your rating!</h4>
                  <p>Your {rating}-star feedback helps us make Mera Digital Pay better every day.</p>
                  <button 
                    type="button" 
                    className="mdp-reset-btn"
                    onClick={() => {
                      setRatingSubmitted(false);
                      setRating(0);
                      setRatingComment('');
                      setRatingContact('');
                    }}
                  >
                    Rate Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRatingSubmit} className="mdp-card-form">
                  
                  {/* Star Rating Interactive Row */}
                  <div className="stars-interactive-wrap">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-btn ${(hoverRating || rating) >= star ? 'star-active' : ''}`}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                        aria-label={`Rate ${star} star`}
                      >
                        <Star 
                          size={32} 
                          fill={(hoverRating || rating) >= star ? '#f59e0b' : 'none'}
                          color={(hoverRating || rating) >= star ? '#f59e0b' : '#94a3b8'} 
                          strokeWidth={1.8}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Comment Textarea with Character Note */}
                  <div className="mdp-input-group">
                    <textarea
                      rows="4"
                      className="mdp-form-control mdp-textarea"
                      placeholder="Comment"
                      maxLength={150}
                      value={ratingComment}
                      onChange={(e) => setRatingComment(e.target.value)}
                    />
                    <div className="mdp-input-subtext">max 10 to 50 latter</div>
                  </div>

                  {/* Contact Number Input */}
                  <div className="mdp-input-group">
                    <input
                      type="tel"
                      maxLength={10}
                      className="mdp-form-control"
                      placeholder="Contact Number"
                      value={ratingContact}
                      onChange={(e) => setRatingContact(e.target.value.replace(/\D/g, ''))}
                    />
                  </div>

                  {ratingError && (
                    <div className="mdp-form-error">{ratingError}</div>
                  )}

                  {/* Rating Submit Button */}
                  <button type="submit" className="mdp-navy-btn">
                    Rating
                  </button>
                </form>
              )}
            </div>

            {/* ═════════════════════════════════════════════════════════════
                CARD 2: SEND QUERY
                ═════════════════════════════════════════════════════════════ */}
            <div className="mdp-contact-card query-card">
              <h3 className="mdp-card-heading">Send Query</h3>

              <form onSubmit={handleQuerySubmit} className="mdp-card-form">
                
                {/* Your Name */}
                <div className="mdp-input-group">
                  <input
                    type="text"
                    required
                    className="mdp-form-control"
                    placeholder="Your Name"
                    value={queryForm.name}
                    onChange={(e) => setQueryForm({ ...queryForm, name: e.target.value })}
                  />
                </div>

                {/* Your Email */}
                <div className="mdp-input-group">
                  <input
                    type="email"
                    required
                    className="mdp-form-control"
                    placeholder="Your Email"
                    value={queryForm.email}
                    onChange={(e) => setQueryForm({ ...queryForm, email: e.target.value })}
                  />
                </div>

                {/* Your WhatsApp Number */}
                <div className="mdp-input-group">
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    className="mdp-form-control"
                    placeholder="Your WhatsApp Number"
                    value={queryForm.whatsapp}
                    onChange={(e) => setQueryForm({ ...queryForm, whatsapp: e.target.value.replace(/\D/g, '') })}
                  />
                </div>

                {/* Select State and City (Side by Side) */}
                <div className="mdp-row-group">
                  <div className="mdp-input-group flex-1">
                    <select
                      required
                      className="mdp-form-control mdp-select"
                      value={queryForm.state}
                      onChange={(e) => setQueryForm({ ...queryForm, state: e.target.value })}
                    >
                      <option value="">Select State</option>
                      {indianStates.map((st, i) => (
                        <option key={i} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mdp-input-group flex-1">
                    <input
                      type="text"
                      className="mdp-form-control"
                      placeholder="City"
                      value={queryForm.city}
                      onChange={(e) => setQueryForm({ ...queryForm, city: e.target.value })}
                    />
                  </div>
                </div>

                {/* Select Service Query Dropdown */}
                <div className="mdp-input-group">
                  <select
                    required
                    className="mdp-form-control mdp-select"
                    value={queryForm.service}
                    onChange={(e) => setQueryForm({ ...queryForm, service: e.target.value })}
                  >
                    <option value="">Select Service Query</option>
                    {serviceQueryTypes.map((sq, i) => (
                      <option key={i} value={sq}>{sq}</option>
                    ))}
                  </select>
                </div>

                {/* Your Message */}
                <div className="mdp-input-group">
                  <textarea
                    rows="3"
                    className="mdp-form-control mdp-textarea"
                    placeholder="Your Message"
                    value={queryForm.message}
                    onChange={(e) => setQueryForm({ ...queryForm, message: e.target.value })}
                  />
                </div>

                {queryError && (
                  <div className="mdp-form-error">{queryError}</div>
                )}

                {/* Send OTP Button */}
                <button type="submit" className="mdp-navy-btn mdp-send-otp-btn">
                  <Send size={16} />
                  <span>Send OTP</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          OTP VERIFICATION MODAL
          ═════════════════════════════════════════════════════════════ */}
      {showOtpModal && (
        <div className="mdp-modal-overlay">
          <div className="mdp-otp-modal">
            <button 
              type="button" 
              className="mdp-modal-close"
              onClick={() => {
                setShowOtpModal(false);
                setIsOtpVerified(false);
              }}
            >
              <X size={20} />
            </button>

            {isOtpVerified ? (
              <div className="otp-success-view">
                <div className="success-circle">
                  <CheckCircle2 size={50} color="#16a34a" />
                </div>
                <h3>Query Submitted Successfully!</h3>
                <p>
                  Thank you, <strong>{queryForm.name}</strong>! Your inquiry regarding <em>"{queryForm.service}"</em> has been verified and registered. Our support team will reach out to you on <strong>+91 {queryForm.whatsapp}</strong> shortly.
                </p>
                <button 
                  type="button" 
                  className="mdp-navy-btn"
                  onClick={() => {
                    setShowOtpModal(false);
                    setIsOtpVerified(false);
                    setQueryForm({
                      name: '',
                      email: '',
                      whatsapp: '',
                      state: '',
                      city: '',
                      service: '',
                      message: ''
                    });
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="otp-input-view">
                <div className="otp-icon-top">
                  <Smartphone size={32} color="#0c4696" />
                </div>
                <h3>Verify WhatsApp Number</h3>
                <p>
                  We have sent a 4-digit verification code to <strong>+91 {queryForm.whatsapp}</strong>
                </p>

                <div className="otp-boxes-row">
                  {otpValue.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-input-${i}`}
                      type="text"
                      maxLength={1}
                      className="otp-box"
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    />
                  ))}
                </div>

                <div className="otp-resend-row">
                  {otpTimer > 0 ? (
                    <span className="otp-timer-text">
                      Resend code in <strong>00:{otpTimer < 10 ? `0${otpTimer}` : otpTimer}</strong>
                    </span>
                  ) : (
                    <button 
                      type="button" 
                      className="otp-resend-btn"
                      onClick={() => setOtpTimer(45)}
                    >
                      <RefreshCw size={14} /> Resend OTP
                    </button>
                  )}
                </div>

                <button 
                  type="button" 
                  className="mdp-navy-btn" 
                  onClick={handleVerifyOtp}
                >
                  Verify &amp; Submit Query
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </main>
  );
}
