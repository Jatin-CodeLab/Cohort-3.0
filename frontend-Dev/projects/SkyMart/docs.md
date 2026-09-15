# 🛒 SkyMart - E-Commerce Web Application

## 📖 Project Overview

SkyMart ek responsive E-Commerce Web Application hai jo maine **React.js** aur **Tailwind CSS** ka use karke banayi hai.

Is project ka main purpose React ke real-world concepts ko practically implement karna tha. Is application me users account create kar sakte hain, login kar sakte hain, products browse kar sakte hain, category ke hisaab se filter kar sakte hain, products search kar sakte hain aur apne shopping cart ko manage kar sakte hain.

Products ko display karne ke liye maine **Fake Store API** use ki hai aur user related data ko browser ke **LocalStorage** me store kiya hai taaki page refresh hone ke baad bhi data save rahe.

Ye project banate time mujhe React, Context API, Routing, State Management, API Integration aur Responsive UI ka practical experience mila.

---

# 🎯 Project Objectives

Is project ko banane ka main goal tha:

- React.js ko practically use karna.
- Ek modern aur responsive E-Commerce website banana.
- User Authentication implement karna.
- Context API ke through global state manage karna.
- External REST API se data fetch karna.
- LocalStorage me data store karna.
- Reusable React Components banana.
- Shopping Cart functionality implement karna.
- Product Search aur Category Filter banana.
- Real project workflow ko samajhna.

---

# 🛠️ Technologies Used

| Technology | Use |
|------------|---------------------------|
| React.js | Frontend Development |
| Tailwind CSS | UI Design & Responsive Layout |
| React Router DOM | Page Navigation |
| Context API | Global State Management |
| LocalStorage | Data Store Karne Ke Liye |
| Fake Store API | Products Fetch Karne Ke Liye |
| Lucide React | Icons |
| JavaScript (ES6+) | Project Logic |
| HTML5 | Structure |
| CSS3 | Styling |

---

# 📂 Project Structure

```text
src
│
├── components
│   ├── Header
│   ├── Footer
│   ├── Card
│
├── Context
│   └── AppContext.jsx
│
├── layouts
│   ├── AuthLayout.jsx
│   ├── MainLayout.jsx
│
├── pages
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── About.jsx
│   └── AddToCartPage.jsx
│
├── routes
│   ├── AppRoutes.jsx
│   ├── ProtectedRoute.jsx
│
└── App.jsx
```

---

# ✨ Features

## 🔐 User Authentication

Application me user apna account bana sakta hai aur login kar sakta hai.

Authentication ke liye maine **Context API** aur **LocalStorage** dono ka use kiya hai.

Features:

- User Registration
- User Login
- Logout
- Protected Routes
- Login Session Maintain

---

## 🏠 Home Page

Home page ko attractive aur modern design diya gaya hai.

Isme following sections available hain:

- Hero Section
- Dashboard Cards
- Featured Categories
- Featured Products
- Call To Action Section

---

## 🛍️ Shop Page

Shop page par Fake Store API se saare products dynamically display hote hain.

Har product card me show hota hai:

- Product Image
- Product Name
- Category
- Price
- Rating
- Description

API Used

```
https://fakestoreapi.com/products
```

---

## 📂 Category Filter

Home page se kisi bhi category par click karte hi user directly Shop page me us category ke products dekh sakta hai.

Example:

- Electronics
- Fashion
- Jewelery
- Men's Clothing
- Women's Clothing

Navigation Example

```javascript
navigate("/main/shop?category=electronics");
```

Shop page URL parameter read karta hai aur us category ke products show karta hai.

---

## 🔍 Product Search

Shop page me search bar diya gaya hai.

User kisi bhi product ka naam type karke easily search kar sakta hai.

Search product title ke basis par hoti hai.

---

## 🛒 Shopping Cart

Shopping Cart me user:

- Product Add kar sakta hai.
- Product Remove kar sakta hai.
- Quantity Increase kar sakta hai.
- Quantity Decrease kar sakta hai.
- Order Summary dekh sakta hai.
- Checkout kar sakta hai.

---

## ➕ Quantity Management

Agar user same product dobara Add To Cart karta hai to duplicate item create nahi hota.

Us product ki quantity automatically increase ho jaati hai.

Example

```
iPhone

Quantity

1 → 2 → 3 → 4
```

Isse cart clean aur easy to manage rehta hai.

---

## 💳 Order Summary

Order Summary automatically calculate karti hai:

- Subtotal
- Shipping Charges
- Tax
- Final Total

Calculation

