
export default function Contact() {
  return (
    <section className="section page-section">
      <p className="eyebrow">GET IN TOUCH</p>
      <h1>Contact Lokarakshaka Hospital</h1>
      <p className="lead">
        Contact us for hospital information and assistance.
      </p>

      <div className="contact-grid">
        <article className="info-card">
          <h2>Address</h2>
          <p>Padappanal, Kollam, Kerala, India</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Lokarakshaka+Hospital+Padappanal+Kollam"
            target="_blank"
            rel="noreferrer"
          >
            Find us on Google Maps
          </a>
        </article>

        <article className="info-card">
          <h2>Phone</h2>
          <p>+91 85475 55334</p>
          <a href="tel:+918547555334">Call the hospital</a>
        </article>

        <article className="info-card">
          <h2>Email</h2>
          <p>lokarakshaka15@gmail.com</p>
          <a href="mailto:lokarakshaka15@gmail.com">
            Send an email
          </a>
        </article>

        <article className="info-card">
          <h2>Working Hours</h2>
          <p>OPD: 9:00 AM – 1:00 PM</p>
          <p>Emergency care: 24 hours</p>
        </article>
      </div>
    </section>
  )
}
