import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Education />
        <Experience />
      </main>
    </>
  );
}

export default App;
