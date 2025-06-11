import React from 'react';
import './Footer.css';

export default function Footer({pageupd}) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Ezy-tax</h2>
          <p>Empowering Taxpayers. Building the Nation.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a onClick={()=>pageupd("AboutUs")} href="#">About Us</a></li>
              <li><a onClick={()=>pageupd("Products")} href="#services">Services</a></li>
              <li><a onClick={()=>pageupd("Blogs")} href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EZY Tax. All rights reserved.</p>
      </div>
    </footer>
  );
}