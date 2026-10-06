import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Slidingtext from './components/Slidingtext';

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
import IncomeCalculatorPage from './pages/IncomeCalculatorPage';
import Products from './pages/Products';

import VideoModal from './components/VideoModal';
import IncomeCalculatorModal from './components/IncomeCalculatorModal';
import JoinModal from './components/JoinModal';
import ContactExpertModal from './components/corporate/ContactExpertModal';

/* =========================================================
   BANKING SERVICES
========================================================= */

import Aeps from './services/Aeps';
import MoneyTransferDmt from './services/Moneytransferdmt';
import MicroAtmWithdrawal from './services/Microatmwithdrawal';

/* =========================================================
   UTILITY & BILL PAYMENT
========================================================= */

import MobileDthRecharge from './services/Mobiledthrecharge';
import Bbps from './services/Bbps';
import OttRecharge from './services/OttRecharge';

/* =========================================================
   E-GOVERNANCE
========================================================= */

import PanCard from './services/PanCard';
import ItrFiling from './services/ItrFiling';
import GstRegistration from './services/GstRegistration';
import MsmeRegistration from './services/MsmeRegistration';

/* =========================================================
   TRAVEL SERVICES
========================================================= */

import IrctcTicketBooking from './services/IrctcTicketBooking';
import FlightBooking from './services/FlightBooking';
import BusBooking from './services/BusBooking';
import HotelBooking from './services/HotelBooking';

/* =========================================================
   NEO BANKING
========================================================= */

import DigitalBankAccount from './services/DigitalBankAccount';
import PhysicalCard from './services/PhysicalCard';
import UpiPayment from './services/UpiPayment';
import Loan from './services/Loan';
import Investment from './services/Investment';

/* =========================================================
   INSURANCE
========================================================= */

import HealthInsurance from './services/HealthInsurance';
import MotorInsurance from './services/MotorInsurance';
import ShopInsurance from './services/ShopInsurance';
import DeviceInsurance from './services/DeviceInsurance';

/* =========================================================
   ACCOUNT SERVICES
========================================================= */

import AccountOpening from './services/AccountOpening';
import CreditCardApply from './services/CreditCardApply';
import SbmFdCardApply from './services/SbmFdCardApply';

/* =========================================================
   BUSINESS SERVICES
========================================================= */

import NsdlBcApply from './services/NsdlBcApply';
import KotakBcApply from './services/KotakBcApply';
import CmsAirtel from './services/CmsAirtel';
import Payout from './services/Payout';
import Login from './pages/Login';
import Register from './pages/Register';


