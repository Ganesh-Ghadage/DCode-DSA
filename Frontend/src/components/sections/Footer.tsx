// import { Github, Linkedin, TwitterIcon } from 'lucide-react';
// import React, { useState } from 'react';
// import { useForm } from '@formspree/react';
// import toast from 'react-hot-toast';

// interface FooterNavLink {
//   label: string;
//   link: string;
// }

// const footerNavLinks: FooterNavLink[] = [
//   { label: 'Privacy Policy', link: '#privacy' },
//   { label: 'Terms of Service', link: '#terms' },
//   // Add more links here
// ];

// const Footer: React.FC = () => {
//   const [emailValue, setEmailValue] = useState('')
//   const [state, submitForm, _ ] = useForm(import.meta.env.VITE_FORMSPREE_HASHID, {
//     data: {
//       subject: 'Someone joined the newsletter',
//     }
//   });

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     await submitForm(e)
//     setEmailValue('')
//     if (state.succeeded) {
//       toast.success("Thanks for subscribing!")
//     }
//   };

//   return (
//     <footer id="footer" className="text-white pt-16 pb-8 relative overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1500239038240-9b3b8bac73c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bWluaW1hbCUyMHRlY2glMjBmb290ZXIlMjBkZXNpZ258ZW58MHx8fHwxNzQ1Mzc2OTE4fDA&ixlib=rb-4.0.3&q=80&w=1080"
//           alt="Footer background"
//           className="w-full h-full object-cover opacity-70"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-neutral-900/80"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Dcode DSA</h3>
//             <p className="text-gray-400 mb-4">
//               Personalized DSA learning platform to help you master algorithms and ace technical interviews.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="https://x.com/i_am_the_one_22"
//                 target='_blank'
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//                 aria-label="Twitter"
//               >
//                 <TwitterIcon />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/ganesh-ghadage/"
//                 target='_blank'
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin />
//               </a>
//               <a
//                 href="https://github.com/Ganesh-Ghadage"
//                 target='_blank'
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//                 aria-label="GitHub"
//               >
//                 <Github />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">

//               <li>
//                 <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#dashboard-preview" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Dashboard
//                 </a>
//               </li>
//               <li>
//                 <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   FAQ
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Legal</h3>
//             <ul className="space-y-2">
//               {footerNavLinks.map((link, index) => (
//                 <li key={index}>
//                   <a href={link.link} className="text-gray-400 hover:text-white transition-colors duration-300">
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
//             <p className="text-gray-400 mb-4">
//               Subscribe to our newsletter for the latest updates and features.
//             </p>
//             <form id="newsletter-form" className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 id='email'
//                 name='email'
//                 value={emailValue}
//                 onChange={e => setEmailValue(e.target.value)}
//                 placeholder="Your email"
//                 className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer"
//                 disabled={state.submitting}
//               >
//                 {state.submitting ? 'Submitting...' : 'Subscribe'}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-neutral-800 my-8"></div>

//         {/* Bottom Footer */}
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <img
//               src="/dcodedsa_logo.jpg"
//               alt="Dcode DSA"
//               className="h-10 w-auto rounded-full"
//               loading="lazy"
//             />
//           </div>
//           <p className="text-gray-500 text-sm text-center md:text-right">
//             © 2025 Dcode DSA. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Github,
	Twitter,
	Linkedin,
	Mail,
	Heart,
	ExternalLink,
	Code2,
	BookOpen,
	Users,
	FileText,
	// MessageCircle,
	// Rocket,
	Home,
	Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import toast from "react-hot-toast";
