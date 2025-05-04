import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from '../pages/HomePage'
import { LoginPage } from "../auth/pages/LoginPage"
import { useContext } from "react"
import { UserContext } from "../auth/context/UserContext"
import { RegisterPage } from "../auth/pages/RegisterPage"


export const AppRouter = () => {
  const {userState: { logged }} = useContext(UserContext);

  if(!logged) {
    return (
      <>
        <Routes>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to="/Login"/>}/>
        </Routes>
      </>
    )
  }

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/Register" element={<RegisterPage/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
    </>
  )
}