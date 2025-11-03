# 🍕 Bricks Pizza & Pub - Ordering System

A modern, full-featured online ordering system built for **Bricks Pizza & Pub** in Weaverville, CA. Features group ordering, scheduled orders, real-time cart management, and comprehensive accessibility support.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://bricks-pizza.web.app/demo/)
[![GitHub](https://img.shields.io/badge/github-repository-blue?style=for-the-badge&logo=github)](https://github.com/clfarr/bricks-pizza-ordering-system)

## 🚀 Live Demo

- **Landing Page**: [https://bricks-pizza.web.app](https://bricks-pizza.web.app)
- **Interactive Demo**: [https://bricks-pizza.web.app/demo/](https://bricks-pizza.web.app/demo/)

## ✨ Features

### 🛒 **Core Ordering**
- Complete menu system with specialty pizzas
- Build-your-own pizza with live price calculation
- Real-time shopping cart with quantity management
- Order summary with tax calculation (7.25%)
- Special instructions field

### 👥 **Group Orders**
- Create shareable group order sessions
- Multiple people can add items to one order
- Optional split payment (divide total evenly)
- Real-time participant tracking
- Host controls

### 📅 **Scheduled Orders**
- Schedule orders up to 7 days in advance
- Date and time picker with validation
- ASAP option with estimated ready time
- Business hours awareness

### 📧 **Notifications**
- Email receipts with full order details
- SMS notifications (Twilio integration ready)
- Order status updates
- Pickup time reminders

### 💾 **Order Management**
- Order history with detailed records
- Save favorite items
- One-click reorder
- Order tracking with status updates
- Estimated ready times

### ♿ **Accessibility (WCAG 2.1 Compliant)**
- Skip navigation links
- Full keyboard navigation
- ESC key closes modals/menus
- ARIA labels and landmarks
- Screen reader announcements
- Focus management
- Semantic HTML structure

### 📱 **Responsive Design**
- Mobile-first approach
- Hamburger menu for mobile
- Touch-friendly interface
- Optimized for all screen sizes

## 🛠️ Tech Stack

### Frontend
- **React 19** with **TypeScript**
- **Vite** for fast development
- **Tailwind CSS** via CDN
- React Router DOM for navigation
- Context API for state management

### Backend/Services
- **Firebase Hosting** (Google Cloud)
- **Square API** (payment processing ready)
- **Twilio** (SMS integration ready)
- **SendGrid/AWS SES** (email ready)

### Development Tools
- ESLint for code quality
- TypeScript for type safety
- Git for version control

## 📂 Project Structure

```
bricks-pizza-ordering-system/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Route-level components
│   ├── context/         # React Context providers
│   ├── data/            # Menu items, business info
│   ├── types/           # TypeScript definitions
│   ├── services/        # API integration layer
│   └── assets/          # Images and static files
├── public/
│   ├── index.html       # Landing page
│   └── demo/            # HTML demo application
├── bricks_pizza_demo.html  # Standalone demo
├── DEPLOYMENT_GUIDE.md      # Complete deployment instructions
└── firebase.json            # Firebase configuration
```

## 🎯 Business Information

**Bricks Pizza & Pub**
- 📍 520 Main Street, Weaverville, CA
- ☎️ (530) 423-5281
- 🌐 [Facebook](https://www.facebook.com/profile.php?id=61579018107619)

**Hours:**
- Sunday: 11am - 8pm
- Monday - Thursday: 11am - 8pm
- Friday & Saturday: 11am - 9pm

## 💰 Pricing

### Specialty Pizzas
- Personal 10": $17.99
- Small 12": $24.99
- Medium 16": $28.99
- Large 18": $32.99

### Build Your Own
- Personal 10": $10.99 (+ $2.99 per topping)
- Small 12": $13.99 (+ $2.99 per topping)
- Medium 16": $16.99 (+ $2.99 per topping)
- Large 18": $20.99 (+ $2.99 per topping)

**Specialty Crusts** (12" only): +$4.00
- Cauliflower Crust
- Stuffed Crust

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/clfarr/bricks-pizza-ordering-system.git
cd bricks-pizza-ordering-system

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Deployment

This project is configured for Firebase Hosting. See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for complete instructions.

### Quick Deploy

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Deploy
firebase deploy --only hosting
```

## 🔧 Configuration

### Square API Integration
Update `SQUARE_CONFIG` in the demo file:
```javascript
const SQUARE_CONFIG = {
  locationId: 'YOUR_SQUARE_LOCATION_ID',
  enabled: true
};
```

### Twilio SMS
Update `TWILIO_CONFIG`:
```javascript
const TWILIO_CONFIG = {
  accountSid: 'YOUR_TWILIO_ACCOUNT_SID',
  authToken: 'YOUR_TWILIO_AUTH_TOKEN',
  fromNumber: '+15555551234',
  enabled: true
};
```

### Email Receipts
Update `EMAIL_CONFIG`:
```javascript
const EMAIL_CONFIG = {
  apiKey: 'YOUR_SENDGRID_API_KEY',
  fromEmail: 'orders@brickspizza.com',
  fromName: 'Bricks Pizza & Pub',
  enabled: true
};
```

## 📊 Demo Features

The demo includes realistic data and full functionality:
- ✅ 7 specialty pizzas
- ✅ Build-your-own with 4 sizes, 3 crusts, 2 sauces, 14 toppings
- ✅ 10 starters/appetizers
- ✅ Beverages
- ✅ Full cart management
- ✅ Order tracking
- ✅ localStorage persistence

**Note:** Payment processing is simulated. Square API integration will be activated upon client approval.

## 🧪 Testing Checklist

- [x] Browse specialty pizzas
- [x] Build custom pizza with various toppings
- [x] Test crust validation (cauliflower/stuffed only on 12")
- [x] Add starters and beverages to cart
- [x] Adjust quantities in cart
- [x] Remove items from cart
- [x] Start group order and share link
- [x] Schedule order for future date
- [x] Complete checkout flow
- [x] View order history
- [x] Add items to favorites
- [x] Reorder from history
- [x] Test keyboard navigation
- [x] Test screen reader compatibility
- [x] Test mobile responsiveness

## 🎨 Design System

### Colors (from Bricks Pizza logo)
- **Brick Red**: `#B55A3C`
- **Charcoal**: `#3B3426`
- **Cream/Gold**: `#D4A574`

### Typography
- System font stack for optimal performance
- Tailwind CSS utility classes

## 📈 Future Enhancements

After client approval, planned features include:

1. **Backend API**
   - Node.js/Express server
   - Firestore database
   - Real-time order updates

2. **Admin Dashboard**
   - Order management interface
   - Menu editing
   - Analytics and reporting

3. **Customer Accounts**
   - User authentication
   - Saved addresses
   - Order history sync

4. **Payment Processing**
   - Live Square integration
   - Credit card processing
   - Digital receipts

5. **Delivery**
   - Delivery radius calculation
   - Driver dispatch
   - Real-time tracking

6. **Marketing**
   - Email campaigns
   - Promotional codes
   - Loyalty program

## 📄 License

This project is developed for **Bricks Pizza & Pub**.

## 👤 Author

**Caroline Farr**
- Portfolio: [carriefarr.com](https://carriefarr.com)
- GitHub: [@clfarr](https://github.com/clfarr)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Hosted on [Firebase](https://firebase.google.com/)
- Icons from emoji unicode

---

**🍕 Made with ❤️ for Bricks Pizza & Pub**
