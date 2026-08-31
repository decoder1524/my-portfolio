function Contact() {
return ( <section id="contact" className="bg-slate-900 py-24"> <div className="mx-auto max-w-6xl px-6"> <div className="grid gap-12 lg:grid-cols-2">
      {/* Left Side */}
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let's Build Something Great Together
        </h2>

        <p className="mt-5 max-w-lg leading-relaxed text-gray-400">
          Have a project in mind or need help with an existing web
          application? Feel free to reach out.
        </p>

        <div className="mt-8 space-y-4">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-4 rounded-lg border border-white/10 bg-slate-950 p-4 transition hover:border-blue-500/50"
          >
            <span className="text-xl">📧</span>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white">
                manishkumardewangan56@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/decoder1524"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-lg border border-white/10 bg-slate-950 p-4 transition hover:border-blue-500/50"
          >
            <span className="text-xl">💻</span>
            <div>
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-white">
                View my projects
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/manish-kumar-dewangan-a05198324"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-lg border border-white/10 bg-slate-950 p-4 transition hover:border-blue-500/50"
          >
            <span className="text-xl">💼</span>
            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="text-white">
                Connect with me
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Right Side - Form */}
        <form
        action="https://formspree.io/f/mvkozjnq"
        method="POST"
        className="rounded-2xl border border-white/10 bg-slate-950 p-6 sm:p-8"
        >
        <h3 className="text-xl font-semibold text-white">
          Send me a message
        </h3>

        <div className="mt-6">
          <label className="text-sm text-gray-300">
            Your Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
          />
        </div>

        <div className="mt-5">
          <label className="text-sm text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="youremail@example.com"
            className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
          />
        </div>

        <div className="mt-5">
          <label className="text-sm text-gray-300">
            Project Details
          </label>

          <textarea
            rows="5"
            name="message"
            placeholder="Tell me about your project..."
            className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
        >
          Send Message
        </button>
      </form>

    </div>
  </div>
</section>


);
}

export default Contact;