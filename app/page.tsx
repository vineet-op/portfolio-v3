import Container from "./components/Container";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-neutral-950">
      <Container className="relative">
        <Hero />
        <div className="w-full border border-b border-dashed absolute top-128 left-0" />
        <Experience />
        {/* <div className="w-full border border-b border-dashed absolute top-1/4 left-0" /> */}
        <Projects />
        <div className="w-full border border-b border-dashed absolute top-224 left-0" />
        <Contact />
        <div className="w-full border border-b border-dashed absolute bottom-30 left-0" />
      </Container>
    </div>
  );
}