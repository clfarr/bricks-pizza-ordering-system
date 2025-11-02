# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a website for **Bricks Pizza & Pub**, a pizza restaurant in Weaverville, CA. The site includes online ordering, menu display, table reservations, rewards program, and contact information.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Context API (CartContext)
- **Styling**: CSS (App.css)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Architecture

### Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Navigation, Footer)
│   ├── menu/           # Menu-specific components
│   ├── ordering/       # Order flow components
│   ├── reservations/   # Reservation form components
│   └── rewards/        # Rewards program components
├── pages/              # Page-level components (route views)
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── Order.tsx
│   ├── Reservations.tsx
│   ├── Rewards.tsx
│   └── Contact.tsx
├── context/            # React Context providers
│   └── CartContext.tsx # Shopping cart state management
├── types/              # TypeScript type definitions
│   └── common/
│       └── index.ts    # Core types (MenuItem, CartItem, Order, etc.)
├── services/           # API service layer (for future backend integration)
├── utils/              # Utility functions
└── assets/             # Static assets (images, icons)
```

### Key Architecture Patterns

**State Management**: Uses React Context API for global cart state. CartContext provides:
- `cart`: Array of cart items
- `addToCart()`, `removeFromCart()`, `updateQuantity()`, `clearCart()`
- `getTotalItems()`, `getTotalPrice()`

**Routing**: React Router handles navigation between pages. All routes defined in src/App.tsx:
- `/` - Home page
- `/menu` - Menu display
- `/order` - Online ordering interface
- `/reservations` - Table booking
- `/rewards` - Rewards program
- `/contact` - Contact information

**Component Organization**: Components are organized by feature (menu, ordering, reservations, rewards) with shared components in `common/`.

## Business Information

**Name**: Bricks Pizza & Pub
**Address**: 520 Main Street, Weaverville, CA
**Phone**: 530-423-5281

**Hours**:
- Sunday: 11am - 8pm
- Monday-Thursday: 11am - 8pm
- Friday & Saturday: 11am - 9pm

### Menu Pricing

**Specialty Pizza Prices**:
- Personal 10": $17.99
- Small 12": $24.99
- Medium 16": $28.99
- Large 18": $32.99

**Build Your Own Prices**:
- Personal 10": $10.99
- Small 12": $13.99
- Medium 16": $16.99
- Large 18": $20.99
- Add $2.99 per topping & protein

**Cauliflower Crust** (12" only, +$4):
- Specialty: $28.99
- Build Your Own: $17.99 + $2.99 per topping & protein

## Feature Implementation Notes

### Online Ordering System
The ordering flow should:
1. Display menu items from Menu page
2. Allow users to customize pizzas (size, toppings)
3. Add items to cart (managed by CartContext)
4. Collect customer information
5. Choose delivery or pickup
6. Process payment (integration TBD)

### Menu Display
- Show all menu items with descriptions and images
- Filter by category (pizza, appetizer, dessert, drink)
- Display pricing for different sizes
- Link to ordering page

### Reservations
- Calendar-based date picker
- Time slot selection
- Party size input
- Special requests field
- Confirmation system

### Rewards System
- Points earned per order
- Tier system: bronze, silver, gold, platinum
- Order history tracking
- Redemption options

## TypeScript Types

Core types are defined in `src/types/common/index.ts`:
- `MenuItem`: Menu item structure with pricing and options
- `CartItem`: Shopping cart item with quantity and customizations
- `Order`: Complete order with items, customer info, and status
- `CustomerInfo`: Customer contact details
- `Reservation`: Table reservation details
- `RewardsAccount`: Customer rewards tracking

## Deployment

This project is configured for **Firebase Hosting** on Google Cloud.

### Initial Setup

1. Install Firebase CLI globally:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase project (if not already done):
```bash
firebase init hosting
```
- Select your Firebase project or create a new one
- Set public directory to: `dist`
- Configure as single-page app: `Yes`
- Don't overwrite index.html: `No`

4. Update `.firebaserc` with your project ID

### Deployment Process

1. Build the production bundle:
```bash
npm run build
```

2. Test the build locally:
```bash
npm run preview
```

3. Deploy to Firebase Hosting:
```bash
firebase deploy
```

### Firebase Configuration

- **firebase.json**: Hosting configuration with caching rules and SPA routing
- **.firebaserc**: Project configuration (update with your Firebase project ID)
- **Public directory**: `dist` (contains built files)

### Deployment Notes

- The site is configured as a Single Page Application (SPA)
- All routes redirect to index.html for client-side routing
- Static assets (images, JS, CSS) are cached for 1 year
- SSL certificate is automatically provisioned
- Global CDN for fast loading worldwide

## Future Enhancements

- Backend API integration for orders and reservations
- Payment processing (Stripe, Square, etc.)
- Real-time order tracking
- Email/SMS notifications
- Admin dashboard for order management
- Customer authentication for rewards program
- Google Maps integration for location
- Photo gallery of restaurant and food
