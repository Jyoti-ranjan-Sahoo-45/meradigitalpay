import React, { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    identity: '',
    remark: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [smsMobile, setSmsMobile] = useState('');
  const [smsSuccess, setSmsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleSmsSubmit = (e) => {
    e.preventDefault();
    if (smsMobile.length === 10) {
      setSmsSuccess(true);
    }
  };

  return (
    <main className="contact-us-page-main">
      {/* Breadcrumbs */}
      <div id="breadcrumbs" className="breadcrumbs-wrapper bgcolor--white">
        <div className="container--responsive">
          <ul className="breadcrumbs-container" style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: '16px 0', margin: 0, fontSize: '14px', color: '#64748b' }}>
            <li className="item-home">
              <a className="bread-link bread-home set-retailer" href="/" style={{ color: '#0c4696', textDecoration: 'none' }}>
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

      {/* Top Contact Hero Banner */}
      <section className="top-wrapper contact-us" style={{ background: '#ffffff', padding: '40px 0 60px' }}>
        <div className="container--responsive">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div className="top-content">
              <h1 className="main-header-title" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '46px', fontWeight: 800, color: '#0c4696', lineHeight: 1.18, marginBottom: '28px' }}>
                Let's connect to create impact
              </h1>
              <div className="content-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0c4696', marginBottom: '8px' }}>
                    Regd. Office
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#4a5568', margin: 0 }}>
                    1AB, Arena House, Road No. 12, MIDC,<br />
                    Andheri (East), Mumbai - 400 093
                  </p>
                </div>

                <div className="contact-details" style={{ background: '#f8fafc', padding: '20px 24px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'inline-flex', flexDirection: 'column', gap: '8px', maxWidth: '340px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 700, color: '#0c4696' }}>
                    <img src="https://paynearby.in/wp-content/themes/paynearby/assets/images/help.svg" alt="Help" style={{ width: '22px', height: '22px' }} />
                    <span>Help &amp; Support</span>
                  </div>
                  <div style={{ paddingLeft: '32px' }}>
                    <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Call Us On</div>
                    <a href="tel:+919987401010" style={{ fontSize: '18px', fontWeight: 800, color: '#58b147', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <img src="https://paynearby.in/wp-content/themes/paynearby/assets/images/call.svg" alt="Call" style={{ width: '16px', height: '16px' }} />
                      +91 9987401010
                    </a>
                  </div>
                </div>

                <ul className="social-links" style={{ display: 'flex', gap: '14px', listStyle: 'none', padding: 0, margin: '8px 0 0' }}>
                  {[
                    { href: 'https://www.facebook.com/Mera Digital Pay/', label: 'Facebook', bg: '#1877f2', icon: 'f' },
                    { href: 'https://twitter.com/Mera Digital Pay', label: 'Twitter', bg: '#1da1f2', icon: '𝕏' },
                    { href: 'https://www.linkedin.com/company/paynearby/', label: 'LinkedIn', bg: '#0077b5', icon: 'in' },
                    { href: 'https://www.youtube.com/channel/UCeDgW7EHzudCa2IEudgykNA', label: 'YouTube', bg: '#ff0000', icon: '▶' }
                  ].map((s, i) => (
                    <li key={i}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: s.bg,
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          fontWeight: 'bold',
                          fontSize: '15px'
                        }}
                      >
                        {s.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="top-interactive" style={{ textAlign: 'center' }}>
              <img
                src="https://paynearby.in/wp-content/uploads-efs/2020/11/contact-us-img.png"
                alt="Contact Mera Digital Pay"
                style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security & Official Numbers Alert */}
      <section className="bgcolor--white" style={{ padding: '0 0 50px', background: '#ffffff' }}>
        <div className="container--responsive">
          <div
            className="contact-banner-wrap"
            style={{
              background: '#f0fdf4',
              borderRadius: '20px',
              border: '1px solid #bbf7d0',
              padding: '36px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '30px',
              alignItems: 'center',
              boxShadow: '0 8px 30px rgba(88, 177, 71, 0.08)'
            }}
          >
            <div className="contact-banner-content">
              <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '24px', fontWeight: 800, color: '#166534', marginBottom: '12px' }}>
                Stay Alert. Protect Yourself from Unknown Calls.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#15803d', marginBottom: '20px' }}>
                Mera Digital Pay will only connect with you through our official numbers. Do not trust or respond to any other numbers.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: '#14532d' }}>
                <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                  <strong>Customer Care (You call us):</strong>
                  <a href="tel:+919987401010" style={{ color: '#0c4696', fontWeight: 700, textDecoration: 'none' }}>+91 99874 01010</a>
                </li>
                <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                  <strong>Support &amp; Service (We call you):</strong>
                  <a href="tel:+911600318017" style={{ color: '#0c4696', fontWeight: 700, textDecoration: 'none' }}>+91 1600 318 017</a>
                  <span>|</span>
                  <a href="tel:+911600310638" style={{ color: '#0c4696', fontWeight: 700, textDecoration: 'none' }}>+91 16003 10638</a>
                </li>
                <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                  <strong>Marketing &amp; Offers (We call you):</strong>
                  <a href="tel:+911409240019" style={{ color: '#0c4696', fontWeight: 700, textDecoration: 'none' }}>+91 14092 40019</a>
                  <span>|</span>
                  <a href="tel:+911409338915" style={{ color: '#0c4696', fontWeight: 700, textDecoration: 'none' }}>+91 14093 38915</a>
                </li>
              </ul>
              <div style={{ fontSize: '13.5px', background: '#dcfce7', padding: '10px 16px', borderRadius: '8px', color: '#166534', fontWeight: 600 }}>
                ⚠️ Do not share your Password / OTP / Account details with anyone. Mera Digital Pay team will never ask for this.
              </div>
            </div>
            <img
              src="https://paynearby.in/wp-content/themes/paynearby/assets/images/contact-top-icon.png"
              alt="Shield"
              style={{ width: '120px', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Join Mera Digital Pay Interactive Form */}
      <section className="inquery-wraper bgcolor--white" style={{ background: '#f8fafc', padding: '70px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container--responsive">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2
              className="section-title-dashed"
              style={{
                fontFamily: "'Cera Pro', sans-serif",
                fontSize: '34px',
                fontWeight: 800,
                color: '#0c4696',
                marginBottom: '36px',
                position: 'relative',
                paddingBottom: '16px'
              }}
            >
              Join Mera Digital Pay
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60px', height: '4px', background: '#58b147', borderRadius: '2px' }} />
            </h2>

            {isSubmitted ? (
              <div style={{ background: '#ffffff', padding: '40px', borderRadius: '16px', border: '2px solid #58b147', textAlign: 'center', boxShadow: '0 8px 30px rgba(88, 177, 71, 0.1)' }}>
                <div style={{ width: '64px', height: '64px', background: '#eef8eb', borderRadius: '50%', color: '#58b147', fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '24px', fontWeight: 800, color: '#0c4696', marginBottom: '8px' }}>
                  Thank You, {formData.name}!
                </h3>
                <p style={{ fontSize: '16px', color: '#4a5568', margin: '0 0 24px' }}>
                  Your inquiry has been received. Our support team will reach out to you shortly at {formData.mobile}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', mobile: '', identity: '', remark: '' });
                  }}
                  style={{ padding: '10px 24px', borderRadius: '8px', background: '#0c4696', color: '#ffffff', fontWeight: 700, border: 'none', cursor: 'pointer' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: '#ffffff', padding: '36px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 6px 24px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0c4696', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0c4696', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0c4696', marginBottom: '6px' }}>
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength="10"
                      placeholder="10-digit Mobile"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0c4696', marginBottom: '6px' }}>
                      Your Identity *
                    </label>
                    <select
                      required
                      value={formData.identity}
                      onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', background: '#ffffff', boxSizing: 'border-box' }}
                    >
                      <option value="">Select Identity</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Alliance">Alliance</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0c4696', marginBottom: '6px' }}>
                    Remarks / Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your requirements..."
                    value={formData.remark}
                    onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '14px 32px',
                    borderRadius: '8px',
                    background: '#58b147',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    boxShadow: '0 4px 14px rgba(88, 177, 71, 0.3)'
                  }}
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Download Our Apps Section */}
      <section className="download-wraper" style={{ background: '#ffffff', padding: '70px 0' }}>
        <div className="container--responsive">
          <h2
            className="section-title-dashed"
            style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '34px',
              fontWeight: 800,
              color: '#0c4696',
              marginBottom: '40px',
              position: 'relative',
              paddingBottom: '16px'
            }}
          >
            Download Our Apps
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60px', height: '4px', background: '#58b147', borderRadius: '2px' }} />
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '36px 30px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '24px', fontWeight: 800, color: '#0c4696', marginBottom: '12px' }}>
                Mera Digital App
              </h3>
              <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#4a5568', flex: '1', marginBottom: '24px' }}>
                Become a Mera Digital Pay powered retailer &amp; earn extra income by offering digital banking and financial services at your retail store. Download the app now!
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.bnb.paynearby&hl=en" target="_blank" rel="noopener noreferrer">
                <img src="https://paynearby.in/wp-content/themes/paynearby/assets/images/google-play.png" alt="Google Play Store" style={{ height: '52px', objectFit: 'contain' }} />
              </a>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '36px 30px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '24px', fontWeight: 800, color: '#0c4696', marginBottom: '12px' }}>
                Digital Naari App
              </h3>
              <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#4a5568', flex: '1', marginBottom: '24px' }}>
                Digital Naari is a women-led platform by Mera Digital Pay that helps you become a 'banker didi' in your area. With just your smartphone, you can offer essential banking, financial, health, hygiene, and digital services to your community — Download the app now!
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.bnb.paynearby.swanari" target="_blank" rel="noopener noreferrer">
                <img src="https://paynearby.in/wp-content/themes/paynearby/assets/images/google-play.png" alt="Google Play Store" style={{ height: '52px', objectFit: 'contain' }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SMS Download App Link Section */}
      <section className="our-partner-wraper bgcolor--white" style={{ background: '#f4f8fc', padding: '60px 0' }}>
        <div className="container--responsive">
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '48px', border: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center', boxShadow: '0 8px 30px rgba(12, 70, 150, 0.06)' }}>
            <div>
              <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '32px', fontWeight: 800, color: '#0c4696', marginBottom: '12px' }}>
                Download Mera Digital Pay now
              </h3>
              <p style={{ fontSize: '16px', color: '#4a5568', marginBottom: '24px' }}>
                Use Mera Digital App &amp; take charge of all your transactions to grow your business
              </p>
              <form onSubmit={handleSmsSubmit} style={{ display: 'flex', gap: '12px', maxWidth: '440px' }}>
                <input
                  type="tel"
                  maxLength="10"
                  placeholder="Enter Phone no."
                  value={smsMobile}
                  onChange={(e) => setSmsMobile(e.target.value)}
                  style={{ flex: '1', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none' }}
                />
                <button
                  type="submit"
                  style={{ padding: '14px 24px', borderRadius: '8px', background: '#58b147', color: '#ffffff', fontWeight: 700, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  Get app link
                </button>
              </form>
              {smsSuccess && (
                <div style={{ marginTop: '12px', fontSize: '14px', color: '#15803d', fontWeight: 600 }}>
                  ✓ App download link sent successfully to your number!
                </div>
              )}
            </div>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://paynearby.in/wp-content/themes/paynearby/assets/images/download-app.png"
                alt="Download Mera Digital App"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
