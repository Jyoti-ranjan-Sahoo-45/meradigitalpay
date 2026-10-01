import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import DistributionAwards from '../components/DistributionAwards';
import SmartSolutions from '../components/SmartSolutions';
import PanIndiaStats from '../components/PanIndiaStats';
import MeraDigitalPayAdvantage from '../components/MeraDigitalPayAdvantage';
import SuccessStories from '../components/SuccessStories';
import CaseStudySection from '../components/CaseStudySection';
import PartnersSection from '../components/PartnersSection';

export default function RetailerPage({ onOpenVideo, onOpenJoin, onOpenIncomeCalc }) {
  return (
    <main>
      {/* 1. Top Hero Slider */}
      <HeroSlider 
        onOpenJoin={onOpenJoin} 
        onOpenIncomeCalc={onOpenIncomeCalc}
        onOpenVideo={onOpenVideo} 
      />

      {/* 2. One App multiple services Header + Interactive Service Carousel */}
      <ServicesSection 
        onOpenVideo={onOpenVideo} 
        onOpenJoin={onOpenJoin} 
      />

      {/* 3. Distribution as-a-Service Awards */}
      {/* <DistributionAwards /> */}

      {/* 4. Smart Solutions (Retailer, Distributor, Franchise, B2B, API) */}
      <SmartSolutions 
        onOpenJoin={onOpenJoin} 
        onOpenIncomeCalc={onOpenIncomeCalc}
      />

      {/* 5. Pan-India Reach & Partner Network Counter */}
      <PanIndiaStats />

      {/* 6. Mera Digital Pay Advantage Grid */}
      <MeraDigitalPayAdvantage 
        onOpenJoin={onOpenJoin} 
      />

      {/* 7. Success Story (सक्सेस स्टोरी) Customer Reviews */}
      <SuccessStories 
        onOpenJoin={onOpenJoin} 
      />

      {/* 8. Case Study Section with Video Embed */}
      {/* <CaseStudySection 
        onOpenVideo={onOpenVideo} 
      /> */}

      {/* 9. Banking Partners Infinite Marquee & Download App */}
      <PartnersSection />
    </main>
  );
}
