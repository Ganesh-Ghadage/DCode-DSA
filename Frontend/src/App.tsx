import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

function App() {

  return (
    <div className="flex flex-col justify-start items-center">
      <Routes>

        <Route 
          path="/"
          element={<HomePage />}
        />

        <Route 
          path="/login"
          element={<LoginPage />}
        />

        <Route 
          path="/signup"
          element={<SignupPage />}
        />
      </Routes>
    </div>
  )
}

export default App
