
import { Link } from 'react-router-dom'

export default function ComingSoon() {
  return (
    <main className="coming-soon">
      <div className="coming-soon-content">
        <div className="brand-mark">L</div>
        <p className="eyebrow">LOKARAKSHAKA HOSPITAL</p>
        <h1>Your health is our priority.</h1>
        <p className="coming-soon-message">
          We are preparing something special for our community.
          Our website will be available soon.
        </p>

        <p className="location">
          Padappanal, Kollam, Kerala
        </p>

        <a className="button button-light" href="tel:+918547555334">
          Call +91 85475 55334
        </a>

        <Link className="text-link" to="/home">
          Visit hospital website →
        </Link>
      </div>
    </main>
  )
}
