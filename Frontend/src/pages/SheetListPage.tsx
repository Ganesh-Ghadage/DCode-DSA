import CreateSheetModal from "@/components/CreateSheetModal";
import { cn } from "@/lib/utils";
import type { sheetSchema } from "@/schemas/sheetsSchema";
import { useAuthStore } from "@/store/useAuthStore";
import { useSheetStore } from "@/store/useSheetsStore";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { z } from "zod";

const SheetListPage = () => {
	const { allSheets, getSheets, createSheet } = useSheetStore();
	const { authUser } = useAuthStore();
	const [isCreateSheetModalOpen, setIsCreateSheetModalOpen] = useState<boolean>(false)

	useEffect(() => {
		getSheets();
	}, [getSheets]);

	const bgClasses = [
		"bg-green-800/40",
		"bg-emerald-800/40",
		"bg-red-800/40",
		"bg-orange-800/40",
		"bg-amber-800/40",
		"bg-yellow-800/40",
		"bg-lime-800/40",
		"bg-teal-800/40",
		"bg-cyan-800/40",
	];

	const handleCreateSheet = async (data: z.infer<typeof sheetSchema>) => {
		await createSheet(data)
	}

	return (
		<section className="min-h-screen w-full  max-w-7xl mx-auto flex flex-col items-center mt-10 px-4 mb-6">
			<div className="w-full flex justify-between items-center mb-6">
				<h2 className="text-2xl font-bold">Sheets</h2>

				{authUser?.role === "ADMIN" && (
					<button
						onClick={() => setIsCreateSheetModalOpen(true)}
						className="btn btn-primary gap-2"
					>
						<Plus className="w-4 h-4 text-white" />
						Create Sheet
					</button>
				)}
			</div>

			<div className="w-full flex flex-wrap gap-10">
				{allSheets.map((sheet, index) => (
					<div
						key={sheet.id}
						className={cn(
							`card text-primary-content w-96`,
							bgClasses[index % bgClasses.length]
						)}
					>
						<div className="card-body">
							<div className="badge badge-accent font-semibold">
								{sheet.company}
							</div>
							<h2 className="card-title text-black dark:text-white text-xl md:text-2xl font-bold">
								{sheet.title}
							</h2>
							<p className="text-lg font-semibold text-black dark:text-white">
								{sheet.description}
							</p>
							<div className="card-actions justify-end">
								<Link to={`/sheet/${sheet.id}`}>
									<button className="btn btn-soft btn-warning">
										Solve Now
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<p className="fixed bottom-2 left-4">
				**Soon the Sheets will be on payment basis
			</p>

			<CreateSheetModal
				isOpen={isCreateSheetModalOpen}
				onClose={() => setIsCreateSheetModalOpen(false)}
				onSubmit={handleCreateSheet}
			/>
		</section>
	);
};

export default SheetListPage;
