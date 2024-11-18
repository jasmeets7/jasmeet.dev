import { listProjects } from '@portfolio/actions/project';
import Project from './project-card';

const PortfolioPage: React.FC = async () => {
  const projects = await listProjects();
  return (
    <div className='py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
      {projects
        ? projects.map((project, index) => (
            <Project
              key={`project_${index}`}
              delay={`${index + 1}00ms`}
              project={project}
            />
          ))
        : null}
    </div>
  );
};

export default PortfolioPage;
