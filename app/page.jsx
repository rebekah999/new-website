
import Hero from "@/components/sections/main/hero/Hero";
import About from "@/components/sections/main/about/About";
import Skills from "@/components/sections/main/skills/Skills";
import Projects from '@/components/sections/main/projects/Projects'

export const metadata = {
  title: 'Rebekah Fowler | Data Analyst & Data Storyteller',
  description:
    'A freelance analyst with experience in freelancing, Python, SQL, Tableau, and data storytelling. I help businesses make data-driven decisions.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
     <Projects />
    </>
  );
}
