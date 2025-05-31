import { useState } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { X, Menu, LogOut, Code, User, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { TopBar } from "./topbar-menu";
import ThemeToggle from "../ThemeToggleButton";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton";
import { useAuthStore } from "@/store/useAuthStore";

interface NavItem {
	name: string;
	url: string;
}

interface NavBarProps {
	items: NavItem[];
	className?: string;
}

function SideBarMenu({ items, className }: NavBarProps) {
	const [open, setOpen] = useState(false);
	const { authUser } = useAuthStore();

	return (
		<div className={cn("", className)}>
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					<button
						role="button"
						className="p-2 bg-border rounded-full"
						onClick={() => {
							setOpen(true);
						}}
					>
						<Menu className="text-primary-content hover:scale-105" />
					</button>
				</div>

				<Drawer
					open={open}
					onOpenChange={setOpen}
				>
					<DrawerContent side={"right"}>
						<div className="w-full flex flex-col items-start gap-5 bg-base-300 h-screen p-4">
							<div className="flex gap-2 w-full items-center justify-between">
								<ThemeToggle />
								<button
									role="button"
									className="p-2 bg-border rounded-full"
									onClick={() => {
										setOpen(false);
									}}
								>
									<X className="text-primary-content hover:scale-105" />
								</button>
							</div>

							<div className="self-end">
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

							<TopBar
								items={items}
								open={open}
								setOpen={setOpen}
							/>
						</div>
					</DrawerContent>
				</Drawer>
			</div>
		</div>
	);
}

export default SideBarMenu;
