import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Download, 
  Eye, 
  Building2, 
  Lock, 
  Sparkles,
  ExternalLink,
  X
} from 'lucide-react';
import isoCertImg from '../assets/iso-certificate.jpeg';

const legalDocsList = [
  {
    id: 1,
    title: 'ISO 9001:2015 Quality Management System Certificate',
    docNumber: 'UK-2025-0703140',
    issuer: 'International Certification Inspection Limited (ICIL)',
    validity: 'Valid up to 2028',
    category: 'International Quality Certification',
    description: 'Certified for MERADIGITALAPS, Account Opening, APS Amazon Flipkart ONDC Platform Seller Onboarding, Credit Card, Insurance & 100+ Digital Services.',
    badge: 'ISO Certified',
    image: isoCertImg
  },
  {
    id: 2,
    title: 'Certificate of Incorporation & Company Registration',
    docNumber: 'CIN / Reg No: Verified & Registered',
    issuer: 'Ministry of Corporate Affairs (MCA), Govt of India',
    validity: 'Permanent Corporate Status',
    category: 'Statutory Registration',
    description: 'Officially incorporated and registered under the Companies Act, Government of India, authorized for pan-India digital financial infrastructure & IT operations.',
    badge: 'Govt. Recognized',
    image: null
  },
  {
    id: 3,
    title: 'GST Registration Certificate (GSTIN)',
    docNumber: 'GSTIN: 09XXXXX8290X1ZX',
    issuer: 'Goods and Services Tax Department, Govt of India',
    validity: 'Active & Compliant',
    category: 'Tax & Financial Compliance',
    description: 'Compliant tax registration for multi-state digital service operations, B2B invoicing, and seamless partner commission settlements.',
    badge: 'Tax Compliant',
    image: null
  },
  {
    id: 4,
    title: 'MSME Udyam Registration Certificate',
    docNumber: 'UDYAM-UP-XX-XXXXXXX',
    issuer: 'Ministry of Micro, Small and Medium Enterprises',
    validity: 'Lifetime Registration',
    category: 'Enterprise Classification',
    description: 'Recognized as an official enterprise driving last-mile financial inclusion, rural entrepreneurship, and digital commerce enablement.',
    badge: 'MSME Registered',
    image: null
  },
  {
    id: 5,
    title: 'NPCI / Bharat Connect (BBPS) Technical Compliance',
    docNumber: 'BBPS Channel Interoperability Protocol',
    issuer: 'National Payments Corporation of India (NPCI)',
    validity: 'Active Integration Protocol',
    category: 'Banking System Compliance',
    description: 'Adhering to NPCI and Bharat Connect standards for real-time utility bill payments, instant recharge routing, and settlement standards.',
    badge: 'Banking Certified',
    image: null
  },
  {
    id: 6,
    title: 'Data Protection, Cyber Security & 256-Bit SSL Certificate',
    docNumber: 'TLS 1.3 / 256-Bit End-to-End Encryption',
    issuer: 'Global Security Authority',
    validity: 'Annual Renewal & Audited',
    category: 'Security & Privacy Compliance',
    description: 'End-to-end encrypted transactions, ISO-audited server security protocols, and strict customer data privacy protection.',
    badge: 'Bank Grade Security',
    image: null
  }
];

