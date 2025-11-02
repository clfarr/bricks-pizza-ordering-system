# 🚀 Deployment Guide - Bricks Pizza Ordering System

## Overview
This guide will help you deploy the Bricks Pizza ordering system to Google Cloud (Firebase Hosting) for your business presentation.

---

## ✅ Pre-Deployment Checklist

- [x] Accessibility improvements completed
- [x] Firebase configuration files ready
- [x] Demo landing page created
- [ ] GitHub repository created
- [ ] Firebase CLI installed
- [ ] Google Cloud project created
- [ ] Deployed to Firebase Hosting

---

## 📋 Step 1: Install Firebase CLI

Open your terminal and run:

```bash
sudo npm install -g firebase-tools
```

Enter your password when prompted.

Verify installation:
```bash
firebase --version
```

---

## 🔐 Step 2: Login to Firebase

```bash
firebase login
```

This will open your browser. Log in with your Google account.

---

## 🏗️ Step 3: Create a Firebase Project

### Option A: Use Firebase Console (Recommended)
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Project name: `bricks-pizza-demo` (or your choice)
4. Disable Google Analytics (not needed for demo)
5. Click "Create project"
6. Copy your project ID (shown after creation)

### Option B: Use CLI
```bash
firebase projects:create bricks-pizza-demo
```

---

## 🔗 Step 4: Link Your Local Project

In your terminal, navigate to the project folder:

```bash
cd "/Users/carolinefarr/Documents/Bricks Pizza"
```

Initialize Firebase (if needed) or update project ID:

```bash
firebase use --add
```

Select your newly created project from the list.

Or manually edit `.firebaserc`:
```json
{
  "projects": {
    "default": "bricks-pizza-demo"
  }
}
```

---

## 🚀 Step 5: Deploy to Firebase Hosting

```bash
firebase deploy --only hosting
```

After deployment completes, you'll get a URL like:
```
https://bricks-pizza-demo.web.app
```

---

## 🐙 Step 6: Push to GitHub

### Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `bricks-pizza-ordering-system`
3. Description: "Full-featured pizza restaurant ordering system with group orders, scheduled orders, and accessibility features"
4. **Public** (for portfolio visibility)
5. **Do NOT** initialize with README
6. Click "Create repository"

### Push Your Code

Replace `YOUR_USERNAME` with your GitHub username:

```bash
cd "/Users/carolinefarr/Documents/Bricks Pizza"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/bricks-pizza-ordering-system.git

# Push to GitHub
git push -u origin main
```

---

## 📊 Your Deployed URLs

After deployment, you'll have:

- **Landing Page**: `https://YOUR-PROJECT-ID.web.app/`
- **Live Demo**: `https://YOUR-PROJECT-ID.web.app/demo/`

---

## 🎯 For Your Business Presentation

### What to Show:

1. **Landing Page** - Professional overview with feature list
2. **Live Demo** - Full ordering experience:
   - Browse menu with specialty pizzas
   - Build custom pizza with live pricing
   - Add items to cart
   - Group ordering feature
   - Schedule orders for future dates
   - Complete checkout flow
   - Order tracking and history

### Key Selling Points:

✅ **Modern Tech Stack**: React, TypeScript, Firebase
✅ **Mobile-First**: Responsive on all devices
✅ **Accessibility**: WCAG 2.1 compliant for all users
✅ **Group Orders**: Increase average order size
✅ **Scheduled Orders**: Capture advance orders
✅ **Email & SMS**: Automated customer notifications
✅ **Square Integration**: Ready to connect to existing POS
✅ **Order History**: Customer convenience, repeat business
✅ **Admin Ready**: React admin panel for order management

### Demo Script:

1. Start at landing page - show feature overview
2. Click "View Live Demo"
3. Browse specialty pizzas
4. Customize a "Build Your Own" pizza
5. Add to cart
6. Show group order feature (share link capability)
7. Schedule an order for tomorrow
8. Complete checkout with contact info
9. Show order confirmation
10. Navigate to "My Orders" - show tracking

---

## 🔧 Troubleshooting

### Firebase Deploy Error: "Project not found"
```bash
firebase use --add
# Select correct project from list
```

### Permission Denied on npm install
```bash
sudo npm install -g firebase-tools
```

### Logo Not Loading
The logo path is: `public/demo/src/assets/images/logo.jpg`
Ensure this file exists before deploying.

---

## 📱 Custom Domain (Optional)

Once Bricks Pizza approves, you can add their custom domain:

1. In Firebase Console: Hosting → Add custom domain
2. Domain: `order.brickspizza.com` (or similar)
3. Follow DNS verification steps
4. SSL certificate auto-provisioned

---

## 🔄 Future Updates

To deploy updates:

```bash
git add .
git commit -m "Update description"
git push

firebase deploy --only hosting
```

---

## 💡 Next Steps After Approval

1. **Square API**: Add live payment processing
2. **Twilio SMS**: Enable real SMS notifications
3. **Email Service**: Connect SendGrid or AWS SES
4. **Admin Dashboard**: Deploy React admin panel
5. **Database**: Set up Firestore for real order storage
6. **Analytics**: Add Google Analytics tracking
7. **Testing**: Comprehensive QA before public launch

---

## 📞 Support

If you encounter issues during deployment, check:
- Firebase Console: https://console.firebase.google.com/
- Firebase Status: https://status.firebase.google.com/
- Documentation: https://firebase.google.com/docs/hosting

---

**Good luck with your presentation! 🍕**
