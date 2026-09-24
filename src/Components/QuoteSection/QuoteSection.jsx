import "./QuoteSection.css";

function QuoteSection() {
  return (
    <section className="quote-section">
      <div className="quote-mark">“</div>

      <blockquote>
        We didn't watch Afghanistan's
        <br />
        tech sector emerge, <em>we helped</em>
        <br />
        <em>build it.</em>
      </blockquote>

      <p className="quote-author">
        Farshid Ghyasi · Founder, NETLINKS
      </p>
    </section>
  );
}

export default QuoteSection;