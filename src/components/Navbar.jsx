import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (<nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur"> <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-white">
            Manish<span className="text-blue-500">.</span>
        </a>

        <div className="hidden gap-8 md:flex">
            <a href="#home" className="text-sm text-gray-300 hover:text-white">
                Home
            </a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white">
                About
            </a>
            <a href="#skills" className="text-sm text-gray-300 hover:text-white">
                Skills
            </a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-white">
                Projects
            </a>
            <a href="#services" className="text-sm text-gray-300 hover:text-white">
                Services
            </a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white">
                Contact
            </a>
        </div>

        <a
            href="#contact"
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 md:block"
        >
            Hire Me
        </a>

        <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white md:hidden"
        >
            ☰
        </button>
    </div>

        {isOpen && (
            <div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
                <div className="flex flex-col gap-4">
                    <a href="#home" onClick={() => setIsOpen(false)}>
                        Home
                    </a>

                    <a href="#about" onClick={() => setIsOpen(false)}>
                        About </a>

                    <a href="#skills" onClick={() => setIsOpen(false)}>
                        Skills </a>

                    <a href="#projects" onClick={() => setIsOpen(false)}>
                        Projects </a>

                    <a href="#services" onClick={() => setIsOpen(false)}>
                        Services </a>

                    <a href="#contact" onClick={() => setIsOpen(false)}>
                        Contact </a>

                </div>
            </div>
        )}
    </nav>


    );
}

export default Navbar;
