import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Reservations from './pages/Reservations';
import Rewards from './pages/Rewards';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<Order />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
