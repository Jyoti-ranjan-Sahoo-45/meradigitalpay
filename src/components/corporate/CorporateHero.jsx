import React, { useState } from 'react';

export default function CorporateHero({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="top-wrapper corporate-top">
      <div className="container--responsive">
        <div className="top-container">
          <div className="top-content">
            <h2 className="main-header-title">Last Mile Infrastructure for Businesses</h2>
            <p className="body-content">
              Multiple businesses of all sizes- from startups to large enterprises- use India’s largest agent network of 15,00,000 active retailers to scale their business, optimize operational costs and develop new markets. High-end technology simplified for ease of use.
            </p>
            
            <div className="top-interactive mobile">
              <video width="500" height="500" autoPlay muted loop playsInline style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}>
                <source src="https://paynearby.in/wp-content/uploads-efs/2020/11/home-option-text.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="form-wrap">
              <div id="subscribe-sec">
                <form onSubmit={handleSubmit} className="wpcf7-form init">
                  <div className="corporate-input-group">
                    <input
                      type="email"
                      name="your-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Id"
                      required
                      className="wpcf7-form-control wpcf7-text wpcf7-email"
                      id="email"
                    />
                    <button
                      type="submit"
                      className="corporate-submit-btn btn green"
                      id="subscription-form"
                    >
                      Get in touch
                    </button>
                  </div>
                </form>
                {submitted && (
                  <p style={{ color: '#58b147', fontWeight: 600, marginTop: '12px', fontSize: '14px' }}>
                    ✓ Thank you! Our corporate solution experts will reach out shortly.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="top-interactive desktop">
            <video width="500" height="500" autoPlay muted loop playsInline className="desktop" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <source src="https://paynearby.in/wp-content/uploads-efs/2020/11/home-option-text.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
