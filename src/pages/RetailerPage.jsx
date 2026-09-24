import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import DistributionAwards from '../components/DistributionAwards';
import SmartSolutions from '../components/SmartSolutions';
import PanIndiaStats from '../components/PanIndiaStats';
import PayNearbyAdvantage from '../components/PayNearbyAdvantage';
import CaseStudySection from '../components/CaseStudySection';
import PartnersSection from '../components/PartnersSection';

export default function RetailerPage({ onOpenVideo, onOpenJoin }) {
  return (
    <main>
      {/* 1. Top Hero Slider */}
      <HeroSlider 
        onOpenJoin={onOpenJoin} 
        onOpenVideo={onOpenVideo} 
      />

      {/* 2. One App multiple services Header + Interactive Service Carousel */}
      <ServicesSection 
        onOpenVideo={onOpenVideo} 
        onOpenJoin={onOpenJoin} 
      />

      {/* 3. Distribution as-a-Service Awards */}
      <DistributionAwards />

      {/* 4. Smart Solutions (Retailer, Distributor, SHG) */}
      <SmartSolutions 
        onOpenJoin={onOpenJoin} 
      />

      {/* 5. Pan-India Reach & Metrics Counter */}
      <PanIndiaStats />

      {/* 6. Mera Digital Pay Advantage Grid + 2 Feature Cards */}
      <PayNearbyAdvantage 
        onOpenJoin={onOpenJoin} 
      />

      {/* 7. Case Study Section with Video Embed */}
      <CaseStudySection 
        onOpenVideo={onOpenVideo} 
      />

      {/* 8. Banking Partners Infinite Marquee & Download App */}
      <PartnersSection />
    </main>
  );
}
