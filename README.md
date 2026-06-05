# React Firebase Authentication Assignment

A complete, robust, and responsive React + Vite web application showcasing Firebase Authentication, secure routing, and context-based state management. This project is built using modern React practices (functional components, hooks, custom context, useReducer) and is styled using Ant Design, Bootstrap, and SCSS.

## 🚀 Features

- **Context-based Auth State**: Custom React Context (`AuthContext`) paired with a `useReducer` to globally manage authentication state (`isAuth`, `user`, `isAppLoading`).
- **Reactive Observer**: Uses Firebase `onAuthStateChanged` to reactively update authentication status on page refreshes or external session changes.
- **Sign Up / Registration**: Secure user registration via Firebase Auth.
- **Login / Sign In**: Email and password authentication with instant redirects to protected routes.
- **Forgot Password**: Password reset emails sent through Firebase with custom continue redirect URLs configured via environment variables.
- **Secure Protected Routes**: A reusable `ProtectedRoute` component that prevents unauthenticated users from accessing dashboard/private pages.
- **Feedback & Toasts**: Action feedback using toast notifications (`window.toastify`).
- **Premium UI**: Styled with Ant Design component libraries, custom Bootstrap grid styles, and clean responsive layouts.

---

## 🛠️ Tech Stack

- **Core**: React 19, Vite 8, Javascript (ES6+)
- **Styling**: SCSS/Sass, Bootstrap 5, Ant Design (AntD v6)
- **Routing**: React Router DOM (v7)
- **Backend / Authentication**: Firebase Web SDK (v12)

---

## 💻 Getting Started

Follow these steps to run the application locally on your machine.

### 1. Clone & Install Dependencies
First, install all the package dependencies:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.development.local` file in the root directory based on `.env.sample`:
```env
VITE_CONTINUE_URL = 'http://localhost:5173/auth/login'
```

### 3. Firebase Configuration
Make sure your Firebase credentials are correctly configured in [src/config/firebase.jsx](file:///c:/Users/user/Desktop/Web%20Dev/SMIT-WAMD/React-Firebase/React-Assignment/src/config/firebase.jsx).

### 4. Run Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production
To build the project for production, run:
```bash
npm run build
```
This generates optimized production files inside the `dist/` directory.

---

## 📂 Project Structure

```text
├── src/
│   ├── config/
│   │   └── firebase.jsx     # Firebase app initialization and services export
│   ├── context/
│   │   └── Auth.jsx         # Authentication Context, Reducer, and Provider
│   ├── components/
│   │   └── Misc/
│   │       ├── ProtectedRoute.jsx  # Route guard for dashboard paths
│   │       ├── ScreenLoader.jsx    # Preloader spinner component
│   │       └── NoPage.jsx          # 404 Page Component
│   ├── pages/
│   │   ├── Auth/
│   │   │   ├── Login/       # Login page implementation
│   │   │   ├── Register/    # Sign up page implementation
│   │   │   └── ForgotPassword/ # Forgot password layout
│   │   ├── Dashboard/       # Protected dashboard pages
│   │   ├── Frontend/        # Public landing layout/pages
│   │   └── Routes.jsx       # Central routing configuration
│   ├── App.jsx              # Main App entry point and loader controller
│   └── main.jsx             # React DOM mounting and styles import
```
