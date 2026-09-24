import "./Services.css";

const services = [
  {
    number: "01",
    category: "ERP",
    title: "Odoo ERP services.",
    description:
      "Odoo implementation, customization, integration, and migration from SAP, NetSuite, Dynamics, and QuickBooks. 50+ deployments, including a 500,000-employee HR and payroll engagement.",
  },
  {
    number: "02",
    category: "BUILD",
    title: "Custom software development.",
    description:
      "Enterprise web, mobile, and backend systems when shelf products don't fit. Senior-only squads, the team that builds also maintains.",
  },
  {
    number: "03",
    category: "INTELLIGENCE",
    title: "AI & automation.",
    description:
      "Production AI agents grounded in your data, governed by your rules, observable end to end. Not demos.",
  },
  {
    number: "04",
    category: "PEOPLE",
    title: "IT staff augmentation.",
    description:
      "Senior engineers, architects, and DevOps embedded with your team. US-led delivery, direct-hire model, global bench in India and the UAE.",
  },
  {
    number: "05",
    category: "STRATEGY",
    title: "Digital transformation.",
    description:
      "Executive roadmap, enterprise architecture, build-vs-buy, and program delivery. Twenty years of pattern recognition you can execute.",
  },
  {
    number: "06",
    category: "CLOUD",
    title: "Cloud & managed services.",
    description:
      "Managed Odoo hosting, cloud infrastructure, 24/7 monitoring, and ERP managed services on AWS, Azure, GCP, and private cloud.",
  },
];

function Services() {
  return (
    <section className="services">
      {/* Top section */}
      <div className="services-header">
        <div>
          <p className="eyebrow">WHAT WE DO</p>

          <h2>
            Six services. One
            <br />
            
            <em>accountable partner.</em>
        
          </h2>
        </div>

        <p className="services-intro">
          One Afghanistan-based vendor for ERP, custom
          <br />
          software, AI, staff augmentation, and cloud, so nothing
          <br />
          falls between the seams.
        </p>
      </div>

      {/* Cards */}
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.number}>
            <div className="card-top">
              <p className="service-label">
                {service.number} / {service.category}
              </p>

              <button className="arrow-button" aria-label={service.title}>
                ↗
              </button>
            </div>

            <h3>{service.title}</h3>

            <p className="service-description">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;