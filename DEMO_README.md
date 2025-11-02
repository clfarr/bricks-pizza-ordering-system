# Bricks Pizza & Pub - Interactive Demo

## About This Demo

This is a **proof-of-concept** interactive ordering system for Bricks Pizza & Pub. It demonstrates a complete customer ordering flow from browsing the menu to checkout.

## Features Implemented

✅ **Complete Menu System**
- Specialty Pizzas (7 varieties)
- Build Your Own Pizza with live pricing
- Starters/Appetizers (10 items)
- Beverages

✅ **Build Your Own Pizza Builder**
- 4 size options
- Crust selection with validation (Cauliflower/Stuffed only on 12")
- Sauce selection
- Protein and topping checkboxes
- Live price calculation ($2.99 per topping)

✅ **Shopping Cart**
- Add/remove items
- Quantity adjustment
- Real-time subtotal, tax (7.25%), and total calculation
- Cart badge showing item count

✅ **Checkout Flow**
- Multi-step form (Contact Info + Payment)
- Order summary with all items
- Mock payment form (demo only - no real processing)

✅ **Square API Integration (Mock)**
- Generates realistic Square Orders API `CreateOrder` payload
- Logs complete JSON to browser console
- 2-second simulated API call with loading state
- Order confirmation screen

## How to Use

1. **Open the demo**: Double-click `bricks_pizza_demo.html` or open in any modern web browser

2. **Browse the menu**: Click "Order Online" or navigate to #menu

3. **Add items to cart**:
   - Specialty pizzas: Select size, add to cart
   - Build Your Own: Customize size, crust, sauce, and toppings
   - Starters: Select size (if applicable), add to cart

4. **View cart**: Click the "Cart" button in header

5. **Checkout**: Click "Checkout" button in cart modal

6. **Complete order**: Fill in contact info and submit

7. **View API payload**: Open browser console (F12) to see the Square API JSON payload

## Technical Details

### Single File Architecture
- **HTML + Tailwind CSS (CDN)**: All-in-one file, no build process required
- **Vanilla JavaScript**: Modern ES6+, no frameworks
- **State Management**: Global cart object with reactive updates

### Brand Colors (from logo)
- **Brick Red**: #B55A3C
- **Charcoal**: #3B3426
- **Cream/Gold**: #D4A574

### Menu Data Structure
All menu items, pricing, and options are stored in a JavaScript object (`MENU_DATA`):
- Specialty pizzas with 4 sizes
- BYO base prices, crust options, sauces, toppings
- Starters with optional sizing
- Beverages

### Square API Payload Format
The checkout process generates a JSON payload matching Square's `CreateOrder` endpoint:
```json
{
  "idempotency_key": "unique_order_id",
  "order": {
    "location_id": "DEMO_LOCATION_520_MAIN_ST",
    "reference_id": "BRICKS_timestamp",
    "line_items": [...],
    "taxes": [{...}],
    "metadata": {
      "customer_name": "...",
      "customer_phone": "...",
      "customer_email": "..."
    }
  }
}
```

## Business Information

**Name**: Bricks Pizza & Pub
**Address**: 520 Main Street, Weaverville, CA
**Phone**: (530) 423-5281

**Hours**:
- Mon-Thurs: 11AM - 9PM
- Fri-Sat: 11AM - 11PM
- Sun: 11AM - 9PM

**Facebook**: https://www.facebook.com/profile.php?id=61579018107619

## Pricing Logic

### Specialty Pizzas
- Personal 10": $17.99
- Small 12": $24.99
- Medium 16": $28.99
- Large 18": $32.99

### Build Your Own
- **Base**: Personal ($10.99), Small ($13.99), Medium ($16.99), Large ($20.99)
- **Crust**: Regular (+$0), Cauliflower/Stuffed (+$4.00, 12" only)
- **Toppings**: $2.99 each

### Starters
- Variable pricing, some with 1/2 and full portions

## Logging & Debugging

The demo includes comprehensive logging:
- **INFO**: General application flow
- **WARNING**: Validation issues
- **ERROR**: Critical errors

All logs are timestamped and can be viewed in the browser console.

## Future Integration

This demo is designed to be production-ready with minimal changes:

1. **Backend API**: Replace `setTimeout` with actual Square API calls
2. **Authentication**: Add user login/accounts
3. **Payment Processing**: Integrate Square Payments SDK
4. **Order Management**: Build admin dashboard
5. **Real-time Updates**: Add WebSocket for order status

## Testing Checklist

- [ ] Load homepage
- [ ] Navigate to Order Online page
- [ ] Add specialty pizza (all 4 sizes)
- [ ] Build custom pizza with various toppings
- [ ] Test crust validation (cauliflower/stuffed only on 12")
- [ ] Add starters and beverages
- [ ] View cart, adjust quantities
- [ ] Remove items from cart
- [ ] Proceed to checkout
- [ ] Fill out contact form
- [ ] Submit order
- [ ] Verify console shows Square API payload
- [ ] Check order confirmation modal

## Notes

- **No real payments**: All payment forms are for demonstration only
- **No backend**: All data is stored in browser memory
- **No persistence**: Refreshing the page clears the cart
- **Mock data**: Menu items are samples and should be updated with real offerings

## Contact

For questions about this demo or to discuss production implementation:
**Bricks Pizza & Pub**: (530) 423-5281
