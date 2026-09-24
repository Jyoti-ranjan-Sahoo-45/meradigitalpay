import React from 'react';

export default function SmartSolutions({ onOpenIncomeCalc, onOpenJoin }) {
  return (
    <section className="smart-solutions-container bgcolor--white" id="distributors-program">
      <div className="container--responsive">
        <div className="center-content">
          <h3 className="section-title-dashed">Smart Solutions for Everyone</h3>
          <p className="body-content">
            Whether you are a retailer, distributor, individual or self help group, we have smart solutions for everyone.
          </p>
        </div>

        {/* Card 1: Retailer */}
        <div className="smart-solution-card">
          <div className="content-wrap mobile-title">
            <h5>Retailer</h5>
          </div>
          <div className="img-wrap">
            <img src="https://paynearby.in/wp-content/uploads-efs/2023/07/Group-4038_optimized.png" alt="Retailer" />
          </div>
          <div className="content-wrap">
            <h5 className="desk-title">Retailer</h5>
            <p className="body-content">
              Use our digital suite of products to upgrade your store and manage your credits, customers and payments better. Offer our assisted financial and digital commerce services to increase your income. Be the trusted banker in your area.
            </p>
            <h3>
              Join over 15,00,000 active retailers. Earn more than <span className="rupee-icon">₹</span>25,000 per month. No working capital required
            </h3>
            <div className="group-button">
              <a 
                href="#join-paynearby" 
                className="btn green"
                onClick={(e) => { e.preventDefault(); onOpenJoin(); }}
              >
                Join Mera Digital Pay
              </a>
              <a 
                href="#income-calculator" 
                className="btn border"
                onClick={(e) => { e.preventDefault(); onOpenIncomeCalc(); }}
              >
                Income Calculator
              </a>
            </div>
            <h6>Retail Categories: </h6>
            <ul>
              <li><span>Kirana Shop</span></li>
              <li><span>Restaurant</span></li>
              <li><span>Medical Shop</span></li>
              <li><span>Fertilizer Shop</span></li>
              <li><span>Apparel Shop</span></li>
              <li><span>Tailoring Shop</span></li>
              <li><span>Mobile Recharge Centre</span></li>
              <li><span>Insurance Agency</span></li>
              <li><span>Hardware Store</span></li>
              <li><span>Travel Agency and more</span></li>
            </ul>
          </div>
        </div>

        {/* Card 2: Distributor */}
        <div className="smart-solution-card">
          <div className="content-wrap mobile-title">
            <h5>Distributor</h5>
          </div>
          <div className="img-wrap">
            <img src="https://paynearby.in/wp-content/uploads-efs/2023/07/Group-40379_optimized.png" alt="Distributor" />
          </div>
          <div className="content-wrap">
            <h5 className="desk-title">Distributor</h5>
            <p className="body-content">
              Make more out of your distribution business. Onboard your network to offer Mera Digital Pay services and earn more than 18% per month on the money invested.
              <br /><br />
              No physical stock. No expenditure in store space, staff or physical transfer of goods. Every time a retailer in your network services a financial transaction, both of you make money. It is as simple as that.
            </p>
            <h3>
              Join over 1,00,000 distributors. Earn more than <span className="rupee-icon">₹</span>50,000 per month
            </h3>
            <div className="group-button">
              <a 
                href="#join-paynearby" 
                className="btn green"
                onClick={(e) => { e.preventDefault(); onOpenJoin(); }}
              >
                Join Mera Digital Pay
              </a>
              <a 
                href="#income-calculator" 
                className="btn border"
                onClick={(e) => { e.preventDefault(); onOpenIncomeCalc(); }}
              >
                Income Calculator
              </a>
            </div>
            <h6>Distributor Categories: </h6>
            <ul>
              <li><span>Telecom</span></li>
              <li><span>Pharma</span></li>
              <li><span>Retail</span></li>
              <li><span>FMCG and many more</span></li>
            </ul>
          </div>
        </div>

        {/* Card 3: Individual / Self Help Groups */}
        <div className="smart-solution-card">
          <div className="content-wrap mobile-title">
            <h5>Individual/Self Help Groups</h5>
          </div>
          <div className="img-wrap">
            <img src="https://paynearby.in/wp-content/uploads-efs/2023/07/Group-4038optimized.png" alt="Individual Self Help Groups" />
          </div>
          <div className="content-wrap">
            <h5 className="desk-title">Individual/Self Help Groups</h5>
            <p className="body-content">
              Grab the opportunity to run your own business, from the comforts of your home or shop and earn additional income. Become a Mera Digital Pay Digital Pradhan, and offer financial and digital commerce services to your area. You earn on every transaction you make. 
              <br /><br />
              Home based businesses can take their stores online on BuyNearby and service more customers.
            </p>
            <h3>
              Join a growing tribe of individuals/self help groups who earn more than <span className="rupee-icon">₹</span>15,000 per month with us
            </h3>
            <div className="group-button">
              <a 
                href="#join-paynearby" 
                className="btn green"
                onClick={(e) => { e.preventDefault(); onOpenJoin(); }}
              >
                Join Mera Digital Pay
              </a>
              <a 
                href="#income-calculator" 
                className="btn border"
                onClick={(e) => { e.preventDefault(); onOpenIncomeCalc(); }}
              >
                Income Calculator
              </a>
            </div>
            <h6>Individual/Self Help Groups Categories: </h6>
            <ul>
              <li><span>Griha Udyog Members</span></li>
              <li><span>Self Help Groups</span></li>
              <li><span>Teachers</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
