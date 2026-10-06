import React from "react";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaMap,
  FaBriefcase,
  FaChevronDown,
  FaArrowRight,
  FaCheck,
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo.jpeg";

function Register({ onNavigate }) {
  return (
    <main className="adhikari-register-page">
      <section className="adhikari-register-layout" aria-labelledby="register-heading">
        <div className="adhikari-register-card">
          <div className="adhikari-register-form-panel">
            <div className="adhikari-register-form-content">
              <a 
                className="adhikari-register-brand" 
                href="/" 
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('retailer');
                  }
                }}
                aria-label="Mera Digital Pay home"
              >
                <img src={logo} alt="Mera Digital Pay" />
              </a>

              <div className="adhikari-register-heading">
                <span>PARTNER REGISTRATION</span>
                <h1 id="register-heading">Create your account</h1>
                <p>Join Mera Digital Pay and grow your business with our digital services.</p>
              </div>

              <p className="adhikari-register-login-prompt">
                Already have an account?{" "}
                <a 
                  href="/login"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('login');
                    }
                  }}
                >
                  Login here
                </a>
              </p>

              <form className="adhikari-register-form">
                <label className="adhikari-register-field">
                  <span>Full name</span>
                  <span className="adhikari-register-input">
                    <FaUser aria-hidden="true" />
                    <input autoComplete="name" name="name" placeholder="Enter your full name" type="text" />
                  </span>
                </label>

                <label className="adhikari-register-field">
                  <span>Mobile number</span>
                  <span className="adhikari-register-input">
                    <FaPhone aria-hidden="true" />
                    <input autoComplete="tel" name="mobile" placeholder="Enter your mobile number" type="tel" />
                  </span>
                </label>

                <div className="adhikari-register-location-fields">
                  <label className="adhikari-register-field">
                    <span>District</span>
                    <span className="adhikari-register-input">
                      <FaMapMarkerAlt aria-hidden="true" />
                      <input autoComplete="address-level2" name="district" placeholder="Your district" type="text" />
                    </span>
                  </label>

                  <label className="adhikari-register-field">
                    <span>State</span>
                    <span className="adhikari-register-input">
                      <FaMap aria-hidden="true" />
                      <input autoComplete="address-level1" name="state" placeholder="Your state" type="text" />
                    </span>
                  </label>
                </div>

                <label className="adhikari-register-field">
                  <span>Partner type</span>
                  <span className="adhikari-register-input adhikari-register-select">
                    <FaBriefcase aria-hidden="true" />
                    <select defaultValue="" name="position">
                      <option value="" disabled>Select your partner type</option>
                      <option value="adhikari">Adhikari</option>
                      <option value="distributor">Distributor</option>
                      <option value="retailer">Retailer</option>
                      <option value="agent">Agent</option>
                    </select>
                    <FaChevronDown aria-hidden="true" />
                  </span>
                </label>

                <button className="adhikari-register-submit" type="submit">
                  Register now <FaArrowRight aria-hidden="true" />
                </button>
              </form>

              <div className="adhikari-register-social">
                <span>Connect with us</span>
                <div>
                <a
                  href="#"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="#" aria-label="Telegram">
                  <FaTelegramPlane />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
                </div>
              </div>
            </div>
          </div>

          <aside className="adhikari-register-benefits">
            <span className="adhikari-register-benefits-kicker">START YOUR JOURNEY</span>
            <h2>Why join Mera Digital Pay?</h2>
            <p>India’s trusted B2B fintech platform, built to help local businesses grow.</p>

            <ul>
              <li><span><FaCheck aria-hidden="true" /></span>High commission and fast settlement</li>
              <li><span><FaCheck aria-hidden="true" /></span>AEPS, banking, recharge and more</li>
              <li><span><FaCheck aria-hidden="true" /></span>Dedicated partner support</li>
            </ul>

            <div className="adhikari-register-benefit-note">
              <span>M</span>
              <p>One platform. More services. Greater opportunity.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Register;