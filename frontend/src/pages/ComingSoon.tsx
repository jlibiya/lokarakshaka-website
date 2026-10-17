
import { Link } from 'react-router-dom'

export default function ComingSoon() {
  return (
    <main className="coming-soon">
      <h1>Lokarakshaka Hospital</h1>
      <p>Something better for your health is coming soon.</p>
      <p>Padappanal, Kollam, Kerala</p>
      <a href="tel:+918547555334">Call: +91 85475 55334</a>
      <p>
        <Link to="/home">Visit our website</Link>
      </p>
    </main>
  )
}
