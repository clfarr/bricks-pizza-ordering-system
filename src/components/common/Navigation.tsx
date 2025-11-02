import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/businessInfo';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">{BUSINESS_INFO.name}</Link>
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