```
Subtotal = Price × Quantity

Shipping = Free Above ₹999

Tax = 5%

Total = Subtotal + Shipping + Tax
```

Ye values automatically update hoti rehti hain jab quantity change hoti hai.

---

## ✅ Checkout

User jab **Proceed To Checkout** button par click karta hai to:

- Cart Empty ho jaata hai.
- LocalStorage se Cart remove ho jaata hai.
- User fresh shopping start kar sakta hai.

---

## 💾 LocalStorage

Project me LocalStorage ka use data permanently save karne ke liye kiya gaya hai.

Store hone wala data:

- Registered Users
- Logged-in User
- User Wise Shopping Cart

Example

```
registerUser

loggedingUser

cartItems_user@email.com
```

Har user ka alag cart maintain hota hai.

Agar doosra user login karega to usse pehle user ka cart nahi dikhega.

---

## 🌍 Context API

Global State Management ke liye Context API use ki gayi hai.

Isme manage hota hai:

- Logged In User
- Registered Users
- Shopping Cart
- Authentication State

Is wajah se prop drilling ki problem solve ho jaati hai.

---

## 🌐 API Integration

Products ko dynamically Fake Store API se fetch kiya gaya hai.

Example

```javascript
const response = await fetch(
    "https://fakestoreapi.com/products"
);
```

Fetch hone ke baad products automatically UI me display ho jaate hain.

---

## 📱 Responsive Design

Pura project responsive banaya gaya hai.

Ye smoothly work karta hai:

- Mobile
- Tablet
- Laptop
- Desktop

Tailwind CSS ke responsive classes use ki gayi hain.

Example

```html
grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

xl:grid-cols-4
```

---

## 🎨 Icons

Modern UI banane ke liye **Lucide React** icons use kiye gaye hain.

Commonly used icons:

- Shopping Cart
- Heart
- Star
- Trash
- Plus
- Minus

---

# 🔄 User Flow

```
Register

↓

Login

↓

Home Page

↓

Select Category

↓

Shop Page

↓

Browse Products

↓

Add To Cart

↓

Shopping Cart

↓

Increase / Decrease Quantity

↓

Proceed To Checkout

↓

Cart Cleared
```

---

# 📁 Folder Responsibilities

## Context

Context folder global state ko manage karta hai.

Isme store hota hai:

- Logged In User
- Registered Users
- Shopping Cart

---

## Components

Reusable UI Components yaha rakhe gaye hain.

Example:

- Header
- Footer
- Product Card

---

## Pages

Application ke saare screens is folder me hain.

- Login
- Register
- Home
- Shop
- About
- Add To Cart

---

## Layouts

Layouts common UI ko manage karte hain.

Jaise:

- Navbar
- Footer
- Outlet

---

## Routes

Application ki routing yaha handle hoti hai.

Isme:

- Public Routes
- Protected Routes
- Navigation Logic

---

# 🚧 Challenges Faced

Project banate time mujhe kuch challenges face karne pade:

- Context API ko properly manage karna.
- Duplicate cart items ko avoid karna.
- Quantity update logic banana.
- Har user ke liye alag cart maintain karna.
- LocalStorage ko sync rakhna.
- Fake Store API se data fetch karna.
- Category filter banana.
- Responsive UI maintain karna.

In challenges ko solve karte hue React aur JavaScript dono ki understanding kaafi improve hui.

---

# 📚 What I Learned

Is project ko banane ke baad maine practical level par seekha:

- React Components
- React Hooks
- Context API
- React Router DOM
- Tailwind CSS
- Fetch API
- LocalStorage
- State Management
- Responsive Design
- Conditional Rendering
- JavaScript Array Methods
- Reusable Components
- Project Structure

---

# 🚀 Future Improvements

Aage chal kar main is project me ye features add karna chahta hu:

- Wishlist
- Product Details Page
- Payment Gateway
- Coupon System
- Order History
- User Profile
- Product Reviews
- Backend Integration
- MongoDB Database
- Admin Dashboard
- Search Suggestions
- Dark / Light Theme

---

# ✅ Conclusion

SkyMart mere React learning journey ka ek important project hai. Is project ko banate waqt mujhe React ke bahut saare practical concepts samajhne ka mauka mila, jaise Authentication, Routing, Context API, LocalStorage, API Integration aur Shopping Cart Management.

Is project ne meri problem-solving skills bhi improve ki, especially state management aur user-specific cart functionality implement karte waqt.

Overall, ye project meri MERN Stack journey ka ek strong portfolio project hai aur future me backend integration ke saath ise aur bhi complete E-Commerce application me convert kiya ja sakta hai.