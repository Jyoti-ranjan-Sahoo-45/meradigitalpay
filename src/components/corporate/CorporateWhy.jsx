import React from 'react';

const whyList = [
  {
    icon: 'pn pn-network',
    title: 'Extensive Retail Network:',
    desc: 'With hundreds of thousands of retail touchpoints spread across 20,000+ PIN codes, harness the power of assisted digital distribution across Bharat.'
  },
  {
    icon: 'pn pn-reliability',
    title: 'Time-Tested Reliability:',
    desc: 'Serving high-velocity transaction volumes, our resilient microservice architecture delivers excellent success ratios and high operational availability.'
  },
  {
    icon: 'pn pn-iot',
    title: 'Easy Integration:',
    desc: 'We offer standardized, robust APIs and SDKs so that your engineering teams can integrate and go live in record time.'
  },
  {
    icon: 'pn pn-analytics',
    title: 'Insightful Analytics:',
    desc: 'A single, powerful unified platform for all your MIS and data requirements. Real-time transaction dashboards help you make informed decisions.'
  },
  {
    icon: 'pn pn-technical-support',
    title: 'Best in Industry Support:',
    desc: 'Our dedicated account teams and technical support specialists are readily available to assist at every step of your journey.'
  },
  {
    icon: 'pn pn-setting',
    title: 'Smart Automation:',
    desc: 'Continuous platform enhancements ensure seamless ledger reconciliation and automated batch processing.'
  }
];

export default function CorporateWhy() {
  return (
    <section className="why-meradigitalpay-wrapper" id="features">
      <div className="container--responsive">
        <div className="why-meradigitalpay-container">
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
