import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full" >
       <div className="flex flex-col gap-20 mt-11 md:mt-13 lg:mt-[5.5rem] xl:mt-5 2xl:mt-1">
            <Hero />
            <Skills />
            <Encryption />
            <Projects />
       </div>
    </main>
  );
}
