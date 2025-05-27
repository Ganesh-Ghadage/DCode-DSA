import EditProblemForm from "@/components/EditProblemForm";
import { useProblemStore } from "@/store/useProblemStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProblemPage = () => {
	const { id } = useParams();
	const { getProblemById, problem } = useProblemStore();

	useEffect(() => {
		if (id) {
			getProblemById(id);
		}
	}, [getProblemById]);

	return(
    <div>
      {problem && <EditProblemForm problem={problem} />}
    </div>
  )
};

export default EditProblemPage;
