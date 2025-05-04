

function Notification() {
	return (
		<div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-500 z-50">
			<div className="flex items-center">
				<svg
					className="h-6 w-6 mr-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 13l4 4L19 7"
					/>
				</svg>
				<span>You've been added to our waitlist!</span>
			</div>
		</div>
	);
}

export default Notification;
