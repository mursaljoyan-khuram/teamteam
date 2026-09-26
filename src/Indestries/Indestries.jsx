import "./Industries.css";

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    description:
      "Manufacturing ERP on Odoo, MRP, production planning, quality br control, and shop-floor visibility.",
  },
  {
    number: "02",
    title: "Retail &\neCommerce",
    description:
      "Retail ERP, Odoo POS, omnichannel inventory, loyalty, and Shopify/Magento integrations.",
  },
  {
    number: "03",
    title: "Professional\nServices",
    description:
      "PSA on Odoo, project accounting, timesheet-to-invoice, resource planning, and utilization tracking.",
  },
  {
    number: "04",
    title: "Public Sector",
    description:
      "Public sector ERP at national scale, HR, payroll, grants, procurement controls, and auditable trails.",
  },
  {
    number: "05",
    title: "Nonprofits",
    description:
      "Nonprofit ERP, donor CRM, grant lifecycle, restricted fund accounting, and outcome reporting.",
  },
  {
    number: "06",
    title: "Trades & Field\nServices",
    description:
      "Field service software on Odoo, dispatch, mobile workforce, service contracts, and preventive maintenance.",
  },
];

function Industries() {
  return (
    <section className="industries">

      {/* Header */}
      <div className="industries-header">

        <div>
          <p className="industries-label">
            INDUSTRIES
          </p>

          <h2>
            Pattern recognition
            <br />
            <em>across verticals.</em>
          </h2>
        </div>

        <p className="industries-intro">
          Two decades of implementations means we've seen
          <br />
          your problem before. Industry templates, compliance
          <br />
          defaults, and playbooks included.
        </p>

      </div>


      {/* Industry rows */}
      <div className="industries-list">

        {industries.map((industry) => (
          <div className="industry-row" key={industry.number}>

            <div className="industry-number">
              {industry.number}
            </div>

            <h3>
              {industry.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < industry.title.split("\n").length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </h3>

            <p>
              {industry.description}
            </p>

            <button
              className="industry-arrow"
              aria-label={`View ${industry.title}`}
            >
              ↗
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Industries;