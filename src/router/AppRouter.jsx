import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../auth/context/UserContext";
import HomePage from "../pages/HomePage"
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import {ProfilePage} from "../pages/ProfilePage";
import StoragePage from "../pages/StoragePage";

export const AppRouter = () => {
  const { userState: { logged } } = useContext(UserContext);

  if (!logged) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
       <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} /> 
      <Route path="/storage" element={<StoragePage/>}/>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