export default function App() {

  /* =========================================================
     GET INITIAL ROUTE
  ========================================================= */

  const getInitialSegment = () => {

    if (typeof window !== 'undefined') {

      const path = window.location.pathname.toLowerCase();

      /* =====================================================
         BANKING SERVICES
      ===================================================== */

      if (path === '/services/aeps') {
        return 'aeps';
      }

      if (path === '/services/money-transfer-dmt') {
        return 'money-transfer-dmt';
      }

      if (path === '/services/micro-atm-withdrawal') {
        return 'micro-atm-withdrawal';
      }


      /* =====================================================
         UTILITY & BILL PAYMENT
      ===================================================== */

      if (path === '/services/mobile-dth-recharge') {
        return 'mobile-dth-recharge';
      }

      if (path === '/services/bbps') {
        return 'bbps';
      }

      if (path === '/services/ott-recharge') {
        return 'ott-recharge';
      }


      /* =====================================================
         E-GOVERNANCE
      ===================================================== */

      if (path === '/services/pan-card') {
        return 'pan-card';
      }

      if (path === '/services/itr-filing') {
        return 'itr-filing';
      }

      if (path === '/services/gst-registration') {
        return 'gst-registration';
      }

      if (path === '/services/msme-registration') {
        return 'msme-registration';
      }


      /* =====================================================
         TRAVEL SERVICES
      ===================================================== */

      if (path === '/services/irctc-ticket-booking') {
        return 'irctc-ticket-booking';
      }

      if (path === '/services/flight-booking') {
        return 'flight-booking';
      }

      if (path === '/services/bus-booking') {
        return 'bus-booking';
      }

      if (path === '/services/hotel-booking') {
        return 'hotel-booking';
      }


      /* =====================================================
         NEO BANKING
      ===================================================== */

      if (path === '/services/digital-bank-account') {
        return 'digital-bank-account';
      }

      if (path === '/services/physical-card') {
        return 'physical-card';
      }

      if (path === '/services/upi-payment') {
        return 'upi-payment';
      }

      if (path === '/services/loan') {
        return 'loan';
      }

      if (path === '/services/investment') {
        return 'investment';
      }


      /* =====================================================
         INSURANCE
      ===================================================== */

      if (path === '/services/health-insurance') {
        return 'health-insurance';
      }

      if (path === '/services/motor-insurance') {
        return 'motor-insurance';
      }

      if (path === '/services/shop-insurance') {
        return 'shop-insurance';
      }

      if (path === '/services/device-insurance') {
        return 'device-insurance';
      }


      /* =====================================================
         ACCOUNT SERVICES
      ===================================================== */

      if (path === '/services/account-opening') {
        return 'account-opening';
      }

      if (path === '/services/credit-card-apply') {
        return 'credit-card-apply';
      }

      if (path === '/services/sbm-fd-card-apply') {
        return 'sbm-fd-card-apply';
      }


      /* =====================================================
         BUSINESS SERVICES
      ===================================================== */

      if (path === '/services/nsdl-bc-apply') {
        return 'nsdl-bc-apply';
      }

      if (path === '/services/kotak-bc-apply') {
        return 'kotak-bc-apply';
      }

      if (path === '/services/cms-airtel') {
        return 'cms-airtel';
      }

      if (path === '/services/payout') {
        return 'payout';
      }


      /* =====================================================
         EXISTING ROUTES
      ===================================================== */

      if (path === '/login') {
        return 'login';
      }

      if (path === '/register') {
        return 'register';
      }

      if (
        path.includes('income-calculator') ||
        path.includes('calculator')
      ) {
        return 'income-calculator';
      }

      if (path.includes('b2b-chargeback')) {
        return 'b2b-chargeback';
      }

      if (
        path.includes('chargeback') ||
        path.includes('adhikari')
      ) {
        return 'chargeback';
      }

      if (path.includes('refund')) {
        return 'refund';
      }

      if (path.includes('privacy')) {
        return 'privacy';
      }

      if (path.includes('terms')) {
        return 'terms';
      }

      if (path.includes('policy')) {
        return 'terms';
      }

      if (path.includes('gff')) {
        return 'gff';
      }

      if (
        path.includes('careers-learning') ||
        path.includes('careers')
      ) {
        return 'careers-learning';
      }

      if (path.includes('events')) {
        return 'events';
      }

      if (
        path.includes('faqs') ||
        path.includes('faq')
      ) {
        return 'faqs';
      }

      if (
        path.includes('contact-us') ||
        path.includes('contact')
      ) {
        return 'contact-us';
      }

      if (
        path.includes('about-us') ||
        path.includes('about')
      ) {
        return 'about-us';
      }

      if (
        path.includes('media-listing') ||
        path.includes('media')
      ) {
        return 'media';
      }

      if (path.includes('features')) {
        return 'features';
      }

      if (path.includes('case-studies')) {
        return 'case-studies';
      }

      if (path.includes('solutions')) {
        return 'solutions';
      }

      if (path.includes('corporate')) {
        return 'corporate';
      }
    }

    return 'retailer';
  };


  /* =========================================================
     STATES
  ========================================================= */

  const [activeSegment, setActiveSegment] =
    useState(getInitialSegment);

  const [activeVideoCode, setActiveVideoCode] =
    useState(null);

  const [isIncomeCalcOpen, setIsIncomeCalcOpen] =
    useState(false);

  const [isJoinOpen, setIsJoinOpen] =
    useState(false);

  const [isContactExpertOpen, setIsContactExpertOpen] =
    useState(false);


  /* =========================================================
     HANDLE BROWSER BACK / FORWARD
  ========================================================= */

  useEffect(() => {

    const handlePopState = () => {
      setActiveSegment(getInitialSegment());
    };

    window.addEventListener(
      'popstate',
      handlePopState
    );


    /* =======================================================
       CHECK INITIAL URL HASH
    ======================================================= */

    if (window.location.hash) {

      const hash =
        window.location.hash.replace('#', '');

      setTimeout(() => {

        const el =
          document.getElementById(hash);

        if (el) {

          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

        }

      }, 300);
    }


    return () => {

      window.removeEventListener(
        'popstate',
        handlePopState
      );

    };

  }, []);


  /* =========================================================
     HANDLE NAVIGATION
  ========================================================= */

  const handleSelectSegment = (
    segment,
    targetHash = null
  ) => {

    setActiveSegment(segment);

    let newPath = '/';

    if (segment === 'login') {
      newPath = '/login';
    }

    if (segment === 'register') {
      newPath = '/register';
    }

    /* =======================================================
       BANKING SERVICES
    ======================================================= */

    if (segment === 'aeps') {
      newPath = '/services/aeps';
    }

    if (segment === 'money-transfer-dmt') {
      newPath = '/services/money-transfer-dmt';
    }

    if (segment === 'micro-atm-withdrawal') {
      newPath = '/services/micro-atm-withdrawal';
    }


    /* =======================================================
       UTILITY & BILL PAYMENT
    ======================================================= */

    if (segment === 'mobile-dth-recharge') {
      newPath = '/services/mobile-dth-recharge';
    }

    if (segment === 'bbps') {
      newPath = '/services/bbps';
    }

    if (segment === 'ott-recharge') {
      newPath = '/services/ott-recharge';
    }


    /* =======================================================
       E-GOVERNANCE
    ======================================================= */

    if (segment === 'pan-card') {
      newPath = '/services/pan-card';
    }

    if (segment === 'itr-filing') {
      newPath = '/services/itr-filing';
    }

    if (segment === 'gst-registration') {
      newPath = '/services/gst-registration';
    }

    if (segment === 'msme-registration') {
      newPath = '/services/msme-registration';
    }


    /* =======================================================
       TRAVEL SERVICES
    ======================================================= */

    if (segment === 'irctc-ticket-booking') {
      newPath = '/services/irctc-ticket-booking';
    }

    if (segment === 'flight-booking') {
      newPath = '/services/flight-booking';
    }

    if (segment === 'bus-booking') {
      newPath = '/services/bus-booking';
    }

    if (segment === 'hotel-booking') {
      newPath = '/services/hotel-booking';
    }


    /* =======================================================
       NEO BANKING
    ======================================================= */

    if (segment === 'digital-bank-account') {
      newPath = '/services/digital-bank-account';
    }

    if (segment === 'physical-card') {
      newPath = '/services/physical-card';
    }

    if (segment === 'upi-payment') {
      newPath = '/services/upi-payment';
    }

    if (segment === 'loan') {
      newPath = '/services/loan';
    }

    if (segment === 'investment') {
      newPath = '/services/investment';
    }


    /* =======================================================
       INSURANCE
    ======================================================= */

    if (segment === 'health-insurance') {
      newPath = '/services/health-insurance';
    }

    if (segment === 'motor-insurance') {
      newPath = '/services/motor-insurance';
    }

    if (segment === 'shop-insurance') {
      newPath = '/services/shop-insurance';
    }

    if (segment === 'device-insurance') {
      newPath = '/services/device-insurance';
    }


    /* =======================================================
       ACCOUNT SERVICES
    ======================================================= */

    if (segment === 'account-opening') {
      newPath = '/services/account-opening';
    }

    if (segment === 'credit-card-apply') {
      newPath = '/services/credit-card-apply';
    }

    if (segment === 'sbm-fd-card-apply') {
      newPath = '/services/sbm-fd-card-apply';
    }


    /* =======================================================
       BUSINESS SERVICES
    ======================================================= */

    if (segment === 'nsdl-bc-apply') {
      newPath = '/services/nsdl-bc-apply';
    }

    if (segment === 'kotak-bc-apply') {
      newPath = '/services/kotak-bc-apply';
    }

    if (segment === 'cms-airtel') {
      newPath = '/services/cms-airtel';
    }

    if (segment === 'payout') {
      newPath = '/services/payout';
    }


    /* =======================================================
       EXISTING ROUTES
    ======================================================= */

    if (segment === 'corporate') {
      newPath = '/corporate';
    }

    if (segment === 'solutions') {
      newPath = '/solutions';
    }

    if (segment === 'case-studies') {
      newPath = '/case-studies';
    }

    if (segment === 'features') {
      newPath = '/features';
    }

    if (segment === 'media') {
      newPath = '/media-listing';
    }

    if (segment === 'about-us') {
      newPath = '/about-us';
    }

    if (segment === 'contact-us') {
      newPath = '/contact-us';
    }

    if (segment === 'faqs') {
      newPath = '/faqs';
    }

    if (segment === 'events') {
      newPath = '/events';
    }

    if (segment === 'careers-learning') {
      newPath = '/careers-learning';
    }

    if (segment === 'gff') {
      newPath = '/gff';
    }

    if (segment === 'terms') {
      newPath = '/terms-and-conditions';
    }

    if (segment === 'privacy') {
      newPath = '/privacy-policy';
    }

    if (segment === 'refund') {
      newPath = '/refund-and-cancellation';
    }

    if (segment === 'b2b-chargeback') {
      newPath = '/b2b-chargeback';
    }

    if (segment === 'income-calculator') {
      newPath = '/income-calculator';
    }


    /* =======================================================
       HASH
    ======================================================= */

    if (targetHash) {

      newPath =
        `${newPath}#${targetHash}`;

    }


    /* =======================================================
       UPDATE URL
    ======================================================= */

    window.history.pushState(
      null,
      '',
      newPath
    );


    /* =======================================================
       SCROLL
    ======================================================= */

    if (targetHash) {

      setTimeout(() => {

        const el =
          document.getElementById(targetHash);

        if (el) {

          const yOffset = -70;

          const y =
            el.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({
            top: y,
            behavior: 'smooth',
          });

        }

      }, 150);

    } else {

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    }

  };


  /* =========================================================
     POLICY ROUTES
  ========================================================= */

  const isPolicyRoute = [
    'terms',
    'privacy',
    'refund',
    'chargeback',
    'b2b-chargeback',
  ].includes(activeSegment);


  /* =========================================================
     RENDER
  ========================================================= */

  return (

    <div className="site-wrapper">

      {/* Dynamic Header */}

      <Header
        activeSegment={activeSegment}
        onSelectSegment={handleSelectSegment}
        onOpenJoin={() => setIsJoinOpen(true)}
      />


      {/* Sliding Text */}

      <Slidingtext />


      {/* =====================================================
          PAGE RENDERING
      ===================================================== */}

      {isPolicyRoute ? (

        <PolicyPage
          initialPolicy={activeSegment}
          onSelectPolicy={(policyId) =>
            handleSelectSegment(policyId)
          }
        />

      ) : activeSegment === 'income-calculator' ? (

        <IncomeCalculatorPage
          onOpenJoin={() =>
            setIsJoinOpen(true)
          }
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
          onOpenContact={() =>
            setIsContactExpertOpen(true)
          }
        />

      ) : activeSegment === 'products' ? (

        <Products
          onOpenContact={() =>
            setIsContactExpertOpen(true)
          }
        />
      ) : activeSegment === 'login' ? (

        <Login
          onOpenContact={() =>
            setIsContactExpertOpen(true)
          }
        />
      ) : activeSegment === 'register' ? (

        <Register
          onOpenContact={() =>
            setIsContactExpertOpen(true)
          }
        />

      ) : activeSegment === 'corporate' ? (

        <CorporatePage
          onOpenContact={() =>
            setIsContactExpertOpen(true)
          }
        />

      /* =====================================================
         BANKING SERVICES
      ===================================================== */

      ) : activeSegment === 'aeps' ? (

        <Aeps />

      ) : activeSegment === 'money-transfer-dmt' ? (

        <MoneyTransferDmt />

      ) : activeSegment === 'micro-atm-withdrawal' ? (

        <MicroAtmWithdrawal />


      /* =====================================================
         UTILITY & BILL PAYMENT
      ===================================================== */

      ) : activeSegment === 'mobile-dth-recharge' ? (

        <MobileDthRecharge />

      ) : activeSegment === 'bbps' ? (

        <Bbps />

      ) : activeSegment === 'ott-recharge' ? (

        <OttRecharge />


      /* =====================================================
         E-GOVERNANCE
      ===================================================== */

      ) : activeSegment === 'pan-card' ? (

        <PanCard />

      ) : activeSegment === 'itr-filing' ? (

        <ItrFiling />

      ) : activeSegment === 'gst-registration' ? (

        <GstRegistration />

      ) : activeSegment === 'msme-registration' ? (

        <MsmeRegistration />


      /* =====================================================
         TRAVEL SERVICES
      ===================================================== */

      ) : activeSegment === 'irctc-ticket-booking' ? (

        <IrctcTicketBooking />

      ) : activeSegment === 'flight-booking' ? (

        <FlightBooking />

      ) : activeSegment === 'bus-booking' ? (

        <BusBooking />

      ) : activeSegment === 'hotel-booking' ? (

        <HotelBooking />


      /* =====================================================
         NEO BANKING
      ===================================================== */

      ) : activeSegment === 'digital-bank-account' ? (

        <DigitalBankAccount />

      ) : activeSegment === 'physical-card' ? (

        <PhysicalCard />

      ) : activeSegment === 'upi-payment' ? (

        <UpiPayment />

      ) : activeSegment === 'loan' ? (

        <Loan />

      ) : activeSegment === 'investment' ? (

        <Investment />


      /* =====================================================
         INSURANCE
      ===================================================== */

      ) : activeSegment === 'health-insurance' ? (

        <HealthInsurance />

      ) : activeSegment === 'motor-insurance' ? (

        <MotorInsurance />

      ) : activeSegment === 'shop-insurance' ? (

        <ShopInsurance />

      ) : activeSegment === 'device-insurance' ? (

        <DeviceInsurance />


      /* =====================================================
         ACCOUNT SERVICES
      ===================================================== */

      ) : activeSegment === 'account-opening' ? (

        <AccountOpening />

      ) : activeSegment === 'credit-card-apply' ? (

        <CreditCardApply />

      ) : activeSegment === 'sbm-fd-card-apply' ? (

        <SbmFdCardApply />


      /* =====================================================
         BUSINESS SERVICES
      ===================================================== */

      ) : activeSegment === 'nsdl-bc-apply' ? (

        <NsdlBcApply />

      ) : activeSegment === 'kotak-bc-apply' ? (

        <KotakBcApply />

      ) : activeSegment === 'cms-airtel' ? (

        <CmsAirtel />

      ) : activeSegment === 'payout' ? (

        <Payout />

      /* =====================================================
         DEFAULT RETAILER PAGE
      ===================================================== */

      ) : (

        <RetailerPage
          onOpenVideo={(code) =>
            setActiveVideoCode(code)
          }
          onOpenJoin={() =>
            setIsJoinOpen(true)
          }
          onOpenIncomeCalc={() =>
            setIsIncomeCalcOpen(true)
          }
        />

      )}


      {/* =====================================================
          GLOBAL FOOTER
      ===================================================== */}

      <Footer
        onSelectSegment={handleSelectSegment}
      />


      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      <VideoModal
        videoCode={activeVideoCode}
        onClose={() =>
          setActiveVideoCode(null)
        }
      />


      {/* =====================================================
          RETAILER INCOME CALCULATOR MODAL
      ===================================================== */}

      <IncomeCalculatorModal
        isOpen={isIncomeCalcOpen}
        onClose={() =>
          setIsIncomeCalcOpen(false)
        }
        onOpenJoin={() =>
          setIsJoinOpen(true)
        }
      />


      {/* =====================================================
          JOIN MODAL
      ===================================================== */}

      <JoinModal
        isOpen={isJoinOpen}
        onClose={() =>
          setIsJoinOpen(false)
        }
      />


      {/* =====================================================
          CORPORATE CONTACT EXPERT MODAL
      ===================================================== */}

      <ContactExpertModal
        isOpen={isContactExpertOpen}
        onClose={() =>
          setIsContactExpertOpen(false)
        }
      />

    </div>
  );
}