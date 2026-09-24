import React from 'react';

export default function PayNearbyAdvantage() {
  return (
    <section className="advantage-container bgcolor--white" id="about-us">
      <div className="container--responsive">
        <div className="center-content">
          <h3 className="section-title-dashed">Advantages of Mera Digital Pay</h3>
          <p className="body-content">Grow your digital business with powerful, secure and profitable services</p>
        </div>

        <div className="advantage-lising-wrap">
          <ul className="advantage-lising">
            <li>
              <i className="pn pn-app"></i>
              <p>Start your digital service business with minimal setup cost.</p>
            </li>
            <li>
              <i className="pn pn-bill-2"></i>
              <p>Bank-grade security with reliable and safe transactions.</p>
            </li>
            <li>
              <i className="pn pn-idea"></i>
              <p>AEPS, Recharge, Bill Payment, Travel &amp; more in one platform.</p>
            </li>
            <li>
              <i className="pn pn-app-1"></i>
              <p>Earn commission on every transaction done by you.</p>
            </li>
            <li>
              <i className="pn pn-extensible-markup-language"></i>
              <p>Trusted by thousands of retailers across India.</p>
            </li>
            <li>
              <i className="pn pn-manager"></i>
              <p>Dedicated support team to help you anytime.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
