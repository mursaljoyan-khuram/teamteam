import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          ✦ 20 years delivering from Kabul ·
          Afghanistan's enterprise technology partner
        </div>

        <h1>
          Enterprise Odoo, <br />
          custom software, <br />
          and AI, <br />

          <span>
            engineered in <br />
            Afghanistan.
          </span>
        </h1>

        <p className="hero-description">
          Afghanistan-based since 2005. We built the
          500,000-employee Odoo HR and payroll system
          for the national government, and Jobs.af,
          the country's largest job-hunting platform.
          Senior teams in Kabul delivering for clients
          across Afghanistan, the GCC, India,
          and the US.
        </p>

        <div className="hero-buttons">

          <a href="#" className="primary-btn">
            Book a 30-min discovery call ↗
          </a>

          <a href="#" className="secondary-btn">
            Explore services
          </a>

        </div>

        <div className="hero-stats">

          <div>
            <h3>500K+</h3>
            <p>Employees <br />
              national-  <br />government Odoo <br /> HR rollout
            </p>

          </div>

          <div>
            <h3>20 yrs</h3>
            <p>Experience
              <br />enterprise <br />m software from <br /> Kabul
            </p>
          </div>

          <div>
            <h3>Jobs.af</h3>
            <p>Afghanistan's <br />
             largest job  <br />
             platform, built by <br />
              NETLINKS</p>
          </div>

        </div>

      </div>

      <div className="hero-right">
        <img
         src="https://netlinks.af/illustrations/home-hero-1920.webp"
         alt="Odoo Solutions"
         className="odoo-image"
         />


      </div>

    </section>
  );
}

export default Hero;