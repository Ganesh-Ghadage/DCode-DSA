import { useProblemStore } from "@/store/useProblemStore";
import { useSheetStore } from "@/store/useSheetsStore";
import { type Problem, type Sheet } from "@/types";
import { Loader, Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface props {
	isOpen: boolean;
	onClose: () => void;
	sheetId: string;
	sheet: Sheet;
}

const AddProblemToSheet = ({ isOpen, onClose, sheetId, sheet }: props) => {
	const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
	const [avaliableProblems, setAvaliableProblems] = useState<Problem[]>([]);

	const { getAllProblems, problems } = useProblemStore();
	const { addProblemInSheet, isLoading } = useSheetStore();

	useEffect(() => {
		if (isOpen) {
			getAllProblems();
		}
	}, [isOpen]);

	useEffect(() => {
		if (isOpen && sheet?.problems) {
			const sheetProblemIds = new Set(sheet.problems.map((p) => p.problemId));

			const remainingProblems = problems.filter(
				(problem) => !sheetProblemIds.has(problem.id)
			);

			setAvaliableProblems(remainingProblems);
		}
	}, [isOpen, sheet]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
		}

		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);

	const handleCheckboxChange = (id: string) => {
		setSelectedProblems((prev) =>
			prev.includes(id)
				? prev.filter((problemId) => problemId !== id)
				: [...prev, id]
		);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!selectedProblems) return;

		await addProblemInSheet(sheetId, selectedProblems);

		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center">
			<div
				className="absolute inset-0"
				onClick={onClose}
			/>
			<div className="bg-base-100 rounded-lg shadow-xl w-full max-w-md z-50">
				<div className="flex justify-between items-center p-4 border-b border-base-300">
					<h3 className="text-xl font-bold">Add to Sheet</h3>
					<button
						onClick={onClose}
						className="btn btn-ghost btn-sm btn-circle"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				<form
					onSubmit={handleSubmit}
					className="p-6 space-y-4"
				>
					<div className="form-control">
						<label className="label">
							<span className="label-text font-medium">Select Problems</span>
						</label>
						<div className="mt-4">
							<table className="table table-md bg-base-200 text-base-content rounded-xl">
								<thead className="bg-base-300 rounded-xl">
									<tr>
										<th>Selected</th>
										<th>Problem</th>
									</tr>
								</thead>
								<tbody className="max-h-80 overflow-auto">
									{avaliableProblems.length > 0 ? (
										avaliableProblems.map((problem) => (
											<tr
												key={problem.id}
												className="hover:bg-base-300/40"
											>
												<td>
													<input
														type="checkbox"
														className="checkbox"
														checked={selectedProblems.includes(problem.id)}
														onChange={() => handleCheckboxChange(problem.id)}
													/>
												</td>
												<td>{problem.title}</td>
											</tr>
										))
									) : (
										<tr>
											<td
												colSpan={2}
												className="text-center py-6 text-gray-500"
											>
												No problems avaliable to add.
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>

					<div className="flex justify-end gap-2 mt-6">
						<button
							type="button"
							onClick={onClose}
							className="btn btn-ghost"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="btn btn-primary"
							disabled={!selectedProblems || isLoading}
						>
							{isLoading ? (
								<Loader className="w-4 h-4 animate-spin" />
							) : (
								<Plus className="w-4 h-4" />
							)}
							Add to Playlist
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProblemToSheet;
