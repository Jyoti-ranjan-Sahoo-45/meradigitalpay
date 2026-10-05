import React, { useState } from 'react';
import digitalImage from '../assets/banking-services.jpeg';
import bankingImage from '../assets/banking-services.jpeg';
import accountOpen from '../assets/saving-account.jpeg';
import utilityPaymentImage from '../assets/bill-payment.jpeg';
import insuranceImage from '../assets/life-insurance.jpeg';
import travelImage from '../assets/flight-booking.jpeg';
import offerImage from '../assets/pan-card.jpeg';
import neoImage from '../assets/personal-loan.jpeg';
import retailerImage from '../assets/flipkart-order.jpeg';
import app from "./../assets/app.png";

const serviceList = [
  {
    id: 0,
    tabName: 'Banking services',
    category: 'DIGITAL BANKING SERVICES',
    iconClass: 'pn pn-cr-banking-services',
    title: 'Expand Your Digital Banking Business with Mera Digital Pay',
    desc: 'Offer convenient digital banking services from your shop, including AEPS, UPI Cash Withdrawal, Balance Enquiry, Mini Statement, Money Transfer and more. Serve your customers with ease and grow your business with Mera Digital Pay.',
    img: bankingImage,
    btnText: 'Become a Partner'
  },
  {
    id: 1,
    tabName: 'DIGITAL payments',
    category: 'MERA DIGITAL PAY',
    iconClass: 'pn pn-cr-digital-suite',
    title: 'Empower Your Business with Smart Digital Payments',
    desc: 'Simplify your daily business with Mera Digital Pay. Access AEPS, BBPS, Money Transfer, Payout, Mobile Recharge, Bill Payments and more — all through one powerful digital platform.',
    img: digitalImage,
    btnText: 'Become a Partner'
  },
  {
    id: 2,
    tabName: 'Utility bills Center',
    category: 'UTILITY PAYMENT CENTER',
    iconClass: 'pn pn-cr-utility-payment-centre',
    title: 'Ensure recurring monthly income by becoming a Utility Payment Point',
    desc: 'Build recurring monthly transactions. Help customers pay utility bills, recharges, loan repayments and other supported recurring payments through Bharat Connect-enabled services, formerly known as BBPS',
    img: utilityPaymentImage,
    btnText: 'Book Demo'
  },
  {
    id: 3,
    tabName: 'insurance',
    category: 'INSURANCE SERVICES',
    iconClass: 'pn pn-cr-insurance',
    title: 'Offer affordable protection plans and become the Suraksha Pradhan of your area',
    desc: 'Less than 3% of Bharat has an insurance. Retailers can offer group policies and also become a Point of Sale agent to facilitate vehicle insurance through our insurance partner.\n\nHelp protect India. Earn respect and money while you are at it.',
    img: insuranceImage,
    btnText: 'Become a Partner'
  },
  {
    id: 4,
    tabName: 'Travel Center',
    category: 'TRAVEL BOOKING SERVICES',
    iconClass: 'pn pn-cr-travel',
    title: 'Open a complete travel agency from your shop',
    desc: 'Offer a range of affordable travel solutions from your shop: IRCTC rail tickets, domestic and international flight bookings, buses, and hotel reservations. High commissions and instant booking confirmations.',
    img: travelImage,
    btnText: 'Become a Partner'
  },
  {
    id: 5,
    tabName: 'pan card Center',
    category: 'PAN CARD & E-GOVERNANCE',
    iconClass: 'pn pn-cr-online-shop',
    title: 'Fast & Paperless PAN Card issuance from your shop',
    desc: 'Issue new paperless PAN cards, update existing PAN details, and provide essential government document services directly from your shop with fast approval and zero paperwork.',
    img: offerImage,
    btnText: 'Become a Partner'
  },
  {
    id: 6,
    tabName: 'account open',
    category: 'BANK ACCOUNT OPENING',
    iconClass: 'pn pn-cr-banking-services',
    title: 'Open instant bank accounts for customers in your locality',
    desc: 'Offer zero-balance and regular savings and current bank account opening services in partnership with leading banks (ICICI, Axis, NSDL, Fino, Kotak, Airtel Payments Bank) using biometric e-KYC.',
    img: accountOpen,
    btnText: 'Become a Partner'
  },
  {
    id: 7,
    tabName: 'Flipkart seller',
    category: 'E-COMMERCE & SELLER HUB',
    iconClass: 'pn pn-cr-online-shop',
    title: 'Onboard local shops and sellers on Flipkart & ONDC',
    desc: 'Enable local retailers, wholesalers, and manufacturers in your town to sell online on Flipkart and ONDC marketplace. Earn handsome onboarding commissions and boost local commerce.',
    img: retailerImage,
    btnText: 'Become a Partner'
  },
  {
    id: 8,
    tabName: 'Loan Center',
    category: 'LOAN & CREDIT SERVICES',
    iconClass: 'pn pn-cr-neo-banking',
    title: 'Easy loans to help you and your customers grow',
    desc: 'Easy, hassle-free business loans, personal loans, and gold loans with minimum documentation available to you and your customers from our trusted banks and NBFC partners. Bring your customers into the formal credit fold.',
    img: neoImage,
    btnText: 'Become a Partner'
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
                src={app} 
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
                {item.tabName}
              </li>
            ))}
          </ul>

          {/* Right Active Service Card */}
          <div className="service-slider-container-box">
            <div className="service-card-active-view">
              <div className="img-card service-image-card">
                <div className="video_thumb">
                  <img src={currentItem.img} alt={currentItem.title} />
                </div>
              </div>

              <div className="card-content">
                <i className={currentItem.iconClass} data-path="16"></i>
                <h6 style={{ letterSpacing: '1px', textTransform: 'uppercase' }}>{currentItem.category}</h6>
                <h4>{currentItem.title}</h4>
                <p className="body-content" style={{ whiteSpace: 'pre-line' }}>{currentItem.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
                  <button 
                    type="button"
                    className="btn green"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (typeof onOpenJoin === 'function') onOpenJoin(); 
                    }}
                  >
                    {currentItem.btnText || 'Become a Partner'}
                  </button>
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
