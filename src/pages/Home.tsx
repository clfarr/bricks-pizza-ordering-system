import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/businessInfo';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>{BUSINESS_INFO.name}</h1>
        <p>Authentic brick oven pizza made fresh daily</p>
        <div className="cta-buttons">
          <Link to="/menu" className="btn btn-primary">View Menu</Link>
          <Link to="/order" className="btn btn-secondary">Order Now</Link>
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <h3>Fresh Ingredients</h3>
          <p>We use only the finest locally-sourced ingredients</p>
        </div>
        <div className="feature">
          <h3>Brick Oven Baked</h3>
          <p>Cooked to perfection in our authentic brick oven</p>
        </div>
        <div className="feature">
          <h3>Fast Delivery</h3>
          <p>Hot and fresh to your door in 30 minutes or less</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
