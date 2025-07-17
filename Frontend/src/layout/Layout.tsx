import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/sections/Footer";

function Layout() {
	return (
		<div className="w-full">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
