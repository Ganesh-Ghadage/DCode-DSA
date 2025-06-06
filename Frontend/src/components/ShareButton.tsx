import React, { useState } from "react";
import toast from "react-hot-toast";
import { QRCodeCanvas } from "qrcode.react";

import { Share2, Copy, Twitter, Linkedin, QrCode, Code } from "lucide-react";

interface ShareButtonProps {
	problemSlug: string;
	title: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ problemSlug, title }) => {
	const [showQR, setShowQR] = useState(false);

	const problemUrl = `https://dcodedsa.live/problem/${problemSlug}`;
	const embedCode = `<iframe src="${problemUrl}" width="100%" height="150px"></iframe>`;

	const handleCopy = async (text: string, successMessage: string) => {
		try {
			await navigator.clipboard.writeText(text);
			toast.success(successMessage);
		} catch (err) {
			toast.error("Failed to copy to clipboard");
		}
	};

	return (
		<div className="dropdown dropdown-end z-50">
			<button
				tabIndex={0}
				className="btn btn-ghost btn-circle"
			>
				<Share2 className="w-5 h-5" />
			</button>

			<ul
				tabIndex={0}
				className="dropdown-content mt-2 menu p-2 shadow bg-base-100 rounded-box w-64 space-y-1"
			>
				<li>
					<button onClick={() => handleCopy(problemUrl, "Link copied!")}>
						<Copy size={16} /> Copy Link
					</button>
				</li>
				<li>
					<a
						href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
							`🧠 Can you solve the ${title} problem?\n\nTry it now on DCodeDSA:\nhttps://dcodedsa.live/problem/${problemSlug}\n\n#DSA #CodingChallenge #DCodeDSA`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Twitter size={16} /> Share on Twitter
					</a>
				</li>
				<li>
					<a
						href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
							`https://dcodedsa.live/problem/${problemSlug}`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin size={16} /> Share on LinkedIn
					</a>
				</li>
				<li>
					<button onClick={() => setShowQR((prev) => !prev)}>
						<QrCode size={16} /> {showQR ? "Hide QR Code" : "Show QR Code"}
					</button>
				</li>
				{showQR && (
					<div className="flex justify-center py-2">
						<div className="w-fit bg-white p-2 rounded-lg">
							<QRCodeCanvas
								value={problemUrl}
								size={100}
							/>
						</div>
					</div>
				)}
				<li>
					<button onClick={() => handleCopy(embedCode, "Embed code copied!")}>
						<Code size={16} /> Copy Embed Code
					</button>
				</li>
			</ul>
		</div>
	);
};

export default ShareButton;
