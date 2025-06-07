import { useEffect, useState } from "react";
import { useProblemStore } from "../store/useProblemStore";
import { Loader, X } from "lucide-react";
import ProblemsTable from "../components/ProblemsTable";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "@/components/ErrorComponent";

const ProblemsListPage = () => {
	const [showAlert, setShowAlert] = useState<boolean>(true)
	const { getAllProblems, problems, isProblemsLoading, errorMessage } = useProblemStore();
	const navigate = useNavigate();

	useEffect(() => {
		getAllProblems();
	}, [getAllProblems]);

	if (isProblemsLoading) {
		return (
			<div className="flex items-center justify-center h-[80dvh] w-full">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	}

	if(errorMessage){
		return <ErrorComponent errorMessage={errorMessage} />
	}

	return (
		<section className="min-h-screen w-full flex flex-col items-center mt-5 px-4">
			{showAlert && (<div
				role="alert"
				className="alert alert-info alert-soft"
			>
				<span>
					Check out{" "}
					<span
						onClick={() => navigate("/sheets")}
						className="text-blue-800 cursor-pointer hover:underline"
					>
						Sheets
					</span>{" "}
					to get problems based on your target company
				</span>
				<button
					onClick={() => setShowAlert(false)}
					className="btn btn-xs btn-circle btn-outline btn-info"
				>
					<X className="w-5 h-5" />
				</button>
			</div>)}
			{problems.length > 0 ? (
				<ProblemsTable problems={problems} />
			) : (
				<p className="mt-10 text-center text-lg font-semibold text-gray-500 dark:text-gray-400 z-10 border border-primary px-4 py-2 rounded-md border-dashed">
					No Problems found!
				</p>
			)}
		</section>
	);
};

export default ProblemsListPage;
