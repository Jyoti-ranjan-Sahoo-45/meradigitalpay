import React, { useState } from 'react';
import PartnersSection from '../components/PartnersSection';

const faqItems = [
  {
    id: 1,
    question: 'What is Mera Digital Pay?',
    answer: 'Mera Digital Pay is India’s leading branchless banking and digital payments network that enables neighborhood retailers to offer assisted financial services such as cash withdrawal, money transfer, utility bill payments, insurance, travel booking, credit access, and other digital services to their local communities.'
  },
  {
    id: 2,
    question: 'What services can I offer as a retailer?',
    answer: 'Retailers can offer a comprehensive suite of services including AePS (Aadhaar Enabled Payment System), Micro ATM, UPI Cash Point, Domestic Money Transfer (DMT), Utility Bill Payments (BBPS), Savings Account Opening, Two-Wheeler & Health Insurance, Bus/Flight/Train Travel Booking, CMS Cash Collection, and Pan Card Services.'
  },
  {
    id: 3,
    question: 'How can I register as a Mera Digital Pay retailer?',
    answer: 'You can register in less than 5 minutes through the official Mera Digital App (available on Google Play Store) or via the retailer web portal. Simply download the app, enter your mobile number, verify OTP, enter basic store details, complete instant digital eKYC, and begin transacting immediately.'
  },
  {
    id: 4,
    question: 'What documents or KYC are required to use Mera Digital Pay services?',
    answer: 'Basic retailer onboarding requires your Aadhaar Card, PAN Card, and a registered active mobile number. Biometric authentication or OTP-based Aadhaar validation is completed instantly during registration.'
  },
  {
    id: 5,
    question: 'What is AePS (Aadhaar Enabled Payment System)?',
    answer: 'AePS allows customers to use their Aadhaar number and biometric fingerprint authentication to withdraw cash, check their account balance, or get a mini statement from their Aadhaar-linked bank account without needing a debit card.'
  },
  {
    id: 6,
    question: 'What is UPI Cash Point?',
    answer: 'UPI Cash Point is an innovative solution that allows customers to scan a dynamic QR code using any UPI app on their smartphone and withdraw cash securely from the retailer’s store without physical ATM cards.'
  },
  {
    id: 7,
    question: 'How and when do I receive commission on transactions?',
    answer: 'Commissions are credited in real-time to your Mera Digital Pay wallet for every successful transaction. You can instantly transfer your wallet balance to your registered bank account 24/7 via IMPS or NEFT.'
  },
  {
    id: 8,
    question: 'How do I contact Mera Digital Pay customer support?',
    answer: 'Our dedicated support team is available 7 days a week from 8:00 AM to 10:00 PM. You can call us at +91 9987401010, raise a ticket inside the Mera Digital App, or email us at customercare@paynearby.in.'
  }
];

export default function FaqsPage() {
  const [openIds, setOpenIds] = useState([1]);

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="faqs-page-main">
      {/* Breadcrumbs */}
      <div id="breadcrumbs" className="breadcrumbs-wrapper bgcolor--white">
        <div className="container--responsive">
          <ul className="breadcrumbs-container" style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: '16px 0', margin: 0, fontSize: '14px', color: '#64748b' }}>
            <li className="item-home">
              <a className="bread-link bread-home set-retailer" href="/" style={{ color: '#0c4696', textDecoration: 'none' }}>
                Home
              </a>
            </li>
            <li className="separator separator-home">::</li>
            <li className="item-current item-faqs">
              <span className="bread-current" style={{ fontWeight: 600, color: '#1e293b' }}>
                FAQs
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Banner */}
      <section className="faq--top--banner padded--wrapper bg--white" style={{ background: '#ffffff', padding: '40px 0 60px' }}>
        <div className="container--responsive">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div className="banner--text">
              <h1 className="main-header-title" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '44px', fontWeight: 800, color: '#0c4696', lineHeight: 1.2, marginBottom: '20px' }}>
                Need Help? Start Here
              </h1>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#4a5568', margin: 0 }}>
                Find answers related to retailer registration, onboarding, available services, app and web portal access, transactions, reports and support. For further assistance, please contact our customer support team.
              </p>
            </div>
            <div className="faq--banner" style={{ textAlign: 'center' }}>
              <img
                src="https://paynearby.in/wp-content/themes/paynearby/assets/images/faqbanner.png"
                alt="Mera Digital Pay FAQs"
                style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq--wrap bg--white" style={{ background: '#f8fafc', padding: '70px 0 90px', borderTop: '1px solid #e2e8f0' }}>
        <div className="container--responsive">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              className="section-title-dashed"
              style={{
                fontFamily: "'Cera Pro', sans-serif",
                fontSize: '34px',
                fontWeight: 800,
                color: '#0c4696',
                marginBottom: '40px',
                position: 'relative',
                paddingBottom: '16px'
              }}
            >
              Frequently Asked Questions
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60px', height: '4px', background: '#58b147', borderRadius: '2px' }} />
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqItems.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    style={{
                      background: '#ffffff',
                      borderRadius: '14px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div
                      onClick={() => toggleFaq(faq.id)}
                      style={{
                        padding: '22px 28px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        background: isOpen ? '#f0fdf4' : '#ffffff',
                        borderBottom: isOpen ? '1px solid #bbf7d0' : 'none'
                      }}
                    >
                      <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '18px', fontWeight: 700, color: isOpen ? '#15803d' : '#0c4696', margin: 0, flex: '1' }}>
                        {faq.question}
                      </h3>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: isOpen ? '#58b147' : '#f1f5f9',
                          color: isOpen ? '#ffffff' : '#0c4696',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          fontSize: '20px',
                          marginLeft: '16px'
                        }}
                      >
                        {isOpen ? '−' : '+'}
                      </div>
                    </div>

                    {isOpen && (
                      <div style={{ padding: '24px 28px', fontSize: '15.5px', lineHeight: 1.7, color: '#4a5568', background: '#ffffff' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Download App */}
      <PartnersSection />
    </main>
  );
}
