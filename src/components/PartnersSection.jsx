import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
  { id: 1, name: 'NPCI', logo: 'https://paynearby.in/wp-content/uploads-efs/2022/02/NPCI.png' },
  { id: 2, name: 'Bharat Connect', logo: 'https://paynearby.in/wp-content/uploads-efs/2025/05/Bharat-Connect-Primary-Logo_PNG.png' },
  { id: 3, name: 'Axis Bank', logo: 'https://paynearby.in/wp-content/uploads-efs/2022/02/Axis-Bank.png' },
  { id: 4, name: 'Suryoday Small Finance Bank', logo: 'https://paynearby.in/wp-content/uploads-efs/2024/05/Suryoday-Logo-Blue-White_08-12-23_1.jpg' },
  { id: 5, name: 'IndusInd Bank', logo: 'https://paynearby.in/wp-content/uploads-efs/2022/02/Indusind-Bank.png' },
  { id: 6, name: 'Unity Small Finance Bank', logo: 'https://paynearby.in/wp-content/uploads-efs/2023/04/Unity-small-finance-bank.png' },
  { id: 7, name: 'Yes Bank', logo: 'https://paynearby.in/wp-content/uploads-efs/2023/05/logo-yes-bank.png' },
  { id: 8, name: 'RBL Bank', logo: 'https://paynearby.in/wp-content/uploads-efs/2022/02/RBL-Bank.png' },
  { id: 9, name: 'SBM Bank', logo: 'https://paynearby.in/wp-content/uploads-efs/2023/03/SBM-Logo_PNG.png' },
  { id: 10, name: 'BCFI', logo: 'https://paynearby.in/wp-content/uploads-efs/2022/02/BCFI-logo-01.png' },
  { id: 11, name: 'Coverstack', logo: 'https://paynearby.in/wp-content/uploads-efs/2025/11/Coverstack-logo.png' },
  { id: 12, name: 'TSSC', logo: 'https://paynearby.in/wp-content/uploads-efs/2022/02/TSSC_Logo.png' },
  { id: 13, name: 'T-Hub', logo: 'https://paynearby.in/wp-content/uploads-efs/2022/02/T-Hub.png' },
  { id: 14, name: 'YES FINTECH', logo: 'https://paynearby.in/wp-content/uploads-efs/2022/02/yes-fintech.png' }
];

export default function PartnersSection() {
  const [phone, setPhone] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const handleGetLink = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      setStatusMsg(`App download link has been sent to +91 ${phone}`);
      setPhone('');
    } else {
      setStatusMsg('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <section className="our-partner-wraper bgcolor--white" id="partners">
      <div className="container--responsive">
        <div className="center-content">
          <h3 className="section-title-dashed">Our Partners</h3>
        </div>

        {/* Seamless Smooth Partner Marquee Slider */}
        <div className="partner-marquee-container">
          <div className="partner-marquee-track">
            {/* First Set of Logos */}
            {partners.map((p) => (
              <div key={`p1-${p.id}`} className="partner-logo-card" title={p.name}>
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  onError={(e) => { e.target.style.opacity = '0.5'; }}
                />
              </div>
            ))}
            {/* Duplicate Set for Infinite Continuous Loop */}
            {partners.map((p) => (
              <div key={`p2-${p.id}`} className="partner-logo-card" title={p.name}>
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  onError={(e) => { e.target.style.opacity = '0.5'; }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Download App Section */}
        <div className="download-app-wraper" id="contact-us">
          <div className="app-wraper">
            <div className="content-wraper">
              <h3 className="section-title-dashed margin--b30">Download Mera Digital Pay now</h3>
              <p className="body-content">
                Use Mera Digital Pay app & take charge of all your transactions to grow your business
              </p>
              <div className="email-wrap">
                <form id="download-link-form-1" onSubmit={handleGetLink}>
                  <div className="download-input-group">
                    <input
                      type="tel"
                      name="mobile1"
                      className="mobile1"
                      maxLength={10}
                      placeholder="Enter Phone no."
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value.replace(/\D/g, ''));
                        if (statusMsg) setStatusMsg('');
                      }}
                    />
                    <button type="submit" className="btn green" id="retailer-submit">
                      Get app link
                    </button>
                  </div>
                  {statusMsg && (
                    <span 
                      className="sms-result" 
                      style={{ 
                        display: 'block', 
                        marginTop: 12, 
                        color: statusMsg.includes('valid') ? '#d9534f' : '#58b147', 
                        fontWeight: 600,
                        fontSize: '0.95rem'
                      }}
                    >
                      {statusMsg}
                    </span>
                  )}
                </form>
              </div>
            </div>
            <div className="content-wraper download-phone-mockup">
              <img 
                src="https://paynearby.in/wp-content/themes/paynearby/assets/images/download-app.png" 
                alt="Mera Digital Pay App" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
