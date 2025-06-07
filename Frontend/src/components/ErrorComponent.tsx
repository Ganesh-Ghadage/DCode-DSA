import Lottie from "lottie-react";
import errorAmination from "../../public/security-research.json";
import { Link } from "react-router-dom";

interface props {
	errorMessage?: string;
}

const ErrorComponent = ({ errorMessage = "Something Went Wrong" }: props) => {
	return (
		<div className=" text-center mt-10 -mb-20">
			<h1 className="text-2xl text-error-content">{errorMessage}</h1>
			<div className="w-96">
				<Lottie
					animationData={errorAmination}
					loop={true}
				/>
			</div>

			<Link to={"/"}>
				<button className="btn btn-link btn-lg">Go Home</button>
			</Link>
		</div>
	);
};

export default ErrorComponent;
