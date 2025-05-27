import { Loader, TrashIcon, X } from "lucide-react";

interface props {
	isOpen: boolean;
	isLoading: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

const ConfirmDeleteModal = ({
	isOpen,
	isLoading,
	onClose,
	onConfirm,
}: props) => {
	const handleClick = async () => {
		onConfirm();
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-base-100 rounded-lg shadow-xl w-full max-w-md p-6">
				<div className="flex justify-between items-center p-4 border-b border-base-300">
					<h3 className="text-xl font-bold">Delete</h3>
					<button
						onClick={onClose}
						className="btn btn-ghost btn-sm btn-circle"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				<p className="p-4">Are you sure! you want to delete this?</p>

				<div className="flex justify-end gap-2 mt-6">
					<button
						type="button"
						onClick={onClose}
						className="btn btn-ghost"
					>
						Cancel
					</button>
					<button
						type="button"
						className="btn btn-error"
						onClick={handleClick}
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader className="animate-spin" />
						) : (
							<TrashIcon className="w-4 h-4 text-white" />
						)}
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmDeleteModal;
