import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import About from '../components/About.jsx'

function Home() {
  return (
    <>
      <main className="relative z-0 grid w-auto min-h-screen grid-flow-row grid-cols-1 px-8 mx-4 mt-16 md:mx-8 lg:mx-16 animate-pop-in">
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  );
}

export default Home;
