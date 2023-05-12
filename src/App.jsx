import useThemeStore from "./store/themeStore";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    // Hero Sections
    <div className={`min-h-screen ${theme}`}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
