import React from 'react';

export default function PayNearbyAdvantage() {
  return (
    <section className="advantage-container bgcolor--white" id="about-us">
      <div className="container--responsive">
        <div className="center-content">
          <h3 className="section-title-dashed">Mera Digital Pay Advantage</h3>
          <p className="body-content">Upgrade your business with the leader in branchless banking</p>
        </div>

        <div className="advantage-lising-wrap">
          <ul className="advantage-lising">
            <li>
              <i className="pn pn-app"></i>
              <p>Instant and easy onboarding</p>
            </li>
            <li>
              <i className="pn pn-bill-2"></i>
              <p>Zero additional investment, no working capital requirement</p>
            </li>
            <li>
              <i className="pn pn-idea"></i>
              <p>Time tested systems, with industry best success rates</p>
            </li>
            <li>
              <i className="pn pn-app-1"></i>
              <p>Simple, secure, easy to use App</p>
            </li>
            <li>
              <i className="pn pn-extensible-markup-language"></i>
              <p>Available in 10+ languages</p>
            </li>
            <li>
              <i className="pn pn-manager"></i>
              <p>Relationship managers to support your business at all times</p>
            </li>
          </ul>
        </div>

        <ul className="advantage-details">
          <li>
            <img src="https://paynearby.in/wp-content/uploads-efs/2023/07/advantage-resized.png" alt="Training and certification" />
            <div className="content">
              <h4 className="body-title">Training and certification</h4>
              <p className="body-content">
                We have associated with RASCI, TRRAIN and RAI to offer you training programs, career guidance, financial consulting, certification courses and more. We will help you set-up a modern shop and keep your family’s welfare at the heart of all our programs.
              </p>
            </div>
          </li>

          <li>
            <img src="https://paynearby.in/wp-content/uploads-efs/2023/07/advantage-2-resized.png" alt="Safety and Security Promise" />
            <div className="content">
              <h4 className="body-title">Safety and Security Promise of Mera Digital Pay</h4>
              <p className="body-content">
                Mera Digital Pay is certified to the highest compliance standards. We work extra hard to keep the trust of millions of retailers who transact with us everyday, by adopting a zero tolerance policy to security.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
