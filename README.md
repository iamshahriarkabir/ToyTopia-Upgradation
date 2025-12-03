# ToyTopia – A Local Kids Toy Store Platform

ToyTopia is a vibrant and playful online marketplace for kids' toys, designed to encourage families to discover and support local toy sellers. It is a fully responsive single-page application built with React.

**Live URL:** [https://toytopiaz4.web.app/]

---

## Key Features

-   **Vibrant & Responsive UI:** A playful and clear user interface that works seamlessly on mobile, tablet, and desktop devices.
-   **Secure Authentication:** Full user authentication system using Firebase, including email/password registration, login, Google Sign-In, and a functional "Forgot Password" feature.
-   **Protected Routes:** User-specific pages like "Toy Details" and "My Profile" are protected, ensuring only logged-in users can access them.
-   **Engaging Home Page:** Features an interactive slider (using Swiper.js), a "Popular Toys" section, and scroll animations (using AOS) for an engaging user experience.
-   **Dynamic Content:** Toy data is loaded from a JSON file, and each page features a dynamic title for better user navigation and SEO.
-   **User Profile Management:** Logged-in users can view their profile information and update their name and photo URL, with changes saved directly to Firebase.
-   **User-Friendly Feedback:** Success and error messages are displayed using toast notifications for a smooth user experience.
-   **Error Handling:** A custom 404 "Not Found" page is implemented for invalid routes.

---

## NPM Packages Used

-   `react`: Core library for building the user interface.
-   `react-router`: For client-side routing.
-   `firebase`: For user authentication and other backend services.
-   `tailwindcss`: A utility-first CSS framework for styling.
-   `daisyui`: A Tailwind CSS component library for beautiful, pre-built components.
-   `swiper`: For the interactive and responsive home page slider.
-   `aos`: For "Animate On Scroll" effects.
-   `react-toastify`: For displaying user-friendly notifications.
-   `react-icons`: For easily including popular icons.
