
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

export default function Doctors() {
  return (
    <section className="section page-section">
      <p className="eyebrow">OUR MEDICAL TEAM</p>
      <h1>Doctors &amp; Departments</h1>
      <p className="lead">
        Doctor profiles will be added as details become available.
      </p>

      <div className="doctor-grid">
        {departments.map((department) => (
          <article className="doctor-card" key={department}>
            <div className="doctor-image-placeholder">
              <span>+</span>
            </div>
            <div className="doctor-card-content">
              <p className="eyebrow">DEPARTMENT</p>
              <h2>{department}</h2>
              <p>Doctor profile coming soon</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
