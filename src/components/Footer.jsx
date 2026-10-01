import React from 'react';
import { 
  MapPin, Phone, MessageCircle, Mail, Globe, 
  Send, ShieldCheck, Award, Smartphone, CheckCircle, ArrowRight
} from 'lucide-react';
import logoImg from '../assets/logo.png';
import meraDigitalApsImg from '../assets/brands/mera-digital-aps.jpeg';
import digitalPartnerPayImg from '../assets/brands/digital-partner-pay.jpeg';
import smartEarnPartnerImg from '../assets/brands/smart-earn-partner.jpeg';
import smvdkPartnerImg from '../assets/brands/smvdk-partner.jpeg';

const ourBrands = [
  { name: 'Mera Digital Pay', logo: logoImg, url: 'https://play.google.com/store/apps/details?id=com.aps.partners' },
  { name: 'Mera Digital APS', logo: meraDigitalApsImg, url: 'https://play.google.com/store/apps/details?id=com.aps.partners' },
  { name: 'Digital Partner Pay', logo: digitalPartnerPayImg, url: 'https://play.google.com/store/apps/details?id=com.aps.partners' },
  { name: 'Smart Earn Partner', logo: smartEarnPartnerImg, url: 'https://play.google.com/store/apps/details?id=com.aps.partners' },
  { name: 'SMVDK Partner', logo: smvdkPartnerImg, url: 'https://play.google.com/store/apps/details?id=com.aps.partners' }
];

