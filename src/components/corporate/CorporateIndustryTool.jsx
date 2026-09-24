import React, { useState } from 'react';

const industryOptions = [
  { key: 'paymentsFinance', title: 'Payments & Finance', icon: 'pn pn-bill' },
  { key: 'foodDelivery', title: 'Food Delivery', icon: 'pn pn-food-delivery' },
  { key: 'insurance', title: 'Insurance', icon: 'pn pn-heart' },
  { key: 'fmcgPharma', title: 'FMCG & Pharma', icon: 'pn pn-shaker' },
  { key: 'ecommerce', title: 'Ecommerce', icon: 'pn pn-shopping-basket' },
  { key: 'ott', title: 'OTT', icon: 'pn pn-television' },
  { key: 'networkMarketing', title: 'Network & Marketing', icon: 'pn pn-organization' },
  { key: 'chemicalFertiliser', title: 'Chemical / Fertiliser', icon: 'pn pn-research' }
];

const needLists = {
  paymentsFinance: [
    { id: 'payment-1', label: 'Digitize Cash Collection' },
    { id: 'payment-2', label: 'Digitize Salary' },
    { id: 'payment-3', label: 'Digitize Loan Disbursal' },
    { id: 'payment-4', label: 'Invoice Reconciliation & Management' }
  ],
  foodDelivery: [
    { id: 'foodDelivery-1', label: 'Digitize Cash Collection' }
  ],
  insurance: [
    { id: 'insurance-1', label: 'Managing Premium Collections' },
    { id: 'insurance-2', label: 'Disburse Salary and Commissions' }
  ],
  fmcgPharma: [
    { id: 'fmcgPharma-1', label: 'Shelf Space Audit and Optimization' },
    { id: 'fmcgPharma-2', label: 'Digitize Order Placement and Payment' },
    { id: 'fmcgPharma-3', label: 'Product Sampling and Customer Surveys' }
  ],
  ecommerce: [
    { id: 'ecommerce-1', label: 'Increase Market Penetration' },
    { id: 'ecommerce-2', label: 'Digitize Cash Collection' }
  ],
  ott: [
    { id: 'ott-1', label: 'Subscription Renewals & purchase' }
  ],
  networkMarketing: [
    { id: 'networkMarketing-1', label: 'Increase Market Penetration' },
    { id: 'networkMarketing-2', label: 'Shelf Space Audit and Optimization' },
    { id: 'networkMarketing-3', label: 'Product Sampling and Customer Surveys' }
  ],
  chemicalFertiliser: [
    { id: 'chemicalFertiliser-1', label: 'Digitize Payments' }
  ]
};

