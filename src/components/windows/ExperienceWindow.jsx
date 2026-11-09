import experiences from "../../data/experiences";
import useLanguage from "../../i18n/LanguageContext";

function ExperienceWindow() {

    const { t } = useLanguage();

    return (
      <div className="p-5 md:p-10">

        <div className="relative border-l-2 border-slate-700 ml-2 md:ml-6">

          {experiences.map((exp) => (
            <div
              key={exp.year + exp.company}
              className="relative mb-10 md:mb-12 ml-6 md:ml-8"
            >

              <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-5 h-5 rounded-full bg-emerald-500 border-4 border-slate-900"></div>

              <span className="text-emerald-400 font-semibold text-lg">
                {exp.year}
              </span>

              <div className="mt-3 bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700">


              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-start gap-4 sm:gap-8">

                <div>
                  <h2 className="text-white text-xl md:text-2xl font-semibold">
                    {t(exp.title)}
                  </h2>

                  <p className="text-slate-400 mt-1">
                    {exp.company}
                  </p>

                  <p className="text-slate-500 text-sm mt-1">
                    {t(exp.period)}
                  </p>
                </div>

                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="h-10 sm:h-16 w-auto max-w-32 sm:max-w-45 object-contain object-left shrink-0"
                />

              </div>

                <p className="text-slate-300 mt-4 md:mt-5 leading-7">
                  {t(exp.description)}
                </p>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-5">

                    {exp.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-slate-700 px-3 py-1.5 md:py-2 rounded-full"
                      >
                        <img
                          src={tech.icon}
                          alt=""
                          className="w-5 h-5"
                        />

                        <span className="text-white text-sm md:text-base">
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