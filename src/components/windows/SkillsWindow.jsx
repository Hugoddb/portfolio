import skills from "../../data/skills";

function SkillsWindow() {
  return (
    <div className="h-full overflow-y-auto p-8">

      {skills.map((category) => (
        <section key={category.category} className="mb-10">

          <h2 className="text-2xl text-white font-semibold mb-5">
            {category.category}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">

            {category.items.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-700 rounded-xl p-5 flex flex-col items-center gap-3 hover:bg-slate-600 transition"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />

                <span className="text-white">
                  {skill.name}
                </span>
              </div>
            ))}

          </div>

        </section>
      ))}

    </div>
  );
}

export default SkillsWindow;