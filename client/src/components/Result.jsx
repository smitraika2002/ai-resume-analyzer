export default function Result({ result }) {
  if (!result) return null;

  return (
<div className="w-full max-w-4xl p-6 mx-auto mb-20 text-white border shadow-xl mb bg-white/10 backdrop-blur-lg rounded-3xl border-white/10">
      {/* TOP */}
      <div className="flex items-center justify-center gap-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Resume Analysis</h2>
          <p className="text-gray-400">AI insights</p>
        </div>

        <div className="flex items-center justify-center w-20 h-20 text-xl font-bold rounded-full bg-gradient-to-r from-green-400 to-blue-500">
          {result.atsScore}
        </div>
      </div>

      {/* SUMMARY */}
      <div className="p-4 mt-6 bg-white/5 rounded-xl">
        <h3 className="mb-2 font-semibold">Summary</h3>
        <p className="text-gray-300">{result.summary}</p>
      </div>

      {/* SKILLS */}
      <div className="mt-6">
        <h3 className="mb-2 font-semibold">Strong Skills</h3>
        <div className="flex flex-wrap gap-2">
          {result?.skills?.strong?.map((s, i) => (
            <span key={i} className="px-3 py-1 text-sm border rounded-full bg-blue-500/20 border-blue-400/30">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* MISSING */}
      <div className="mt-6">
        <h3 className="mb-2 font-semibold">Missing Skills</h3>
        <div className="flex flex-wrap gap-2">
          {result?.skills?.missing?.map((s, i) => (
            <span key={i} className="px-3 py-1 text-sm border rounded-full bg-red-500/20 border-red-400/30">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* SUGGESTIONS */}
      <div className="p-4 mt-6 bg-white/5 rounded-xl">
        <h3 className="mb-2 font-semibold">AI Suggestions</h3>
        <p className="text-gray-300">{result.suggestions}</p>
      </div>

      {/* JOB FIT */}
      <div className="p-4 mt-6 bg-white/5 rounded-xl">
        <h3 className="mb-2 font-semibold">Job Fit</h3>

        <div className="flex justify-between">
          <p>{result?.jobFit?.role}</p>
          <p className="font-bold text-green-400">{result?.jobFit?.fitScore}%</p>
        </div>

        <p className="mt-2 text-gray-400">{result?.jobFit?.reason}</p>
      </div>

    </div>
  );
}