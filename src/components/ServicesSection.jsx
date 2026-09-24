import React, { useState } from 'react';

const serviceList = [
  {
    id: 0,
    category: 'Digital Payments',
    iconClass: 'pn pn-cr-digital-suite',
    title: 'Accept digital payments at your shop with simple digital tools',
    desc: 'Go digital. From prepaid cards, UPI QR to Aadhaar Pay, let us equip you with the latest digital payment tools. Use our digital ledger, Customer Khata to manage your customer credits better.',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/07/Digital-Suite-optimized.png',
    embedCode: 'EcpUZYQT6y4'
  },
  {
    id: 1,
    category: 'Banking Services',
    iconClass: 'pn pn-cr-banking-services',
    title: 'Become the most trusted Banker of your area',
    desc: 'Offer assisted banking services such as cash withdrawal, cash deposit, money transfer and partner-enabled account opening services from your shop',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/07/Banking-Services_optimized.png',
    embedCode: 'WVWA74r1I6Q'
  },
  {
    id: 2,
    category: 'Utility Payment Center',
    iconClass: 'pn pn-cr-utility-payment-centre',
    title: 'Ensure recurring monthly income by becoming a Utility Payment Point',
    desc: 'Build recurring monthly transactions. Help customers pay utility bills, recharges, loan repayments and other supported recurring payments through Bharat Connect-enabled services, formerly known as BBPS',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/07/Utility-Payment-centre_optimized.png',
    embedCode: 'CIouuBFlRZ4'
  },
  {
    id: 3,
    category: 'Insurance',
    iconClass: 'pn pn-cr-insurance',
    title: 'Offer affordable protection plans and become the Suraksha Pradhan of your area',
    desc: 'Less than 3% of Bharat has an insurance. Retailers can offer group policies and also become a Point of Sale agent to facilitate vehicle insurance through our insurance partner.\n\nHelp protect India. Earn respect and money while you are at it.',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/07/Insurance_optimized.png',
    embedCode: 'sqvsVfXYdRk'
  },
  {
    id: 4,
    category: 'Travel',
    iconClass: 'pn pn-cr-travel',
    title: 'Open a travel agency from your shop',
    desc: 'Offer a range of affordable travel solutions from your shop: rail, flight, hotels, and more. Flight booking is available through the Travel section powered by Nearby Neodigital Services Private Limited, an IATA-approved solution provider.\n\nOffer travel bookings from your shop. Earn More.',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/07/Travel_optimized.png',
    embedCode: 'oKgq-JHClaw'
  },
  {
    id: 5,
    category: 'Essential Services',
    iconClass: 'pn pn-cr-online-shop',
    title: 'Offer essential services to customers & earn more',
    desc: 'Issue paperless PAN for customers from your shop. Make essential documentation services available and bring them into the formal financial fold',
    img: 'https://paynearby.in/wp-content/uploads-efs/2022/08/Online-Store-2.png',
    embedCode: 'lKBNpF5wpjc'
  },
  {
    id: 6,
    category: 'Credit Services',
    iconClass: 'pn pn-credited-icon',
    title: 'Easy loans to help you and your customers grow',
    desc: 'Easy, hassle-free loans with minimum documentation available to you and your customers from our trusted banks and financial partners. Our endevour is to bring everyone in Bharat into the formal credit fold. Be the popular banking agent in your area. Avail the varied loan offerings to meet all credit needs.',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/08/Loan-thumbnail.png',
    embedCode: '9VUWXgFZejA'
  }
];

export default function ServicesSection({ onOpenVideo, onOpenJoin }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % serviceList.length);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + serviceList.length) % serviceList.length);
  };

  const currentItem = serviceList[activeTab];

  return (
    <section className="services-wrap custom-services-section" id="services">
      <div className="container--responsive">
        {/* Exact Header matching User Reference */}
        <div className="services-exact-header">
          <div className="services-exact-top-flex">
            <div className="services-exact-phone-wrapper">
              <img 
                src="https://paynearby.in/wp-content/uploads-efs/2024/11/service-title-img_optimized.png" 
                alt="One App multiple services" 
              />
            </div>
            <div className="services-exact-heading-wrapper">
              <h2>
                One App<br />
                <span>multiple</span><br />
                services
              </h2>
            </div>
          </div>
          <p className="services-exact-subheading">
            A great earning potential with the opportunity to grow your business<br />
            with minimal one time investment and zero working capital
          </p>
        </div>

        {/* Tabbed Interactive Carousel */}
        <div className="service-slider-wrap-layout">
          {/* Left Navigation Listing Tabs */}
          <ul className="service-listing-tabs">
            {serviceList.map((item, idx) => (
              <li
                key={item.id}
                className={idx === activeTab ? 'active-service-tab' : ''}
                onClick={() => setActiveTab(idx)}
              >
                {item.category}
              </li>
            ))}
          </ul>

          {/* Right Active Service Card */}
          <div className="service-slider-container-box">
            <div className="service-card-active-view">
              <div 
                className="img-card video-block"
                onClick={() => onOpenVideo(currentItem.embedCode)}
              >
                <div className="video_thumb">
                  <img src={currentItem.img} alt={currentItem.title} />
                </div>
                <div className="button-wrap desktop">
                  <img src="https://paynearby.in/wp-content/themes/paynearby/assets/images/yellow-play-btn.png" alt="" />
                  Watch video
                </div>
              </div>

              <div className="card-content">
                <i className={currentItem.iconClass} data-path="16"></i>
                <h6>{currentItem.category}</h6>
                <h4>{currentItem.title}</h4>
                <p className="body-content" style={{ whiteSpace: 'pre-line' }}>{currentItem.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
                  <a 
                    href="#join-paynearby" 
                    className="btn green"
                    onClick={(e) => { e.preventDefault(); onOpenJoin(); }}
                  >
                    Join Mera Digital Pay
                  </a>
                  <div className="slider-btns-custom">
                    <button onClick={handlePrev} className="slider-nav-btn" aria-label="Previous">←</button>
                    <button onClick={handleNext} className="slider-nav-btn" aria-label="Next">→</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
