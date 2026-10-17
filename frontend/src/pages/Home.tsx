
import { Link } from 'react-router-dom'

const departments = [
  'Urology',
  'Pulmonology',
  'Nephrology',
  'Neurology',
  'Gastroenterology',
  'Orthopedics',
  'ENT',
  'Dermatology',
  'Gynaecology',
  'General Surgery',
  'General Medicine',
  'Dentistry',
  'Pediatrics',
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">WELCOME TO LOKARAKSHAKA</p>
        <h1>Compassionate care. Better health.</h1>
        <p>
          Quality healthcare for you and your family in
          Padappanal, Kollam.
        </p>
        <div className="button-row">
          <Link className="button" to="/doctors">Our Doctors</Link>
          <Link className="button button-outline" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">WHAT WE OFFER</p>
        <h2>Our Departments</h2>
        <div className="department-grid">
          {departments.map((department) => (
            <article className="department-card" key={department}>
              <span className="department-icon">✚</span>
              <h3>{department}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section hours-section">
        <p className="eyebrow">HERE WHEN YOU NEED US</p>
        <h2>Hospital Hours</h2>
        <div className="hours-grid">
          <article className="info-card">
            <h3>OPD Hours</h3>
            <p>9:00 AM – 1:00 PM</p>
          </article>
          <article className="info-card emergency-card">
            <h3>Emergency Care</h3>
            <p>Available 24 hours</p>
            <a href="tel:+918547555334">Call hospital</a>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">LATEST UPDATES</p>
        <h2>News &amp; Events</h2>
        <div className="news-grid">
          <article className="info-card">
            <span className="placeholder-label">UPDATE COMING SOON</span>
            <h3>Hospital News</h3>
            <p>Information and announcements will be shared here.</p>
          </article>
          <article className="info-card">
            <span className="placeholder-label">EVENTS COMING SOON</span>
            <h3>Health Awareness</h3>
            <p>Look here for future health programmes and events.</p>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <h2>We're here to help.</h2>
        <p>Contact Lokarakshaka Hospital for more information.</p>
        <Link className="button button-light" to="/contact">
          Get in Touch
        </Link>
      </section>
    </>
  )
}