import { useForm } from "@formspree/react";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [state, submitForm, _] = useForm(
		import.meta.env.VITE_FORMSPREE_HASHID,
		{
			data: {
				subject: "Someone joined the newsletter",
			},
		}
	);

	const handleNewsletterSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		if (email && email.includes("@")) {
			await submitForm(e);
			setEmail("");
			if (state.succeeded) {
				toast.success("Thanks for subscribing!");
			}
		}
	};

	const quickLinks = [
		{ name: "Home", href: "/", icon: Home },
		{ name: "Problems", href: "/problem", icon: Code2 },
		{ name: "Dashboard", href: "/dashboard", icon: BookOpen },
		{ name: "Practice Sheets", href: "/sheets", icon: FileText },
		{ name: "Sign In", href: "/signup", icon: Users },
	];

	// const dsaResources = [
	// 	{ name: "DSA Roadmap", href: "/roadmap", icon: Rocket },
	// 	{ name: "Beginner's Guide", href: "/guide", icon: BookOpen },
	// 	{ name: "Interview Questions", href: "/interviews", icon: MessageCircle },
	// 	{ name: "Popular Problems", href: "/popular", icon: Code2 },
	// 	{ name: "Custom Sheets", href: "/custom", icon: FileText },
	// ];

	const socialLinks = [
		{
			name: "GitHub",
			href: "https://github.com/Ganesh-Ghadage",
			icon: Github,
			color: "hover:text-foreground",
		},
		{
			name: "Twitter",
			href: "https://x.com/CoderGanesh",
			icon: Twitter,
			color: "hover:text-blue-400",
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/ganesh-ghadage",
			icon: Linkedin,
			color: "hover:text-blue-600",
		},
	];

	const legalLinks = [
		{ name: "Terms of Service", href: "/terms" },
		{ name: "Privacy Policy", href: "/privacy" },
		{ name: "Cookie Policy", href: "/cookies" },
		{ name: "Contact Us", href: "/contact" },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	const socialVariants = {
		hidden: { scale: 0 },
		visible: {
			scale: 1,
			transition: { type: "spring" as const, stiffness: 260, damping: 20 },
		},
	};

	return (
		<motion.footer
			className="bg-gradient-subtle border-t border-border/40"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={containerVariants}
		>
			<div className="px-6 py-12">
				{/* Main Footer Content */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
					variants={containerVariants}
				>
					{/* Brand Section */}
					<motion.div
						className="lg:col-span-1 space-y-4"
						variants={itemVariants}
					>
						<motion.div
							className="space-y-3"
							variants={itemVariants}
						>
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link
									to="/"
									className="flex items-center gap-3 group"
								>
									<Logo />
									<span className="hidden lg:block text-xl font-bold bg-gradient-to-r from-primary-content to-primary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-300">
										DCode DSA
									</span>
								</Link>
							</motion.div>
							<motion.p
								className="text-muted-foreground text-sm leading-relaxed"
								variants={itemVariants}
							>
								Decode Your DSA Potential with DCode DSA.
								<br />
								Master algorithms, ace
								interviews, and build your coding confidence.
							</motion.p>
						</motion.div>

						{/* Social Links */}
						<motion.div
							className="flex space-x-4"
							variants={containerVariants}
						>
							{socialLinks.map((social, index) => (
								<motion.div
									key={social.name}
									rel="noopener noreferrer"
									aria-label={social.name}
									className={`p-2 rounded-lg bg-card border border-border/50 transition-all duration-300 hover:shadow-elegant ${social.color}`}
									variants={socialVariants}
									whileHover={{
										scale: 1.1,
										rotate: [0, -5, 5, 0],
										transition: { duration: 0.3 },
									}}
									whileTap={{ scale: 0.95 }}
									custom={index}
								>
									<Link
										to={social.href}
										target="_blank"
										className="w-fit h-fit"
									>
										<social.icon className="h-5 w-5" />
									</Link>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						className="space-y-4"
						variants={itemVariants}
					>
						<motion.h3
							className="text-lg font-semibold text-foreground"
							variants={itemVariants}
						>
							Quick Links
						</motion.h3>
						<motion.nav
							className="space-y-3"
							variants={containerVariants}
						>
							{quickLinks.map((link) => (
								<motion.div
									key={link.name}
									className="w-fit"
									variants={itemVariants}
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<Link
										to={link.href}
										className="w-fit flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
									>
										<link.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
										<span className="text-sm">{link.name}</span>
									</Link>
								</motion.div>
							))}
						</motion.nav>
					</motion.div>

					{/* DSA Resources */}
					{/* // temp placeholder div */}
					<div></div>
					{/* <motion.div
						className="space-y-4"
						variants={itemVariants}
					>
						<motion.h3
							className="text-lg font-semibold text-foreground"
							variants={itemVariants}
						>
							DSA Resources
						</motion.h3>
						<motion.nav
							className="space-y-3"
							variants={containerVariants}
						>
							{dsaResources.map((resource) => (
								<motion.div
									key={resource.name}
									className="w-fit"
									variants={itemVariants}
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<Link
										to={resource.href}
										className="w-fit flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
									>
										<resource.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
										<span className="text-sm">{resource.name}</span>
									</Link>
								</motion.div>
							))}
						</motion.nav>
					</motion.div> */}

					{/* Newsletter Signup */}
					<motion.div
						className="space-y-4"
						variants={itemVariants}
					>
						<motion.h3
							className="text-lg font-semibold text-foreground"
							variants={itemVariants}
						>
							Stay Updated
						</motion.h3>
						<motion.p
							className="text-sm text-muted-foreground"
							variants={itemVariants}
						>
							Get the latest DSA problems, tutorials, and coding tips delivered
							to your inbox.
						</motion.p>

						<motion.form
							onSubmit={handleNewsletterSubmit}
							className="space-y-3"
							variants={containerVariants}
						>
							<motion.div
								className="relative"
								variants={itemVariants}
							>
								<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<input
									type="email"
									placeholder="Enter your email"
									value={email}
									name="email"
									onChange={(e) => setEmail(e.target.value)}
									className="pl-4 input bg-card border-border/50 transition-colors"
									required
								/>
							</motion.div>
							<motion.div variants={itemVariants}>
								<button
									type="submit"
									className="w-full btn btn-primary bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant"
									disabled={state.submitting}
								>
									<motion.div
										className="flex items-center justify-center"
										animate={state.submitting ? { scale: [1, 1.1, 1] } : {}}
										transition={{ duration: 0.3 }}
									>
										{state.submitting ? (
											<>
												<Loader2 className="animate-spin" />
												Subscribing
											</>
										) : (
											"Subscribe"
										)}
									</motion.div>
								</button>
							</motion.div>
						</motion.form>
					</motion.div>
				</motion.div>

				{/* Divider */}
				<motion.div
					className="border-t border-border/40 pt-8"
					variants={itemVariants}
				>
					<motion.div
						className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
						variants={containerVariants}
					>
						{/* Legal Links */}
						<motion.div
							className="flex flex-wrap justify-center lg:justify-start gap-4"
							variants={containerVariants}
						>
							{legalLinks.map((link) => (
								<motion.div
									key={link.name}
									className="w-fit"
									variants={itemVariants}
									whileHover={{ y: -2 }}
									transition={{ duration: 0.2 }}
								>
									<Link
										to={link.href}
										className="w-fit text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
									>
										<span>{link.name}</span>
										<ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
									</Link>
								</motion.div>
							))}
						</motion.div>

						{/* Credits */}
						<motion.div
							className="text-center lg:text-right space-y-2"
							variants={itemVariants}
						>
							<motion.p
								className="text-sm text-muted-foreground flex items-center justify-center lg:justify-end"
								variants={itemVariants}
							>
								Built with
								<motion.span
									animate={{ scale: [1, 1.2, 1] }}
									transition={{ duration: 2, repeat: Infinity }}
								>
									<Heart className="h-4 w-4 mx-1 text-red-500" />
								</motion.span>
								by passionate devs for passionate learners
							</motion.p>
							<motion.p
								className="text-xs text-muted-foreground"
								variants={itemVariants}
							>
								© {new Date().getFullYear()} DCode DSA. All rights reserved.
							</motion.p>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</motion.footer>
	);
};

export default Footer;
