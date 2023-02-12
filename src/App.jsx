import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Layout from "./layout/layout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
}

export default App;
