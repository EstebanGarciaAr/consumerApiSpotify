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

🔐 Firebase Authentication Setup
Before running this project locally, make sure Firebase Authentication is correctly configured so the login methods (email/password, Google, and Facebook) work properly.

1. Create a Firebase project
Go to https://console.firebase.google.com

Click "Add project" and follow the setup steps (you can skip Google Analytics if you want).

Once your project is created, go to the project dashboard.

2. Register a Web App
Click the </> icon to add a new web app.

Give it a name (e.g., spotify-auth-app) and register it.

Copy the configuration keys that are generated.

3. Enable Authentication Providers
In the Firebase console:

📧 Email/Password
Go to "Authentication" > "Sign-in method".

In the list of providers, click Email/Password.

Enable it and save changes.

🟢 Google
In the same Sign-in method section, click Google.

Enable it.

Add a support email and save changes.

🔵 Facebook
Create an app at https://developers.facebook.com

In the Facebook app dashboard, go to "Settings" > "Basic" and copy the App ID and App Secret.

Back in Firebase, click Facebook and paste those credentials.

In OAuth redirect URI, copy the URL Firebase gives you and paste it in Facebook's settings (under Facebook Login > Settings).


## 📝 Development Notes

✅ Login functional - login with API Spotify coming soon

⚠️ Registration is visual only – logic not yet wired to Firebase

🚧 Playlist saving/sharing functionality coming soon


