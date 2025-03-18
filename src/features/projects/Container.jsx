import PageTitle from "../shared/components/PageTitle";
import useProject from "./useProject";

const ProjectsContainer = () => {
  const { projects } = useProject();

  return (
    <main className="max-w-4xl mx-auto p-4 space-y-8">
      <PageTitle>I participated in..</PageTitle>

      <div className="flex flex-wrap gap-4">
        <div className="overflow-hidden w-full h-64">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <img
                src={project.src}
                className="w-full h-full object-cover rounded-xl transition-transform hover:scale-105 duration-700"
              />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsContainer;
