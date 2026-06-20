import Container from "./components/Container";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Labs from "./components/Labs";
import ThemeToggle from "./components/ThemeToggle";
import { getCachedContributions } from "@/lib/get-cached-contributions";

const GITHUB_USERNAME = "vineet-op";

export default function Home() {
  const contributions = getCachedContributions(GITHUB_USERNAME);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-background">
      <ThemeToggle />
      <Container className="relative">
        <Hero contributions={contributions} />
        <Experience />
        <Skills />
        <Projects />
        <Labs />
        <Contact />
      </Container>
    </div>
  );
}