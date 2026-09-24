import React from 'react';

export default function CorporateTestimonial() {
  return (
    <section className="case-studies-wrapper distributor-casestudy-wraper bgcolor--text--light-blue" id="case-studies">
      <div className="container--responsive">
        <h3 className="section-title-dashed">Testimonial</h3>
        <div className="case-studies-container casestudy--slider">
          <div className="casestudy--content content--block" style={{ position: 'relative' }}>
            <i className="pn pn-quote"></i>
            <p className="body-content text--black text--normal padded--wrapper">
              <br />
              "The collaboration has also led to a high service deliverance rate in the cash collection vertical. Mera Digital Pay’s client servicing team is fully equipped and resolves issues with a 95% success rate in less than 2 hours. With our partnership, we will be able to further enhance the customer experience and offer payment options both digitally and at physical outlets. Going forward we plan to add more services to digitize cash through Mera Digital Pay retailers, I wish Mera Digital Pay all the very best look forward to a mutually beneficial partnership."
              <br /><br />
              <strong>Tanaji Khot, National Lead – Banking Relationships Projects, Repayments Management &amp; BRS, Bajaj Finance Limited</strong>
            </p>
            <figure className="reverse-quote">
              <img src="https://paynearby.in/wp-content/themes/paynearby/assets/images/right-quote.png" alt="Testimonial Image" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
