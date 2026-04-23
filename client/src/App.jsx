import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Upload from "./components/Upload";
import Result from "./components/Result";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden text-white bg-gradient-to-br from-black via-gray-900 to-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-20 top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-20 bottom-[-100px] right-[-100px]" />
      </div>

      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">

        <Hero />

        <div className="w-full max-w-xl mt-10">
          <Upload setResult={setResult} />
        </div>

        {result && (
<div className="w-full mt-12">     
         <Result result={result} />
          </div>
        )}

      </main>

      {/* Sticky bottom text */}
      <div className="fixed text-sm text-gray-400 -translate-x-1/2 bottom-4 left-1/2">
        Designed by <span className="font-medium text-white">Smit Raika Magar 🚀</span>
      </div>

    </div>
  );
}