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
import CodeWar from "./pages/CodeWarPage";
import CodeRoom from "./pages/CodeRoomPage";
import NotVerifiedPage from "./pages/NotVerifiedPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import TermsOfService from "./pages/TermsOfServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import ContactUs from "./pages/ContactUs";

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
					element={
						authUser ? (
							authUser?.isEmailVerified ? (
								<Layout />
							) : (
								<NotVerifiedPage />
							)
						) : (
							<Layout />
						)
					}
				>
					<Route
						index
						element={<HomePage />}
					/>

					<Route
						path="/problem"
						element={<ProblemsListPage />}
					/>

					<Route
						path="/sheets"
						element={<SheetListPage />}
					/>

					<Route
						path="/code-war"
						element={<CodeWar />}
					/>

					<Route
						path="/code-room"
						element={<CodeRoom />}
					/>

					<Route
						path="/terms"
						element={<TermsOfService />}
					/>
					<Route
						path="/privacy"
						element={<PrivacyPolicy />}
					/>
					<Route
						path="/cookies"
						element={<CookiePolicy />}
					/>
					<Route
						path="/contact"
						element={<ContactUs />}
					/>
				</Route>

				<Route
					path="/login"
					element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
				/>

				<Route
					path="/forgot-password"
					element={!authUser ? <ForgotPasswordPage /> : <Navigate to={"/"} />}
				/>

				<Route
					path="/change-password/:token"
					element={!authUser ? <ChangePasswordPage /> : <Navigate to={"/"} />}
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
