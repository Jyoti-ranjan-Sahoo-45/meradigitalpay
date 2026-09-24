import React from 'react';

const awards = [
  {
    id: 1,
    title: 'Harvard Business Publishing',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/06/HBR_Website-Cover-Image.jpg'
  },
  {
    id: 2,
    title: 'India’s Best WorkplacesTM in BFSI',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/06/GPTW_Top25_Thumbnail2_optimize.jpg'
  },
  {
    id: 3,
    title: 'MIT Technology review',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/06/MIT_Website-Cover-Image.jpg'
  }
];

export default function DistributionAwards() {
  return (
    <section className="largest--distribution-wrapper bgcolor--white" id="media">
      <div className="container--responsive">
        <div className="largest--distribution-inner">
          <h3 className="section-title-dashed">
            India's largest Distribution as-a-service (DaaS) platform
          </h3>
          <ul className="largest--distribution-slider" style={{ display: 'flex', gap: 24, justifyContent: 'space-between', listStyle: 'none', padding: 0 }}>
            {awards.map((award) => (
              <li key={award.id} style={{ flex: 1 }}>
                <figure>
                  <img src={award.img} alt={award.title} style={{ width: '100%', borderRadius: 8, display: 'block' }} />
                </figure>
                <h5 className="title" style={{ marginTop: 12, fontWeight: 700, fontSize: '1.05rem', textAlign: 'center' }}>
                  {award.title}
                </h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
