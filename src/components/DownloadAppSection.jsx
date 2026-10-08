import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Shield } from 'lucide-react';
import downloadImage from '../assets/download.png';
import downloadImage2 from '../assets/download2.png';

const downloadAppSlides = [downloadImage, downloadImage2];

export default function DownloadAppSection() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(true);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % downloadAppSlides.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid 10-digit mobile number.' });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage({
        type: 'success',
        text: `Link sent successfully to +91 ${phoneNumber}! Check your SMS inbox.`
      });
      setPhoneNumber('');
    }, 800);
  };

  return (
    <section id="contact" className="download-section">
      <div className="container">
        <div className="download-inner">
          <div className="download-content">
            <h3 className="section-title-dashed" style={{ color: '#ffffff' }}>
              Download Mera Digital Pay now
            </h3>
            <p>
              Use Mera Digital App & take charge of all your transactions to grow your business
            </p>

            <form className="download-form" onSubmit={handleSubmit}>
              <div className="download-form-row">
                <input
                  type="tel"
                  className="download-input"
                  placeholder="Enter 10 digit Phone no."
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setPhoneNumber(val);
                    if (statusMessage) setStatusMessage(null);
                  }}
                />
                <button 
                  type="submit" 
                  className="btn btn-green"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Get app link'} <Send size={16} />
                </button>
              </div>

              {/* Captcha mockup */}
              <div className="captcha-mock">
                <input 
                  type="checkbox" 
                  id="robot-check" 
                  checked={isCaptchaChecked}
                  onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: '#0c4696', cursor: 'pointer' }}
                />
                <label htmlFor="robot-check" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Shield size={16} color="#58b147" /> I'm not a robot
                </label>
              </div>

              {statusMessage && (
                <div style={{ 
                  marginTop: 10, 
                  padding: '10px 14px', 
                  borderRadius: 6, 
                  backgroundColor: statusMessage.type === 'success' ? '#dcfce7' : '#fee2e2',
                  color: statusMessage.type === 'success' ? '#166534' : '#991b1b',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}>
                  {statusMessage.type === 'success' && <CheckCircle2 size={16} />}
                  {statusMessage.text}
                </div>
              )}
            </form>
          </div>

          <div 
            className="download-phone-img-wrap"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div 
              style={{ 
                position: 'relative', 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                minHeight: '440px' 
              }}
            >
              {downloadAppSlides.map((imgSrc, idx) => (
                <img 
                  key={idx}
                  src={imgSrc}
                  alt={`Mera Digital Pay Mobile App Screen ${idx + 1}`} 
                  style={{
                    position: idx === 0 ? 'relative' : 'absolute',
                    maxHeight: '440px',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    opacity: activeSlideIndex === idx ? 1 : 0,
                    transform: activeSlideIndex === idx 
                      ? 'scale(1) translateX(0)' 
                      : (idx > activeSlideIndex ? 'scale(0.94) translateX(40px)' : 'scale(0.94) translateX(-40px)'),
                    transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: activeSlideIndex === idx ? 'auto' : 'none'
                  }}
                />
              ))}
            </div>

            {/* Slider dots */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px', alignItems: 'center' }}>
              {downloadAppSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlideIndex(idx)}
                  aria-label={`Show App Slide ${idx + 1}`}
                  style={{
                    width: activeSlideIndex === idx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '100px',
                    background: activeSlideIndex === idx ? '#C9A227' : 'rgba(201, 162, 39, 0.3)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
