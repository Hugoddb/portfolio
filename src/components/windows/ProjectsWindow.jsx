import { useState } from "react";
import projects from "../../data/projects";

function ProjectsWindow() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
      <div className="h-full flex">

        <div className="w-56 border-r border-slate-700 p-4">

          <h2 className="text-white text-xl font-semibold mb-4">
            Projects
          </h2>

          <div className="flex flex-col gap-3">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`flex items-center gap-3 p-3 rounded-lg transition ${
                  selectedProject.id === project.id
                    ? "bg-slate-700"
                    : "hover:bg-slate-800"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-12 h-12 rounded object-cover"
                />

                <span className="text-white">
                  {project.title}
                </span>
              </button>
            ))}
          </div>

        </div>
        <div className="flex-1 p-8 overflow-y-auto">

          <h1 className="text-3xl text-white font-bold">
            {selectedProject.title}
          </h1>

          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="mt-6 rounded-xl w-full max-w-3xl border border-slate-700"
          />

          <p className="mt-6 text-slate-300 leading-8">
            {selectedProject.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-6">

            <div className="bg-slate-700 text-white px-5 py-3 rounded-xl">
            <p>
              {selectedProject.team === 1
                ? "👤  Solo Project"
                : `👥  Team Project (${selectedProject.team})`}
            </p>
            </div>

            <div className="bg-slate-700 text-white px-5 py-3 rounded-xl">
              ⏱️ {selectedProject.duration}
            </div>

          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            
          {selectedProject.technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center text-white gap-2 bg-slate-700 px-4 py-2 rounded-full"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-5 h-5 object-contain"
              />

              <span>{tech.name}</span>
            </div>
          ))}
          </div>

        </div>

      </div>
    );
}

export default ProjectsWindow;