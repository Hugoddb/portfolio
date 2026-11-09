import { useState } from "react";
import projects from "../../data/projects";
import { FaGithub, FaLock } from "react-icons/fa";
import { FolderCode } from "lucide-react";

function ProjectThumbnail({ project, className }) {
    if (project.image) {
      return (
        <img
          src={project.image}
          alt={project.title}
          className={`${className} object-cover`}
        />
      );
    }

    return (
      <div className={`${className} flex items-center justify-center bg-slate-800 text-slate-400`}>
        <FolderCode size={22} />
      </div>
    );
}

function ProjectsWindow() {

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
      <div className="h-full flex flex-col md:flex-row">

      <nav className="shrink-0 md:w-60 border-b md:border-b-0 md:border-r border-slate-700 md:p-4 flex flex-col md:min-h-0">

      <div className="hidden md:block p-4 border-b border-slate-700 mb-3">
        <h2 className="text-white text-xl font-semibold">
          Projects
        </h2>
      </div>

          <div className="no-scrollbar flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto md:flex-1 md:min-h-0 p-3 md:p-0 md:pr-2">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`shrink-0 flex items-center gap-3 p-2 md:p-3 rounded-lg transition text-left ${
                  selectedProject.id === project.id
                    ? "bg-slate-700"
                    : "hover:bg-slate-800"
                }`}
              >
                <ProjectThumbnail
                  project={project}
                  className="w-10 h-10 md:w-12 md:h-12 rounded shrink-0"
                />

                <span className="text-white text-sm md:text-base whitespace-nowrap md:whitespace-normal pr-1">
                  {project.title}
                </span>
              </button>
            ))}
          </div>

        </nav>
        <div key={selectedProject.id} className="flex-1 min-h-0 p-5 md:p-8 overflow-y-auto">

          <h1 className="text-2xl md:text-3xl text-white font-bold">
            {selectedProject.title2}
          </h1>

          {selectedProject.image && (
            <div className="mt-5 md:mt-6 w-full flex justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="
                  w-auto
                  max-w-full
                  max-h-[50vh]
                  rounded-xl
                  border border-slate-700
                "
              />
            </div>
          )}

          <p className="mt-5 md:mt-6 text-slate-300 leading-7 md:leading-8">
            {selectedProject.description}
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 mt-6">

            <div className="bg-slate-700 text-white text-sm md:text-base px-4 py-2 md:px-5 md:py-3 rounded-xl">
            <p>
              {selectedProject.team === 1
                ? "👤  Solo Project"
                : `👥  Team Project (${selectedProject.team})`}
            </p>
            </div>

            <div className="bg-slate-700 text-white text-sm md:text-base px-4 py-2 md:px-5 md:py-3 rounded-xl">
              ⏱️ {selectedProject.duration}
            </div>

          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 mt-6">

          {selectedProject.technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center text-white text-sm md:text-base gap-2 bg-slate-700 px-3 py-2 md:px-4 rounded-full"
            >
              <img
                src={tech.icon}
                alt=""
                className="w-5 h-5 object-contain"
              />

              <span>{tech.name}</span>
            </div>
          ))}
          </div>

          <div className="mt-8">

          {selectedProject.private ? (
            <div className="inline-flex items-center gap-2 bg-slate-700 text-slate-300 px-5 py-3 rounded-lg cursor-default">
              <FaLock />
              Private Repository
            </div>
          ) : (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white items-center gap-2 bg-slate-700 hover:bg-slate-600 transition px-5 py-3 rounded-lg"
            >
              <FaGithub />
              GitHub
            </a>

          )}

        </div>
        </div>

      </div>
    );
}

export default ProjectsWindow;
