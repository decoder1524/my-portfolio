function About() {
return ( <section id="about" className="bg-slate-900 py-24"> <div className="mx-auto max-w-6xl px-6">
    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      
      {/* Left Side */}
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          About Me
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Building Web Applications That Solve Real Problems
        </h2>
      </div>

      {/* Right Side */}
      <div>
        <p className="leading-relaxed text-gray-400">
          I'm a Full Stack Developer passionate about building modern,
          responsive and user-friendly web applications.
        </p>

        <p className="mt-4 leading-relaxed text-gray-400">
          I work with frontend and backend technologies to create
          complete solutions — from beautiful user interfaces to
          scalable APIs and databases.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-slate-950 p-5">
            <h3 className="text-2xl font-bold text-blue-400">
              Frontend
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Modern and responsive user interfaces.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-950 p-5">
            <h3 className="text-2xl font-bold text-blue-400">
              Backend
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              APIs, business logic and databases.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


);
}

export default About;
