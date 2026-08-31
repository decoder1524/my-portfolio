function Hero() {
return ( <section
   id="home"
   className="flex min-h-screen items-center bg-slate-950 pt-20"
 > <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">

    {/* Left Content */}
    <div>
      <p className="mb-4 text-sm font-medium text-blue-400">
        👋 Hi, I'm Manish
      </p>

      <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        I Build Modern
        <span className="block text-blue-500">
          Web Applications.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
        I'm a Full Stack Developer focused on building responsive
        frontend experiences, scalable backend APIs and reliable
        database-driven applications.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          React
        </span>

        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          Node.js
        </span>

        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          PostgreSQL
        </span>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
        >
          View My Work →
        </a>

        <a
          href="#contact"
          className="rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
        >
          Let's Work Together
        </a>
      </div>
    </div>

    {/* Right Visual */}
    <div className="hidden lg:flex lg:justify-center">
      <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-purple-500/10">
        
        <div className="flex h-64 w-64 items-center justify-center rounded-full border border-white/10 bg-slate-900">
          <div className="text-center">
            <p className="text-6xl">👨‍💻</p>
            <p className="mt-4 text-lg font-semibold text-white">
              Full Stack Developer
            </p>
          </div>
        </div>

        <div className="absolute -left-6 top-10 rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-sm text-blue-400 shadow-lg">
          React
        </div>

        <div className="absolute -right-4 bottom-12 rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-sm text-green-400 shadow-lg">
          Node.js
        </div>

      </div>
    </div>

  </div>
</section>


);
}

export default Hero;
