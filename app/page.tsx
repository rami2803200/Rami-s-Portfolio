import Image from "next/image";
import Hero from "@/components/Hero"; // Adjust the path as necessary

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <Hero /> {/* Correct capitalization and usage */}
        <h1>HELLO PORTFOLIO</h1>
      </div>
    </main>
  );
}
