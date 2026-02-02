import Container from "./components/Container";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Labs from "./components/Labs";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-background">
      <ThemeToggle />
      <Container className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Labs />
        <Contact />
      </Container>
    </div>
  );
}