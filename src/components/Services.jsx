function Services() {
const services = [
{
icon: "🌐",
title: "Full Stack Development",
description:
"Complete web applications from frontend UI to backend APIs and database integration.",
},
{
icon: "🎨",
title: "Frontend Development",
description:
"Modern, responsive and user-friendly interfaces built with React and Tailwind CSS.",
},
{
icon: "⚙️",
title: "Backend & API Development",
description:
"Secure and scalable REST APIs with clean business logic and database integration.",
},
{
icon: "🔧",
title: "Bug Fixing & Improvements",
description:
"Fix existing issues, improve performance and add new features to web applications.",
},
];

return ( <section id="services" className="bg-slate-950 py-24"> <div className="mx-auto max-w-6xl px-6">
{/* Heading */} <div className="mb-12 max-w-2xl"> <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
Services </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        How I Can Help You
      </h2>

      <p className="mt-4 leading-relaxed text-gray-400">
        I help businesses and individuals build and improve modern web
        applications.
      </p>
    </div>

    {/* Service Cards */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-2xl">
            {service.icon}
          </div>

          <h3 className="text-lg font-semibold text-white">
            {service.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

);
}

export default Services;
