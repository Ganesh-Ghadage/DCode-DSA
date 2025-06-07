import AddProblemToSheet from "@/components/AddProblemToSheet";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";
import ErrorComponent from "@/components/ErrorComponent";
import UpdateSheetModal from "@/components/UpdateSheetModal";
import type { sheetSchema } from "@/schemas/sheetsSchema";
import { useAuthStore } from "@/store/useAuthStore";
import { useSheetStore } from "@/store/useSheetsStore";
import {
	BookOpen,
	ChevronLeft,
	Clock,
	ExternalLink,
	List,
	Pencil,
	Plus,
	Sheet,
	Tag,
	TrashIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { z } from "zod";

const SheetPage = () => {
	const { id } = useParams();

	const [isRemoveProblemModalOpen, setIsRemoveProblemModalOpen] =
		useState<boolean>(false);
	const [isDeleteSheetModalOpen, setIsDeleteSheetModalOpen] =
		useState<boolean>(false);
	const [isUpdateSheetModalOpen, setIsUpdateSheetModalOpen] =
		useState<boolean>(false);
	const [isAddProblemModalOpen, setIsAddProblemModalOpen] =
		useState<boolean>(false);
	const [selectedProblemId, setSelectedProblemId] = useState<string>("");

	const {
		sheet,
		getSheetById,
		isLoading,
		removeProblemFromSheet,
		deleteSheet,
		updateSheet,
		errorMessage
	} = useSheetStore();
	const { authUser } = useAuthStore();

	const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			getSheetById(id);
		}
	}, [getSheetById]);

	const getDifficultyBadge = (difficulty: string) => {
		switch (difficulty) {
			case "EASY":
				return <span className="badge badge-success">Easy</span>;
			case "MEDIUM":
				return <span className="badge badge-warning">Medium</span>;
			case "HARD":
				return <span className="badge badge-error">Hard</span>;
			default:
				return <span className="badge">Unknown</span>;
		}
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}).format(date);
	};

	const handleProblemRemove = (problemId: string) => {
		setSelectedProblemId(problemId);
		setIsRemoveProblemModalOpen(true);
	};

	const handleSheetDelete = () => {
		setIsDeleteSheetModalOpen(true);
	};

	const handleConfirmProblemRemove = async () => {
		if (id) {
			await removeProblemFromSheet(id, [selectedProblemId]);
		}
	};

	const handleConfirmSheetDelete = async () => {
		if (id) {
			await deleteSheet(id);
			navigate("/sheets");
		}
	};

	const handleUpdateSheet = async (data: z.infer<typeof sheetSchema>) => {
		if (id) {
			await updateSheet(id, data);
		}
	};

	if (isLoading || !sheet) {
		return (
			<div className="flex items-center justify-center h-screen w-full bg-base-200">
				<div className="card bg-base-100 p-8 shadow-xl">
					<span className="loading loading-spinner loading-lg text-primary"></span>
					<p className="mt-4 text-base-content/70">Loading sheet...</p>
				</div>
			</div>
		);
	}

	if(errorMessage){
		return <ErrorComponent errorMessage={errorMessage} />
	}

	return (
		<div className="w-full p-4 bg-base-200 min-h-screen rounded-xl">
			<div className="max-w-6xl mx-auto">
				<div className="flex justify-between items-center mb-6">
					<div className="flex gap-4">
						<Link
							to={"/sheets"}
							className="flex items-center gap-1 text-primary top-4 left-4 md:top-10 md:left-10"
						>
							<ChevronLeft className="w-4 h-4" />
							<Sheet className="w-6 h-6" />
						</Link>
						<h2 className="text-2xl font-bold text-primary">{sheet.company}</h2>
					</div>

					{authUser?.role === "ADMIN" && (
						<button
							onClick={() => setIsUpdateSheetModalOpen(true)}
							className="btn btn-primary btn-sm"
						>
							<Pencil className="w-4 h-4 text-white" />
							Update Sheet
						</button>
					)}
				</div>

				<div className="space-y-6">
					<div className="card bg-base-100 shadow-xl">
						<div className="card-body p-4">
							{/* Sheet Header */}
							<div className="flex justify-between items-center cursor-pointer">
								<div className="flex items-center gap-3">
									<div className="avatar placeholder flex items-center justify-center">
										<div className="flex bg-primary text-primary-content rounded-lg w-12 items-center justify-center">
											<BookOpen
												size={24}
												className="m-auto mt-3"
											/>
										</div>
									</div>
									<div>
										<h3 className="text-xl font-bold">{sheet.title}</h3>
										<div className="flex items-center gap-2 mt-1 text-sm text-base-content/70">
											<div className="flex items-center gap-1">
												<List size={14} />
												<span>{sheet.problems?.length} problems</span>
											</div>
											<div className="flex items-center gap-1">
												<Clock size={14} />
												<span>Created {formatDate(sheet.createdAt)}</span>
											</div>
										</div>
									</div>
								</div>
								{authUser?.role === "ADMIN" && (
									<button
										onClick={() => setIsAddProblemModalOpen(true)}
										className="btn btn-info flex"
									>
										<Plus className="w-4 h-4" />
										Add Problems
									</button>
								)}
							</div>

							{/* Description */}
							<p className="text-base-content/80 mt-1">{sheet.description}</p>

							{/* Expanded Problems List */}
							<div className="mt-4 pt-4 border-t border-base-300">
								<h4 className="text-lg font-semibold mb-3">
									Problems in this Sheet
								</h4>

								{sheet.problems?.length === 0 ? (
									<div className="alert">
										<span>No problems added to this Sheet yet.</span>
									</div>
								) : (
									<div className="overflow-x-auto">
										<table className="table table-zebra w-full">
											<thead>
												<tr>
													<th>Problem</th>
													<th>Difficulty</th>
													<th>Tags</th>
													<th className="text-right">Action</th>
												</tr>
											</thead>
											<tbody>
												{sheet.problems?.map((item) => (
													<tr
														key={item.id}
														className="hover"
													>
														<td className="font-medium">
															{/* {item.problem?.title} */}
															<Link
																to={`/problem/${item.problem?.id}`}
																className="font-medium hover:underline"
															>
																{item.problem?.title}
															</Link>
														</td>

														<td>
															{getDifficultyBadge(
																item?.problem?.difficulty || ""
															)}
														</td>
														<td>
															<div className="flex flex-wrap gap-1">
																{item.problem?.tags &&
																	item.problem?.tags.map((tag, idx) => (
																		<div
																			key={idx}
																			className="badge badge-outline badge-sm"
																		>
																			<Tag
																				size={10}
																				className="mr-1"
																			/>
																			{tag}
																		</div>
																	))}
															</div>
														</td>
														<td className="text-right flex gap-2 justify-end">
															{authUser?.role === "ADMIN" && (
																<button
																	onClick={() =>
																		handleProblemRemove(item.problem?.id || "")
																	}
																	className="btn btn-xs btn-error"
																>
																	<TrashIcon className="w-4 h-4 text-white" />
																	remove Problem
																</button>
															)}
															<Link
																to={`/problem/${item.problem?.id}`}
																className="btn btn-xs btn-outline btn-primary"
															>
																<ExternalLink size={12} />
																Solve
															</Link>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								)}

								<div className="flex justify-between items-center mt-4">
									{authUser?.role === "ADMIN" && (
										<button
											onClick={handleSheetDelete}
											className="btn btn-sm btn-error"
										>
											<TrashIcon className="w-4 h-4 text-white" />
											Delete Sheet
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ConfirmDeleteModal
				isOpen={isRemoveProblemModalOpen}
				isLoading={isLoading}
				onClose={() => setIsRemoveProblemModalOpen(false)}
				onConfirm={handleConfirmProblemRemove}
			/>

			<ConfirmDeleteModal
				isOpen={isDeleteSheetModalOpen}
				isLoading={isLoading}
				onClose={() => setIsDeleteSheetModalOpen(false)}
				onConfirm={handleConfirmSheetDelete}
			/>

			<AddProblemToSheet
				isOpen={isAddProblemModalOpen}
				onClose={() => setIsAddProblemModalOpen(false)}
				sheetId={id || ""}
				sheet={sheet}
			/>

			<UpdateSheetModal
				isOpen={isUpdateSheetModalOpen}
				sheet={sheet}
				onClose={() => setIsUpdateSheetModalOpen(false)}
				onSubmit={handleUpdateSheet}
			/>
		</div>
	);
};

export default SheetPage;
