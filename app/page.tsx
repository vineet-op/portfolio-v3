import Container from "./components/Container";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-white">

    <Container>
      <Hero />
    </Container>
    </div>
  );
}