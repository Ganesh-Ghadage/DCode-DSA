import { User, Code, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";
import LogoutButton from "./LogoutButton";
import Logo from "./Logo";
import { cn } from "../lib/utils";

function Navbar() {
	const { authUser } = useAuthStore();
	const path = useLocation().pathname;

	return (
		<nav className="sticky top-0 z-50 w-full py-5">
			<div className="flex w-full justify-between mx-auto max-w-4xl bg-black/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border border-gray-200/10 p-4 rounded-2xl">
				{/* Logo Section */}
				<Link
					to="/"
					className="flex items-center gap-3 cursor-pointer"
				>
					<Logo />
					<span className="text-lg md:text-2xl font-bold tracking-tight text-white hidden md:block">
						DCode DSA
					</span>
				</Link>

				<div className="flex items-center gap-10 mx-auto">
					<Link
						to={"/"}
						className={cn(
							"text-lg md:text-xl font-bold hover:text-primary",
							path === "/" ? "bg-primary/20 py-2 px-4 rounded-xl" : ""
						)}
					>
						Home
					</Link>
					<Link
						to={"/problem"}
						className={cn(
							"text-lg md:text-xl font-bold hover:text-primary",
							path === "/problem" ? "bg-primary/20 py-2 px-4 rounded-xl" : ""
						)}
					>
						Problems
					</Link>
					<Link
						to={"/sheets"}
						className={cn(
							"text-lg md:text-xl font-bold hover:text-primary",
							path === "/sheets" ? "bg-primary/20 py-2 px-4 rounded-xl" : ""
						)}
					>
						Sheets
					</Link>
				</div>

				{/* User Profile and Dropdown */}
				{authUser ? (
					<div className="flex items-center gap-8">
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle avatar flex flex-row "
							>
								<div className="w-10 rounded-full ">
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
								{/* Admin Option */}

								{/* Common Options */}
								<li>
									<p className="text-base font-semibold">{authUser?.name}</p>
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
		</nav>
	);
}

export default Navbar;
