import Container from "./components/Container";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-neutral-950">
      <Container className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}