# 🎧 consumerApiSpotify

A modern React + Vite application that integrates with the Spotify API and Firebase Authentication. It supports multi-provider login and is designed to allow users to save and share up to 3 custom playlists.

> 🚧 Currently under development — playlist persistence and sharing features are in progress.

## ✨ Features

- 🔐 **User Authentication with Firebase**
  - Email/Password login
  - Google Sign-In
  - Facebook Sign-In
- 🔒 **Protected Routes** – Ensures only authenticated users can access core features
- 📋 **Registration UI Ready** – Visual form for sign-up, logic not yet implemented
- 🎵 **Planned Features**
  - Save up to **3 custom playlists**
  - Explore and download **public playlists shared by other users**


## 📁 Project Structure

```bash
/src
  /auth
    /components
      /login         # LoginForm & SocialLoginButton components
      /register      # RegisterForm component
    /context         # UserContext and UserProvider
    /helpers         # helpers
    /hooks           # Custom auth hook (useAuthentication)
    /pages           # LoginPage & RegisterPage
    /reducers        # authReducer
    /types           # Action type constants for auth
  /components
    /home            # NavBar and PlayList components
  /firebase          # Firebase config and provider
  /hooks             # Shared custom hooks (useForm)
  /pages             # HomePage (after login)
  /router            # AppRouter
  EventApp.jsx       # (main layout)
  main.jsx           # App entry point

```
🛠️ Tech Stack

-React

-Vite

-Firebase

-React Router DOM

-Bootstrap 5

-Font Awesome

🚀 Getting Started
Clone the repo and run the project:

# Clone the repository
git clone https://github.com/EstebanGarciaAr/consumerApiSpotify.git
cd consumerApiSpotify

# Install dependencies
npm install

# Start development server
npm run dev

# Download ngrok
choco install ngrok

## 📥 Installation Commands

Install the following dependencies after cloning the repo:

npm install react-router-dom

npm install firebase

npm install bootstrap

npm install @fortawesome/fontawesome-free

ngrok config add-authtoken 2wnSaSc4eQ11oyzjAADRFKP9uwR_VHhgnrnAjnkw15Tv2Zh4

ngrok http 5173


## 📝 Development Notes

✅ Login functional - login with API Spotify coming soon

⚠️ Registration is visual only – logic not yet wired to Firebase

🚧 Playlist saving/sharing functionality coming soon


