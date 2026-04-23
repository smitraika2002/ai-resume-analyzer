export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-white/10 bg-white/5 backdrop-blur-lg">

      <div className="max-w-6xl px-6 py-10 mx-auto text-center">

        {/* Name */}
        <p className="text-sm text-gray-400">
          Designed & Built by
        </p>

        <h2 className="mt-1 text-lg font-semibold text-white">
          Smit Raika Magar 🚀
        </h2>

        {/* Links */}
        <div className="flex justify-center gap-6 mt-4 text-sm">

          <a
            href="https://github.com/smitraika2002"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/smitraika"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            LinkedIn
          </a>

        </div>

        {/* Divider Glow */}
        <div className="mt-6 h-[1px] w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 opacity-50"></div>

        {/* Small text */}
        <p className="mt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} All rights reserved
        </p>

      </div>
    </footer>
  );
}