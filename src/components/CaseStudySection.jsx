import React from 'react';
import communityVideo from '../assets/video-community-network.mp4';
import campaignRetailerImg from '../assets/campaign-dil-se-desi-retailer.jpeg';

export default function CaseStudySection() {
  return (
    <section className="case-studies-wrapper bgcolor--light-blue bgcolor--text--light-blue" id="case-studies" style={{ padding: '60px 0' }}>
      <div className="container--responsive">
        <div className="center-content margin--b30" style={{ textAlign: 'center' }}>
          <h3 className="section-title-dashed margin--b30" style={{ fontSize: '32px', fontWeight: 800, color: '#0c4696', marginBottom: '14px' }}>
            Dil Se Desi. Life Digital.
          </h3>
          <p className="body-content margin--b30" style={{ fontSize: '18px', color: '#4a5568', margin: '0 0 36px' }}>
            Mera Digital Pay Banking Mitras — A Growing, Aspirational Community
          </p>
        </div>

        <div className="case-studies-container casestudy--slider">
          <div className="casestudy--video" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.2fr', gap: 36, alignItems: 'center', background: '#ffffff', padding: '36px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(12, 70, 150, 0.07)', border: '1px solid #e2e8f0' }}>
            <div className="video-wrap content--block" style={{ borderRadius: '16px', overflow: 'hidden', background: '#000000', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
              <video 
                width="100%" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline
                poster={campaignRetailerImg}
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '340px', objectFit: 'cover' }}
              >
                <source src={communityVideo} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
            <div className="casestudy--content content--block">
              <i className="pn pn-quote" style={{ fontSize: 36, color: '#58b147', display: 'block', marginBottom: 12 }}>“</i>
              <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#0c4696', marginBottom: '12px' }}>
                Grow your business with Mera Digital Saathi
              </h4>
              <p className="body-content text--black text--normal" style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                Mera Digital Saathi helps retailers bring customers closer to digital financial services from their own neighbourhood shop. By helping customers open digital accounts, link UPI and start using the Saathi app, retailers build stronger community trust and unlock new commission opportunities.
              </p>
              <div style={{ marginTop: '20px', padding: '12px 18px', background: '#f0f9eb', borderRadius: '10px', borderLeft: '4px solid #58b147' }}>
                <p style={{ margin: 0, fontWeight: 700, color: '#2d6a1f', fontSize: '14.5px' }}>
                  Dil Se Desi. Life Digital. — Driving Bharat’s Last-Mile Fintech Revolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

