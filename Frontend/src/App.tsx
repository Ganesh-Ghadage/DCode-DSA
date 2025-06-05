import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";
import { useEffect } from "react";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AddProblem from "./pages/AddProblem";
import { useAuthStore } from "./store/useAuthStore";
import Layout from "./layout/Layout";
import AdminRoute from "./components/AdminRoute";
import ProblemPage from "./pages/ProblemPage";
import ProfilePage from "./pages/ProfilePage";
import ProblemsListPage from "./pages/ProblemsListPage";
import SheetListPage from "./pages/SheetListPage";
import SheetPage from "./pages/SheetPage";
import EditProblemPage from "./pages/EditProblemPage";
import DashboardPage from "./pages/DashboardPage";
import VerifyPage from "./pages/VerifyPage";

function App() {
	const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (!authUser && isCheckingAuth) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	}

	return (
		<div className="flex flex-col justify-start items-center">
			<Toaster position="bottom-right" />

			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<HomePage />}
					/>

					<Route
						path="/problem"
						element={
							authUser ? <ProblemsListPage /> : <Navigate to={"/login"} />
						}
					/>

					<Route
						path="/sheets"
						element={authUser ? <SheetListPage /> : <Navigate to={"/login"} />}
					/>
				</Route>

				<Route
					path="/login"
					element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
				/>

				<Route
					path="/signup"
					element={!authUser ? <SignupPage /> : <Navigate to={"/"} />}
				/>

				<Route
					path="/problem/:id"
					element={authUser ? <ProblemPage /> : <Navigate to={"/login"} />}
				/>

				<Route 
					path="/sheet/:id"
					element={authUser ? <SheetPage /> : <Navigate to={"/login"} />}
				/>

				<Route
					path="/profile"
					element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />}
				/>
				
				<Route
					path="/dashboard"
					element={authUser ? <DashboardPage /> : <Navigate to={"/login"} />}
				/>

				<Route 
					path="/verify/:token"
					element={<VerifyPage />}
				/>

				<Route element={<AdminRoute />}>
					<Route
						path="/add-problem"
						element={authUser ? <AddProblem /> : <Navigate to={"/"} />}
					/>

					<Route
						path="/problem/edit/:id"
						element={authUser ? <EditProblemPage /> : <Navigate to={"/"} />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
