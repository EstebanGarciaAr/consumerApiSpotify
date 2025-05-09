import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
  
  import { FirebaseAuth } from "./config";
  
  const GoogleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();
  
  
  // Authenticate user against firebase authentication
  export const loginUser = async (email, password) => {
    try {
  
      const result = await signInWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );
      
      const { uid, photoURL, displayName } = result.user;
  
      return {
        ok: true,
        uid,
        email,
        photoURL,
        displayName,
      };
    } catch (error) {
  
      return {
        ok: false,
        errorMessage: error.message,
      };
    }
  };

  export const registerUser = async (email, password, name) => {
  try {
    const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);


    await updateProfile(result.user, { displayName: name });

    const { uid, photoURL, displayName } = result.user;

    return {
      ok: true,
      uid,
      email,
      photoURL,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};
  
  export const authWithGoogle = async () => {
    GoogleProvider.setCustomParameters({ prompt: "select_account" });
  
    try {
      const result = await signInWithPopup(FirebaseAuth, GoogleProvider);
  
      const { displayName, email, photoURL, uid } = result.user;
  
      return {
        ok: true,
        uid,
        photoURL,
        email,
        displayName,
      };
  
    } catch (error) {
      return {
        ok: false,
        errorMessage: error.message,
      };
    }
  };

  export const authWithFacebook = async () => {
    FacebookProvider.setCustomParameters({ prompt: "select_account" });

    try {
      const result = await signInWithPopup(FirebaseAuth, FacebookProvider);

      const { uid, photoURL, displayName, email } = result.user;

      return {
         ok: true, 
         uid, 
         photoURL, 
         email, 
         displayName 
        };

    } catch (error) {
      return { 
        ok: false, 
        errorMessage: error.message 
      };
    }
  };