const tabDetails = {
  'payment-1': {
    title: 'Digitize Cash Collection',
    img: 'https://paynearby.in/wp-content/themes/paynearby/assets/images/Digitize-Cash-Collection-02.png',
    desc: 'Harness Mera Digital Pay’s extensive last mile connectivity to enable your customers and collection agents to easily deposit cash at a store nearby. Deposits can be made beyond banking hours, 7 days a week, with real time cash digitization, faster settlement and a single unified collection dashboard.',
    subtext: 'Businesses of all sizes, across industries, use this service to optimize their cash collection',
    industries: [
      'NBFCs, Micro finance Institutions (MFIs), Small Finance bank (SFBs)',
      'Food Delivery Cos',
      'Cab Aggregators'
    ],
    whyQuestion: 'Why digitize cash collection with Mera Digital Pay',
    points: [
      { title: 'Faster Settlement', desc: 'Physical cash deposited by customers and collection agents are converted into digital cash real time.' },
      { title: 'Insights at your fingertips', desc: 'A single unified cash collection dashboard ensures you have the required information to make business decisions real time.' },
      { title: 'Serve more customers', desc: 'Expand serviceable market and reach customers across geographies and different income cohorts.' }
    ]
  },
  'payment-2': {
    title: 'Digitize Salary and Vendor Payments',
    img: 'https://paynearby.in/wp-content/themes/paynearby/assets/images/Digitize-Salary-and-Vendor-Payments.png',
    desc: 'Take advantage of our proxy prevention platform with features like Digi KYC, payee account validation and bulk payment processing to effectively disburse salaries and vendor payments at the last mile.',
    subtext: 'Businesses of all sizes, across industries, use this service to digitize their salaries and vendor payments',
    industries: ['Fast Moving Consumer Goods', 'Organized Retail', 'Manufacturing'],
    whyQuestion: 'Why digitize salary and vendor payments with Mera Digital Pay',
    points: [
      { title: 'Upto 60% faster on-boarding', desc: 'Digitized on-boarding processes at the last mile offer end to end verification of every payee in a scalable, efficient and easy manner' },
      { title: 'Zero proxy payment leakage', desc: 'Payee account validation, Digi KYC and robust fraud detection mechanisms ensure funds reach the intended recipient' },
      { title: 'Reduce overhead expenses', desc: 'Reduce accounting efforts behind payment processing. Bulk payment processing tools, with digitized audit trails ensure minimum manual intervention and provides significant savings in overhead expenses.' }
    ]
  },
  'payment-3': {
    title: 'Digitize Loan Disbursal',
    img: 'https://paynearby.in/wp-content/themes/paynearby/assets/images/Digitize-Cash-Collection-02.png',
    desc: 'Harness Mera Digital Pay’s high end digital technology and extensive last mile connectivity to provide customers faster, safer and easier access to capital. Enable secure loan disbursements across all Mera Digital Pay outlets, beyond banking hours, 7 days a week and scale your lending business rapidly.',
    subtext: 'Lending businesses of all sizes can use this service to scale up their business',
    industries: ['Banks', 'NBFCs', 'Micro finance Institutions (MFIs)'],
    whyQuestion: 'Why digitize loan disbursal with Mera Digital Pay',
    points: [
      { title: 'Largest Network', desc: 'With over 15,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country' },
      { title: 'Zero proxy payment leakage', desc: 'Payee account validation, Digi KYC and robust fraud detection mechanisms ensure funds reach the intended recipient' },
      { title: 'Serve more customers', desc: 'Expand serviceable market and reach customers across geographies and different income cohorts.' }
    ]
  },
  'payment-4': {
    title: 'Invoice Reconciliation & Management',
    img: 'https://paynearby.in/wp-content/themes/paynearby/assets/images/DIGITIZE-INVOICE-RECONCILLIATION-AND-MANAGEMENT.png',
    desc: 'Eliminate errors, mitigate risks and reduce the burden on your accounts team by digitizing invoice generation, payment collection and account reconciliation on Mera Digital Pay’s automated invoice management platform. Get efficiency in your financial accounting processes.',
    subtext: 'Retail businesses of all sizes, across industries, can digitize invoice reconciliation and management',
    industries: ['Fast Moving Consumer Goods', 'Pharma', 'White Goods and Electronics'],
    whyQuestion: 'Why automate invoice management with Mera Digital Pay',
    points: [
      { title: 'Faster processing', desc: 'Reduce delays and time lags that result from manual interventions through automation of the entire financial management system.' },
      { title: 'Drive cost efficiency', desc: 'Reduce overhead expenses of setting up big accounting teams to manage financial processes.' },
      { title: 'Better Cash Flow', desc: 'Digitize invoice generation and payment acceptance to ensure faster payment realization, greater transparency and better cash flow management.' }
    ]
  }
};

