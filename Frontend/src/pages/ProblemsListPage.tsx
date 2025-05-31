import { useEffect } from 'react'
import { useProblemStore } from '../store/useProblemStore';
import { Loader } from 'lucide-react';
import ProblemsTable from '../components/ProblemsTable';

const ProblemsListPage = () => {
  const { getAllProblems, problems, isProblemsLoading } = useProblemStore();

	useEffect(() => {
		getAllProblems();
	}, [getAllProblems]);

	if (isProblemsLoading) {
		return (
			<div className="flex items-center justify-center h-[80dvh] w-full">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	}


  return (
    <section className="min-h-screen w-full flex flex-col items-center mt-14 px-4">
      {problems.length > 0 ? (
				<ProblemsTable problems={problems} />
			) : (
				<p className="mt-10 text-center text-lg font-semibold text-gray-500 dark:text-gray-400 z-10 border border-primary px-4 py-2 rounded-md border-dashed">
					No Problems found!
				</p>
			)}
    </section>
  )
}

export default ProblemsListPage