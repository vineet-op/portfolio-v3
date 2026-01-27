import Container from "./components/Container";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">

      <Container>
        <Hero />
        <Experience />
        <Projects />
      </Container>
    </div>
  );
}