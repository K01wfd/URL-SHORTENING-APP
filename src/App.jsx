import Cta from './components/cta/Cta';
import Features from './components/features/Features';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Cta />
      </main>
    </>
  );
}

export default App;
