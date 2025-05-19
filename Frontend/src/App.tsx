import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import { Toaster } from "react-hot-toast"

function App() {
  let authUser = null

  return (
    <div className="flex flex-col justify-start items-center">
      <Toaster />
      <Routes>

        <Route 
          path="/"
          element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
        />

        <Route 
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />

        <Route 
          path="/signup"
          element={!authUser ? <SignupPage /> : <Navigate to={"/"} />}
        />
      </Routes>
    </div>
  )
}

export default App
