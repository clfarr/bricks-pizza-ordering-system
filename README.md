# Bricks Pizza & Pub Website

A modern, responsive website for Bricks Pizza & Pub, a local pizza restaurant in Weaverville, CA. Built with React, TypeScript, and deployed on Firebase Hosting.

## Features

- **Online Ordering System** - Browse menu, customize pizzas, and place orders
- **Menu Display** - Interactive menu with detailed pricing for all sizes
- **Table Reservations** - Book tables for dine-in experiences
- **Rewards Program** - Customer loyalty tracking with tier-based rewards
- **Contact & Location** - Business hours, address, and contact information
- **Responsive Design** - Optimized for mobile, tablet, and desktop

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Deployment**: Firebase Hosting (Google Cloud)
- **Styling**: CSS3

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page-level route components
├── context/         # React Context providers (Cart, etc.)
├── data/            # Business info, menu items, pricing
├── types/           # TypeScript type definitions
├── services/        # API service layer
└── assets/          # Images and icons
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Bricks Pizza"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for Firebase Hosting:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Build and deploy:
```bash
npm run build
firebase deploy
```

## Menu Pricing

**Specialty Pizzas:**
- Personal 10": $17.99
- Small 12": $24.99
- Medium 16": $28.99
- Large 18": $32.99

**Build Your Own:**
- Personal 10": $10.99 (+$2.99 per topping)
- Small 12": $13.99 (+$2.99 per topping)
- Medium 16": $16.99 (+$2.99 per topping)
- Large 18": $20.99 (+$2.99 per topping)

**Cauliflower Crust** (12" only): Additional $4.00

## Business Information

**Bricks Pizza & Pub**
520 Main Street
Weaverville, CA
Phone: 530-423-5281

**Hours:**
- Sunday: 11am - 8pm
- Monday-Thursday: 11am - 8pm
- Friday & Saturday: 11am - 9pm

## Future Enhancements

- Backend API for order processing
- Payment integration (Stripe/Square)
- Real-time order tracking
- Customer authentication
- Email/SMS notifications
- Google Maps integration
- Photo gallery

## License

This project is developed for Bricks Pizza & Pub.

## Contact

For questions or support, contact: 530-423-5281
