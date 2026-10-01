import React, { useState, useEffect, useMemo } from 'react';
import { policies } from '../data/policiesData';
import { 
  ShieldCheck, FileText, RefreshCw, Scale, Briefcase, 
  Search, CheckCircle2, AlertTriangle, ArrowUp, Mail, Phone, ExternalLink 
} from 'lucide-react';

const policyIcons = {
  terms: <FileText size={18} />,
  privacy: <ShieldCheck size={18} />,
  refund: <RefreshCw size={18} />,
  chargeback: <Scale size={18} />,
  'b2b-chargeback': <Briefcase size={18} />
};

function renderClauseContent(body) {
  if (!body) return null;
  const blocks = body.split(/\n\s*\n/);

  return blocks.map((block, bIdx) => {
    const trimmed = block.trim();
    if (!trimmed || trimmed === '---') return null;

    // Subheadings like "3.1 Personal and Contact Information" or "12.1 Banks and Financial Institutions"
    if (/^[0-9]+\.[0-9]+\s+/.test(trimmed)) {
      const lines = trimmed.split('\n');
      const headerLine = lines[0];
      const rest = lines.slice(1).join('\n').trim();
      return (
        <div key={bIdx} className="policy-subclause">
          <h4 className="policy-subclause-title">{headerLine}</h4>
          {rest && renderClauseContent(rest)}
        </div>
      );
    }

    // Numbered list
    if (/^[0-9]+\.\s+/.test(trimmed)) {
      const lines = trimmed.split('\n');
      const items = [];
      let currentItem = null;

      lines.forEach(l => {
        const lineTrim = l.trim();
        const match = lineTrim.match(/^[0-9]+\.\s+(.+)$/);
        if (match) {
          if (currentItem) items.push(currentItem);
          currentItem = match[1];
        } else if (currentItem) {
          currentItem += ' ' + lineTrim;
        } else if (lineTrim) {
          items.push(lineTrim);
        }
      });
      if (currentItem) items.push(currentItem);

      return (
        <ol key={bIdx} className="policy-numbered-list">
          {items.map((it, iIdx) => (
            <li key={iIdx}>{it}</li>
          ))}
        </ol>
      );
    }

    // Bullet list
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const lines = trimmed.split('\n');
      const items = [];
      let currentItem = null;

      lines.forEach(l => {
        const lineTrim = l.trim();
        if (lineTrim.startsWith('- ') || lineTrim.startsWith('* ')) {
          if (currentItem) items.push(currentItem);
          currentItem = lineTrim.replace(/^[-*]\s+/, '');
        } else if (currentItem) {
          currentItem += ' ' + lineTrim;
        } else if (lineTrim) {
          items.push(lineTrim);
        }
      });
      if (currentItem) items.push(currentItem);

      return (
        <ul key={bIdx} className="policy-bullet-list">
          {items.map((it, iIdx) => (
            <li key={iIdx}>{it}</li>
          ))}
        </ul>
      );
    }

    return <p key={bIdx}>{trimmed}</p>;
  });
}

