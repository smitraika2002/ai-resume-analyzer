import { useState } from "react";
import axios from "axios";

export default function Upload({ setResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Select a file");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3001/api/resume/upload",
        formData
      );

      setResult(res.data.data);

    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border shadow-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/10 rounded-2xl">

      <div
        className="p-8 text-center transition border-2 border-gray-500 border-dashed cursor-pointer rounded-xl hover:border-blue-400"
        onClick={() => document.getElementById("fileInput").click()}
      >
        <p className="text-gray-300">
          {file ? file.name : "Click or Drag & Drop Resume (PDF)"}
        </p>

        <input
          id="fileInput"
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <button
        onClick={handleUpload}
        className="w-full py-2 mt-4 font-semibold transition rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105"
      >
        {loading ? "Analyzing..." : "Upload Resume"}
      </button>
    </div>
  );
}