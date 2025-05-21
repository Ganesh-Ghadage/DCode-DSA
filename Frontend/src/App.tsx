import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

function App() {
	const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, []);

	if (!authUser && isCheckingAuth) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	}

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
	);
}

export default App;
