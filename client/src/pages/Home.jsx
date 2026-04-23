import Hero from "../components/Hero";
import Upload from "../components/Upload";
import Result from "../components/Result";

export default function Home({ result, setResult }) {
  return (
    <main className="flex flex-col items-center justify-center px-4">

      <Hero />
      <Upload setResult={setResult} />
      <Result data={result} />

    </main>
  );
}