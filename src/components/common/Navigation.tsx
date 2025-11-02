import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/businessInfo';
import logo from '../../assets/images/logo.jpg';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={logo} alt={BUSINESS_INFO.name} style={{ height: '3rem', borderRadius: '0.375rem' }} />
          <span>{BUSINESS_INFO.name}</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/rewards">Rewards</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
