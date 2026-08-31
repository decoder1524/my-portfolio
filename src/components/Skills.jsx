function Skills() {
const skills = [
{
category: "Frontend",
technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
},
{
category: "Backend",
technologies: ["Node.js", "Express.js", "REST APIs"],
},
{
category: "Database",
technologies: ["PostgreSQL", "MySQL"],
},
{
category: "Tools",
technologies: ["Git", "GitHub", "Postman"],
},
];

return ( <section id="skills" className="bg-slate-950 py-24"> <div className="mx-auto max-w-6xl px-6">
    {/* Heading */}
    <div className="mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
        My Skills
      </p>

      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        Technologies I Work With
      </h2>

      <p className="mt-4 max-w-2xl text-gray-400">
        I use modern technologies to build responsive, scalable and
        reliable web applications.
      </p>
    </div>

    {/* Skill Cards */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((skill) => (
        <div
          key={skill.category}
          className="rounded-xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/50"
        >
          <h3 className="text-xl font-semibold text-white">
            {skill.category}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {skill.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


);
}

export default Skills;
