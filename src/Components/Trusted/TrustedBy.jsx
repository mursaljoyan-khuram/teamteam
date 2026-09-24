import React from "react";
import "./TrustedBy.css";

const logos = [
  {
    name: "AKDN",
    src: "https://netlinks.af/logos/clients/akdn.webp",
  },
  {
    name: "Government of Afghanistan",
    src: "https://netlinks.af/logos/clients/da-afghanistan-bank.webp",
  },
  {
    name: "Afghanistan",
    src: "https://netlinks.af/logos/clients/afghanistan-payments-system.webp",
  },
  {
    name: "Siemens",
    src: "https://cdn.simpleicons.org/siemens/000000",
  },
  {
    name: "e&",
    src: "https://netlinks.net/wp-content/uploads/2020/12/etisalat.png",
  },
  {
    name: "MTN",
    src: "https://netlinks.af/logos/clients/mtn.webp",
  },
  {
    name: "World Bank",
    src: "https://netlinks.af/logos/clients/world-bank.webp",
  },
  {
    name: "IFC",
    src: "https://netlinks.af/logos/clients/ifc.webp",
  },
  {
    name: "UNDP",
    src: "https://netlinks.af/logos/clients/un-women.webp",
  },
];

function TrustedBy() {
  return (
    <section className="trusted-section">

      <p className="trusted-title">
        TRUSTED BY GLOBAL ENTERPRISES AND INSTITUTIONS
      </p>

      <div className="logo-slider">

        <div className="logo-track">

          {/* First set */}
          {logos.map((logo, index) => (
            <div className="logo-box" key={`first-${index}`}>
              <img
                src={logo.src}
                alt={logo.name}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}

          {/* Duplicate set for infinite animation */}
          {logos.map((logo, index) => (
            <div className="logo-box" key={`second-${index}`}>
              <img
                src={logo.src}
                alt={logo.name}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}


export default TrustedBy;