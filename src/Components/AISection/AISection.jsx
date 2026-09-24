import "./AISection.css";

function AISection() {
  return (
    <section className="ai-section">

      {/* LEFT - IMAGE */}
      <div className="ai-image">
        <img
          src="https://netlinks.af/illustrations/home-feature-ai-1280.webp"
          alt="AI agentic operation illustration"
        />
      </div>

      {/* RIGHT - CONTENT */}
      <div className="ai-content">

        <p className="ai-label">
          02 / AI & AUTOMATION
        </p>

        <h2>
          Agents that don't just
          <br />
          chat, <em>they work.</em>
        </h2>

        <p className="ai-intro">
          Production AI agents that close tickets, reconcile invoices, and
          answer procurement queries. Grounded, governed, observable, not
          demos.
        </p>

        <ul className="ai-list">
          <li>
            Retrieval-grounded agents with full citation and audit trail
          </li>

          <li>
            AI-powered ERP: intelligent automation inside Odoo workflows
          </li>

          <li>
            Human-in-the-loop controls for regulated and high-stakes
            processes
          </li>

          <li>
            Typical outcomes: 30%+ reduction in manual-task hours
          </li>
        </ul>

        <button className="ai-button">
          See how it works
          <span>↗</span>
        </button>

      </div>

    </section>
  );
}

export default AISection;