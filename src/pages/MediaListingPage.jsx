import React, { useState } from 'react';
import { 
  Camera, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Image as ImageIcon,
  Award,
  Users,
  PartyPopper,
  X
} from 'lucide-react';

import workplaceImg from '../assets/award-gptw-workplace.jpeg';
import womanLeaderImg from '../assets/campaign-dil-se-desi-woman.jpeg';
import retailerMeetImg from '../assets/campaign-dil-se-desi-retailer.jpeg';
import digitalNaariImg from '../assets/media-digital-naari-gujarat.jpeg';
import teamShgImg from '../assets/media-shg-dual-auth.jpeg';
import awardsImg from '../assets/award-mit-review.jpeg';

const galleryEvents = [
  {
    id: 1,
    title: 'Great Place to Work & Annual Team Celebration',
    category: 'Celebration',
    date: 'Annual Office Meet',
    location: 'Head Office, Bareilly',
    desc: 'Celebrating our company culture, high employee trust, and team milestones with all department heads and staff members.',
    image: workplaceImg,
    badge: 'Annual Function'
  },
  {
    id: 2,
    title: 'Women Digital Entrepreneurship & Naari Shakti Meet',
    category: 'Event',
    date: 'Field Conference',
    location: 'Gujarat & Maharashtra Hub',
    desc: 'Empowering women Banking Mitras and Lakhpati Didi network with digital training workshops and honor awards.',
    image: digitalNaariImg,
    badge: 'Empowerment Meet'
  },
  {
    id: 3,
    title: 'National Retailer Partner & Distributor Summit',
    category: 'Partner Summit',
    date: 'Quarterly Meet',
    location: 'Regional Center, Bareilly',
    desc: 'Recognizing top performing Retailers, Master Distributors and Franchise owners across North & West India.',
    image: retailerMeetImg,
    badge: 'Partner Summit'
  },
  {
    id: 4,
    title: 'FinTech Innovation & Technology Milestone Award',
    category: 'Awards',
    date: 'Excellence Ceremony',
    location: 'Corporate HQ',
    desc: 'Company recognized for pioneering branchless banking, AEPS micro-banking and last-mile commerce infrastructure.',
    image: awardsImg,
    badge: 'Company Award'
  },
  {
    id: 5,
    title: 'Self-Help Group (SHG) & Rural Banking Integration Drive',
    category: 'Field Drive',
    date: 'Special Initiative',
    location: 'Rural Expansion Hub',
    desc: 'Field team implementing biometric dual-authentication cash access for self-help group women.',
    image: teamShgImg,
    badge: 'Field Program'
  },
  {
    id: 6,
    title: 'Leadership & Community Outreach Workshop',
    category: 'Workshop',
    date: 'Strategic Session',
    location: 'Corporate Office',
    desc: 'Management workshop on scaling customer care operations, UPI soundbox deployments, and partner satisfaction.',
    image: womanLeaderImg,
    badge: 'Team Workshop'
  }
];

export default function MediaListingPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredEvents = filter === 'all'
    ? galleryEvents
    : galleryEvents.filter(e => e.category.toLowerCase().includes(filter));

  return (
    <main className="gallery-events-page-main" style={{ background: '#f8fafc', paddingBottom: '90px' }}>
      
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(135deg, #0A2B5E 0%, #0D3B7A 60%, #051937 100%)', color: '#ffffff', padding: '60px 0 50px' }}>
        <div className="container--responsive" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(217, 148, 10, 0.18)', border: '1px solid #D9940A', padding: '6px 18px', borderRadius: '30px', color: '#F5C842', fontSize: '13.5px', fontWeight: 800, marginBottom: '16px' }}>
            <Camera size={16} />
            <span>OFFICE EVENTS, FUNCTIONS & PHOTO GALLERY</span>
          </div>
          <h1 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '40px', fontWeight: 900, margin: '0 0 14px', letterSpacing: '-0.5px' }}>
            Office Events & Celebrations Gallery
          </h1>
          <p style={{ fontSize: '17px', color: '#cbd5e1', maxWidth: '780px', margin: '0 auto', lineHeight: 1.6 }}>
            Glimpses of life at Mera Digital Pay — our corporate events, partner conferences, team celebrations, and field empowerment workshops.
          </p>

          {/* Filter Chips */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
            {['all', 'celebration', 'summit', 'awards', 'event'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? '#D9940A' : 'rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '7px 18px',
                  borderRadius: '20px',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  textTransform: 'capitalize',
                  cursor: 'pointer'
                }}
              >
                {cat === 'all' ? 'All Photos & Events' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="container--responsive" style={{ maxWidth: '1100px', margin: '0 auto', padding: '50px 20px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
          {filteredEvents.map((item) => (
            <div 
              key={item.id}
              style={{
                background: '#ffffff',
                borderRadius: '22px',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 6px 24px rgba(10, 43, 94, 0.06)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
              onClick={() => setSelectedPhoto(item)}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#e2e8f0' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s ease' }} 
                />
                <span style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  right: '12px', 
                  background: 'rgba(10, 43, 94, 0.85)', 
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff', 
                  fontSize: '11.5px', 
                  fontWeight: 800, 
                  padding: '4px 12px', 
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  {item.badge}
                </span>
              </div>

              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '12.5px', color: '#64748b', marginBottom: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} color="#0A2B5E" /> {item.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} color="#15803d" /> {item.location}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0A2B5E', margin: '0 0 10px', lineHeight: 1.4 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '6px', color: '#D9940A', fontSize: '13px', fontWeight: 800 }}>
                  <ImageIcon size={14} /> Click to View Full Image
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              maxWidth: '750px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 30px 70px rgba(0,0,0,0.4)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '18px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0A2B5E', margin: '0 0 2px' }}>
                  {selectedPhoto.title}
                </h4>
                <span style={{ fontSize: '13px', color: '#64748b' }}>{selectedPhoto.location} • {selectedPhoto.date}</span>
              </div>
              <button 
                type="button" 
                onClick={() => setSelectedPhoto(null)}
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={20} color="#0f172a" />
              </button>
            </div>
            <div style={{ padding: '20px', overflowY: 'auto', textAlign: 'center' }}>
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.title} 
                style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain', borderRadius: '14px' }} 
              />
              <p style={{ marginTop: '14px', fontSize: '14px', color: '#475569', textAlign: 'left', lineHeight: 1.6 }}>
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
