import EditProblemForm from "@/components/EditProblemForm";
import ErrorComponent from "@/components/ErrorComponent";
import { useProblemStore } from "@/store/useProblemStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProblemPage = () => {
	const { id } = useParams();
	const { getProblemById, problem, errorMessage } = useProblemStore();

	useEffect(() => {
		if (id) {
			getProblemById(id);
		}
	}, [getProblemById]);

	if(errorMessage){
		return <ErrorComponent errorMessage={errorMessage} />
	}

	return(
    <div>
      {problem && <EditProblemForm problem={problem} />}
    </div>
  )
};

export default EditProblemPage;
