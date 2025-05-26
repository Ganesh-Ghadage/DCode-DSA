import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { cn } from "../lib/utils";

interface props {
	children: React.ReactNode;
	className?: string;
}

function LogoutButton({ children, className }: props) {
	const { logout } = useAuthStore();

	const onLogout = async () => {
		await logout();
	};

	return (
		<button className={cn(className, "btn btn-primary")} onClick={onLogout}>
			{children}
		</button>
	);
}

export default LogoutButton;
