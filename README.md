# 🧸 ToyTopia – A Local Kids Toy Store Platform

![Project Banner](https://i.ibb.co.com/KjBVqGyB/Screenshot-2025-12-04-095748.png)

**ToyTopia** is a vibrant and playful single-page application (SPA) designed as an online marketplace for kids' toys. It connects families with unique, local toy sellers through a modern, responsive, and secure platform. The application emphasizes a seamless user experience with advanced filtering, sorting, and authentication features.

🔗 **Live Website:** [Visit ToyTopia](https://toytopiaz4code.netlify.app)

---

## 🚀 Key Features

### 🎨 User Experience (UX) & Design
*   **Modern & Responsive UI:** Built with **Tailwind CSS v4** and **DaisyUI v5**, ensuring a pixel-perfect experience across Mobile, Tablet, and Desktop.
*   **Interactive Animations:** Integrated **AOS (Animate On Scroll)** for smooth entry animations and **Swiper.js** for touch-friendly sliders.
*   **Dynamic Page Titles:** Uses a custom hook to update the browser tab title dynamically based on the current route.
*   **Toast Notifications:** Real-time success and error feedback using `react-toastify`.

### 🔐 Authentication & Security
*   **Firebase Authentication:** robust system supporting:
    *   Email/Password Registration & Login.
    *   Social Login (Google Sign-In).
    *   Forgot Password functionality.
*   **Protected Routes:** Secure routing ensures only authenticated users can access private pages like *My Profile* or *Cart*.
*   **JWT/Auth State Persistence:** Keeps users logged in even after page reloads.

### 🛍️ Product & Marketplace Features
*   **Advanced Search & Filter:** Users can filter toys by **Category**, **Price Range**, and **Stock Availability**.
*   **Sorting System:** Sort products by Price (Low to High / High to Low).
*   **Product Details:** A public route showcasing detailed information about each toy, including seller info and ratings.
*   **User Dashboard:** A dedicated profile page where users can update their display name and profile picture securely.

---

## 🛠️ Technology Stack

*   **Frontend Framework:** [React 19](https://react.dev/) (Vite)
*   **Routing:** [React Router v7](https://reactrouter.com/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
*   **Authentication:** [Firebase Auth](https://firebase.google.com/)
*   **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
*   **Animations:** [AOS](https://michalsnik.github.io/aos/) & [Swiper](https://swiperjs.com/)
*   **Utilities:** `react-toastify`, `match-sorter`, `localforage`

---

## ⚙️ Local Installation Guide

Follow these steps to run the project locally on your machine.

**Prerequisites:** Node.js (v18+) installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/iamshahriarkabir/ToyTopia-Upgradation.git
    cd toytopia
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory and add your Firebase configuration keys:
    ```env
    VITE_apiKey=your_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_storage_bucket
    VITE_messagingSenderId=your_messaging_sender_id
    VITE_appId=your_app_id
    VITE_measurementId=your_measurement_id
    ```

4.  **Run the Project:**
    ```bash
    npm run dev
    ```
    The app should now be running at `http://localhost:5173`.

---

## 📂 Project Structure

```bash
ToyTopia/
├── public/              # Static assets (images, toys.json)
├── src/
│   ├── components/      # Reusable components (Navbar, Footer, ToyCard)
│   ├── contexts/        # Context API (AuthProvider)
│   ├── firebase/        # Firebase configuration
│   ├── hooks/           # Custom hooks (useTitle)
│   ├── layouts/         # Main layout wrapper
│   ├── pages/           # Page components (Home, AllToys, Login, etc.)
│   ├── routes/          # Router configuration (Private & Public routes)
│   └── main.jsx         # Entry point
├── .env.local           # Environment variables
└── package.json         # Dependencies and scripts
```

---

---bash
## 🌟 Future Improvements

*   **Backend Integration:** Replace `toys.json` with a real database (MongoDB) to allow users to add/delete toys.
*   **Cart System:** Implement a fully functional shopping cart and checkout process.
*   **Payment Gateway:** Integration with Stripe or SSLCommerz.

---


* **Developed with ❤️ by** [Z4CODE](https://github.com/iamshahriarkabir/)