import React from 'react';

const whyList = [
  {
    icon: 'pn pn-network',
    title: 'Largest Agent Network:',
    desc: 'With over 15,00,000 active retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country'
  },
  {
    icon: 'pn pn-reliability',
    title: 'Time-Tested Reliability:',
    desc: 'Serving more than a million transactions per day, our systems deliver the highest success matrix and 99.9% uptime. Mera Digital Pay is certified to the highest compliance standards'
  },
  {
    icon: 'pn pn-iot',
    title: 'Easy Integration:',
    desc: 'We agonize over easy to use APIs so that your teams don’t take months to integrate and go live with the solution'
  },
  {
    icon: 'pn pn-analytics',
    title: 'Insightful Analytics:',
    desc: 'A single, powerful unified platform for all your MIS and data requirements. Real time customer analytics that will help you make informed decisions'
  },
  {
    icon: 'pn pn-technical-support',
    title: 'Best in industry support:',
    desc: 'Our solution experts are always available on email, phone, chats and will help you in every step of the way'
  },
  {
    icon: 'pn pn-setting',
    title: 'Smart Automation:',
    desc: 'We release hundreds of features and improvements frequently to keep you ahead of industry shifts; and automate processes to eliminate redundancies'
  }
];

export default function CorporateWhy() {
  return (
    <section className="why-paynearby-wrapper" id="features">
      <div className="container--responsive">
        <div className="why-paynearby-container">
          <h4 className="section-subtitle">Why Mera Digital Pay</h4>
          <h3 className="section-title-dashed">
            Technology driven, customer first approach to last mile connectivity and solution
          </h3>
          
          <ul className="why-listing">
            {whyList.map((item, idx) => (
              <li key={idx} className="why-card">
                <i className={item.icon} data-path="20"></i>
                <h3 className="body-title">{item.title}</h3>
                <p className="body-content">{item.desc}</p>
              </li>
            ))}
          </ul>

          <div className="why-listing-bottom">
            <div className="more-link-wrap">
              <a href="#features" className="btn border no-btn-style">View all Features</a>
            </div>
            <div className="slider-btns">
              <i className="pn pn-left-arrow" style={{ cursor: 'pointer' }}></i>
              <i className="pn pn-right-arrow" style={{ cursor: 'pointer' }}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
