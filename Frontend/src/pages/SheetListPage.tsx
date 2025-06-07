import CreateSheetModal from "@/components/CreateSheetModal";
import ErrorComponent from "@/components/ErrorComponent";
import { axiosInstance } from "@/lib/axios";
import { loadRazorpay } from "@/lib/rozarpay";
import { cn } from "@/lib/utils";
import type { sheetSchema } from "@/schemas/sheetsSchema";
import { useAuthStore } from "@/store/useAuthStore";
import { useSheetStore } from "@/store/useSheetsStore";
import { IndianRupee, Loader, Lock, PenSquare, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import type { z } from "zod";

const SheetListPage = () => {
	const { allSheets, getSheets, createSheet, isLoading, errorMessage } =
		useSheetStore();
	const { authUser } = useAuthStore();
	const [isCreateSheetModalOpen, setIsCreateSheetModalOpen] =
		useState<boolean>(false);

	const navigate = useNavigate();

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
		await createSheet(data);
	};

	const handlePayment = async (sheetId: string) => {
		const res = await axiosInstance.post("/payment/create-order", { sheetId });
		const { key, amount, orderId } = res.data.data;

		if (!key) {
			toast.error("Payment key not received");
			return;
		}

		await loadRazorpay();

		const options = {
			key,
			amount,
			currency: "INR",
			name: "DCodeDSA",
			description: `Payment for Sheet`,
			order_id: orderId,
			handler: async function (response: any) {
				await axiosInstance.post("/payment/verify", {
					razorpayPaymentId: response.razorpay_payment_id,
					razorpayOrderId: response.razorpay_order_id,
					razorpaySignature: response.razorpay_signature,
				});

				toast.success("Payment successful!");
				navigate(`/sheet/${sheetId}`);
			},
			prefill: {
				name: authUser?.name,
				email: authUser?.email,
			},
			theme: {
				color: "#6366f1",
			},
		};

		const rzp = new (window as any).Razorpay(options);
		rzp.open();
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-[80dvh] w-full">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	}

	if (errorMessage) {
		return <ErrorComponent errorMessage={errorMessage} />;
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

			<div className="w-full flex flex-wrap items-center justify-center gap-10">
				{allSheets.length > 0 ? (
					allSheets.map((sheet, index) => {
						const isPurchased = sheet.isPaid
							? sheet.orders?.some((order) => order.userId === authUser?.id)
							: true;
						return (
							<div
								key={sheet.id}
								className={cn(
									`card text-accent-content w-96`,
									bgClasses[index % bgClasses.length]
								)}
							>
								<div className="card-body">
									<div className="flex justify-between">
										<div className="badge badge-primary badge-soft font-semibold">
											{sheet.company}
										</div>
										{sheet.isPaid ? (
											<div className="badge badge-error badge-sm font-semibold">
												Paid
											</div>
										) : (
											<div className="badge badge-success badge-sm font-semibold">
												Free
											</div>
										)}
									</div>

									<h2 className="card-title ext-accent-content text-md md:text-xl font-semibold">
										{sheet.title}
									</h2>
									<p className="text-accent-content">{sheet.description}</p>
									<div className="card-actions justify-end text-sm mt-2">
										{isPurchased ? (
											<Link to={`/sheet/${sheet.id}`}>
												<button className="btn btn-soft btn-warning flex gap-2">
													<PenSquare className="w-5 h-5" />
													Solve Now
												</button>
											</Link>
										) : (
											<div className="w-full flex justify-between">
												<div className="flex justify-center items-center font-bold">
													<IndianRupee className="w-5 h-5" />
													<span className="text-3xl">{sheet.price / 100}</span>
												</div>
												<button
													onClick={() => handlePayment(sheet.id)}
													className="btn btn-soft btn-primary flex gap-2"
												>
													<Lock className="w-5 h-5" />
													Buy Now
												</button>
											</div>
										)}
									</div>
								</div>
							</div>
						);
					})
				) : (
					<p className="mt-10 text-center text-lg font-semibold text-gray-500 dark:text-gray-400 z-10 border border-primary px-4 py-2 rounded-md border-dashed">
						No Sheets found!
					</p>
				)}
			</div>

			<CreateSheetModal
				isOpen={isCreateSheetModalOpen}
				onClose={() => setIsCreateSheetModalOpen(false)}
				onSubmit={handleCreateSheet}
			/>
		</section>
	);
};

export default SheetListPage;
