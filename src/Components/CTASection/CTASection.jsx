import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>
          Talk to a senior architect
          <br />
          <em>this week.</em>
        </h2>

        <p>
          30-minute call. Walk away with a phased plan and fixed-fee
          <br />
          scoping in 5 business days.
        </p>

        <button className="cta-button">
          Book a 30-min discovery call
          <span>↗</span>
        </button>
      </div>
    </section>
  );
}

export default CTASection;