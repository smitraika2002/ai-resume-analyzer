import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">

      {/* LEFT */}
      <h1 className="text-lg font-semibold">
       <a href="/" className="hover:text-blue-400">
         AI Resume Analyzer
       </a>
      </h1>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-4">

        <a
          href="https://github.com/smitraika2002"
          target="_blank"
          rel="noreferrer"
          className="p-2 transition rounded-lg bg-white/10 hover:bg-white/20 hover:scale-110"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://linkedin.com/in/smitraika"
          target="_blank"
          rel="noreferrer"
          className="p-2 transition rounded-lg bg-white/10 hover:bg-white/20 hover:scale-110"
        >
          <FaLinkedin size={18} />
        </a>

      </div>
    </nav>
  );
}