export default function Footer({ onSelectSegment }) {
  const handlePolicyClick = (policyId, e) => {
    e.preventDefault();
    if (onSelectSegment) {
      onSelectSegment(policyId);
    }
  };

  return (
    <footer id="colophon" className="mdp-footer-root" role="contentinfo">
      {/* 1. OUR BRANDS STRIP */}
      <div className="mdp-footer-brands-bar">
        <div className="mdp-container">
          <div className="mdp-brands-inner">
            <span className="mdp-brands-title">OUR BRANDS</span>
            <div className="mdp-brands-list">
              {ourBrands.map((brand, idx) => (
                <a 
                  key={idx} 
                  href={brand.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mdp-brand-badge"
                  title={brand.name}
                >
                  <img src={brand.logo} alt={brand.name} />
                  <span className="mdp-brand-badge-name">{brand.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT GRID */}
      <div className="mdp-container mdp-footer-main">
        <div className="mdp-footer-grid">
          
          {/* COLUMN 1: Logo, Offices, Follow Us, Download App */}
          <div className="mdp-col mdp-col-about">
            <div className="mdp-logo-box">
              <img src={logoImg} alt="Mera Digital Pay" className="mdp-logo-img" />
              <p className="mdp-logo-tagline">
                India's trusted B2B Fintech platform — AEPS, Banking, Recharge &amp; more digital services.
              </p>
            </div>

            <div className="mdp-office-box">
              <h5 className="mdp-subheading-orange">HEAD OFFICE</h5>
              <p className="mdp-address-line">
                <MapPin size={14} className="mdp-icon-orange" />
                <span>Office No. 82, Aonla, Bareilly, UP - 243301</span>
              </p>
            </div>

            <div className="mdp-office-box">
              <h5 className="mdp-subheading-orange">BRANCH OFFICE</h5>
              <p className="mdp-address-line">
                <MapPin size={14} className="mdp-icon-orange" />
                <span>1/2, Ekta Nagar, Bareilly, UP - 243122</span>
              </p>
              <p className="mdp-phone-line">
                <Phone size={14} className="mdp-icon-orange" />
                <a href="tel:+917088898725">+91 7088898725</a>
              </p>
              <p className="mdp-phone-line">
                <MessageCircle size={14} className="mdp-icon-green" />
                <a href="https://wa.me/919675695450?text=Hello%20Mera%20Digital%20Pay%20Team,%20I%20need%20help" target="_blank" rel="noopener noreferrer">+91 9675695450</a>
              </p>
            </div>

            <div className="mdp-follow-box">
              <h5 className="mdp-subheading-orange">FOLLOW US</h5>
              <div className="mdp-social-row">
                {/* YouTube */}
                <a href="https://www.youtube.com/@meradigitalaps_official" target="_blank" rel="noopener noreferrer" className="mdp-soc-btn mdp-soc-yt" title="YouTube (@meradigitalaps_official)">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/meradigitalaps_" target="_blank" rel="noopener noreferrer" className="mdp-soc-btn mdp-soc-ig" title="Instagram (@meradigitalaps_)">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/meradigitalaps" target="_blank" rel="noopener noreferrer" className="mdp-soc-btn mdp-soc-fb" title="Facebook (@meradigitalaps)">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* WhatsApp Channel */}
                <a href="https://www.whatsapp.com/channel/0029Vb6Xac9Gk1FmZbg5kD3G" target="_blank" rel="noopener noreferrer" className="mdp-soc-btn mdp-soc-wa" title="WhatsApp Channel">
                  <MessageCircle size={15} />
                </a>
                {/* Telegram */}
                <a href="https://t.me/+kuz7ioMUeC1iMjM9" target="_blank" rel="noopener noreferrer" className="mdp-soc-btn mdp-soc-tg" title="Telegram Channel">
                  <Send size={14} />
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/mera-digital-aps-daudega-to-mera-desh-daudega-070b9424a" target="_blank" rel="noopener noreferrer" className="mdp-soc-btn mdp-soc-li" title="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* Aratt.ai */}
                <a href="https://aratt.ai/@meradigitalapsdaudega" target="_blank" rel="noopener noreferrer" className="mdp-soc-btn mdp-soc-ar" title="Aratt.ai (@meradigitalapsdaudega)">
                  <Globe size={15} />
                </a>
                {/* Website */}
                <a href="https://www.meradigitalpay.com" target="_blank" rel="noopener noreferrer" className="mdp-soc-btn mdp-soc-wb" title="Website">
                  <Globe size={15} />
                </a>
              </div>
            </div>

            <div className="mdp-download-box">
              <h5 className="mdp-subheading-orange">DOWNLOAD APP</h5>
              <div className="mdp-app-buttons-row">
                <a href="https://play.google.com/store/apps/details?id=com.aps.partners" target="_blank" rel="noopener noreferrer" className="mdp-app-btn" title="Google Play Store">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6 2.4L14.2 13 3.6 23.6c-.4-.3-.6-.8-.6-1.4V3.8c0-.6.2-1.1.6-1.4z" fill="#00C1A7"/>
                    <path d="M17.6 9.6L5.3 2.6c-.5-.3-1.1-.3-1.7-.2l10.6 10.6 3.4-3.4z" fill="#00A0FF"/>
                    <path d="M17.6 14.4l-3.4-3.4-10.6 10.6c.6.1 1.2.1 1.7-.2l12.3-7z" fill="#FF334B"/>
                    <path d="M21.4 11.8l-3.8-2.2-3.4 3.4 3.4 3.4 3.8-2.2c.8-.5.8-1.9 0-2.4z" fill="#FFBA00"/>
                  </svg>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.aps.partners" target="_blank" rel="noopener noreferrer" className="mdp-app-btn mdp-app-apk" title="Download Partner App">
                  <Smartphone size={18} color="#ffffff" />
                </a>
                <a href="https://www.meradigitalpay.com" target="_blank" rel="noopener noreferrer" className="mdp-app-btn mdp-app-ios" title="Web App / Portal">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-2 .6-2.64 1.35-.57.65-1.06 1.71-.93 2.74 1.01.08 2.05-.53 2.56-1.24z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CONTACT & INFO & REGISTRATIONS */}
          <div className="mdp-col">
            <h4 className="mdp-col-title">CONTACT &amp; INFO</h4>
            <div className="mdp-info-list">
              <div className="mdp-info-item">
                <span className="mdp-info-label">Helpdesk:</span>
                <a href="mailto:help@meradigitalpay.com">help@meradigitalpay.com</a>
              </div>
              <div className="mdp-info-item">
                <span className="mdp-info-label">Accounts:</span>
                <a href="mailto:account@meradigitalpay.com">account@meradigitalpay.com</a>
              </div>
              <div className="mdp-info-item">
                <span className="mdp-info-label">Director:</span>
                <a href="mailto:director@meradigitalpay.com">director@meradigitalpay.com</a>
              </div>
              <div className="mdp-info-item">
                <span className="mdp-info-label">B2B:</span>
                <a href="mailto:B2B@meradigitalpay.com">B2B@meradigitalpay.com</a>
              </div>
              <div className="mdp-info-item">
                <span className="mdp-info-label">API:</span>
                <a href="mailto:Api@meradigitalpay.com">Api@meradigitalpay.com</a>
              </div>
            </div>

            <h4 className="mdp-col-title mdp-mt-24">REGISTRATIONS</h4>
            <div className="mdp-info-list">
              <div className="mdp-info-item">
                <span className="mdp-info-label">GSTIN:</span>
                <span className="mdp-info-val">09FQBPR9639J1ZZ</span>
              </div>
              <div className="mdp-info-item">
                <span className="mdp-info-label">Udyam:</span>
                <span className="mdp-info-val">UP-15-0017747</span>
              </div>
              <div className="mdp-info-item">
                <span className="mdp-info-label">ISO:</span>
                <span className="mdp-info-val">9001 : 2015</span>
              </div>
            </div>

            <h4 className="mdp-col-title mdp-mt-24">WEBSITES</h4>
            <ul className="mdp-links-list">
              <li><a href="https://www.meradigitalpay.com" target="_blank" rel="noopener noreferrer">› www.meradigitalpay.com</a></li>
              <li><a href="https://meradigitalpay.com" target="_blank" rel="noopener noreferrer">› www.meradigitalpay.com</a></li>
            </ul>
          </div>

          {/* COLUMN 3: COMPANY POLICY, DIGITAL PAY PANELS, ACCOUNT OPENING APIS */}
          <div className="mdp-col">
            <h4 className="mdp-col-title">COMPANY POLICY</h4>
            <ul className="mdp-links-list">
              <li><a href="/terms-and-conditions" onClick={(e) => handlePolicyClick('terms', e)}>› Terms &amp; Conditions</a></li>
              <li><a href="/privacy-policy" onClick={(e) => handlePolicyClick('privacy', e)}>› Privacy Policy</a></li>
              <li><a href="/refund-and-cancellation" onClick={(e) => handlePolicyClick('refund', e)}>› Refund &amp; Cancellation</a></li>
              <li><a href="/adhikari-chargeback" onClick={(e) => handlePolicyClick('chargeback', e)}>› Adhikari Chargeback</a></li>
              <li><a href="/b2b-chargeback" onClick={(e) => handlePolicyClick('b2b-chargeback', e)}>› B2B Chargeback Policy</a></li>
            </ul>

            <h4 className="mdp-col-title mdp-mt-24">DIGITAL PAY PANELS</h4>
            <ul className="mdp-links-list">
              <li><a href="#b2b-panel">› B2B Admin Panel</a></li>
              <li><a href="#b2c-panel">› B2C Admin Panel</a></li>
              <li><a href="#api-panel">› API Panel</a></li>
              <li><a href="#reseller-panel">› Reseller Admin Panel</a></li>
            </ul>

            <h4 className="mdp-col-title mdp-mt-24">ACCOUNT OPENING APIS</h4>
            <ul className="mdp-links-list">
              <li><a href="#nsdl-biometric">› NSDL Biometric</a></li>
              <li><a href="#kotak-biometric">› Kotak Biometric</a></li>
            </ul>
          </div>

          {/* COLUMN 4: API PRODUCTS & GOVERNMENT SERVICES */}
          <div className="mdp-col">
            <h4 className="mdp-col-title">API PRODUCTS</h4>
            <ul className="mdp-links-list">
              <li><a href="#aeps">› AEPS</a></li>
              <li><a href="#micro-atm">› Micro ATM</a></li>
              <li><a href="#aadhaar-pay">› Aadhaar Pay</a></li>
              <li><a href="#instant-payout">› Instant Payout</a></li>
              <li><a href="#ppi-dmt">› PPI DMT</a></li>
              <li><a href="#upi-cash">› UPI Cash Withdrawal</a></li>
              <li><a href="#cms">› CMS</a></li>
              <li><a href="#bbps">› BBPS</a></li>
              <li><a href="#recharge">› Mobile &amp; DTH Recharge</a></li>
              <li><a href="#gift-cards">› Digital Gift Cards</a></li>
            </ul>

            <h4 className="mdp-col-title mdp-mt-24">GOVERNMENT SERVICES</h4>
            <ul className="mdp-links-list">
              <li><a href="#uti-nsdl-pan">› UTI &amp; NSDL PAN Card</a></li>
              <li><a href="#loans">› All Types of Loans</a></li>
              <li><a href="#insurance">› Motor Insurance</a></li>
            </ul>
          </div>

          {/* COLUMN 5: TRAVEL BOOKING & SMART VERIFICATION (50+) */}
          <div className="mdp-col">
            <h4 className="mdp-col-title">TRAVEL BOOKING</h4>
            <ul className="mdp-links-list">
              <li><a href="#irctc">› IRCTC Ticket Booking</a></li>
              <li><a href="#flight">› Flight Booking</a></li>
              <li><a href="#bus">› Bus Booking</a></li>
              <li><a href="#hotel">› Hotel Booking</a></li>
            </ul>

            <h4 className="mdp-col-title mdp-mt-24">SMART VERIFICATION (50+)</h4>
            <ul className="mdp-links-list">
              <li><a href="#v-aadhaar">› Aadhaar Verification</a></li>
              <li><a href="#v-pan">› PAN Verification</a></li>
              <li><a href="#v-voter">› Voter Card Verification</a></li>
              <li><a href="#v-passport">› Passport Verification</a></li>
              <li><a href="#v-dl">› Driving License</a></li>
              <li><a href="#v-rc">› RC Verification</a></li>
              <li><a href="#v-bank">› Bank Account Verification</a></li>
              <li><a href="#v-upi">› UPI Verification</a></li>
              <li><a href="#v-gst">› GST Verification</a></li>
              <li><a href="#v-cin">› Company CIN</a></li>
              <li><a href="#v-digilocker">› DigiLocker</a></li>
              <li className="mdp-more-apis">&amp; 50+ More APIs</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. CERTIFICATION STRIP */}
      <div className="mdp-cert-strip">
        <div className="mdp-container">
          <div className="mdp-cert-inner">
            <div className="mdp-cert-badge">
              <Award size={16} className="mdp-cert-icon-gold" />
              <span>★ ISO 9001:2015 (QMS) Certified Enterprise</span>
            </div>
            <div className="mdp-cert-divider"></div>
            <div className="mdp-cert-badge">
              <CheckCircle size={16} className="mdp-cert-icon-green" />
              <span>✓ Startup India &amp; DIPP Recognized</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. COPYRIGHT BOTTOM BAR */}
      <div className="mdp-copyright-bar">
        <div className="mdp-container">
          <div className="mdp-copyright-inner">
            <p className="mdp-copyright-text">
              Copyright © 2026 Mera Digital Pay (Shri Mata Vaishno Devi Traders). All rights reserved.
            </p>
            <p className="mdp-disclaimer-text">
              Secured 256-Bit SSL Encrypted Banking &amp; FinTech Infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Quick Action */}
      <a 
        href="https://wa.me/919675695450" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mdp-floating-whatsapp"
        title="Chat on WhatsApp with Support"
      >
        <MessageCircle size={28} color="#ffffff" />
      </a>
    </footer>
  );
}
