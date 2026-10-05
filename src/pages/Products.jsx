import React from 'react';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';
import product5 from '../assets/product5.jpeg';

const products = [
  {
    name: 'Biometric Fingerprint Scanner',
    brand: 'Mantra',
    image: product1,
    description: [
      'A reliable biometric fingerprint device designed for secure and fast user authentication. The scanner can be used for identity verification, KYC, banking services, attendance systems and other Aadhaar-enabled applications.',
      'Its compact design and easy USB connectivity make it suitable for Business Correspondents, financial service providers, banking applications and digital service centres.'
    ],
    features: [
      'Fast fingerprint scanning',
      'Secure biometric authentication',
      'USB connectivity',
      'Compact and lightweight design',
      'Suitable for KYC and identity verification',
      'Designed for banking and financial service applications'
    ]
  },
  {
    name: 'Iris Biometric Authentication Device',
    brand: 'Mantra Iris / Eye Biometric Device',
    image: product3,
    description: [
      'A compact biometric authentication device designed for secure identity verification using iris recognition technology. It can be used for applications that require reliable biometric authentication and identity verification.',
      'The device is suitable for banking, financial services, KYC, government services and other secure authentication environments.'
    ],
    features: [
      'Iris-based biometric authentication',
      'Secure identity verification',
      'Fast and convenient authentication',
      'Compact device design',
      'Suitable for KYC and financial services',
      'USB connectivity'
    ]
  },
  {
    name: 'Fingerprint Biometric Scanner',
    brand: 'Red Fingerprint / Biometric Scanner',
    image: product2,
    description: [
      'A compact fingerprint scanning device designed for quick and secure biometric authentication. It is suitable for digital service centres, banking applications, KYC verification and other identity-based services.',
      'Its simple design makes it convenient for regular use by service providers and Business Correspondents.'
    ],
    features: [
      'Fingerprint authentication',
      'Fast biometric verification',
      'Compact and portable design',
      'Easy connectivity',
      'Suitable for KYC applications',
      'Ideal for banking and digital service centres'
    ]
  },
  {
    name: 'Mera Digital Pay POS Terminal',
    brand: 'Mera Digital Pay POS Device',
    image: product4,
    description: [
      'A professional POS terminal designed to support secure digital payment transactions. The device features a display, physical keypad and dedicated transaction controls for convenient operation.',
      'It can be suitable for merchants, retailers, Business Correspondents and other businesses requiring a dedicated payment terminal.'
    ],
    features: [
      'Digital payment processing',
      'Built-in display',
      'Physical transaction keypad',
      'Secure transaction interface',
      'Compact and professional design',
      'Suitable for retail and merchant businesses'
    ]
  },
  {
    name: 'Mera Digital Pay Smart POS',
    brand: 'Mera Digital Pay POS Terminal with Card',
    image: product5,
    description: [
      'A compact and convenient payment terminal designed for businesses that accept digital and card-based payments. Its ergonomic design provides easy access to the display and transaction keypad.',
      'The device is suitable for retailers, merchants, service providers and Business Correspondents who need a dedicated payment acceptance solution.'
    ],
    features: [
      'Card payment support',
      'Digital payment capability',
      'Built-in display',
      'Transaction keypad',
      'Compact and portable design',
      'Suitable for merchants and retailers'
    ]
  }
];

function Products() {
  return (
    <main className="products-page">
      <section className="products-section" aria-labelledby="products-heading">
        

        <div className="products-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className="product-image-wrap">
                <img src={product.image} alt={product.brand} loading="lazy" />
              </div>
              <div className="product-card-content">
                <div className="product-card-heading">
                  <span className="product-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="product-brand">{product.brand}</span>
                    <h2>{product.name}</h2>
                  </div>
                </div>

                <div className="product-description">
                  {product.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="product-features">
                  <h3>Key Features</h3>
                  <ul>
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <a className="product-order-button" href="#">
                  Order Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;