export default function CorporateIndustryTool({ onOpenContact }) {
  const [selectedIndustry, setSelectedIndustry] = useState('paymentsFinance');
  const [checkedNeeds, setCheckedNeeds] = useState({ 'payment-1': true });
  const [showSolutionTab, setShowSolutionTab] = useState(false);
  const [activeTabKey, setActiveTabKey] = useState('payment-1');

  const handleIndustrySelect = (key) => {
    setSelectedIndustry(key);
    const firstNeed = needLists[key]?.[0]?.id;
    if (firstNeed) {
      setCheckedNeeds({ [firstNeed]: true });
      setActiveTabKey(firstNeed);
    }
  };

  const handleCheckboxChange = (id) => {
    setCheckedNeeds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const currentNeeds = needLists[selectedIndustry] || [];
  const activeDetail = tabDetails[activeTabKey] || tabDetails['payment-1'];

  return (
    <section className="fixed-bottom-wrapper">
      <div className="container--responsive">
        <div className="right-solution-tool-wrap">
          {/* Step 1: Industry Selection */}
          <div className="right-solution-tool-title">
            <h3>Choose the right solution by Industry Type</h3>
            <ul className="tool-option-list">
              {industryOptions.map((opt) => (
                <li
                  key={opt.key}
                  className={`tool-option ${selectedIndustry === opt.key ? 'selected' : ''}`}
                  onClick={() => handleIndustrySelect(opt.key)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className={opt.icon}></i>
                  <span className="title">{opt.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step 2: Need Selection */}
          <div className="right-solution-tool-content" style={{ display: 'block' }}>
            <h3 className="body-title">Select your need</h3>
            <ul className="need-listing show" style={{ listStyle: 'none', padding: 0 }}>
              {currentNeeds.map((need) => (
                <li key={need.id} style={{ marginBottom: '12px' }}>
                  <label className="custom-checkbox solutionCheckbox" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={!!checkedNeeds[need.id]}
                      onChange={() => handleCheckboxChange(need.id)}
                    />
                    <span className="text" style={{ fontSize: '15px', color: '#1e293b' }}>{need.label}</span>
                  </label>
                </li>
              ))}
            </ul>

            <button
              className="btn green show-solutions-btn"
              onClick={() => setShowSolutionTab(true)}
              style={{ cursor: 'pointer', marginTop: '15px' }}
            >
              Show me the Right Solution
            </button>
          </div>

          {/* Step 3: Detailed Solution Tabs Modal/Drawer */}
          {showSolutionTab && (
            <div className="solution-tab-wrap show" style={{ display: 'block' }}>
              <i 
                className="pn pn-close-button" 
                onClick={() => setShowSolutionTab(false)} 
                style={{ cursor: 'pointer' }}
              ></i>
              <div className="solution-tab-container">
                <div className="tab-nav-wrap">
                  {currentNeeds.map((need) => (
                    <div
                      key={need.id}
                      className={`tab ${activeTabKey === need.id ? 'selected' : ''}`}
                      onClick={() => setActiveTabKey(need.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {need.label}
                    </div>
                  ))}
                </div>

                <div className="tab-content selected">
                  <div className="tab-content-top">
                    <img src={activeDetail.img} alt={activeDetail.title} />
                    <div className="top-details">
                      <h3 className="body-title">{activeDetail.title}</h3>
                      <p className="body-content secondary_color_10">{activeDetail.desc}</p>
                      <p className="body-content secondary_color_10">{activeDetail.subtext}</p>
                      <ul>
                        {activeDetail.industries.map((ind, i) => (
                          <li key={i}>{ind}</li>
                        ))}
                      </ul>
                      <div className="learn-more-wrap" style={{ marginTop: '15px' }}>
                        <button 
                          className="btn green" 
                          onClick={onOpenContact}
                          style={{ cursor: 'pointer', padding: '10px 20px', border: 'none' }}
                        >
                          Contact Expert
                        </button>
                      </div>
                    </div>
                  </div>

                  <h3 className="list-question">{activeDetail.whyQuestion}</h3>
                  <ul className="tab-content-list">
                    {activeDetail.points.map((pt, i) => (
                      <li key={i}>
                        <span>{pt.title}</span>
                        <p className="body-content secondary_color_10">{pt.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
