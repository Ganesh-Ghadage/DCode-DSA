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
	Edit,
	Key
} from "lucide-react";

import { useAuthStore } from "../store/useAuthStore";
import UserSubmissions from "../components/UserSubmissions";
import ProblemSolvedByUser from "../components/ProblemSolvedByUser";
import UserPlaylists from "../components/UserPlaylists";
import { useSubmissionStore } from "../store/useSubmissionStore";
import { useProblemStore } from "../store/useProblemStore";
import { usePlaylistStore } from "../store/usePlaylistStore";
import ErrorComponent from "@/components/ErrorComponent";
import UpdatePasswordModal from "@/components/UpdatePassword";
import UpdateProfileModal from "@/components/UpdateProfileModal";

const ProfilePage = () => {
	const [activeTab, setActiveTab] = useState<string>("submissions");
	const [isUpdatePasswordModalOpen, setIsUpdatePasswordModalOpen] =
		useState<boolean>(false);
	const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
		useState<boolean>(false);
	const { authUser } = useAuthStore();
	const {
		allSubmissions,
		getAllSubmissions,
		errorMessage: submissionError,
	} = useSubmissionStore();
	const {
		getSolvedProblems,
		solvedProblems,
		errorMessage: problemError,
	} = useProblemStore();
	const {
		getPlaylists,
		allPlaylists,
		errorMessage: playlistError,
	} = usePlaylistStore();

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

	if (submissionError || problemError || playlistError) {
		return (
			<ErrorComponent
				errorMessage={
					submissionError ||
					problemError ||
					playlistError ||
					"Something went wrong"
				}
			/>
		);
	}

	const tabs = [
		{
			id: "submissions",
			label: "Submissions",
			icon: BookOpenCheck,
			count: allSubmissions?.length || 0,
		},
		{
			id: "problems",
			label: "Problems Solved",
			icon: CodeXml,
			count: solvedProblems?.length || 0,
		},
		{
			id: "playlist",
			label: "Playlists",
			icon: ListTodo,
			count: allPlaylists?.length || 0,
		},
	];

	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-base-200 via-base-100 to-base-200">
			{/* Header */}
			<div className="sticky top-0 z-10 bg-base-100/80 backdrop-blur-md border-b border-base-300">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<Link
								to={"/"}
								className="btn btn-ghost btn-circle hover:bg-primary/10"
							>
								<ArrowLeft className="w-5 h-5" />
							</Link>
							<div>
								<h1 className="text-2xl md:text-3xl font-bold text-primary">
									Profile
								</h1>
								<p className="text-sm text-base-content/60 hidden sm:block">
									Manage your account and view your activity
								</p>
							</div>
						</div>
						
						{/* Quick Actions - Desktop */}
						<div className="hidden md:flex gap-2">
							<button 
								className="btn btn-outline btn-sm gap-2"
								onClick={() => setIsUpdateProfileModalOpen(true)}
							>
								<Edit className="w-4 h-4" />
								Edit Profile
							</button>
							<button 
								className="btn btn-primary btn-sm gap-2"
								onClick={() => setIsUpdatePasswordModalOpen(true)}
							>
								<Key className="w-4 h-4" />
								Change Password
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 md:px-10 py-6 space-y-6">
				{/* Profile Card */}
				<div className="card bg-base-100 shadow-xl border border-base-300">
					<div className="card-body p-6 md:p-8">
						{/* Profile Header */}
						<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
							{/* Avatar */}
							<div className="avatar placeholder group">
								<div className="bg-gradient-to-br from-primary to-primary/80 text-primary-content rounded-full w-16 h-16 md:w-20 md:h-20 ring-4 ring-primary/20 ring-offset-4 ring-offset-base-100 transition-all duration-300 group-hover:ring-primary/40">
									{authUser?.image ? (
										<img
											src={authUser.image}
											alt={authUser?.name}
											className="rounded-full object-cover"
										/>
									) : (
										<span className="text-3xl md:text-4xl font-bold">
											{authUser?.name ? authUser.name.charAt(0).toUpperCase() : "U"}
										</span>
									)}
								</div>
							</div>

							{/* Profile Info */}
							<div className="flex-1 text-center sm:text-left space-y-3">
								<div className="flex gap-4 justify-center md:justify-start">
									<h2 className="text-xl md:text-2xl font-bold text-base-content">
										{authUser?.name}
									</h2>
									<div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
										<div className="badge badge-primary gap-2">
											<Shield className="w-3 h-3" />
											{authUser?.role}
										</div>
										
									</div>
								</div>
								
								{/* Contact Info */}
								<div className="flex flex-col sm:flex-row gap-3 text-sm text-base-content/70">
									<div className="flex items-center gap-2">
										<Mail className="w-4 h-4" />
										<span className="break-all">{authUser?.email}</span>
									</div>
									<div className="flex items-center gap-2">
										<User className="w-4 h-4" />
										<span className="font-mono text-xs">ID: {authUser?.id}</span>
									</div>
								</div>
							</div>

							{/* Quick Actions - Mobile */}
							<div className="flex md:hidden gap-2 w-full sm:w-auto">
								<button 
									className="btn btn-outline btn-sm flex-1 sm:flex-none gap-2"
									onClick={() => setIsUpdateProfileModalOpen(true)}
								>
									<Edit className="w-4 h-4" />
									Edit
								</button>
								<button 
									className="btn btn-primary btn-sm flex-1 sm:flex-none gap-2"
									onClick={() => setIsUpdatePasswordModalOpen(true)}
								>
									<Key className="w-4 h-4" />
									Password
								</button>
							</div>
						</div>

						<div className="divider my-6"></div>

						{/* Stats Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
							{/* Email Status */}
							<div className="stat bg-base-200/50 rounded-xl p-4 hover:bg-base-200 transition-colors">
								<div className="stat-figure text-primary">
									<Mail className="w-6 h-6" />
								</div>
								<div className="stat-title text-xs">Email Status</div>
								<div className="stat-value text-sm text-success">Verified</div>
								<div className="stat-desc">Account active</div>
							</div>

							{/* Submissions */}
							<div className="stat bg-base-200/50 rounded-xl p-4 hover:bg-base-200 transition-colors">
								<div className="stat-figure text-primary">
									<BookOpenCheck className="w-6 h-6" />
								</div>
								<div className="stat-title text-xs">Submissions</div>
								<div className="stat-value text-lg">{allSubmissions?.length || 0}</div>
								<div className="stat-desc">Total attempts</div>
							</div>

							{/* Problems Solved */}
							<div className="stat bg-base-200/50 rounded-xl p-4 hover:bg-base-200 transition-colors">
								<div className="stat-figure text-primary">
									<CodeXml className="w-6 h-6" />
								</div>
								<div className="stat-title text-xs">Problems</div>
								<div className="stat-value text-lg">{solvedProblems?.length || 0}</div>
								<div className="stat-desc">Solved</div>
							</div>

							{/* Profile Image */}
							<div className="stat bg-base-200/50 rounded-xl p-4 hover:bg-base-200 transition-colors">
								<div className="stat-figure text-primary">
									<Image className="w-6 h-6" />
								</div>
								<div className="stat-title text-xs">Profile</div>
								<div className="stat-value text-sm">
									{authUser?.image ? (
										<span className="text-success">Complete</span>
									) : (
										<span className="text-warning">Incomplete</span>
									)}
								</div>
								<div className="stat-desc">
									{authUser?.image ? "Image set" : "Add photo"}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Activity Tabs */}
				<div className="card bg-base-100 shadow-xl border border-base-300">
					<div className="card-body p-0">
						{/* Tab Navigation */}
						<div className="p-4 border-b border-base-300">
							<div className="tabs tabs-boxed bg-base-200 p-1 w-full overflow-x-auto rounded-xl">
								{tabs.map((tab) => {
									const Icon = tab.icon;
									return (
										<button
											key={tab.id}
											className={`tab gap-2 flex-1 min-w-fit transition-all duration-200 rounded-xl ${
												activeTab === tab.id
													? "tab-active bg-primary text-primary-content shadow-sm"
													: "hover:bg-base-300"
											}`}
											onClick={() => setActiveTab(tab.id)}
										>
											<Icon className="w-4 h-4" />
											<span className="hidden sm:inline">{tab.label}</span>
											<span className="sm:hidden">{tab.label.split(' ')[0]}</span>
											<div className="badge badge-sm bg-current/20 text-current border-current/30">
												{tab.count}
											</div>
										</button>
									);
								})}
							</div>
						</div>

						{/* Tab Content */}
						<div className="p-4 md:p-6">
							<div className="min-h-[400px] max-h-[600px] overflow-y-auto">
								{renderTabContent()}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modals */}
			<UpdatePasswordModal 
				isOpen={isUpdatePasswordModalOpen}
				onClose={() => setIsUpdatePasswordModalOpen(false)}
			/>
			<UpdateProfileModal
				isOpen={isUpdateProfileModalOpen}
				onClose={() => setIsUpdateProfileModalOpen(false)}
			/>
		</div>
	);
};

export default ProfilePage;
