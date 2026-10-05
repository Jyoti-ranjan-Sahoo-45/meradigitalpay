import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  UserCheck, 
  Mail, 
  Phone, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Users2,
  Sparkles
} from 'lucide-react';
import directorImg from '../assets/director-rohitash.png';

const leadershipList = [
  {
    id: 1,
    name: 'Shri Rohit Singh Thakur',
    title: 'Managing Director & Founder',
    category: 'Board of Directors',
    bio: 'Visionary fintech entrepreneur dedicated to building inclusive branchless banking and digital financial infrastructure across Bharat. Leading strategic growth, national expansion, and corporate governance at Mera Digital Pay.',
    din: 'DIN: 09845120',
    email: 'director@meradigitalpay.com',
    phone: '+91 7088898725',
    experience: '12+ Years in Banking & FinTech Services',
    image: directorImg,
    badge: 'Managing Director',
    isPrimary: true
  }
];

const departmentStaff = [
  {
    department: 'Executive Management & Administration',
    members: [
      {
        name: 'Executive Director Office',
        role: 'Chief Operating Officer (COO)',
        responsibilities: 'Overall company operations, field network scaling & operational compliance.',
        email: 'coo@meradigitalpay.com',
        phone: '+91 7088898725'
      },
      {
        name: 'General Management & Compliance',
        role: 'Chief Compliance Officer (CCO)',
        responsibilities: 'Regulatory liaison, RBI/NPCI guidelines adherence & legal compliance.',
        email: 'compliance@meradigitalpay.com',
        phone: '+91 9675695450'
      }
    ]
  },
  {
    department: 'Technology & Banking Integration',
    members: [
      {
        name: 'FinTech Engineering Cell',
        role: 'Head of Technology & Systems (CTO)',
        responsibilities: 'Core banking API gateway, high-uptime server infrastructure & cyber security.',
        email: 'tech@meradigitalpay.com',
        phone: '+91 7088898725'
      },
      {
        name: 'API & Panel Integration Team',
        role: 'Lead Integration Engineer',
        responsibilities: 'B2B whitelabel portal deployments, REST API integrations & partner onboarding.',
        email: 'api@meradigitalpay.com',
        phone: '+91 9675695450'
      }
    ]
  },
  {
    department: 'Partner Support & Field Operations',
    members: [
      {
        name: 'Adhikari Care & Helpdesk',
        role: 'Customer Support Lead',
        responsibilities: '24/7 retailer helpline, ticket resolution, settlement verification & Adhikari queries.',
        email: 'help@meradigitalpay.com',
        phone: '+91 7088898725'
      },
      {
        name: 'Channel Sales & Distribution',
        role: 'National Channel Head',
        responsibilities: 'Distributor, Franchise and District Master Partner network management across states.',
        email: 'sales@meradigitalpay.com',
        phone: '+91 9675695450'
      }
    ]
  }
];

export default function CorporatePage() {
  return (
    <main className="staff-directors-page-main" style={{ background: '#f8fafc', paddingBottom: '90px' }}>
      
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(135deg, #0A2B5E 0%, #0D3B7A 60%, #051937 100%)', color: '#ffffff', padding: '60px 0 50px' }}>
        <div className="container--responsive" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(217, 148, 10, 0.18)', border: '1px solid #D9940A', padding: '6px 18px', borderRadius: '30px', color: '#F5C842', fontSize: '13.5px', fontWeight: 800, marginBottom: '16px' }}>
            <Sparkles size={16} />
            <span>EXECUTIVE GOVERNANCE & LEADERSHIP</span>
          </div>
          <h1 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '40px', fontWeight: 900, margin: '0 0 14px', letterSpacing: '-0.5px' }}>
            Directors & Key Staff Management
          </h1>
          <p style={{ fontSize: '17px', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Meet the leadership and executive team driving India’s premier fintech platform, digital banking infrastructure, and last-mile partner network.
          </p>
        </div>
      </section>

      <div className="container--responsive" style={{ maxWidth: '1100px', margin: '0 auto', padding: '50px 20px 0' }}>
        
        {/* Board of Directors Featured Card */}
        <div style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <Building2 size={24} color="#0A2B5E" />
            <h2 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '26px', fontWeight: 800, color: '#0A2B5E', margin: 0 }}>
              Board of Directors
            </h2>
          </div>

          {leadershipList.map((leader) => (
            <div 
              key={leader.id}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(10, 43, 94, 0.08)',
                padding: '36px',
                display: 'flex',
                gap: '36px',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ flex: '0 0 240px', textAlign: 'center' }}>
                <div style={{ 
                  width: '210px', 
                  height: '210px', 
                  borderRadius: '50%', 
                  margin: '0 auto 16px', 
                  overflow: 'hidden', 
                  border: '5px solid #0A2B5E', 
                  boxShadow: '0 8px 24px rgba(10, 43, 94, 0.2)',
                  background: '#f1f5f9'
                }}>
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <span style={{ 
                  background: '#0A2B5E', 
                  color: '#ffffff', 
                  padding: '6px 16px', 
                  borderRadius: '20px', 
                  fontSize: '12.5px', 
                  fontWeight: 800,
                  display: 'inline-block'
                }}>
                  {leader.badge}
                </span>
              </div>

              <div style={{ flex: 1, minWidth: '300px' }}>
                <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '30px', fontWeight: 900, color: '#0A2B5E', margin: '0 0 6px' }}>
                  {leader.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  <span style={{ color: '#D9940A', fontWeight: 800, fontSize: '16px' }}>{leader.title}</span>
                  <span style={{ color: '#94a3b8' }}>•</span>
                  <span style={{ color: '#64748b', fontSize: '14px', fontWeight: 700 }}>{leader.din}</span>
                </div>

                <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', marginBottom: '22px' }}>
                  {leader.bio}
                </p>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '14px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '16px 20px',
                  borderRadius: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Mail size={16} color="#0A2B5E" />
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: 600 }}>{leader.email}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} color="#15803d" />
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: 600 }}>{leader.phone}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Award size={16} color="#D9940A" />
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: 600 }}>{leader.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Staff & Department Details */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <Users2 size={24} color="#0A2B5E" />
            <h2 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '26px', fontWeight: 800, color: '#0A2B5E', margin: 0 }}>
              Staff & Departmental Leadership
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {departmentStaff.map((dept, index) => (
              <div 
                key={index}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ 
                  fontFamily: "'Cera Pro', sans-serif", 
                  fontSize: '18px', 
                  fontWeight: 800, 
                  color: '#0A2B5E', 
                  borderBottom: '2px solid #e2e8f0', 
                  paddingBottom: '12px', 
                  marginBottom: '18px' 
                }}>
                  {dept.department}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
                  {dept.members.map((m, mIdx) => (
                    <div 
                      key={mIdx} 
                      style={{ 
                        background: '#f8fafc', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '14px', 
                        padding: '16px' 
                      }}
                    >
                      <h4 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>
                        {m.name}
                      </h4>
                      <p style={{ color: '#D9940A', fontSize: '13.5px', fontWeight: 700, margin: '0 0 8px' }}>
                        {m.role}
                      </p>
                      <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, margin: '0 0 12px' }}>
                        {m.responsibilities}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px', color: '#334155' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Mail size={14} color="#0A2B5E" />
                          <span>{m.email}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Phone size={14} color="#15803d" />
                          <span>{m.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
