import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RetailerPage from './pages/RetailerPage';
import CorporatePage from './pages/CorporatePage';
import SolutionsPage from './pages/SolutionsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import FeaturesPage from './pages/FeaturesPage';
import MediaListingPage from './pages/MediaListingPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import FaqsPage from './pages/FaqsPage';
import EventsPage from './pages/EventsPage';
import CareersLearningPage from './pages/CareersLearningPage';
import GffPage from './pages/GffPage';
import PolicyPage from './pages/PolicyPage';
import VideoModal from './components/VideoModal';
import IncomeCalculatorModal from './components/IncomeCalculatorModal';
import JoinModal from './components/JoinModal';
import ContactExpertModal from './components/corporate/ContactExpertModal';
import IncomeCalculatorPage from './pages/IncomeCalculatorPage';

export default function App() {
  const getInitialSegment = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('income-calculator') || path.includes('calculator')) return 'income-calculator';
      if (path.includes('b2b-chargeback')) return 'b2b-chargeback';
      if (path.includes('chargeback') || path.includes('adhikari')) return 'chargeback';
      if (path.includes('refund')) return 'refund';
      if (path.includes('privacy')) return 'privacy';
      if (path.includes('terms')) return 'terms';
      if (path.includes('policy')) return 'terms';
      if (path.includes('gff')) return 'gff';
      if (path.includes('careers-learning') || path.includes('careers')) return 'careers-learning';
      if (path.includes('events')) return 'events';
      if (path.includes('faqs') || path.includes('faq')) return 'faqs';
      if (path.includes('contact-us') || path.includes('contact')) return 'contact-us';
      if (path.includes('about-us') || path.includes('about')) return 'about-us';
      if (path.includes('media-listing') || path.includes('media')) return 'media';
      if (path.includes('features')) return 'features';
      if (path.includes('case-studies')) return 'case-studies';
      if (path.includes('solutions')) return 'solutions';
      if (path.includes('corporate')) return 'corporate';
    }
    return 'retailer';
  };

  const [activeSegment, setActiveSegment] = useState(getInitialSegment);
  const [activeVideoCode, setActiveVideoCode] = useState(null);
  const [isIncomeCalcOpen, setIsIncomeCalcOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isContactExpertOpen, setIsContactExpertOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setActiveSegment(getInitialSegment());
    };
    window.addEventListener('popstate', handlePopState);
    
    // Check if initial URL has hash
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectSegment = (segment, targetHash = null) => {
    setActiveSegment(segment);
    let newPath = '/';
    if (segment === 'corporate') newPath = '/corporate';
    if (segment === 'solutions') newPath = '/solutions';
    if (segment === 'case-studies') newPath = '/case-studies';
    if (segment === 'features') newPath = '/features';
    if (segment === 'media') newPath = '/media-listing';
    if (segment === 'about-us') newPath = '/about-us';
    if (segment === 'contact-us') newPath = '/contact-us';
    if (segment === 'faqs') newPath = '/faqs';
    if (segment === 'events') newPath = '/events';
    if (segment === 'careers-learning') newPath = '/careers-learning';
    if (segment === 'gff') newPath = '/gff';
    if (segment === 'terms') newPath = '/terms-and-conditions';
    if (segment === 'privacy') newPath = '/privacy-policy';
    if (segment === 'refund') newPath = '/refund-and-cancellation';
    if (segment === 'b2b-chargeback') newPath = '/b2b-chargeback';
    if (segment === 'income-calculator') newPath = '/income-calculator';
    
    if (targetHash) {
      newPath = `${newPath}#${targetHash}`;
    }
    
    window.history.pushState(null, '', newPath);
    
    if (targetHash) {
      setTimeout(() => {
        const el = document.getElementById(targetHash);
        if (el) {
          const yOffset = -70; // Header height offset
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isPolicyRoute = ['terms', 'privacy', 'refund', 'chargeback', 'b2b-chargeback'].includes(activeSegment);

  return (
    <div className="site-wrapper">
      {/* Dynamic Header with Segment Switcher & Navigation */}
      <Header 
        activeSegment={activeSegment} 
        onSelectSegment={handleSelectSegment} 
        onOpenJoin={() => setIsJoinOpen(true)}
      />

      {/* Dynamic Page Rendering */}
      {isPolicyRoute ? (
        <PolicyPage 
          initialPolicy={activeSegment} 
          onSelectPolicy={(policyId) => handleSelectSegment(policyId)}
        />
      ) : activeSegment === 'income-calculator' ? (
        <IncomeCalculatorPage 
          onOpenJoin={() => setIsJoinOpen(true)}
        />
      ) : activeSegment === 'gff' ? (
        <GffPage />
      ) : activeSegment === 'careers-learning' ? (
        <CareersLearningPage />
      ) : activeSegment === 'events' ? (
        <EventsPage />
      ) : activeSegment === 'faqs' ? (
        <FaqsPage />
      ) : activeSegment === 'contact-us' ? (
        <ContactUsPage />
      ) : activeSegment === 'about-us' ? (
        <AboutUsPage />
      ) : activeSegment === 'media' ? (
        <MediaListingPage />
      ) : activeSegment === 'case-studies' ? (
        <CaseStudiesPage />
      ) : activeSegment === 'solutions' ? (
        <SolutionsPage 
          onOpenContact={() => setIsContactExpertOpen(true)}
        />
      ) : activeSegment === 'corporate' ? (
        <CorporatePage 
          onOpenContact={() => setIsContactExpertOpen(true)}
        />
      ) : (
        <RetailerPage 
          onOpenVideo={(code) => setActiveVideoCode(code)}
          onOpenJoin={() => setIsJoinOpen(true)}
          onOpenIncomeCalc={() => setIsIncomeCalcOpen(true)}
        />
      )}

      {/* Global Rich Footer */}
      <Footer onSelectSegment={handleSelectSegment} />

      {/* Video Player Modal */}
      <VideoModal 
        videoCode={activeVideoCode} 
        onClose={() => setActiveVideoCode(null)} 
      />

      {/* Retailer Income Calculator Modal */}
      <IncomeCalculatorModal 
        isOpen={isIncomeCalcOpen} 
        onClose={() => setIsIncomeCalcOpen(false)}
        onOpenJoin={() => setIsJoinOpen(true)}
      />

      {/* Join Mera Digital Pay Modal */}
      <JoinModal 
        isOpen={isJoinOpen} 
        onClose={() => setIsJoinOpen(false)} 
      />

      {/* Corporate Contact Expert Modal */}
      <ContactExpertModal 
        isOpen={isContactExpertOpen}
        onClose={() => setIsContactExpertOpen(false)}
      />
    </div>
  );
}