export default function CaseStudiesPage() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <main className="legal-documents-page-main" style={{ background: '#f8fafc', paddingBottom: '90px' }}>
      
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(135deg, #0A2B5E 0%, #0D3B7A 60%, #051937 100%)', color: '#ffffff', padding: '60px 0 50px' }}>
        <div className="container--responsive" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(217, 148, 10, 0.18)', border: '1px solid #D9940A', padding: '6px 18px', borderRadius: '30px', color: '#F5C842', fontSize: '13.5px', fontWeight: 800, marginBottom: '16px' }}>
            <ShieldCheck size={16} />
            <span>OFFICIAL COMPANY COMPLIANCE & LEGAL DOCUMENTS</span>
          </div>
          <h1 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '40px', fontWeight: 900, margin: '0 0 14px', letterSpacing: '-0.5px' }}>
            Legal Documents & Certifications
          </h1>
          <p style={{ fontSize: '17px', color: '#cbd5e1', maxWidth: '780px', margin: '0 auto', lineHeight: 1.6 }}>
            Mera Digital Pay operates with 100% legal transparency, statutory compliances, ISO 9001:2015 certification, and government registrations.
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <div className="container--responsive" style={{ maxWidth: '1100px', margin: '0 auto', padding: '50px 20px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '26px' }}>
          {legalDocsList.map((doc) => (
            <div 
              key={doc.id}
              style={{
                background: '#ffffff',
                borderRadius: '22px',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 6px 24px rgba(10, 43, 94, 0.06)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '12px', 
                    background: '#eff6ff', 
                    color: '#0A2B5E', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #bfdbfe'
                  }}>
                    <FileText size={22} />
                  </div>
                  <span style={{ 
                    background: '#fef3c7', 
                    color: '#b45309', 
                    fontSize: '12px', 
                    fontWeight: 800, 
                    padding: '4px 12px', 
                    borderRadius: '20px',
                    border: '1px solid #fde68a'
                  }}>
                    {doc.badge}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0A2B5E', margin: '0 0 10px', lineHeight: 1.4 }}>
                  {doc.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, marginBottom: '18px' }}>
                  {doc.description}
                </p>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 14px', marginBottom: '18px', fontSize: '12.5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Certificate No:</span>
                    <strong style={{ color: '#0A2B5E' }}>{doc.docNumber}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Issuing Authority:</span>
                    <strong style={{ color: '#0A2B5E' }}>{doc.issuer}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Validity:</span>
                    <strong style={{ color: '#15803d' }}>{doc.validity}</strong>
                  </div>
                </div>
              </div>

              {doc.image ? (
                <button
                  type="button"
                  onClick={() => setSelectedDoc(doc)}
                  style={{
                    background: '#0A2B5E',
                    color: '#ffffff',
                    border: 'none',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '13.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  <Eye size={16} /> View Official Certificate
                </button>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#15803d', fontSize: '13px', fontWeight: 700 }}>
                  <CheckCircle2 size={16} /> Verified & Available Upon Verification
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Security & Verification Callout */}
        <div style={{ 
          marginTop: '50px',
          background: '#ffffff',
          borderRadius: '24px',
          border: '1.5px solid #e2e8f0',
          padding: '34px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <div>
            <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '22px', fontWeight: 800, color: '#0A2B5E', margin: '0 0 6px' }}>
              Need Verification or Partner Agreement Copy?
            </h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '14.5px' }}>
              Official verification documents and compliance copies are shared with verified business partners and financial institutions.
            </p>
          </div>
          <a 
            href="/contact-us" 
            style={{ 
              background: '#0A2B5E', 
              color: '#ffffff', 
              padding: '12px 24px', 
              borderRadius: '10px', 
              fontWeight: 800, 
              fontSize: '14.5px', 
              textDecoration: 'none'
            }}
          >
            Contact Compliance Cell
          </a>
        </div>

      </div>

      {/* Modal for Certificate Preview */}
      {selectedDoc && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={() => setSelectedDoc(null)}
        >
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '18px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '17px', fontWeight: 800, color: '#0A2B5E', margin: 0 }}>
                {selectedDoc.title}
              </h4>
              <button 
                type="button" 
                onClick={() => setSelectedDoc(null)}
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={18} color="#0f172a" />
              </button>
            </div>
            <div style={{ padding: '20px', overflowY: 'auto', textAlign: 'center' }}>
              <img 
                src={selectedDoc.image} 
                alt={selectedDoc.title} 
                style={{ width: '100%', maxHeight: '68vh', objectFit: 'contain', borderRadius: '12px', border: '1px solid #e2e8f0' }} 
              />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
