import React from 'react';
import CorporateHero from '../components/corporate/CorporateHero';
import CorporateSolutions from '../components/corporate/CorporateSolutions';
import CorporateWhy from '../components/corporate/CorporateWhy';
import CorporateTestimonial from '../components/corporate/CorporateTestimonial';
import PartnersSection from '../components/PartnersSection';

export default function CorporatePage({ onOpenContact }) {
  return (
    <main className="corporate-page-wrapper">
      {/* 1. Corporate Hero with Video Loop */}
      <CorporateHero onOpenContact={onOpenContact} />

      {/* 2. Think Last Mile - 3 Expandable Video Solutions */}
      <CorporateSolutions onOpenContact={onOpenContact} />

      {/* 3. Why Mera Digital Pay for Enterprises Grid */}
      <CorporateWhy />

      {/* 4. Bajaj Finance Enterprise Testimonial */}
      <CorporateTestimonial />

      {/* 5. Banking & Enterprise Partners Marquee */}
      <PartnersSection />
    </main>
  );
}
