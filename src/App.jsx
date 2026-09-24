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
import VideoModal from './components/VideoModal';
import IncomeCalculatorModal from './components/IncomeCalculatorModal';
import JoinModal from './components/JoinModal';
import ContactExpertModal from './components/corporate/ContactExpertModal';

export default function App() {
  const getInitialSegment = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
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
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectSegment = (segment) => {
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
    
    window.history.pushState(null, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-wrapper">
      {/* Dynamic Header with Segment Switcher & Navigation */}
      <Header 
        activeSegment={activeSegment} 
        onSelectSegment={handleSelectSegment} 
      />

      {/* Dynamic Page Rendering */}
      {activeSegment === 'gff' ? (
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
      ) : activeSegment === 'features' ? (
        <FeaturesPage />
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
        />
      )}

      {/* Global Rich Footer */}
      <Footer />

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
