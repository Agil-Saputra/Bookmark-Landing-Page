import Navbar from "./components/header/navbar";
import Hero from "./components/hero/hero";
import Features from "./components/features/features";
import Download from "./components/download /download";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App font-rubik">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
