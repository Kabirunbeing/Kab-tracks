import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Sections from "./sections/Sections";

function App() {
  return (
    <>
      <Navbar />
      {/* Add custom padding to create space between the Navbar and SearchBar */}
      <div className="pt-20"> {/* Adjust this value for desired space */}
        <SearchBar />
      </div>
      <HeroSection />
      <Sections />
      <Footer />
    </>
  );
}

export default App;
