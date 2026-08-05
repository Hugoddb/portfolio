import experiences from "../../data/experiences";

function ExperienceWindow() {
    return (
      <div className="h-full overflow-y-auto p-10">

        <div className="relative border-l-2 border-slate-700 ml-6">

          {experiences.map((exp) => (
            <div
              key={exp.year + exp.company}
              className="relative mb-12 ml-8"
            >

              <div className="absolute -left-[42px] top-2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-slate-900"></div>

              <span className="text-emerald-700 font-semibold text-lg">
                {exp.year}
              </span>

              <div className="mt-3 bg-slate-800 rounded-xl p-6 border border-slate-700">


              <div className="flex justify-between items-start gap-8">

                <div>
                  <h2 className="text-white text-2xl font-semibold">
                    {exp.title}
                  </h2>

                  <p className="text-slate-400 mt-1">
                    {exp.company}
                  </p>

                  <p className="text-slate-500 text-sm mt-1">
                    {exp.period}
                  </p>
                </div>

                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-45 h-16 object-contain flex-shrink-0"
                />

              </div>
            

                <p className="text-slate-300 mt-5 leading-7">
                  {exp.description}
                </p>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-3 mt-5">

                    {exp.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-slate-700 px-3 py-2 rounded-full"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-5 h-5"
                        />

                        <span className="text-white">
                          {tech.name}
                        </span>

                      </div>
                    ))}

                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    );
}

export default ExperienceWindow;