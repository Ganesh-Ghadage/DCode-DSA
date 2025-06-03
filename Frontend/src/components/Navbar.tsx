import { User, Code, LogOut, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";
import LogoutButton from "./LogoutButton";
import Logo from "./Logo";
import { useMobileView } from "@/customHooks/useMobileView";
import SideBarMenu from "./ui/sidebar-menu";
import { TopBar } from "./ui/topbar-menu";
import ThemeToggle from "./ThemeToggleButton";

function Navbar() {
	const { authUser } = useAuthStore();
	const isMobile = useMobileView();

	const navItems = [
		{ name: "Home", url: "/" },
		{ name: "Problems", url: "/problem" },
		{ name: "Sheets", url: "/sheets" },
	];

	return (
		<nav className="sticky top-0 left-1/2 z-50 w-full md:px-20 bg-base-200">
			<div className="relative flex p-4 justify-between items-center">
				{isMobile ? (
					<div className="w-full flex justify-between items-center">
						<Link
							to="/"
							className="flex items-center gap-3 cursor-pointer"
						>
							<Logo />
						</Link>
						<SideBarMenu items={navItems} />
					</div>
				) : (
					<div className="w-full flex justify-between items-center">
						<Link
							to="/"
							className="flex items-center gap-3 cursor-pointer"
						>
							<Logo />
							<span className="absolute left-18 text-lg md:text-xl font-bold tracking-tight hidden lg:block">
								DCode DSA
							</span>
						</Link>
						<TopBar items={navItems} />

						<div className="flex gap-2 items-center">
							<ThemeToggle />
							{authUser ? (
								<div className="flex items-center gap-8">
									<div className="dropdown dropdown-end">
										<label
											tabIndex={0}
											className="btn btn-ghost btn-circle avatar flex flex-row "
										>
											<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
												<img
													src={
														authUser?.image ||
														"https://avatar.iran.liara.run/public/boy"
													}
													alt="User Avatar"
													className="object-cover"
												/>
											</div>
										</label>
										<ul
											tabIndex={0}
											className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
										>
											<li>
												<p className="text-base font-semibold">
													{authUser?.name}
												</p>
												<hr className="border-gray-200/10" />
											</li>
											<li>
												<Link
													to="/profile"
													className="hover:bg-primary hover:text-white text-base font-semibold"
												>
													<User className="w-4 h-4 mr-2" />
													My Profile
												</Link>
											</li>
											<li>
												<Link
													to="/dashboard"
													className="hover:bg-primary hover:text-white text-base font-semibold"
												>
													<LayoutDashboard className="w-4 h-4 mr-2" />
													My DashBoard
												</Link>
											</li>
											{authUser?.role === "ADMIN" && (
												<li>
													<Link
														to="/add-problem"
														className="hover:bg-primary hover:text-white text-base font-semibold"
													>
														<Code className="w-4 h-4 mr-1" />
														Add Problem
													</Link>
												</li>
											)}
											<li>
												<LogoutButton className="hover:bg-primary hover:text-white">
													<LogOut className="w-4 h-4 mr-2" />
													Logout
												</LogoutButton>
											</li>
										</ul>
									</div>
								</div>
							) : (
								<button className="btn btn-primary">
									<Link
										to={"/login"}
										className=""
									>
										LogIn
									</Link>
								</button>
							)}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
