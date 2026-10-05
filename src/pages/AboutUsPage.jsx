import React from 'react';
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Users2, 
  Sparkles, 
  Award,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import directorImg from '../assets/director-rohitash.png';

export default function AboutUsPage() {
  return (
    <main className="about-us-clean-page" style={{ background: '#f8fafc', paddingBottom: '90px' }}>
      
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(135deg, #0A2B5E 0%, #0D3B7A 60%, #051937 100%)', color: '#ffffff', padding: '60px 0 50px' }}>
        <div className="container--responsive" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(217, 148, 10, 0.18)', border: '1px solid #D9940A', padding: '6px 18px', borderRadius: '30px', color: '#F5C842', fontSize: '13.5px', fontWeight: 800, marginBottom: '16px' }}>
            <Sparkles size={16} />
            <span>ABOUT MERA DIGITAL PAY</span>
          </div>
          <h1 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '40px', fontWeight: 900, margin: '0 0 14px', letterSpacing: '-0.5px' }}>
            Empowering Bharat Through Digital Financial Inclusion
          </h1>
          <p style={{ fontSize: '17px', color: '#cbd5e1', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            Mera Digital Pay is India’s next-generation digital financial platform, bridging the banking gap by turning neighborhood retail stores into full-service Digital Banking Kendras.
          </p>
        </div>
      </section>

      <div className="container--responsive" style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px 0' }}>
        
        {/* Core Mission & Vision 2-Column */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          
          <div style={{ background: '#ffffff', padding: '32px', borderRadius: '22px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 18px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#eff6ff', color: '#0A2B5E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Compass size={24} />
            </div>
            <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '22px', fontWeight: 800, color: '#0A2B5E', margin: '0 0 12px' }}>
              Our Vision
            </h3>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, margin: 0 }}>
              To build an interconnected digital ecosystem where every citizen in India, from urban hubs to rural villages, has instant, secure, and doorstep access to banking, bill payments, and financial services.
            </p>
          </div>

          <div style={{ background: '#ffffff', padding: '32px', borderRadius: '22px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 18px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#fef3c7', color: '#D9940A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Target size={24} />
            </div>
            <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '22px', fontWeight: 800, color: '#0A2B5E', margin: '0 0 12px' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, margin: 0 }}>
              To empower local retailers, distributors, and entrepreneurs with cutting-edge fintech infrastructure, zero working capital requirements, and sustainable high-earning business opportunities.
            </p>
          </div>

        </div>

        {/* Founder & Managing Director Note */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: '24px', 
          border: '1.5px solid #e2e8f0', 
          boxShadow: '0 8px 30px rgba(10, 43, 94, 0.07)', 
          padding: '36px',
          display: 'flex',
          gap: '30px',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <div style={{ flex: '0 0 180px', textAlign: 'center' }}>
            <img 
              src={directorImg} 
              alt="Shri Rohit Singh Thakur" 
              style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #0A2B5E', boxShadow: '0 6px 18px rgba(0,0,0,0.15)' }} 
            />
          </div>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <span style={{ color: '#D9940A', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Message from Leadership
            </span>
            <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '24px', fontWeight: 900, color: '#0A2B5E', margin: '4px 0 12px' }}>
              Shri Rohit Singh Thakur
            </h3>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, margin: '0 0 14px', fontStyle: 'italic' }}>
              "Our pledge is simple: 'Daudega To Mera Desh Daudega'. When our local shopkeepers and youth are equipped with modern digital tools and trusted banking connectivity, our entire nation moves forward with dignity and prosperity."
            </p>
            <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#0A2B5E' }}>
              Managing Director & Founder, Mera Digital Pay
            </span>
          </div>
        </div>

        {/* Core Values 4-Pillar Grid */}
        <div>
          <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '24px', fontWeight: 800, color: '#0A2B5E', textAlign: 'center', marginBottom: '24px' }}>
            Our Guiding Values
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
            {[
              { title: 'Trust & Transparency', desc: '100% legal compliance, automated settlements, and zero hidden charges.', icon: ShieldCheck, color: '#0A2B5E' },
              { title: 'Partner First', desc: 'Dedicated 24/7 technical support and highest commission structures.', icon: HeartHandshake, color: '#15803d' },
              { title: 'Cutting-Edge Tech', desc: 'High-uptime cloud APIs, instant payouts, and 256-bit encryption.', icon: Award, color: '#D9940A' },
              { title: 'Pan-India Reach', desc: 'Serving every district, town, and village with equal reliability.', icon: Users2, color: '#7c3aed' }
            ].map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} style={{ background: '#ffffff', padding: '22px', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#f8fafc', color: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', border: '1px solid #e2e8f0' }}>
                    <IconComp size={22} />
                  </div>
                  <h4 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '16px', fontWeight: 800, color: '#0A2B5E', margin: '0 0 6px' }}>
                    {v.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}
