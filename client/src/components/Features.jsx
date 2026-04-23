export default function Features() {
  const items = [
    {
      title: "AI Resume Analysis",
      desc: "Get instant ATS score and insights using AI.",
    },
    {
      title: "Skill Detection",
      desc: "Automatically detects strengths and missing skills.",
    },
    {
      title: "Smart Suggestions",
      desc: "Actionable tips to improve your resume.",
    },
  ];

  return (
    <section id="features" className="mt-20 w-full max-w-5xl">
      <h2 className="text-3xl font-bold text-center mb-10">
        Features ⚡
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}