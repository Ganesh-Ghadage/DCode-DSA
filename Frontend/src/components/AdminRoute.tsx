import { Loader } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
	const { authUser, isCheckingAuth } = useAuthStore();

	if (isCheckingAuth) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	}

	if (!authUser && authUser.role !== "ADMIN") {
		return <Navigate to={"/"} replace />;
	}

	return <Outlet />;
};

export default AdminRoute;
