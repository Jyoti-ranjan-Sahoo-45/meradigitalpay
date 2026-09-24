import React from 'react';

export default function CaseStudySection() {
  return (
    <section className="case-studies-wrapper bgcolor--light-blue bgcolor--text--light-blue" id="case-studies">
      <div className="container--responsive">
        <div className="center-content margin--b30">
          <h3 className="section-title-dashed margin--b30">Zidd Aage Badhne Ki</h3>
          <p className="body-content margin--b30">Mera Digital Pay Digital Pradhans, a growing aspirational community</p>
        </div>

        <div className="case-studies-container casestudy--slider">
          <div className="casestudy--video" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <div className="video-wrap content--block" style={{ flex: 1 }}>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/NYyjhg2V-mY" 
                title="Mera Digital Saathi" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ borderRadius: 8 }}
              />
            </div>
            <div className="casestudy--content content--block" style={{ flex: 1 }}>
              <i className="pn pn-quote" style={{ fontSize: 32, color: '#0c4696', display: 'block', marginBottom: 12 }}>“</i>
              <p className="body-content text--black text--normal">
                <strong>Grow your business with Mera Digital Saathi.</strong>
                <br /><br />
                Mera Digital Saathi helps retailers bring customers closer to digital financial services from their own neighbourhood shop. By helping customers open digital accounts, link UPI and start using the Saathi app, retailers can build stronger customer relationships, increase footfall and create new commission-led income opportunities.
                <br /><br />
                The film shows how a local retailer can make his business more digital, support customers with trusted financial access and become a reliable digital partner for the community.
                <br /><br />
                Watch the film to see how Mera Digital Saathi can help retailers grow with the digital shift across Bharat.
              </p>
              <p className="body-content text--light text--black" style={{ marginTop: 12, fontWeight: 600 }}>
                - By Mera Digital Saathi. Dil Se Desi. Life Digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
