import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	ArrowLeft,
	BookOpenCheck,
	CodeXml,
	Image,
	ListTodo,
	Mail,
	Shield,
	User,
} from "lucide-react";

import { useAuthStore } from "../store/useAuthStore";
import UserSubmissions from "../components/UserSubmissions";
import ProblemSolvedByUser from "../components/ProblemSolvedByUser";
import UserPlaylists from "../components/UserPlaylists";
import { useSubmissionStore } from "../store/useSubmissionStore";
import { useProblemStore } from "../store/useProblemStore";
import { usePlaylistStore } from "../store/usePlaylistStore";

const ProfilePage = () => {
	const [activeTab, setActiveTab] = useState<string>("submissions");
	const { authUser } = useAuthStore();
	const { allSubmissions, getAllSubmissions } = useSubmissionStore();
	const { getSolvedProblems, solvedProblems } = useProblemStore();
	const { getPlaylists, allPlaylists } = usePlaylistStore();

	useEffect(() => {
		getSolvedProblems();
	}, [getSolvedProblems]);

	useEffect(() => {
		getAllSubmissions();
	}, [getAllSubmissions]);

	useEffect(() => {
		getPlaylists();
	}, [getPlaylists]);

	const renderTabContent = () => {
		switch (activeTab) {
			case "submissions":
				return <UserSubmissions allSubmissions={allSubmissions} />;
			case "problems":
				return <ProblemSolvedByUser solvedProblems={solvedProblems} />;
			case "playlist":
				return <UserPlaylists allPlaylists={allPlaylists} />;
			default:
				return null;
		}
	};
	return (
		<div className="min-h-screen bg-base-200 flex flex-col items-center justify-center py-10 px-4 md:px-8 w-full">
			{/* Header with back button */}
			<div className="flex flex-row justify-between items-center w-full mb-6">
				<div className="flex items-center gap-3">
					<Link
						to={"/"}
						className="btn btn-circle btn-ghost"
					>
						<ArrowLeft className="w-5 h-5" />
					</Link>
					<h1 className="text-3xl font-bold text-primary">Profile</h1>
				</div>
			</div>

			<div className="w-full max-w-4xl mx-auto">
				<div className="card-body">
					{/* Profile Header */}
					<div className="flex flex-col md:flex-row items-center gap-6">
						{/* Avatar */}
						<div className="avatar placeholder">
							<div className="bg-neutral text-neutral-content rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
								{authUser?.image ? (
									<img
										src={
											authUser?.image ||
											"https://avatar.iran.liara.run/public/boy"
										}
										alt={authUser?.name}
									/>
								) : (
									<span className="text-7xl font-bold w-full ml-5 h-fit">
										{authUser?.name ? authUser.name.charAt(0) : "U"}
									</span>
								)}
							</div>
						</div>

						{/* Name and Role Badge */}
						<div className="text-center md:text-left">
							<h2 className="text-2xl font-bold">{authUser?.name}</h2>
							<div className="badge badge-primary mt-2">{authUser?.role}</div>
						</div>
					</div>

					<div className="divider"></div>

					{/* User Information */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Email */}
						<div className="stat bg-base-200 rounded-box">
							<div className="stat-figure text-primary">
								<Mail className="w-8 h-8" />
							</div>
							<div className="stat-title">Email</div>
							<div className="stat-value text-lg break-all">
								{authUser?.email}
							</div>
						</div>

						{/* User ID */}
						<div className="stat bg-base-200 rounded-box">
							<div className="stat-figure text-primary">
								<User className="w-8 h-8" />
							</div>
							<div className="stat-title">User ID</div>
							<div className="stat-value text-sm break-all">{authUser?.id}</div>
						</div>

						{/* Role Status */}
						<div className="stat bg-base-200 rounded-box">
							<div className="stat-figure text-primary">
								<Shield className="w-8 h-8" />
							</div>
							<div className="stat-title">Role</div>
							<div className="stat-value text-lg">{authUser?.role}</div>
							<div className="stat-desc">
								{authUser?.role === "ADMIN"
									? "Full system access"
									: "Limited access"}
							</div>
						</div>

						{/* Profile Image Status */}
						<div className="stat bg-base-200 rounded-box">
							<div className="stat-figure text-primary">
								<Image className="w-8 h-8" />
							</div>
							<div className="stat-title">Profile Image</div>
							<div className="stat-value text-lg">
								{authUser?.image ? "Uploaded" : "Not Set"}
							</div>
							<div className="stat-desc">
								{authUser?.image
									? "Image available"
									: "Upload a profile picture"}
							</div>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="card-actions justify-end mt-6">
						<button className="btn btn-outline btn-primary">
							Edit Profile
						</button>
						<button className="btn btn-primary">Change Password</button>
					</div>
				</div>
			</div>

			<div className="card bg-base-100 shadow-xl w-full">
				<div className="card-body p-4">
					<div className="tabs tabs-bordered mx-auto">
						<button
							className={`tab gap-2 text-md font-semibold ${
								activeTab === "submissions"
									? "tab-active text-primary bg-base-300 rounded-xl"
									: ""
							}`}
							onClick={() => setActiveTab("submissions")}
						>
							<BookOpenCheck className="w-4 h-4" />
							Submissions
						</button>
						<button
							className={`tab gap-2 text-md font-semibold ${
								activeTab === "problems"
									? "tab-active text-primary bg-base-300 rounded-xl"
									: ""
							}`}
							onClick={() => setActiveTab("problems")}
						>
							<CodeXml className="w-4 h-4" />
							Problems Solved
						</button>
						<button
							className={`tab gap-2 text-md font-semibold ${
								activeTab === "playlist"
									? "tab-active text-primary bg-base-300 rounded-xl"
									: ""
							}`}
							onClick={() => setActiveTab("playlist")}
						>
							<ListTodo className="w-4 h-4" />
							Playlists
						</button>
					</div>

					<div className="p-6 h-fit max-h-[600px] overflow-y-auto rounded-xl">
						{renderTabContent()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
