import { Link, useLocation } from "react-router-dom";
import { easeInOut, easeOut, motion } from "framer-motion";
import { User, Code, LogOut, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoutButton from "./LogoutButton";

interface NavItem {
	name: string;
	url: string;
}

interface MobileMenuProps {
	navItems: NavItem[];
	authUser: any;
	onClose: () => void;
}

function MobileMenu({ navItems, authUser, onClose }: MobileMenuProps) {
	const location = useLocation();

	const menuVariants = {
		closed: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.3,
				ease: easeInOut,
			},
		},
		open: {
			opacity: 1,
			height: "auto",
			transition: {
				duration: 0.3,
				ease: easeOut,
				staggerChildren: 0.05,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		closed: { opacity: 0, x: -20 },
		open: { opacity: 1, x: 0 },
	};

	return (
		<motion.div
			className="fixed inset-0 top-16 lg:top-20 z-40 bg-base-100/95 backdrop-blur-xl"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<motion.div
				className="container mx-auto px-4 py-6"
				variants={menuVariants}
				initial="closed"
				animate="open"
				exit="closed"
			>
				{/* Navigation Items */}
				<div className="space-y-2 mb-4">
					{navItems.map((item) => {
						const isActive = location.pathname === item.url;
						return (
							<motion.div
								key={item.name}
								variants={itemVariants}
							>
								<Link
									to={item.url}
									onClick={onClose}
									className={cn(
										"flex items-center py-1 px-4 rounded-2xl font-medium transition-all duration-300",
										"hover:bg-primary hover:text-primary-content hover:scale-[1.02]",
										isActive
											? "bg-primary text-primary-content shadow-lg hover:text-primary-content hover:bg-primary/50"
											: "bg-base-300 text-base-content hover:bg-base-300"
									)}
								>
									<span>{item.name}</span>
								</Link>
							</motion.div>
						);
					})}
				</div>

				{/* User Section */}
				{authUser ? (
					<motion.div
						className="bg-base-300 rounded-3xl p-3 backdrop-blur-sm"
						variants={itemVariants}
					>
						{/* User Info */}
						<div className="flex items-center gap-4 mb-2 pb-4 px-2 border-b-2 border-base-100/30">
							<div className="avatar">
								<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
									<img
										src={
											authUser.image ||
											"https://avatar.iran.liara.run/public/boy"
										}
										alt="User Avatar"
										className="object-cover"
									/>
								</div>
							</div>
							<div>
								<h3 className=" font-bold text-base-content">
									{authUser.name}
								</h3>
								<p className="text-sm text-base-content/60 capitalize">
									{authUser.role?.toLowerCase()}
								</p>
							</div>
						</div>

						{/* User Menu Items */}
						<div className="">
							<Link
								to="/profile"
								onClick={onClose}
								className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-base-300 transition-colors duration-200 group"
							>
								<User className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
								<span className="font-medium">My Profile</span>
							</Link>

							<Link
								to="/dashboard"
								onClick={onClose}
								className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-base-300 transition-colors duration-200 group"
							>
								<LayoutDashboard className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
								<span className="font-medium">Dashboard</span>
							</Link>

							{authUser.role === "ADMIN" && (
								<Link
									to="/add-problem"
									onClick={onClose}
									className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-base-300 transition-colors duration-200 group"
								>
									<Code className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
									<span className="font-medium">Add Problem</span>
								</Link>
							)}

							<LogoutButton className="flex items-center gap-3 px-4 py-3 rounded-xl w-full hover:bg-error hover:text-error-content transition-colors duration-200 group mt-4">
								<LogOut className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
								<span className="font-medium">Logout</span>
							</LogoutButton>
						</div>
					</motion.div>
				) : (
					<motion.div variants={itemVariants}>
						<Link
							to="/login"
							onClick={onClose}
							className="btn btn-primary btn-md w-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
						>
							Login to Continue
						</Link>
					</motion.div>
				)}
			</motion.div>
		</motion.div>
	);
}

export default MobileMenu;
