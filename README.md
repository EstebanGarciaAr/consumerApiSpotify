# 🎧 consumerApiSpotify

Una moderna aplicación desarrollada con React + Vite que integra autenticación con Firebase y la API Web de Spotify. Los usuarios pueden iniciar sesión con Spotify, visualizar sus artistas principales, playlists y canciones, además de descargar las playlists compartidas por sus amigos. Todo está conectado a Firebase para una experiencia fluida y segura.

## ✨ Funcionalidades

- 🔐 **Autenticación de usuarios con Firebase**
  - Inicio de sesión con correo y contraseña
  - Inicio de sesión con Google
  - Inicio de sesión con Facebook
  - Inicio de sesión con **Spotify**
- 🔒 **Rutas protegidas** – Solo usuarios autenticados pueden acceder a las funcionalidades principales
- 🏠 **Home Page funcional** – Muestra artistas principales, playlists y canciones del usuario desde Spotify
- 📥 **Descarga de playlists de amigos** – Permite explorar y descargar playlists públicas compartidas por otros usuarios
- 🎵 **Playlists personalizadas** – Guarda hasta **3 playlists personalizadas** por usuario

## 📁 Estructura del Proyecto

```bash
/src
  /auth
    /components
      /login         # Componentes LoginForm y SocialLoginButton
      /register      # Componente RegisterForm
    /context         # UserContext y UserProvider
    /helpers         # Helpers
    /hooks           # Hook personalizado useAuthentication
    /pages           # LoginPage y RegisterPage
    /reducers        # authReducer
    /types           # Constantes de tipo de acción para auth
  /components
    /home            # NavBar y componente PlayList
  /firebase          # Configuración y proveedor de Firebase
  /hooks             # Hooks compartidos como useForm
  /pages             # HomePage con integración de Spotify
  /router            # AppRouter con rutas protegidas
  EventApp.jsx       # Estructura principal de la app
  main.jsx           # Punto de entrada de la aplicación


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


