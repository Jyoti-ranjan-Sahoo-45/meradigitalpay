import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer id="colophon" className="pn-footer-v2" role="contentinfo">
      {/* MAIN COLUMNS */}
      <div className="pnf-wrap">
        <div className="pnf-top">
          {/* COL 1: Our Brands + Download App */}
          <div className="pnf-col">
            <div className="pnf-brands-wrap">
              <p className="pnf-heading">Our Brands</p>
              <ul className="pnf-brands">
                <li>
                  <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                    <img src={logoImg} alt="Mera Digital Pay" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                    <img src="https://paynearby.in/wp-content/uploads-efs/2026/02/DN-Logo-109x55-Feb26.png" alt="Digital Naari" />
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                    <img src="https://paynearby.in/wp-content/uploads-efs/2025/11/Saathi-Logo-109x55-NOV25.png" alt="Mera Digital Saathi" />
                  </a>
                </li>
                <li>
                  <img src="https://paynearby.in/wp-content/uploads-efs/2025/02/Insure-Nearby.png" alt="Insure Nearby" />
                </li>
                <li>
                  <img src="https://paynearby.in/wp-content/uploads-efs/2025/02/NeoDukaan.png" alt="NeoDukaan" />
                </li>
                <li>
                  <img src="https://paynearby.in/wp-content/uploads-efs/2025/02/Travel-Nearby.png" alt="Travel Nearby" />
                </li>
              </ul>
            </div>

            <div className="pnf-app">
              <p className="pnf-heading">Download our app</p>
              <img 
                className="pnf-app-google" 
                src="https://paynearby.in/wp-content/uploads-efs/2026/06/google-play-big-150px_footer.jpeg" 
                alt="Get it on Google Play" 
              />
              <ul className="pnf-app-list">
                <li className="pill-0">
                  <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                    Mera Digital Pay
                  </a>
                </li>
                <li className="pill-1">
                  <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                    Digital Naari
                  </a>
                </li>
                <li className="pill-2">
                  <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                    Mera Digital Saathi
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* COL 2, 3, 4: Wrapped for mobile grid */}
          <div className="pnf-nav-grid">
            {/* COL 2: Public Disclosures */}
            <div className="pnf-col">
              <div className="pnf-section">
                <p className="pnf-heading">Public Disclosures</p>
                <div className="pnf-legal-grid">
                  <div className="pnf-legal-col">
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/06/2.-Annual-Returns-2026_compressed.pdf" target="_blank" rel="noopener noreferrer">Annual Returns</a>
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/06/6.-Composition-of-CSR-Committee-CSR-Project.pdf" target="_blank" rel="noopener noreferrer">Composition of CSR Committee &amp; CSR Project</a>
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/06/3.-CSR-Policy.pdf" target="_blank" rel="noopener noreferrer">CSR Policy</a>
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/06/7.-Data-Collection-Privacy.pdf" target="_blank" rel="noopener noreferrer">Data Collection &amp; Privacy</a>
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/06/10.-Data-Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer">Data Privacy Policy</a>
                  </div>
                  <div className="pnf-legal-col">
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/06/9.-DLAI-Code-of-Conduct-for-Responsible-Digital-Lending.pdf" target="_blank" rel="noopener noreferrer">DLAI Code of Conduct</a>
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/06/1.-E-waste-Management.pdf" target="_blank" rel="noopener noreferrer">E-Waste Management</a>
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/06/8.-FACE-Code-of-Conduct.pdf" target="_blank" rel="noopener noreferrer">FACE Code of Conduct</a>
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/06/4.-Nomination-and-Remuneration-Policy.pdf" target="_blank" rel="noopener noreferrer">Nomination and Remuneration Policy</a>
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/06/5.-Prevention-of-Sexual-Harassment-min.pdf" target="_blank" rel="noopener noreferrer">Prevention of Sexual Harassment (POSH)</a>
                  </div>
                </div>
              </div>
            </div>

            {/* COL 3: Legal — Redressal Policy */}
            <div className="pnf-col pnf-col-legal">
              <div className="pnf-section">
                <p className="pnf-heading">Redressal Policy</p>
                <div className="pnf-legal-grid">
                  <div className="pnf-legal-col">
                    <a href="https://paynearby.in/wp-content/uploads-efs/2026/08/Customer-Grievance-Policy.pdf" target="_blank" rel="noopener noreferrer">Grievance Redressal Policy</a>
                  </div>
                </div>
              </div>
            </div>

            {/* COL 4: Terms & Conditions */}
            <div className="pnf-col">
              <div className="pnf-section">
                <p className="pnf-heading">Terms &amp; Conditions</p>
                <ul className="pnf-links">
                  <li><a href="https://paynearby.in/wp-content/uploads-efs/2026/06/1.-Retail-Partner.pdf" target="_blank" rel="noopener noreferrer">Retail Partner</a></li>
                  <li><a href="https://paynearby.in/wp-content/uploads-efs/2026/06/2.-Business-Partner.pdf" target="_blank" rel="noopener noreferrer">Business Partner</a></li>
                  <li><a href="https://paynearby.in/wp-content/uploads-efs/2026/06/3.-IRCTC.pdf" target="_blank" rel="noopener noreferrer">IRCTC</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BCFI / Company strip */}
      <div className="pnf-wrap">
        <div className="pnf-bcfi-bar">
          <a href="#" target="_blank" rel="noopener noreferrer" className="pnf-company-item">
            <img src="https://paynearby.in/wp-content/uploads-efs/2026/06/bcfi-logo.png" alt="Accredited Company" />
            <span>Accredited Company</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="pnf-company-item">
            <img src="https://paynearby.in/wp-content/uploads-efs/2026/08/ARIFAC_LR.jpg" alt="Certified Member" />
            <span>Certified Member</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pnf-bar">
        <div className="pnf-wrap">
          <div className="pnf-bar-inner">
            <p className="pnf-copyright">
              Copyright © 2026 Shri Mata Vaishno Devi Traders. All rights reserved.
            </p>
            <div className="pnf-follow-bar">
              <span className="pnf-follow-label">Follow us on</span>
              <ul className="pnf-social-icons">
                <li>
                  <a href="https://www.linkedin.com/company/paynearby/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <img src="https://paynearby.in/wp-content/uploads-efs/2026/06/linkedin-copy.png" alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/Mera Digital Pay" target="_blank" rel="noopener noreferrer" title="YouTube">
                    <img src="https://paynearby.in/wp-content/uploads-efs/2026/06/youtube-copy.png" alt="YouTube" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/officialpaynearby" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <img src="https://paynearby.in/wp-content/uploads-efs/2026/06/insta-copy.png" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/OfficalMera Digital Pay/" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <img src="https://paynearby.in/wp-content/uploads-efs/2026/06/FB-copy.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/paynearby" target="_blank" rel="noopener noreferrer" title="X">
                    <img src="https://paynearby.in/wp-content/uploads-efs/2026/06/X-copy.png" alt="X" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
