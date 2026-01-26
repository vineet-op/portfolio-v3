import Container from "./components/Container";
import Hero from "./components/Hero";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-white">

    <Container>
      <Hero />
      <Experience />
    </Container>
    </div>
  );
}