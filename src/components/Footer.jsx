function Footer() {
const currentYear = new Date().getFullYear();

return ( <footer className="border-t border-white/10 bg-slate-950"> <div className="mx-auto max-w-6xl px-6 py-8"> <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <a href="#home" className="text-xl font-bold text-white">
        Manish<span className="text-blue-500">.</span>
      </a>

      <p className="text-center text-sm text-gray-500">
        © {currentYear} Manish. All rights reserved.
      </p>

      <div className="flex gap-4 text-sm">
        <a
          href="https://github.com/decoder1524"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 transition hover:text-white"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/manish-kumar-dewangan-a05198324"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 transition hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</footer>


);
}

export default Footer;
