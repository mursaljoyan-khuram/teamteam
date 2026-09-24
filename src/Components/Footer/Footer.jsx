import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* Brand / Contact */}
        <div className="footer-brand">

          <div className="footer-logo">
           <img src="https://netlinks.af/_astro/logo.DUySRYvR_Z2aE7Tj.avif" alt="" />
          </div>

          <p className="footer-description">
            A global technology partner for Odoo ERP,
            <br />
            implementation, custom software
            <br />
            development, AI automation, and digital
            <br />
            transformation.
          </p>

          <div className="footer-contact">
            <p>info@netlinks.af</p>
            <p>077-302-0101</p>

            <p>
              NETLINKS Plaza, Street 6, Lane 3, Shar-e-naw
              <br />
              Kabul, Afghanistan
            </p>
          </div>

          {/* Social Icons */}
          <div className="social-links">

            <a href="#" aria-label="X">
              𝕏
            </a>

            <a href="#" aria-label="GitHub">
              ●
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="YouTube">
              ▶
            </a>

          </div>

        </div>


        {/* Solutions */}
        <div className="footer-column">
          <h3>SOLUTIONS</h3>

          <a href="#">CRM</a>
          <a href="#">Sales management</a>
          <a href="#">Point of sale</a>
          <a href="#">Accounting</a>
          <a href="#">Inventory</a>
        </div>


        {/* Services */}
        <div className="footer-column">
          <h3>SERVICES</h3>

          <a href="#">Odoo ERP services</a>
          <a href="#">Custom software</a>
          <a href="#">AI & automation</a>
          <a href="#">IT staff augmentation</a>
          <a href="#">Digital transformation</a>
          <a href="#">Cloud & managed</a>
        </div>


        {/* Industries */}
        <div className="footer-column">
          <h3>INDUSTRIES</h3>

          <a href="#">Manufacturing</a>
          <a href="#">Retail & e-commerce</a>
          <a href="#">Trades & field services</a>
          <a href="#">Professional services</a>
          <a href="#">Nonprofits</a>
        </div>


        {/* Company */}
        <div className="footer-column">
          <h3>COMPANY</h3>

          <a href="#">About</a>
          <a href="#">Customers</a>
          <a href="#">Service areas</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">NETLINKS US</a>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 NETLINKS. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Sitemap</a>
          <span>·</span>

          <a href="#">Business ethics</a>
          <span>·</span>

          <a href="#">Privacy policy</a>
          <span>·</span>

          <a href="#">Terms of use</a>
          <span>·</span>

          <a href="#">Dark mode</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;