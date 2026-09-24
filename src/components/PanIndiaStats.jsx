import React from 'react';

export default function PanIndiaStats() {
  return (
    <section className="panIndia-container bgcolor--white" id="digitalnaari">
      <div className="container--responsive">
        <div className="panIndia-wrap">
          <div className="center-content">
            <h3 className="section-title-dashed">
              Make financial & digital services accessible to everyone, everywhere
            </h3>
            <p className="body-content">
              Create a progressive society, where everyone has easy access to services, by building the largest agent banking network in the country.
            </p>
          </div>
          <ul className="panIndia-listing">
            <li>
              <span className="number">
                <span>12+</span> Lakh
              </span>
              <p>Digital Pradhans</p>
            </li>
            <li>
              <span className="number">
                <span>3+</span> Lakh
              </span>
              <p>Digital Naaris</p>
            </li>
            <li>
              <span className="number">
                <span>25+</span> Cr
              </span>
              <p>Yearly Transactions</p>
            </li>
            <li>
              <span className="number">
                <span>5+</span> Cr
              </span>
              <p>Citizens Served</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
