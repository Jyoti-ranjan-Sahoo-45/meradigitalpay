import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLock,
  FaPhone,
  FaTelegramPlane,
  FaUser,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo.jpeg";

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "WhatsApp", icon: FaWhatsapp },
  { label: "Telegram", icon: FaTelegramPlane },
  { label: "Instagram", icon: FaInstagram },
  { label: "YouTube", icon: FaYoutube },
];

function Login() {
  return (
    <main className="adhikari-login-page">
      <section className="adhikari-login-layout" aria-labelledby="login-heading">
        <div className="adhikari-login-card">
          <div className="adhikari-login-form-panel">
            <a className="adhikari-login-brand" href="/" aria-label="Mera Digital Pay home">
              <img src={logo} alt="Mera Digital Pay" />
            </a>

            <div className="adhikari-login-heading">
              <span className="adhikari-login-eyebrow">PARTNER PORTAL</span>
              <h1 id="login-heading">Welcome back</h1>
              <p>Sign in to your Mera Digital Pay account.</p>
            </div>

            <p className="adhikari-login-register">
              New to Mera Digital Pay? <a href="/register">Register now</a>
            </p>

            <form className="adhikari-login-form">
              <label className="adhikari-login-field">
                <span>Adhikari ID</span>
                <span className="adhikari-login-input-wrap">
                  <FaUser aria-hidden="true" />
                  <input
                    autoComplete="username"
                    name="adhikariId"
                    placeholder="Enter your Adhikari ID"
                    type="text"
                  />
                </span>
              </label>

              <label className="adhikari-login-field">
                <span>Password</span>
                <span className="adhikari-login-input-wrap">
                  <FaLock aria-hidden="true" />
                  <input
                    autoComplete="current-password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                  />
                </span>
              </label>

              <div className="adhikari-login-forgot">
                <a href="/forgot-password">Forgot password?</a>
              </div>

              <button className="adhikari-login-submit" type="submit">
                <span>Adhikari Login</span>
                <FaArrowRight aria-hidden="true" />
              </button>
            </form>

            <p className="adhikari-login-terms">
              By signing in, you agree to our <a href="/terms">Terms &amp; Conditions</a> and{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>

            <div className="adhikari-login-social">
              <span>Connect with us</span>
              <div>
                {socialLinks.map(({ label, icon: Icon }) => (
                  <a href="#" key={label} aria-label={label}>
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <aside className="adhikari-login-support">
            <div className="adhikari-support-content">
              <span className="adhikari-support-kicker">WE’RE HERE FOR YOU</span>
              <h2>Need a hand?</h2>
              <p>Our support team is ready to help with your account and partner services.</p>

              <a className="adhikari-support-contact" href="mailto:help.com@meradigitalpay.com">
                <span className="adhikari-support-icon"><FaEnvelope aria-hidden="true" /></span>
                <span>
                  <small>Email our team</small>
                  <strong>help.com@meradigitalpay.com</strong>
                </span>
              </a>

              <a className="adhikari-support-contact" href="tel:+917088898725">
                <span className="adhikari-support-icon"><FaPhone aria-hidden="true" /></span>
                <span>
                  <small>Adhikari helpline</small>
                  <strong>+91 70888 98725</strong>
                </span>
              </a>
            </div>
            <div className="adhikari-support-note">
              <span className="adhikari-support-note-mark">M</span>
              <p>Growing together, empowering every corner of India.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Login;
