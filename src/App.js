import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel";
import Landing from "./Components/LandingPage/Landing";
import Imageslider from "./Components/Slider/Slider";
import Services from "./Components/Services/Services";
import Chat from "./Components/Chatbox/Chat";

function App() {
  return (
    <div className="App">

      <Landing />
      <Imageslider />
      <Services />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
