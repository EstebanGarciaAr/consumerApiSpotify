# 🎧 consumerApiSpotify

A modern React + Vite application that integrates Firebase Authentication and the Spotify Web API. Users can log in with Spotify, view their top artists, playlists, and tracks, and download playlists shared by their friends. The entire app is connected to Firebase for a smooth and secure experience.

## ✨ Features

- 🔐 **User Authentication with Firebase**
  - Email/Password login
  - Google Sign-In
  - Facebook Sign-In
  - **Spotify Login** fully integrated
- 🔒 **Protected Routes** – Only authenticated users can access main features
- 🏠 **Fully Functional Home Page** – Displays top artists, playlists, and tracks from Spotify
- 📥 **Download Friends' Playlists** – Explore and download public playlists shared by others
- 🎵 **Custom Playlists** – Users can save up to **3 personalized playlists**

## 📁 Project Structure

```bash
/src
  /apiconsumer
     /config         # config from spotyfy   
  /auth
    /components
      /login         # LoginForm & SocialLoginButton components
      /register      # RegisterForm component
    /context         # UserContext and UserProvider
    /helpers         # Helper functions
    /hooks           # useAuthentication custom hook
    /pages           # LoginPage & RegisterPage
    /reducers        # authReducer
    /types           # Action type constants for auth
  /components
    /home            # NavBar and PlayList components
   /events           #firestore
  /firebase          # Firebase config and provider
  /hooks             # Shared hooks (e.g., useForm)
  /pages             # HomePage (Spotify data)
  /router            # AppRouter with protected routes
  EventApp.jsx       # Main app layout
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

✅  Fully functional login with Spotify
✅  HomePage displays artists, playlists, and tracks from Spotify
✅ Registration UI and logic connected to Firebase
✅ Firebase integration completed
✅ Users can download playlists shared by friends


