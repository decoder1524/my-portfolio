function Projects() {
const projects = [
{
title: "Todo List",
description:
"A task management application for organizing and managing daily tasks efficiently.",
image: "/images/Projects/todolist.png",
githubLink: "https://github.com/decoder1524/TodoList",
},
{
title: "Scheme Portal",
description:
"A web application designed to provide information and access related to different schemes.",
image: "/images/Projects/schemes.png",
githubLink: "https://github.com/decoder1524/SchemePortal",
},
{
title: "Telegram Automation",
description:
"An automation project built to streamline workflows using Telegram.",
image: "/images/Projects/telegramautomation.png",
githubLink: "https://github.com/decoder1524/telegramautomation",
},
];

return ( <section id="projects" className="bg-slate-900 py-24"> <div className="mx-auto max-w-6xl px-6"> <div className="mb-12"> <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
Portfolio </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        Featured Projects
      </h2>

      <p className="mt-4 max-w-xl text-gray-400">
        A selection of projects I have built and worked on.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group overflow-hidden rounded-xl border border-white/10 bg-slate-950 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
        >
          {/* Project Image */}
          <div className="h-52 overflow-hidden bg-slate-800">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {project.description}
            </p>

            <div className="mt-6">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
              >
                View Source Code
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


);
}

export default Projects;
