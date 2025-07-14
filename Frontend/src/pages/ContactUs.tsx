import React, { useState } from "react";
import {
	Mail,
	MapPin,
	Send,
	AlertCircle,
	Loader2,
} from "lucide-react";
import { useForm } from "@formspree/react";
import toast from "react-hot-toast";

const ContactUs: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [state, submitForm, _] = useForm(import.meta.env.VITE_FORMSPREE_HASHID);

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await submitForm(e);
		setFormData({ name: "", email: "", subject: "", message: "" });
		if (state.succeeded) {
			toast.success("Thanks for your query. We will get back to you soon!");
		}
	};

	return (
		<div className="max-w-6xl mx-auto space-y-8 my-4">
			<div className="text-center space-y-4">
				<Mail className="h-12 w-12 mx-auto text-primary" />
				<h1 className="text-4xl font-bold">Contact Us</h1>
				<p className="text-base-content/70 max-w-2xl mx-auto">
					Have questions, feedback, or concerns? We'd love to hear from you. Our
					support team typically responds within 48 hours.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Contact Form */}
				<div className="space-y-6">
					<div className="card bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title text-2xl mb-4">Send us a message</h2>

							<form
								onSubmit={handleSubmit}
								className="space-y-4"
							>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="form-control">
										<label className="label">
											<span className="label-text">Full Name *</span>
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											className="input input-bordered w-full"
											placeholder="Enter your full name"
											required
										/>
									</div>
									<div className="form-control">
										<label className="label">
											<span className="label-text">Email Address *</span>
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											className="input input-bordered w-full"
											placeholder="Enter your email"
											required
										/>
									</div>
								</div>

								<div className="form-control">
									<label className="label">
										<span className="label-text">Subject *</span>
									</label>
									<select
										name="subject"
										value={formData.subject}
										onChange={handleInputChange}
										className="select select-bordered w-full"
										required
									>
										<option value="">Select a subject</option>
										<option value="general">General Inquiry</option>
										<option value="feedback">Feedback</option>
										<option value="bug-report">Bug Report</option>
										<option value="privacy-concern">Privacy Concern</option>
										<option value="technical-support">Technical Support</option>
										<option value="account-issues">Account Issues</option>
										<option value="other">Other</option>
									</select>
								</div>

								<div className="form-control">
									<label className="label">
										<span className="label-text">Message *</span>
									</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										className="textarea textarea-bordered h-32 w-full"
										placeholder="Please provide as much detail as possible..."
										required
									/>
								</div>

								<div className="form-control">
									<button
										type="submit"
										className={`btn btn-primary w-full ${
											state.submitting ? "loading" : ""
										}`}
										disabled={state.submitting}
									>
										{state.submitting ? (
											<>
												<Loader2 className="animate-spin" />
												Sending...
											</>
										) : (
											<>
												<Send className="h-4 w-4 mr-2" />
												Send Message
											</>
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* Contact Information */}
				<div className="space-y-6">
					<div className="card bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title text-2xl mb-4">Get in touch</h2>

							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<Mail className="h-5 w-5 text-primary mt-1" />
									<div>
										<h3 className="font-semibold">Email Support</h3>
										<p className="text-sm text-base-content/70 mb-2">
											For general inquiries and support
										</p>
										<a
											href="mailto:support@dcodedsa.com"
											className="link link-primary"
										>
											support@dcodedsa.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<Mail className="h-5 w-5 text-secondary mt-1" />
									<div>
										<h3 className="font-semibold">Privacy Concerns</h3>
										<p className="text-sm text-base-content/70 mb-2">
											For privacy-related questions and data requests
										</p>
										<a
											href="mailto:privacy@dcodedsa.com"
											className="link link-secondary"
										>
											privacy@dcodedsa.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<MapPin className="h-5 w-5 text-accent mt-1" />
									<div>
										<h3 className="font-semibold">Location</h3>
										<p className="text-sm text-base-content/70">
											Pune, Maharashtra, India
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="card bg-primary/10 shadow-xl">
						<div className="card-body">
							<h2 className="card-title text-xl mb-4">Response Times</h2>
							<div className="space-y-3">
								<div className="flex justify-between items-center">
									<span className="text-sm">General Inquiries</span>
									<span className="badge badge-primary">24-48 hours</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm">Technical Support</span>
									<span className="badge badge-secondary">12-24 hours</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm">Privacy Concerns</span>
									<span className="badge badge-accent">24-48 hours</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm">Bug Reports</span>
									<span className="badge badge-warning">6-12 hours</span>
								</div>
							</div>
						</div>
					</div>

					<div className="card bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title text-xl mb-4">Additional Resources</h2>
							<div className="space-y-3">
								<a
									href="/terms"
									className="link link-primary block"
								>
									Terms of Service
								</a>
								<a
									href="/privacy"
									className="link link-primary block"
								>
									Privacy Policy
								</a>
								<a
									href="/cookies"
									className="link link-primary block"
								>
									Cookie Policy
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="alert alert-info">
				<AlertCircle className="h-5 w-5" />
				<div>
					<h4 className="font-semibold">Business Hours</h4>
					<p className="text-sm">
						Our support team is available Monday through Friday, 9:00 AM to 6:00
						PM (IST). We'll respond to messages received outside business hours
						on the next business day.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
