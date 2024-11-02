import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer border-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="row">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4 text-warning">Navigations</h3>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><Link href="#">Sell online</Link></li>
                  <li><Link href="#">Features</Link></li>
                  <li><Link href="#">Shopping cart</Link></li>
                  <li><Link href="#">Store builder</Link></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><Link href="#">Mobile commerce</Link></li>
                  <li><Link href="#">Dropshipping</Link></li>
                  <li><Link href="#">Website development</Link></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><Link href="#">Point of sale</Link></li>
                  <li><Link href="#">Hardware</Link></li>
                  <li><Link href="#">Software</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="block-5 mb-5">
              <h3 className="footer-heading mb-4 text-warning">Contact Info</h3>
              <ul className="list-unstyled">
                <li className="address">Pick your location</li>
                <li className="phone"><Link href="tel://99999999">+99 999 999</Link></li>
                <li className="email">emailaddress@domain.com</li>
              </ul>
            </div>

            <div className="block-7">
              <form action="#" method="post">
                <label htmlFor="email_subscribe" className="footer-heading text-warning">Subscribe</label>
                <div className="form-group">
                  <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email" />
                  <a href="mailto:arekik330@gmail.com"><button className="btn btn-sm btn-primary">Send</button></a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p className="text-light">
              Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
              <script>{`document.write(new Date().getFullYear());`}</script> All rights reserved | This template is made with big love by <Link href="" target="_blank" className="text-warning">Tempesto</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
