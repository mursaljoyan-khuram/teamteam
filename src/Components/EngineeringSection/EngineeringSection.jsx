import "./EngineeringSection.css";

function EngineeringSection() {
  return (
    <div className="div">
    <section className="engineering-section">

    
      <div className="engineering-content">

        <p className="engineering-label">
          03 / CUSTOM ENGINEERING
        </p>

        <h2>
          When nothing off-the-
          <br />
          shelf <em>quite fits.</em>
        </h2>

        <p className="engineering-intro">
          A senior product team, designers, PMs, engineers, embedded <br />
          with yours. Prototype in weeks, ship in months, maintain what <br />
          we build. No junior hand-offs.
        </p>

        <ul className="engineering-list">
          <li>
            Senior-only squads, no ticket-shuffling to offshore pools
          </li>

          <li>
            Modern stacks: TypeScript, Python, PHP, Postgres, Kubernetes, <br />
            serverless
          </li>

          <li>
            ISO 12207 + ISO 27001 certified delivery at the group level
          </li>

          <li>
            Compliance-ready from day one: SSO via SAML/OIDC, RBAC,
            audit <br /> logs, encryption
          </li>
        </ul>

        <button className="engineering-button">
          Engineering philosophy
          <span>↗</span>
        </button>

      </div>


      {/* RIGHT SIDE */}
      <div className="engineering-image">
        <img
          src="https://netlinks.af/illustrations/home-feature-engineering-1280.webp"
          alt="Custom engineering and software development illustration"
        />
      </div>

    </section>
    </div>
  );
}

export default EngineeringSection;