export default function PolicyPage({ initialPolicy = 'terms', onSelectPolicy }) {
  const [activeTab, setActiveTab] = useState(initialPolicy);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (initialPolicy) {
      setActiveTab(initialPolicy);
    }
  }, [initialPolicy]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPolicy = useMemo(() => {
    return policies.find(p => p.id === activeTab) || policies[0];
  }, [activeTab]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setSearchQuery('');
    if (onSelectPolicy) {
      onSelectPolicy(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return currentPolicy.sections;
    const query = searchQuery.toLowerCase();
    return currentPolicy.sections.filter(s => 
      s.title.toLowerCase().includes(query) || 
      s.body.toLowerCase().includes(query) ||
      `section ${s.number}`.includes(query)
    );
  }, [currentPolicy, searchQuery]);

  const scrollToSection = (num) => {
    const el = document.getElementById(`section-${num}`);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="policy-page-wrapper">
      {/* Header Banner */}
      <section className="policy-hero-banner">
        <div className="container--responsive">
          <div className="policy-hero-content">
            <span className="policy-badge">
              <ShieldCheck size={16} /> Official Compliance &amp; Legal Framework
            </span>
            <h1 className="policy-hero-title">{currentPolicy.title}</h1>
            <p className="policy-hero-subtitle">{currentPolicy.tagline}</p>
          </div>

          {/* Navigation Tabs */}
          <div className="policy-tab-bar-wrap">
            <div className="policy-tab-bar">
              {policies.map((p) => {
                const isActive = activeTab === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleTabChange(p.id)}
                    className={`policy-tab-btn ${isActive ? 'active' : ''}`}
                    type="button"
                  >
                    {policyIcons[p.id]}
                    <span>{p.title.split(' ')[0]} {p.id === 'b2b-chargeback' ? 'Chargeback' : p.id === 'chargeback' ? 'Disputes' : p.id === 'refund' ? 'Refunds' : ''}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="policy-main-container">
        <div className="container--responsive">
          
          {/* Search bar inside policy */}
          <div className="policy-search-wrap">
            <div className="policy-search-box">
              <Search size={18} className="policy-search-icon" />
              <input 
                type="text"
                placeholder={`Search inside ${currentPolicy.title}... (e.g. KYC, Refund, AEPS, Settlement)`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="policy-search-input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="policy-search-clear"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="policy-grid-layout">
            {/* Sidebar Table of Contents */}
            <aside className="policy-sidebar">
              <div className="policy-sidebar-inner">
                <h4 className="policy-toc-title">Table of Contents</h4>
                <div className="policy-toc-list">
                  {currentPolicy.sections.map((sec) => (
                    <button
                      key={sec.number}
                      type="button"
                      onClick={() => scrollToSection(sec.number)}
                      className="policy-toc-item"
                    >
                      <span className="policy-toc-num">{sec.number}.</span>
                      <span className="policy-toc-text">{sec.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <article className="policy-article-content">
              
              {/* Policy Intro Box */}
              {currentPolicy.intro && !searchQuery && (
                <div className="policy-intro-card">
                  <div className="policy-intro-header">
                    <ShieldCheck size={20} className="policy-intro-icon" />
                    <h4>Policy Statement &amp; Scope</h4>
                  </div>
                  <div className="policy-intro-text">
                    {currentPolicy.intro.split('\n\n').map((para, idx) => (
                      <p key={idx}>{para.replace(/---/g, '')}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Filtered Sections */}
              {filteredSections.length === 0 ? (
                <div className="policy-no-results">
                  <AlertTriangle size={32} />
                  <p>No clauses match your search query: "<strong>{searchQuery}</strong>"</p>
                  <button type="button" onClick={() => setSearchQuery('')} className="policy-reset-btn">
                    Clear Search
                  </button>
                </div>
              ) : (
                <div className="policy-sections-list">
                  {filteredSections.map((sec) => (
                    <div 
                      key={sec.number} 
                      id={`section-${sec.number}`}
                      className="policy-clause-card"
                    >
                      <div className="policy-clause-header">
                        <span className="policy-clause-number">{sec.number}</span>
                        <h3 className="policy-clause-title">{sec.title}</h3>
                      </div>
                      
                      <div className="policy-clause-body">
                        {renderClauseContent(sec.body)}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Grievance & Official Contacts Bottom Card */}
              <div className="policy-grievance-card">
                <div className="policy-grievance-header">
                  <CheckCircle2 size={24} className="policy-grievance-icon" />
                  <div>
                    <h4>Official Grievance &amp; Compliance Helpdesk</h4>
                    <p>Legal Entity: <strong>Shri Mata Vaishno Devi Traders (Mera Digital Pay)</strong></p>
                  </div>
                </div>

                <div className="policy-grievance-grid">
                  <div className="policy-grievance-col">
                    <span className="policy-g-label">Privacy &amp; Grievance Email:</span>
                    <a href="mailto:help.meradigitalpay@gmail.com" className="policy-g-link">
                      <Mail size={14} /> help.meradigitalpay@gmail.com
                    </a>
                  </div>
                  <div className="policy-grievance-col">
                    <span className="policy-g-label">Support Email:</span>
                    <a href="mailto:help.meradigitalaps@gmail.com" className="policy-g-link">
                      <Mail size={14} /> help.meradigitalaps@gmail.com
                    </a>
                  </div>
                  <div className="policy-grievance-col">
                    <span className="policy-g-label">Direct Helpline:</span>
                    <a href="tel:+917088898725" className="policy-g-link">
                      <Phone size={14} /> +91 7088898725
                    </a>
                  </div>
                  <div className="policy-grievance-col">
                    <span className="policy-g-label">Official Website:</span>
                    <a href="https://www.meradigitalpay.com" target="_blank" rel="noopener noreferrer" className="policy-g-link">
                      <ExternalLink size={14} /> www.meradigitalpay.com
                    </a>
                  </div>
                </div>
              </div>

            </article>
          </div>

        </div>
      </section>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button 
          type="button" 
          onClick={scrollToTop} 
          className="policy-scroll-top-btn"
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
