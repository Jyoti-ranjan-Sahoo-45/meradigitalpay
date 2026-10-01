import React, { useState } from 'react';
import videoCashCollection from '../../assets/video-cash-collection.mp4';
import videoMarketPenetration from '../../assets/video-market-penetration.mp4';
import videoOrderPlacement from '../../assets/video-order-placement.mp4';
import diagramEcoImg from '../../assets/diagram-ecosystem-services.jpeg';
import campaignWomanImg from '../../assets/campaign-dil-se-desi-woman.jpeg';
import campaignRetailerImg from '../../assets/campaign-dil-se-desi-retailer.jpeg';

const solutionsData = [
  {
    id: 0,
    title: 'Digitize cash collection',
    shortDesc: 'Enable customers and collection agents to deposit cash at Mera Digital Pay’s extensive last mile network and optimize collection cost by upto 50%',
    img: diagramEcoImg,
    video: videoCashCollection,
    poster: campaignRetailerImg,
    industries: [
      { icon: 'pn pn-museum', text: 'NBFCs, Micro finance Institutions (MFIs), Small Finance bank (SFBs)' },
      { icon: 'pn pn-delivery-bike', text: 'Food Delivery Cos' },
      { icon: 'pn pn-taxi', text: 'Cab Aggregators' },
      { icon: 'pn pn-ecommerce', text: 'E-commerce companies' },
      { icon: 'pn pn-insurance', text: 'Insurance companies' },
      { icon: 'pn pn-logistics', text: 'Logistics' }
    ]
  },
  {
    id: 1,
    title: 'Increase market penetration at the last mile',
    shortDesc: 'Distribute sachetize content through Mera Digital Pay’s last mile network and enable digitization of micro cash exchange to digically reach 400 million+ last mile audience',
    img: campaignWomanImg,
    video: videoMarketPenetration,
    poster: campaignWomanImg,
    industries: [
      { icon: 'pn pn-ott', text: 'OTT' },
      { icon: 'pn pn-music-video', text: 'Music/Video' },
      { icon: 'pn pn-gaming', text: 'Gaming' },
      { icon: 'pn pn-education', text: 'Education' },
      { icon: 'pn pn-publishing', text: 'Publishing' }
    ]
  },
  {
    id: 2,
    title: 'Digitize order placement and payment',
    shortDesc: 'Enable 3X more efficiency in order processing and cash flow by digitizing order placement and payment across the retail value chain',
    img: diagramEcoImg,
    video: videoOrderPlacement,
    poster: diagramEcoImg,
    industries: [
      { icon: 'pn pn-fast-moving', text: 'Fast Moving Consumer Goods' },
      { icon: 'pn pn-tablet', text: 'Pharma' },
      { icon: 'pn pn-goods', text: 'White Goods and Electronics' },
      { icon: 'pn pn-textile', text: 'Textile and garments' },
      { icon: 'pn pn-hygiene-products', text: 'Beauty and Hygiene products' }
    ]
  }
];


export default function CorporateSolutions({ onOpenContact }) {
  const [activeExtendId, setActiveExtendId] = useState(null);

  return (
    <section className="client-solution-wrapper" id="solutions">
      <div className="container--responsive">
        <div className="solution-wrap">
          <h4 className="section-subtitle">Our Solutions</h4>
          <h3 className="section-title-dashed">Think Last Mile, Think Mera Digital Pay</h3>
          
          <ul className="solution-listing">
            {solutionsData.map((sol) => {
              const isExtended = activeExtendId === sol.id;
              return (
                <li key={sol.id} className="solution-card">
                  <div className="img-wrap">
                    <img src={sol.img} alt={sol.title} />
                  </div>
                  <h3 className="body-title">{sol.title}</h3>
                  <p className="body-content">{sol.shortDesc}</p>
                  
                  <a 
                    href="#learn-more" 
                    className="link mob-learn-more"
                    onClick={(e) => { e.preventDefault(); setActiveExtendId(sol.id); }}
                  >
                    Learn More
                  </a>

                  {/* Extend Details Overlay */}
                  <div className={`solutioncard-extend ${isExtended ? 'show' : ''}`} style={isExtended ? { display: 'block', opacity: 1, visibility: 'visible' } : {}}>
                    <i 
                      className="pn pn-close-button solutioncard-extend-close"
                      onClick={() => setActiveExtendId(null)}
                      style={{ cursor: 'pointer' }}
                    ></i>
                    <div className="extend-container">
                      <div className="video-wrap">
                        <video width="518" height="450" poster={sol.poster} controls playsInline>
                          <source src={sol.video} type="video/mp4" />
                        </video>
                      </div>
                      <div className="extended-info">
                        <h3 className="body-title">{sol.title}</h3>
                        <p className="body-content">{sol.shortDesc}</p>
                        <span className="border"></span>
                        <h4>Benefits Industries like:</h4>
                        <ul>
                          {sol.industries.map((ind, i) => (
                            <li key={i}>
                              <i className={ind.icon} data-path="20"></i>
                              {ind.text}
                            </li>
                          ))}
                        </ul>
                        <span className="border"></span>
                        <div className="btn-wrap" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <button 
                            className="btn green ContactExpertFormBtn"
                            onClick={onOpenContact}
                            style={{ cursor: 'pointer' }}
                          >
                            Contact Solution Experts
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="solution-bottom">
            <div className="more-link-wrap">
              <a href="#solutions" className="btn border no-btn-style">View all Solutions</a>
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
