
const facilities = [
  'Outpatient Department',
  'Emergency Care',
  'Consultation Rooms',
  'Patient Care Facilities',
  'Diagnostic Services',
  'Hospital Support Services',
]

export default function Facilities() {
  return (
    <section className="section page-section">
      <p className="eyebrow">OUR FACILITIES</p>
      <h1>Facilities &amp; Services</h1>
      <p className="lead">
        Explore our hospital facilities. Photos and verified
        service details will be added soon.
      </p>

      <div className="facility-grid">
        {facilities.map((facility) => (
          <article className="facility-card" key={facility}>
            <div
              className="facility-image-placeholder"
              role="img"
              aria-label={`${facility} photo placeholder`}
            >
              <span>Photo coming soon</span>
            </div>
            <div className="facility-card-content">
              <h2>{facility}</h2>
              <p>More information will be available soon.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
