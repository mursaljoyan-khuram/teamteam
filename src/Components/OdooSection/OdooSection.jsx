import "./OdooSection.css";

function OdooSection() {
  return (
    <section className="odoo-section">

    
      <div className="odoo-content">

        <p className="odoo-label">
          01 / ODOO ERP
        </p>

        <h2>
          One platform. Every
          <br />
          department. <em>Actually</em>
          <br />
          <em>integrated.</em>
        </h2>

        <p className="odoo-intro">
          Certified Odoo partner, 50+ implementations, including a <br />
          500,000-employee HR and payroll engagement for a national <br />
          government with 1,000+ users. Finance, ops, sales, HR, and <br />
          manufacturing in one platform.
        </p>

        <ul className="odoo-list">
          <li>
            50+ Odoo deployments delivered, including a
            500,000-employee HR, <br /> payroll, and custom modules engagement
          </li>

          <li>
            Odoo migration from SAP, NetSuite, Microsoft Dynamics,
            QuickBooks, <br /> and legacy Odoo
          </li>

          <li>
            Upgrade-safe custom Odoo modules by senior Python engineers 
          </li>

          <li>
            Enterprise Odoo for manufacturing, distribution, field
            service, and <br /> public sector
          </li>
        </ul>

        <button className="odoo-button">
          Explore Odoo services
          <span>↗</span>
        </button>

      </div>


    
      <div className="odoo-image">
        <img
          src="https://netlinks.af/illustrations/home-feature-odoo-1280.webp"
          alt="Odoo platform illustration"
        />
      </div>

    </section>
  );
}

export default OdooSection;