import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import TripSearch from "./components/TripSearch";

function App() {
  return (
    <>
      <Header />
      <main>
        <TripSearch/>
        <Carousel />
      </main>
      <Footer />
    </>
  );
}

export default App;
