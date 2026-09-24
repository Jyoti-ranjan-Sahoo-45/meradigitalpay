import React, { useEffect } from 'react';

export default function VideoModal({ videoCode, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (videoCode) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [videoCode, onClose]);

  if (!videoCode) return null;

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div className="modal-video-wrapper" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-custom-btn" 
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <div className="modal-video-iframe-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${videoCode}?autoplay=1&rel=0`}
            title="Mera Digital Pay Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
